import fs from 'fs';
import path from 'path';

const PRODUCTS_DIR = path.resolve('public', 'products');
if (!fs.existsSync(PRODUCTS_DIR)) fs.mkdirSync(PRODUCTS_DIR, { recursive: true });

async function searchImageDuckDuckGo(query) {
  try {
    const tokenRes = await fetch('https://duckduckgo.com/?q=' + encodeURIComponent(query) + '&iax=images&ia=images', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const html = await tokenRes.text();
    const match = html.match(/vqd=([0-9-]+)&/);
    if (!match) return null;
    const vqd = match[1];
    
    const imgRes = await fetch('https://duckduckgo.com/i.js?l=us-en&o=json&q=' + encodeURIComponent(query) + '&vqd=' + vqd + '&f=,,,&p=1', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const imgData = await imgRes.json();
    if (imgData.results && imgData.results.length > 0) {
      const valid = imgData.results.find(r => 
        r.image && (r.image.endsWith('.png') || r.image.endsWith('.jpg') || r.image.endsWith('.jpeg') || r.image.endsWith('.webp'))
      );
      return valid ? valid.image : imgData.results[0].image;
    }
  } catch (err) {}
  return null;
}

async function download(url, dest) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    if (!res.ok) return false;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 2000) return false;
    fs.writeFileSync(dest, buf);
    return true;
  } catch (e) {
    return false;
  }
}

