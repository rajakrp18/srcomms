import { createClient } from '@sanity/client';
import google from 'googlethis';

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
    console.log(`Searching image for: ${product.name}`);
    try {
      const images = await google.image(`${product.name} smartphone official render white background`, { safe: false });
      if (images && images.length > 0) {
        let imageUrl = null;
        for (const img of images) {
          if (img.url && (img.url.endsWith('.png') || img.url.endsWith('.jpg') || img.url.endsWith('.jpeg') || img.url.endsWith('.webp'))) {
            imageUrl = img.url;
            break;
          }
        }
        
        if (!imageUrl) imageUrl = images[0].url;

        console.log(`Downloading: ${imageUrl}`);
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        try {
          const response = await fetch(imageUrl, { signal: controller.signal });
          clearTimeout(timeoutId);
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
        } catch (fetchErr) {
          console.log(`Fetch error for ${product.name}: ${fetchErr.message}`);
        }
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
