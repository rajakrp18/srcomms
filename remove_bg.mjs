import Jimp from 'jimp';

async function run() {
  try {
    const image = await Jimp.read('public/favicon.png');
    
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    // Find the background color (assume the top-left pixel is background)
    const bgColor = image.getPixelColor(0, 0);
    const { r: bgR, g: bgG, b: bgB } = Jimp.intToRGBA(bgColor);
    
    // Tolerance for 'white'
    const tolerance = 30;
    
    image.scan(0, 0, width, height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      if (Math.abs(r - bgR) <= tolerance && Math.abs(g - bgG) <= tolerance && Math.abs(b - bgB) <= tolerance) {
        this.bitmap.data[idx + 3] = 0; // Set alpha to 0
      }
    });
    
    await image.writeAsync('src/app/icon.png');
    // Also update the public one just in case
    await image.writeAsync('public/favicon.png');
    console.log('Background removed!');
  } catch (e) {
    console.error(e);
  }
}
run();
