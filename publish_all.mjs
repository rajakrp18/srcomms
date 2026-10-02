import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'u5g3u1s4',
  dataset: 'production',
  apiVersion: '2023-01-01',
  token: 'skjKSlsPhZ3harCp3aWygps4wXPn0XkRIxcBez7o9hZXeJ6WbsQ4xH25oTduJLwELOaH6PlyGOtTg3bjB',
  useCdn: false
});

async function run() {
  const drafts = await client.fetch('*[_type == "product" && _id in path("drafts.**")]');
  console.log(`Found ${drafts.length} drafts`);

  const tx = client.transaction();
  for (const draft of drafts) {
    const publishedId = draft._id.replace('drafts.', '');
    tx.createOrReplace({
      ...draft,
      _id: publishedId
    });
    tx.delete(draft._id);
  }
  await tx.commit();
  console.log('Successfully published all products!');
}

run();
