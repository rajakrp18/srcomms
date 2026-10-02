import { createClient } from '@sanity/client';
import fs from 'fs';

const client = createClient({
  projectId: 'u5g3u1s4',
  dataset: 'production',
  apiVersion: '2023-01-01',
  token: 'skjKSlsPhZ3harCp3aWygps4wXPn0XkRIxcBez7o9hZXeJ6WbsQ4xH25oTduJLwELOaH6PlyGOtTg3bjB',
  useCdn: false
});

async function run() {
  const products = await client.fetch('*[_type == "product"]');
  console.log(`Found ${products.length} products`);

  const buffer = fs.readFileSync('public/cat_phones_1790916868141.png');
  const asset = await client.assets.upload('image', buffer, {
    filename: `placeholder.png`
  });

  for (const product of products) {
    if (!product.image || !product.image.asset) {
      console.log(`Patching ${product.name}...`);
      await client.patch(product._id).set({
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id
          }
        }
      }).commit();
    }
  }
  console.log('Done!');
}

run();