const NEW_MODELS = [
  // --- IPHONE 18 SERIES ---
  {
    id: "apple-iphone-18-pro-max",
    slug: "apple-iphone-18-pro-max",
    name: "iPhone 18 Pro Max",
    brand: "Apple",
    category: "Smartphones",
    price: 164900,
    originalPrice: 174900,
    badge: "HOT",
    searchQuery: "iPhone 18 Pro Max concept render official transparent",
    backQuery: "iPhone 18 Pro Max back view concept render",
    specs: {
      display: "6.9\" Tandem OLED Ultra Retina XDR, Under-Display Face ID, 1-144Hz ProMotion, 3000 nits",
      processor: "Apple A20 Pro (2nm TSMC) with 16-Core Neural Engine",
      ram: "12GB Unified Memory",
      storage: "256GB / 512GB / 1TB / 2TB",
      camera: "48MP Fusion Gen 2 + 48MP Ultra Wide + 48MP Periscope 10x Optical Zoom + LiDAR 2.0",
      battery: "5000 mAh Silicon-Carbon, MagSafe 35W",
      charging: "60W Fast Charging, Qi2 25W",
      os: "iOS 20 with Next-Gen Apple Intelligence",
      features: ["Zero-Bezel Liquid Glass Titanium Frame", "Under-Display Face ID", "Holographic Spatial Capture", "Camera Control 2.0"]
    },
    description: "The visionary flagship of 2026/2027. Engineered with Apple's breakthrough 2nm A20 Pro chip, invisible under-display TrueDepth sensors, and a quad-fusion 48MP periscope camera system in an ultra-luxurious zero-bezel titanium body.",
    colors: [
      { name: "Space Titanium", hex: "#2a2a2c" },
      { name: "Desert Gold", hex: "#cfb095" },
      { name: "Arctic Silver", hex: "#e4e5e7" },
      { name: "Deep Navy", hex: "#1b2838" }
    ],
    inStock: true,
    rating: 5.0,
    reviewsCount: 89
  },
  {
    id: "apple-iphone-18-pro",
    slug: "apple-iphone-18-pro",
    name: "iPhone 18 Pro",
    brand: "Apple",
    category: "Smartphones",
    price: 139900,
    originalPrice: 149900,
    badge: "NEW",
    searchQuery: "iPhone 18 Pro official concept render transparent",
    specs: {
      display: "6.3\" Tandem OLED Super Retina XDR, 1-144Hz ProMotion, 3000 nits",
      processor: "Apple A20 Pro (2nm TSMC)",
      ram: "12GB Unified Memory",
      storage: "128GB / 256GB / 512GB / 1TB",
      camera: "48MP Main + 48MP Ultra Wide + 48MP 5x Optical Periscope",
      battery: "3950 mAh, 50% in 20 mins",
      charging: "45W Fast Charging, MagSafe Wireless",
      os: "iOS 20 with Next-Gen Apple Intelligence",
      features: ["Titanium Body", "Action Button 2.0", "Wi-Fi 7", "4K 120fps Dolby Vision Pro"]
    },
    description: "Compact pro mastery. Featuring the groundbreaking A20 Pro processor and studio-grade triple 48MP cameras in a refined 6.3-inch titanium chassis.",
    colors: [
      { name: "Space Titanium", hex: "#2a2a2c" },
      { name: "Desert Gold", hex: "#cfb095" },
      { name: "Arctic Silver", hex: "#e4e5e7" }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 112
  },

  // --- IPHONE 17 SERIES ---
  {
    id: "apple-iphone-17-pro-max",
    slug: "apple-iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    brand: "Apple",
    category: "Smartphones",
    price: 149900,
    originalPrice: 159900,
    badge: "BESTSELLER",
    searchQuery: "iPhone 17 Pro Max official render transparent png",
    backQuery: "silver iPhone 17 pro max back view official render png",
    specs: {
      display: "6.9\" Super Retina XDR OLED, 120Hz ProMotion, Anti-Reflective Ceramic Shield, 2600 nits",
      processor: "Apple A19 Pro (2nm Architecture)",
      ram: "12GB RAM",
      storage: "256GB / 512GB / 1TB",
      camera: "48MP Fusion + 48MP Ultra Wide + 48MP 5x Tetraprism Telephoto",
      battery: "4850 mAh, all-day battery life",
      charging: "45W Wired, 25W MagSafe",
      os: "iOS 19 with Apple Intelligence",
      features: ["Aerospace Grade Titanium", "Tetraprism 48MP Telephoto", "24MP Front TrueDepth Camera", "IP68 Submersion"]
    },
    description: "The definitive 2026 iPhone. All-three rear cameras upgraded to 48MP with 12GB RAM for limitless on-device Apple Intelligence, housed in aerospace-grade titanium.",
    colors: [
      { name: "Cosmic Orange", hex: "#d97746" },
      { name: "Natural Titanium", hex: "#9b968f" },
      { name: "White Titanium", hex: "#f2f1ed" },
      { name: "Dark Black", hex: "#1e1e20" }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 340
  },
  {
    id: "apple-iphone-17-pro",
    slug: "apple-iphone-17-pro",
    name: "iPhone 17 Pro",
    brand: "Apple",
    category: "Smartphones",
    price: 124900,
    originalPrice: 134900,
    badge: "HOT",
    searchQuery: "iPhone 17 Pro titanium official render transparent",
    specs: {
      display: "6.3\" Super Retina XDR OLED, 120Hz ProMotion, 2600 nits",
      processor: "Apple A19 Pro (2nm)",
      ram: "12GB RAM",
      storage: "128GB / 256GB / 512GB / 1TB",
      camera: "48MP Fusion + 48MP Ultra Wide + 48MP Telephoto",
      battery: "3750 mAh, MagSafe Wireless",
      charging: "45W Fast Charging",
      os: "iOS 19 with Apple Intelligence",
      features: ["Compact Pro Titanium", "Camera Control Button", "ProRAW Studio Lighting"]
    },
    description: "Pro power in an ergonomic hand-held profile. Packed with the 2nm Apple A19 Pro chip and uncompressed 48MP RAW photography across all lenses.",
    colors: [
      { name: "Natural Titanium", hex: "#9b968f" },
      { name: "Cosmic Orange", hex: "#d97746" },
      { name: "Dark Black", hex: "#1e1e20" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 220
  },
  {
    id: "apple-iphone-17-air",
    slug: "apple-iphone-17-air",
    name: "iPhone 17 Air (Slim)",
    brand: "Apple",
    category: "Smartphones",
    price: 99900,
    originalPrice: 109900,
    badge: "NEW",
    searchQuery: "apple iPhone 17 air slim v3 renderhub",
    specs: {
      display: "6.6\" Super Retina XDR OLED, 120Hz ProMotion, Ultra-Slim Bezels",
      processor: "Apple A19 Bionic (3nm)",
      ram: "8GB RAM",
      storage: "128GB / 256GB / 512GB",
      camera: "48MP Fusion Single Smart Camera with 2x Sensor Crop",
      battery: "3300 mAh Ultra-High Density, 5mm Body Profile",
      charging: "35W Fast Charging, MagSafe Slim",
      os: "iOS 19 with Apple Intelligence",
      features: ["World's Thinnest 5.1mm iPhone", "Polished Aluminum-Titanium Alloy", "Center Dynamic Island"]
    },
    description: "The thinnest, most breathtaking iPhone ever crafted. Measuring just 5.1mm with a featherweight titanium-aluminum frame and 6.6-inch 120Hz ProMotion display.",
    colors: [
      { name: "Silver Frost", hex: "#e5e7eb" },
      { name: "Space Gray", hex: "#4b5563" },
      { name: "Champagne Gold", hex: "#e2d4b7" }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 165
  },
  {
    id: "apple-iphone-17",
    slug: "apple-iphone-17",
    name: "iPhone 17",
    brand: "Apple",
    category: "Smartphones",
    price: 79900,
    originalPrice: 84900,
    badge: "NEW",
    searchQuery: "iPhone 17 base model official render transparent",
    specs: {
      display: "6.27\" Super Retina XDR OLED, 120Hz ProMotion (First time on base!), 2000 nits",
      processor: "Apple A19 (3nm)",
      ram: "8GB RAM",
      storage: "128GB / 256GB / 512GB",
      camera: "48MP Fusion Main + 12MP Ultra Wide",
      battery: "3600 mAh, up to 24 hrs video",
      charging: "Fast Charging, MagSafe Wireless",
      os: "iOS 19 with Apple Intelligence",
      features: ["120Hz ProMotion Screen", "Dual Fusion Camera", "Action Button"]
    },
    description: "The baseline re-imagined. For the first time ever, enjoy Apple's buttery smooth 120Hz ProMotion display alongside the lightning-fast A19 chip on the standard iPhone.",
    colors: [
      { name: "Ultramarine", hex: "#3b82f6" },
      { name: "Teal", hex: "#0d9488" },
      { name: "Pink", hex: "#ec4899" },
      { name: "White", hex: "#f8fafc" },
      { name: "Black", hex: "#0f172a" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 195
  },

  // --- SAMSUNG GALAXY S27 SERIES ---
  {
    id: "samsung-galaxy-s27-ultra",
    slug: "samsung-galaxy-s27-ultra",
    name: "Galaxy S27 Ultra 5G",
    brand: "Samsung",
    category: "Smartphones",
    price: 154999,
    originalPrice: 164999,
    badge: "HOT",
    searchQuery: "Samsung Galaxy S27 Ultra concept official render transparent",
    backQuery: "Samsung Galaxy S27 Ultra back camera concept render",
    specs: {
      display: "6.9\" Dynamic LTPO AMOLED 3X, 1-144Hz, Anti-Glare Armor, 3200 nits peak",
      processor: "Snapdragon 8 Gen 6 for Galaxy (2nm) / Exynos 2700",
      ram: "16GB LPDDR6",
      storage: "256GB / 512GB / 1TB",
      camera: "300MP ISOCELL HP4 OIS + 50MP 5x Periscope + 50MP 3x Telephoto + 50MP Ultra Wide (120x Space Zoom)",
      battery: "5500 mAh Solid-State Battery",
      charging: "65W Wired Super Fast Charge 3.0, 25W Fast Wireless",
      os: "One UI 9.0 (Android 17) with Galaxy AI 3.0",
      features: ["Integrated S-Pen Gen 4", "Armor Titanium Frame", "Satellite Emergency SOS", "Hologram AI Assistant"]
    },
    description: "The bleeding edge of Android engineering. Armed with an unprecedented 300MP ISOCELL primary sensor, 2nm Snapdragon 8 Gen 6, 65W charging, and next-generation S-Pen.",
    colors: [
      { name: "Titanium Obsidian", hex: "#1e1e20" },
      { name: "Titanium Platinum", hex: "#cfd2d6" },
      { name: "Titanium Blue", hex: "#3a506b" }
    ],
    inStock: true,
    rating: 5.0,
    reviewsCount: 75
  },

  // --- SAMSUNG GALAXY S26 SERIES ---
  {
    id: "samsung-galaxy-s26-ultra",
    slug: "samsung-galaxy-s26-ultra",
    name: "Galaxy S26 Ultra 5G",
    brand: "Samsung",
    category: "Smartphones",
    price: 139999,
    originalPrice: 149999,
    badge: "BESTSELLER",
    searchQuery: "samsung galaxy s26 ultra madmix renderhub transparent",
    backQuery: "Samsung Galaxy S26 Ultra back view render png",
    specs: {
      display: "6.85\" Dynamic LTPO AMOLED 2X, 1-144Hz, Gorilla Glass Armor 2, 2800 nits",
      processor: "Snapdragon 8 Gen 5 for Galaxy (3nm Extreme)",
      ram: "16GB RAM",
      storage: "256GB / 512GB / 1TB",
      camera: "200MP Gen 3 ISOCELL OIS + 50MP Periscope (100x Zoom) + 50MP Ultra Wide + 12MP 3x Telephoto",
      battery: "5200 mAh, 45W Wired (68% in 30 mins)",
      charging: "45W Super Fast Charging 2.0, Fast Wireless 2.0",
      os: "One UI 8.5 (Android 16) with Real-Time Galaxy AI",
      features: ["Built-in S-Pen with Bluetooth Gestures", "Titanium Frame", "8K 60fps Video Recording", "IP68 Water Resistance"]
    },
    description: "Samsung's crowning 2026 powerhouse. Equipped with the refined 200MP ISOCELL sensor, 1-144Hz Dynamic AMOLED 2X screen, and seamless S-Pen integration.",
    colors: [
      { name: "Titanium Black", hex: "#212121" },
      { name: "Titanium Silver", hex: "#d1d5db" },
      { name: "Titanium Violet", hex: "#6b46c1" }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 310
  },
  {
    id: "samsung-galaxy-s26-plus",
    slug: "samsung-galaxy-s26-plus",
    name: "Galaxy S26+ 5G",
    brand: "Samsung",
    category: "Smartphones",
    price: 104999,
    originalPrice: 112999,
    badge: "NEW",
    searchQuery: "samsung galaxy s26 plus renderhub transparent",
    specs: {
      display: "6.7\" Dynamic AMOLED 2X, 1-120Hz LTPO, 2600 nits peak",
      processor: "Snapdragon 8 Gen 5 / Exynos 2600",
      ram: "12GB RAM",
      storage: "256GB / 512GB",
      camera: "50MP Dual Pixel OIS + 50MP Ultra Wide + 12MP 3x Telephoto",
      battery: "4900 mAh with 45W Fast Charge",
      charging: "45W Fast Charge, Wireless PowerShare",
      os: "One UI 8.5 with Galaxy AI",
      features: ["Armor Aluminum Frame", "Galaxy AI Photo Assist", "All-day Battery"]
    },
    description: "Big screen, massive battery, zero compromise. The 6.7-inch Galaxy S26+ brings Snapdragon 8 Gen 5 speed and generous 4900 mAh endurance to your fingertips.",
    colors: [
      { name: "Onyx Black", hex: "#1f2937" },
      { name: "Marble Gray", hex: "#9ca3af" },
      { name: "Amber Yellow", hex: "#fbbf24" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 160
  },
  {
    id: "samsung-galaxy-s26",
    slug: "samsung-galaxy-s26",
    name: "Galaxy S26 5G",
    brand: "Samsung",
    category: "Smartphones",
    price: 82999,
    originalPrice: 89999,
    badge: "NEW",
    searchQuery: "samsung galaxy s26 base renderhub transparent",
    specs: {
      display: "6.2\" Dynamic AMOLED 2X, 1-120Hz, 2600 nits",
      processor: "Snapdragon 8 Gen 5",
      ram: "12GB RAM",
      storage: "128GB / 256GB",
      camera: "50MP OIS + 12MP Ultra Wide + 10MP 3x Telephoto",
      battery: "4000 mAh, 25W Fast Charging",
      charging: "25W Wired, 15W Wireless",
      os: "One UI 8.5 with Galaxy AI",
      features: ["Pocket-friendly Flagship", "Galaxy AI Live Translate", "Gorilla Glass Victus 3"]
    },
    description: "Compact size with flagship muscle. Featuring 12GB of RAM, Snapdragon 8 Gen 5, and full suite of Galaxy AI productivity tools.",
    colors: [
      { name: "Onyx Black", hex: "#1f2937" },
      { name: "Marble Gray", hex: "#9ca3af" },
      { name: "Cobalt Violet", hex: "#4338ca" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 145
  },

  // --- SAMSUNG GALAXY S25 SERIES ---
  {
    id: "samsung-galaxy-s25-ultra",
    slug: "samsung-galaxy-s25-ultra",
    name: "Galaxy S25 Ultra 5G",
    brand: "Samsung",
    category: "Smartphones",
    price: 129999,
    originalPrice: 139999,
    badge: "HOT",
    searchQuery: "samsung galaxy s25 ultra titanium silverblue rever art renderhub",
    backQuery: "Samsung Galaxy S25 Ultra back view render",
    specs: {
      display: "6.8\" Dynamic LTPO AMOLED 2X, 1-120Hz, Anti-Reflective Armor Glass, 2600 nits",
      processor: "Qualcomm Snapdragon 8 Elite (3nm Extreme NPU)",
      ram: "12GB / 16GB LPDDR5X",
      storage: "256GB / 512GB / 1TB",
      camera: "200MP Main OIS + 50MP Ultra Wide + 50MP 5x Periscope Telephoto + 10MP 3x Telephoto",
      battery: "5000 mAh, 45W Fast Charging",
      charging: "45W Super Fast Charging 2.0"
    },
    description: "The flat-titanium masterpiece. Powered by the revolutionary Snapdragon 8 Elite with upgraded 50MP ultra-wide and built-in S-Pen.",
    colors: [
      { name: "Titanium Silver Blue", hex: "#8899a6" },
      { name: "Titanium Black", hex: "#232323" },
      { name: "Titanium Gray", hex: "#a0a0a0" }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 420
  },
  {
    id: "samsung-galaxy-s25",
    slug: "samsung-galaxy-s25",
    name: "Galaxy S25 5G",
    brand: "Samsung",
    category: "Smartphones",
    price: 74999,
    originalPrice: 79999,
    badge: "SALE",
    searchQuery: "samsung galaxy s25 official render transparent",
    specs: {
      display: "6.2\" Dynamic AMOLED 2X, 120Hz, 2600 nits",
      processor: "Snapdragon 8 Elite (3nm)",
      ram: "12GB RAM",
      storage: "128GB / 256GB",
      camera: "50MP Dual Pixel OIS + 12MP Ultra Wide + 10MP Telephoto",
      battery: "4000 mAh",
      charging: "25W Fast Charging"
    },
    description: "The 3nm compact standard. Flagship Snapdragon 8 Elite power in an ultra-clean aluminum frame with 7 years of Android upgrades.",
    colors: [
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "Silver Shadow", hex: "#94a3b8" },
      { name: "Mint Green", hex: "#86efac" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 180
  }
];

function formatINR(val) {
  return `₹${val.toLocaleString('en-IN')}`;
}

function calculateEmi(price) {
  const m = Math.round(price / 12);
  return `₹${m.toLocaleString('en-IN')}/mo`;
}

async function run() {
  console.log(`Starting to download images for ${NEW_MODELS.length} latest models...`);

  for (const m of NEW_MODELS) {
    m.formattedPrice = formatINR(m.price);
    if (m.originalPrice) m.formattedOriginalPrice = formatINR(m.originalPrice);
    m.emiStartsAt = calculateEmi(m.price);

    const mainFile = `${m.slug}.jpg`;
    const mainPath = path.join(PRODUCTS_DIR, mainFile);
    let mainAssigned = `/products/${mainFile}`;

    if (!fs.existsSync(mainPath)) {
      console.log(`  Downloading main photo for: ${m.name}...`);
      const url = await searchImageDuckDuckGo(m.searchQuery || m.name);
      if (url) {
        const ok = await download(url, mainPath);
        if (ok) console.log(`  ✓ Saved ${mainFile}`);
        else fs.copyFileSync(path.join(PRODUCTS_DIR, 'apple-iphone-16-pro-max.jpg'), mainPath);
      } else {
        fs.copyFileSync(path.join(PRODUCTS_DIR, 'apple-iphone-16-pro-max.jpg'), mainPath);
      }
    }
    m.image = mainAssigned;
    m.gallery = [mainAssigned];

    // Back angle if available
    if (m.backQuery) {
      const backFile = `${m.slug}-back.jpg`;
      const backPath = path.join(PRODUCTS_DIR, backFile);
      if (!fs.existsSync(backPath)) {
        console.log(`  Downloading back angle for: ${m.name}...`);
        const backUrl = await searchImageDuckDuckGo(m.backQuery);
        if (backUrl) {
          const ok = await download(backUrl, backPath);
          if (ok) {
            console.log(`  ✓ Saved ${backFile}`);
            m.gallery.push(`/products/${backFile}`);
          }
        }
      } else {
        m.gallery.push(`/products/${backFile}`);
      }
    }
  }

  // Load existing products from src/data/products.json
  const existingProducts = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));

  // Filter out any duplicates if already added
  const newIds = new Set(NEW_MODELS.map(x => x.id));
  const remainingExisting = existingProducts.filter(x => !newIds.has(x.id));

  // Prepend NEW_MODELS to existing
  const combinedProducts = [...NEW_MODELS, ...remainingExisting];

  // Save JSON
  fs.writeFileSync('src/data/products.json', JSON.stringify(combinedProducts, null, 2), 'utf8');
  console.log(`Saved ${combinedProducts.length} total products to products.json`);

  // Update src/data/products.ts
  const tsContent = `// Auto-generated by scripts/update-catalog.mjs
// Developer can manually edit specs, prices, images, and products anytime!

export interface ProductColor {
  name: string;
  hex: string;
}

export interface ProductSpecs {
  display?: string;
  processor?: string;
  ram?: string;
  storage?: string;
  camera?: string;
  battery?: string;
  charging?: string;
  os?: string;
  features?: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: "Smartphones" | "Earbuds" | "Smartwatches" | "Accessories" | "Tablets";
  price: number;
  originalPrice?: number;
  formattedPrice: string;
  formattedOriginalPrice?: string;
  badge?: "NEW" | "HOT" | "BESTSELLER" | "SALE" | "TOP RATED";
  image: string;
  gallery?: string[];
  specs: ProductSpecs;
  description: string;
  colors?: ProductColor[];
  inStock: boolean;
  rating?: number;
  reviewsCount?: number;
  emiStartsAt: string;
  searchQuery?: string;
}

export const PRODUCTS: Product[] = ${JSON.stringify(combinedProducts, null, 2)};

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export function getProductsByBrand(brand: string): Product[] {
  return PRODUCTS.filter((p) => p.brand.toLowerCase() === brand.toLowerCase());
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return PRODUCTS;
  return PRODUCTS.filter((p) => 
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    (p.specs.processor && p.specs.processor.toLowerCase().includes(q)) ||
    (p.specs.camera && p.specs.camera.toLowerCase().includes(q))
  );
}
`;

  fs.writeFileSync('src/data/products.ts', tsContent, 'utf8');
  console.log('Saved src/data/products.ts');

  // Also update DEFAULT_CATALOG in scripts/update-catalog.mjs so future runs preserve them
  let scriptCode = fs.readFileSync('scripts/update-catalog.mjs', 'utf8');
  const catalogIdx = scriptCode.indexOf('export const DEFAULT_CATALOG = [');
  if (catalogIdx !== -1) {
    const startOfList = catalogIdx + 'export const DEFAULT_CATALOG = ['.length;
    const newItemsSnippet = '\n' + NEW_MODELS.map(m => `  ${JSON.stringify(m, null, 2)},`).join('\n');
    scriptCode = scriptCode.slice(0, startOfList) + newItemsSnippet + scriptCode.slice(startOfList);
    fs.writeFileSync('scripts/update-catalog.mjs', scriptCode, 'utf8');
    console.log('Updated scripts/update-catalog.mjs DEFAULT_CATALOG');
  }

  // Update brand counts in src/data/categories.ts
  let catCode = fs.readFileSync('src/data/categories.ts', 'utf8');
  catCode = catCode.replace('{ name: "Apple", count: "5 Models"', '{ name: "Apple", count: "11 Models"');
  catCode = catCode.replace('{ name: "Samsung", count: "6 Models"', '{ name: "Samsung", count: "12 Models"');
  fs.writeFileSync('src/data/categories.ts', catCode, 'utf8');
  console.log('Updated brand counts in src/data/categories.ts');
}

run();
