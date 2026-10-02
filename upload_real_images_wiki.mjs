import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'u5g3u1s4',
  dataset: 'production',
  apiVersion: '2023-01-01',
  token: 'skjKSlsPhZ3harCp3aWygps4wXPn0XkRIxcBez7o9hZXeJ6WbsQ4xH25oTduJLwELOaH6PlyGOtTg3bjB',
  useCdn: false
});

async function run() {
  const products = await client.fetch('*[_type == "product"]');
  console.log(`Found ${products.length} products to update.`);
  
  for (const product of products) {
    console.log(`Searching Wiki for: ${product.name}`);
    try {
      const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&generator=search&gsrsearch=${encodeURIComponent(product.name + ' smartphone')}&gsrlimit=1`;
      const res = await fetch(searchUrl);
      const data = await res.json();
      
      let imageUrl = null;
      if (data.query && data.query.pages) {
         const pages = Object.values(data.query.pages);
         if (pages.length > 0 && pages[0].original && pages[0].original.source) {
            imageUrl = pages[0].original.source;
         }
      }

      if (imageUrl) {
        console.log(`Downloading: ${imageUrl}`);
        
        const response = await fetch(imageUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (!response.ok) {
           console.log(`Failed to fetch image: ${response.statusText}`);
           continue;
        }
        const buffer = await response.arrayBuffer();
        
        console.log(`Uploading to Sanity...`);
        const asset = await client.assets.upload('image', Buffer.from(buffer), {
           filename: `${product.slug?.current || product.name.replace(/ /g, '_')}.jpg`
        });
        
        console.log(`Patching product...`);
        await client.patch(product._id).set({
          image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: asset._id
            }
          }
        }).commit();
        
        console.log(`Successfully updated ${product.name}!`);
      } else {
        console.log(`No images found for ${product.name}`);
      }
    } catch (err) {
      console.log(`Error updating ${product.name}: ${err.message}`);
    }
  }
  
  console.log('All done!');
}

run();
