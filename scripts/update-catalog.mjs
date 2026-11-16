#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PRODUCTS_DIR = path.join(ROOT_DIR, 'public', 'products');
const DATA_FILE_JSON = path.join(ROOT_DIR, 'src', 'data', 'products.json');
const DATA_FILE_TS = path.join(ROOT_DIR, 'src', 'data', 'products.ts');

if (!fs.existsSync(PRODUCTS_DIR)) {
  fs.mkdirSync(PRODUCTS_DIR, { recursive: true });
}

// Master list of products with authentic specifications, prices (INR), categories, and brands
export const DEFAULT_CATALOG = [
  // --- APPLE ---
  {
    id: "apple-iphone-16-pro-max",
    slug: "apple-iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    category: "Smartphones",
    price: 144900,
    originalPrice: 154900,
    badge: "HOT",
    searchQuery: "iPhone 16 Pro Max desert titanium official render transparent",
    specs: {
      display: "6.9\" Super Retina XDR OLED, 120Hz ProMotion, 2000 nits",
      processor: "Apple A18 Pro (3nm)",
      ram: "8GB",
      storage: "256GB / 512GB / 1TB",
      camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
      battery: "4685 mAh, MagSafe Wireless Charging",
      charging: "45W Fast Charging, Qi2 25W MagSafe",
      os: "iOS 18 with Apple Intelligence",
      features: ["Grade 5 Titanium Frame", "Camera Control Button", "Action Button", "IP68 Water Resistance"]
    },
    description: "The ultimate iPhone. Featuring the revolutionary A18 Pro chip, 5x telephoto camera, largest 6.9-inch display, and all-new Camera Control button in a stunning lightweight titanium design.",
    colors: [
      { name: "Desert Titanium", hex: "#c4a88f" },
      { name: "Natural Titanium", hex: "#9b968f" },
      { name: "White Titanium", hex: "#f2f1ed" },
      { name: "Black Titanium", hex: "#3b3b3d" }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 312
  },
  {
    id: "apple-iphone-16-pro",
    slug: "apple-iphone-16-pro",
    name: "iPhone 16 Pro",
    brand: "Apple",
    category: "Smartphones",
    price: 119900,
    originalPrice: 129900,
    badge: "NEW",
    searchQuery: "iPhone 16 Pro natural titanium official render transparent",
    specs: {
      display: "6.3\" Super Retina XDR OLED, 120Hz ProMotion, 2000 nits",
      processor: "Apple A18 Pro (3nm)",
      ram: "8GB",
      storage: "128GB / 256GB / 512GB / 1TB",
      camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
      battery: "3582 mAh, 50% in 30 mins",
      charging: "Fast Charging, 25W MagSafe",
      os: "iOS 18 with Apple Intelligence",
      features: ["Titanium Design", "Camera Control Button", "4K 120fps Dolby Vision", "USB-C 3.0"]
    },
    description: "Pro performance in a compact 6.3-inch form factor. Powered by Apple A18 Pro with next-gen 48MP Fusion camera and studio-quality mics.",
    colors: [
      { name: "Natural Titanium", hex: "#9b968f" },
      { name: "Desert Titanium", hex: "#c4a88f" },
      { name: "Black Titanium", hex: "#3b3b3d" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 215
  },
  {
    id: "apple-iphone-16-plus",
    slug: "apple-iphone-16-plus",
    name: "iPhone 16 Plus",
    brand: "Apple",
    category: "Smartphones",
    price: 89900,
    originalPrice: 94900,
    badge: "NEW",
    searchQuery: "iPhone 16 Plus ultramarine official render transparent",
    specs: {
      display: "6.7\" Super Retina XDR OLED, 2000 nits peak",
      processor: "Apple A18 (3nm)",
      ram: "8GB",
      storage: "128GB / 256GB / 512GB",
      camera: "48MP Fusion Dual Camera with 2x Telephoto + 12MP Ultra Wide",
      battery: "4674 mAh, up to 27 hours video playback",
      charging: "Fast Charging, MagSafe Wireless",
      os: "iOS 18 with Apple Intelligence",
      features: ["Vibrant Color-Infused Glass", "Camera Control Button", "Spatial Audio & Video", "Action Button"]
    },
    description: "Big screen, massive battery life, and vivid saturated colors. Powered by the A18 chip with Apple Intelligence readiness.",
    colors: [
      { name: "Ultramarine", hex: "#4b6cb7" },
      { name: "Teal", hex: "#38ef7d" },
      { name: "Pink", hex: "#ff9a9e" },
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#222222" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 142
  },
  {
    id: "apple-iphone-16",
    slug: "apple-iphone-16",
    name: "iPhone 16",
    brand: "Apple",
    category: "Smartphones",
    price: 79900,
    originalPrice: 84900,
    badge: "BESTSELLER",
    searchQuery: "iPhone 16 teal official render transparent",
    specs: {
      display: "6.1\" Super Retina XDR OLED, 2000 nits peak",
      processor: "Apple A18 (3nm)",
      ram: "8GB",
      storage: "128GB / 256GB / 512GB",
      camera: "48MP Fusion Camera + 12MP Ultra Wide with Macro",
      battery: "3561 mAh, all-day battery",
      charging: "Fast Charging, 25W MagSafe",
      os: "iOS 18 with Apple Intelligence",
      features: ["Aerospace-grade Aluminum", "Camera Control Button", "Action Button", "Dynamic Island"]
    },
    description: "The standard for modern smartphones. Upgraded with the 3nm A18 chip, Camera Control, macro photography, and blazing fast speeds.",
    colors: [
      { name: "Teal", hex: "#2ca58d" },
      { name: "Ultramarine", hex: "#3a506b" },
      { name: "Pink", hex: "#f08080" },
      { name: "White", hex: "#f8f9fa" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 420
  },
  {
    id: "apple-iphone-15",
    slug: "apple-iphone-15",
    name: "iPhone 15",
    brand: "Apple",
    category: "Smartphones",
    price: 59900,
    originalPrice: 69900,
    badge: "SALE",
    searchQuery: "iPhone 15 blue official render transparent",
    specs: {
      display: "6.1\" Super Retina XDR OLED, Dynamic Island",
      processor: "Apple A16 Bionic (4nm)",
      ram: "6GB",
      storage: "128GB / 256GB",
      camera: "48MP Main + 12MP Ultra Wide with 2x Telephoto",
      battery: "3349 mAh, all-day endurance",
      charging: "20W Fast Charging, MagSafe, USB-C",
      os: "iOS 18 Upgradeable",
      features: ["Dynamic Island", "USB-C Port", "Color-infused Glass Back", "Emergency SOS via Satellite"]
    },
    description: "Incredible value with Dynamic Island, 48MP main sensor, USB-C convenience, and long-lasting battery life.",
    colors: [
      { name: "Blue", hex: "#d3e3fd" },
      { name: "Pink", hex: "#fbcfe8" },
      { name: "Yellow", hex: "#fef08a" },
      { name: "Green", hex: "#bbf7d0" },
      { name: "Black", hex: "#1e293b" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 680
  },

  // --- SAMSUNG ---
  {
    id: "samsung-galaxy-s24-ultra",
    slug: "samsung-galaxy-s24-ultra",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    price: 129999,
    originalPrice: 139999,
    badge: "HOT",
    searchQuery: "Galaxy S24 Ultra titanium gray official render transparent",
    specs: {
      display: "6.8\" Dynamic LTPO AMOLED 2X, 120Hz, 2600 nits, Gorilla Armor",
      processor: "Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm)",
      ram: "12GB",
      storage: "256GB / 512GB / 1TB",
      camera: "200MP Main OIS + 50MP 5x Periscope + 10MP 3x + 12MP Ultra Wide",
      battery: "5000 mAh with 45W Fast Charging",
      charging: "45W Wired (65% in 30 min), 15W Wireless, 4.5W Reverse",
      os: "One UI 6.1 with Galaxy AI (7 Years OS Updates)",
      features: ["Built-in S-Pen", "Titanium Frame", "Anti-reflective Screen", "Live Translate AI"]
    },
    description: "The pinnacle of Android engineering. Featuring a 200MP camera with AI photo assist, titanium frame, flat anti-reflective display, and embedded S-Pen.",
    colors: [
      { name: "Titanium Gray", hex: "#6d6d70" },
      { name: "Titanium Black", hex: "#2b2b2c" },
      { name: "Titanium Violet", hex: "#5b516d" },
      { name: "Titanium Yellow", hex: "#dfd8b7" }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 388
  },
  {
    id: "samsung-galaxy-s24-plus",
    slug: "samsung-galaxy-s24-plus",
    name: "Galaxy S24 Plus",
    brand: "Samsung",
    category: "Smartphones",
    price: 99999,
    originalPrice: 104999,
    badge: "NEW",
    searchQuery: "Galaxy S24 Plus cobalt violet official render transparent",
    specs: {
      display: "6.7\" Dynamic LTPO AMOLED 2X, QHD+, 120Hz, 2600 nits",
      processor: "Exynos 2400 / Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256GB / 512GB",
      camera: "50MP Dual Pixel OIS + 10MP 3x Telephoto + 12MP Ultra Wide",
      battery: "4900 mAh with 45W Fast Charging",
      charging: "45W Wired, 15W Wireless",
      os: "One UI 6.1 with Galaxy AI",
      features: ["Armor Aluminum 2.0", "Circle to Search AI", "QHD+ Display", "IP68 Rating"]
    },
    description: "Large 6.7-inch QHD+ display, 12GB RAM, 4900mAh battery, and all Galaxy AI tools packed in an elegant satin-finish body.",
    colors: [
      { name: "Cobalt Violet", hex: "#4b4453" },
      { name: "Onyx Black", hex: "#1f2022" },
      { name: "Marble Gray", hex: "#d8d8d8" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 195
  },
  {
    id: "samsung-galaxy-s24",
    slug: "samsung-galaxy-s24",
    name: "Galaxy S24",
    brand: "Samsung",
    category: "Smartphones",
    price: 74999,
    originalPrice: 79999,
    badge: "BESTSELLER",
    searchQuery: "Galaxy S24 amber yellow official render transparent",
    specs: {
      display: "6.2\" Dynamic LTPO AMOLED 2X, FHD+, 120Hz, 2600 nits",
      processor: "Exynos 2400 (4nm)",
      ram: "8GB",
      storage: "128GB / 256GB",
      camera: "50MP Main OIS + 10MP 3x Telephoto + 12MP Ultra Wide",
      battery: "4000 mAh with 25W Fast Charging",
      charging: "25W Wired, 15W Wireless",
      os: "One UI 6.1 with Galaxy AI",
      features: ["Ultra-Compact 167g", "Galaxy AI Suite", "Armor Aluminum", "7 Years Updates"]
    },
    description: "The ultimate compact flagship. Lightweight, incredibly bright 2600-nit screen, and full Galaxy AI suite.",
    colors: [
      { name: "Onyx Black", hex: "#1e1e1e" },
      { name: "Marble Gray", hex: "#d0d0d0" },
      { name: "Amber Yellow", hex: "#ece3c8" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 260
  },
  {
    id: "samsung-galaxy-z-fold-6",
    slug: "samsung-galaxy-z-fold-6",
    name: "Galaxy Z Fold 6",
    brand: "Samsung",
    category: "Smartphones",
    price: 164999,
    originalPrice: 174999,
    badge: "HOT",
    searchQuery: "Galaxy Z Fold 6 silver shadow official render transparent",
    specs: {
      display: "7.6\" Foldable Dynamic AMOLED 2X 120Hz + 6.3\" Cover Screen",
      processor: "Snapdragon 8 Gen 3 for Galaxy (4nm)",
      ram: "12GB",
      storage: "256GB / 512GB / 1TB",
      camera: "50MP OIS + 10MP 3x + 12MP Ultra Wide + 4MP UDC",
      battery: "4400 mAh, all-day dual cell",
      charging: "25W Wired, 15W Wireless",
      os: "One UI 6.1.1 Fold Edition with AI Interpreter",
      features: ["Thinner & Lighter 239g", "S-Pen Support", "IP48 Water Resistance", "Dual Screen AI"]
    },
    description: "Pocket PC in your hands. Sharper symmetrical edges, lighter weight, larger cover screen, and dual-display AI productivity.",
    colors: [
      { name: "Silver Shadow", hex: "#bcc0c4" },
      { name: "Navy", hex: "#1f2a44" },
      { name: "Pink", hex: "#f0d5db" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 110
  },
  {
    id: "samsung-galaxy-z-flip-6",
    slug: "samsung-galaxy-z-flip-6",
    name: "Galaxy Z Flip 6",
    brand: "Samsung",
    category: "Smartphones",
    price: 109999,
    originalPrice: 119999,
    badge: "NEW",
    searchQuery: "Galaxy Z Flip 6 mint official render transparent",
    specs: {
      display: "6.7\" Foldable FHD+ 120Hz + 3.4\" Super AMOLED FlexWindow",
      processor: "Snapdragon 8 Gen 3 for Galaxy (4nm)",
      ram: "12GB",
      storage: "256GB / 512GB",
      camera: "50MP Main OIS + 12MP Ultra Wide",
      battery: "4000 mAh (Biggest Flip battery yet)",
      charging: "25W Wired, 15W Wireless",
      os: "One UI 6.1 with FlexCam AI",
      features: ["Vapor Chamber Cooling", "FlexCam Auto Zoom", "12GB RAM Standard", "Armor Aluminum"]
    },
    description: "Compact icon reimagined. Upgraded with a 50MP flagship camera, vapor chamber cooling, 4000mAh battery, and customizable FlexWindow.",
    colors: [
      { name: "Blue", hex: "#b4c7dc" },
      { name: "Mint", hex: "#c7e3d0" },
      { name: "Silver Shadow", hex: "#bcc0c4" },
      { name: "Yellow", hex: "#f7e590" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 154
  },
  {
    id: "samsung-galaxy-a55-5g",
    slug: "samsung-galaxy-a55-5g",
    name: "Galaxy A55 5G",
    brand: "Samsung",
    category: "Smartphones",
    price: 39999,
    originalPrice: 42999,
    badge: "BESTSELLER",
    searchQuery: "Galaxy A55 5G awesome iceblue official render transparent",
    specs: {
      display: "6.6\" Super AMOLED, 120Hz, 1000 nits, Vision Booster",
      processor: "Exynos 1480 with AMD Xclipse 530 GPU",
      ram: "8GB / 12GB",
      storage: "128GB / 256GB (Expandable microSD)",
      camera: "50MP OIS + 12MP Ultra Wide + 5MP Macro",
      battery: "5000 mAh, 2-day battery life",
      charging: "25W Super Fast Charging",
      os: "One UI 6 with Samsung Knox Vault",
      features: ["Metal Flat Frame", "Gorilla Glass Victus+", "IP67 Water Resistance", "4 OS Upgrades"]
    },
    description: "Premium metal frame, Gorilla Glass Victus+, 50MP OIS camera, and Samsung Knox security at an accessible price.",
    colors: [
      { name: "Awesome Iceblue", hex: "#d8e7f5" },
      { name: "Awesome Navy", hex: "#1f2738" },
      { name: "Awesome Lilac", hex: "#e0d3eb" }
    ],
    inStock: true,
    rating: 4.6,
    reviewsCount: 280
  },

  // --- VIVO ---
  {
    id: "vivo-x100-pro",
    slug: "vivo-x100-pro",
    name: "Vivo X100 Pro",
    brand: "Vivo",
    category: "Smartphones",
    price: 89999,
    originalPrice: 96999,
    badge: "HOT",
    searchQuery: "Vivo X100 Pro asteroid black official render transparent",
    specs: {
      display: "6.78\" 1.5K LTPO AMOLED, 120Hz, 3000 nits peak, 2160Hz PWM",
      processor: "MediaTek Dimensity 9300 (4nm)",
      ram: "16GB LPDDR5X",
      storage: "512GB UFS 4.0",
      camera: "50MP 1-inch Sony IMX989 ZEISS + 50MP ZEISS APO Floating Telephoto (100x) + 50MP Ultra Wide",
      battery: "5400 mAh BlueOcean Dual Cell",
      charging: "100W FlashCharge, 50W Wireless FlashCharge",
      os: "Funtouch OS 14 (Android 14)",
      features: ["ZEISS APO Optics", "Vivo V3 Imaging Chip", "IP68 Water Resistance", "Sun Halo Design"]
    },
    description: "The mobile photography champion. Featuring a full 1-inch sensor co-engineered with ZEISS, 100x telephoto zoom, and Dimensity 9300 flagship performance.",
    colors: [
      { name: "Asteroid Black", hex: "#1c1c1e" },
      { name: "Sunset Orange", hex: "#e66025" }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 230
  },
  {
    id: "vivo-v40-pro",
    slug: "vivo-v40-pro",
    name: "Vivo V40 Pro 5G",
    brand: "Vivo",
    category: "Smartphones",
    price: 49999,
    originalPrice: 54999,
    badge: "NEW",
    searchQuery: "Vivo V40 Pro ganges blue official render transparent",
    specs: {
      display: "6.78\" 1.5K Curved AMOLED, 120Hz, 4500 nits local peak",
      processor: "MediaTek Dimensity 9200+ (4nm)",
      ram: "8GB / 12GB",
      storage: "256GB / 512GB",
      camera: "50MP Sony IMX921 OIS + 50MP Sony IMX816 Telephoto + 50MP Ultra Wide + 50MP Eye-AF Selfie",
      battery: "5500 mAh BlueOcean Battery",
      charging: "80W FlashCharge",
      os: "Funtouch OS 14",
      features: ["ZEISS Multifocal Portrait", "Smart Aura Light", "Slim 7.58mm Profile", "IP68 & IP69 Dust/Water Resistance"]
    },
    description: "All 50MP ZEISS optics front & back, ultra-slim 7.58mm curved body, massive 5500mAh battery, and industry-leading IP68/IP69 protection.",
    colors: [
      { name: "Ganges Blue", hex: "#7ba3c4" },
      { name: "Titanium Gray", hex: "#4b4f56" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 164
  },
  {
    id: "vivo-v30-pro",
    slug: "vivo-v30-pro",
    name: "Vivo V30 Pro",
    brand: "Vivo",
    category: "Smartphones",
    price: 41999,
    originalPrice: 46999,
    badge: "BESTSELLER",
    searchQuery: "Vivo V30 Pro andaman blue official render transparent",
    specs: {
      display: "6.78\" 1.5K 3D Curved AMOLED, 120Hz, 2800 nits",
      processor: "MediaTek Dimensity 8200 (4nm)",
      ram: "12GB",
      storage: "512GB",
      camera: "50MP Sony IMX920 OIS + 50MP Portrait + 50MP Ultra Wide + 50MP AF Selfie",
      battery: "5000 mAh with 80W FlashCharge",
      charging: "80W Wired (100% in 46 min)",
      os: "Funtouch OS 14",
      features: ["ZEISS Co-engineered Camera", "Smart Studio Aura Light", "7.45mm Ultra-slim", "Color-Changing Glass"]
    },
    description: "Studio portrait specialist with ZEISS style bokeh, 50MP quad camera array, and smart color-temperature adjustable Aura Light.",
    colors: [
      { name: "Andaman Blue", hex: "#49a078" },
      { name: "Classic Black", hex: "#1f2421" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 210
  },
  {
    id: "vivo-t3-5g",
    slug: "vivo-t3-5g",
    name: "Vivo T3 5G",
    brand: "Vivo",
    category: "Smartphones",
    price: 19999,
    originalPrice: 22999,
    badge: "BESTSELLER",
    searchQuery: "Vivo T3 5G cosmic blue official render transparent",
    specs: {
      display: "6.67\" FHD+ AMOLED, 120Hz, 1800 nits, In-display Fingerprint",
      processor: "MediaTek Dimensity 7200 (4nm)",
      ram: "8GB + 8GB Extended RAM",
      storage: "128GB / 256GB",
      camera: "50MP Sony IMX882 OIS + 2MP Bokeh + 16MP Selfie",
      battery: "5000 mAh with 44W FlashCharge",
      charging: "44W Fast Charging",
      os: "Funtouch OS 14",
      features: ["Segment Fastest AnTuTu 734K+", "Dual Stereo Speakers", "IP54 Splash Resistant", "4K Video Recording"]
    },
    description: "The speed champion in the under-₹20K segment. Powered by Dimensity 7200 with Sony OIS camera and 120Hz AMOLED.",
    colors: [
      { name: "Cosmic Blue", hex: "#2a4d87" },
      { name: "Crystal Flake", hex: "#b4dce8" }
    ],
    inStock: true,
    rating: 4.6,
    reviewsCount: 390
  },

  // --- ONEPLUS ---
  {
    id: "oneplus-12",
    slug: "oneplus-12",
    name: "OnePlus 12",
    brand: "OnePlus",
    category: "Smartphones",
    price: 64999,
    originalPrice: 69999,
    badge: "HOT",
    searchQuery: "OnePlus 12 flowy emerald official render transparent",
    specs: {
      display: "6.82\" 2K 120Hz ProXDR LTPO AMOLED, 4500 nits, Dolby Vision",
      processor: "Snapdragon 8 Gen 3 (4nm)",
      ram: "12GB / 16GB LPDDR5X",
      storage: "256GB / 512GB UFS 4.0",
      camera: "50MP Sony LYT-808 OIS + 64MP 3x Periscope OIS + 48MP Ultra Wide Hasselblad",
      battery: "5400 mAh Dual Cell",
      charging: "100W SUPERVOOC (100% in 26 min), 50W AIRVOOC Wireless",
      os: "OxygenOS 14 with Trinity Engine",
      features: ["Hasselblad 4th Gen Camera", "Dual Cryo-velocity VC Cooling", "Aqua Touch Display", "Alert Slider"]
    },
    description: "Smooth beyond belief. 4th Gen Hasselblad camera with periscope zoom, Snapdragon 8 Gen 3, 5400mAh battery with 100W charging, and Aqua Touch.",
    colors: [
      { name: "Flowy Emerald", hex: "#1e4d3b" },
      { name: "Silky Black", hex: "#1c1c1e" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 340
  },
  {
    id: "oneplus-12r",
    slug: "oneplus-12r",
    name: "OnePlus 12R",
    brand: "OnePlus",
    category: "Smartphones",
    price: 39999,
    originalPrice: 42999,
    badge: "BESTSELLER",
    searchQuery: "OnePlus 12R cool blue official render transparent",
    specs: {
      display: "6.78\" 1.5K 120Hz 4th Gen LTPO AMOLED, 4500 nits",
      processor: "Qualcomm Snapdragon 8 Gen 2 (4nm)",
      ram: "8GB / 16GB",
      storage: "128GB / 256GB",
      camera: "50MP Sony IMX890 OIS + 8MP Ultra Wide + 2MP Macro",
      battery: "5500 mAh (Biggest battery in any OnePlus phone)",
      charging: "100W SUPERVOOC Fast Charging",
      os: "OxygenOS 14",
      features: ["100W Fast Charger in Box", "Dual VC Cooling", "Matte Glass Finish", "Signature Alert Slider"]
    },
    description: "Flagship killer performance. Snapdragon 8 Gen 2, giant 5500mAh battery, 100W SUPERVOOC, and 4500-nit 4th gen LTPO display.",
    colors: [
      { name: "Cool Blue", hex: "#6c9bc2" },
      { name: "Iron Gray", hex: "#3a3c40" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 460
  },
  {
    id: "oneplus-nord-4-5g",
    slug: "oneplus-nord-4-5g",
    name: "OnePlus Nord 4 5G",
    brand: "OnePlus",
    category: "Smartphones",
    price: 32999,
    originalPrice: 34999,
    badge: "NEW",
    searchQuery: "OnePlus Nord 4 mercurial silver official render transparent",
    specs: {
      display: "6.74\" 1.5K 120Hz Ultra-clear AMOLED, 2150 nits",
      processor: "Qualcomm Snapdragon 7+ Gen 3 (4nm)",
      ram: "8GB / 12GB LPDDR5X",
      storage: "128GB / 256GB UFS 4.0",
      camera: "50MP Sony LYT-600 OIS + 8MP Ultra Wide",
      battery: "5500 mAh battery with 4-year health guarantee",
      charging: "100W SUPERVOOC (100% in 28 mins)",
      os: "OxygenOS 14.1 with AI Eraser & AI Summary",
      features: ["All-Metal Unibody Design", "6 Years Software Support", "Aqua Touch", "Alert Slider"]
    },
    description: "The only all-metal unibody 5G smartphone. Featuring Snapdragon 7+ Gen 3, 100W charging, and 6 years of software updates.",
    colors: [
      { name: "Mercurial Silver", hex: "#b4b8be" },
      { name: "Oasis Green", hex: "#618571" },
      { name: "Obsidian Midnight", hex: "#1c1e22" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 220
  },

  // --- NOTHING ---
  {
    id: "nothing-phone-2",
    slug: "nothing-phone-2",
    name: "Nothing Phone (2)",
    brand: "Nothing",
    category: "Smartphones",
    price: 36999,
    originalPrice: 44999,
    badge: "HOT",
    searchQuery: "Nothing Phone 2 dark gray official render transparent",
    specs: {
      display: "6.7\" Flexible LTPO OLED, 1-120Hz, 1600 nits, HDR10+",
      processor: "Snapdragon 8+ Gen 1 (4nm)",
      ram: "12GB",
      storage: "256GB / 512GB",
      camera: "50MP Sony IMX890 OIS + 50MP Samsung JN1 Ultra Wide + 32MP Selfie",
      battery: "4700 mAh",
      charging: "45W Wired (100% in 55 min), 15W Wireless, 5W Reverse",
      os: "Nothing OS 2.6 (Clean Android, zero bloatware)",
      features: ["Glyph Interface with 33 Zones", "Transparent Back Glass", "Symmetrical Bezels", "Glyph Composer"]
    },
    description: "Iconic transparent aesthetics combined with flagship Snapdragon 8+ Gen 1 power and the legendary interactive Glyph lighting interface.",
    colors: [
      { name: "Dark Gray", hex: "#2f3136" },
      { name: "White", hex: "#f0f2f5" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 380
  },
  {
    id: "nothing-phone-2a-plus",
    slug: "nothing-phone-2a-plus",
    name: "Nothing Phone (2a) Plus",
    brand: "Nothing",
    category: "Smartphones",
    price: 27999,
    originalPrice: 29999,
    badge: "NEW",
    searchQuery: "Nothing Phone 2a Plus metallic gray official render transparent",
    specs: {
      display: "6.7\" Flexible AMOLED, 120Hz, 1300 nits peak, 1.07B colors",
      processor: "MediaTek Dimensity 7350 Pro 5G (4nm, 3.0GHz)",
      ram: "8GB / 12GB",
      storage: "256GB",
      camera: "50MP Main OIS + 50MP Ultra Wide + 50MP Front Selfie (All 50MP!)",
      battery: "5000 mAh with 50W Fast Charging",
      charging: "50W Fast Charging (50% in 21 mins)",
      os: "Nothing OS 2.6",
      features: ["Metallic Engine Finish", "Triple 50MP Cameras", "Glyph Interface", "IP54 Certified"]
    },
    description: "Metallic industrial overhaul with exclusive Dimensity 7350 Pro 5G chipset and triple 50MP cameras across back and front.",
    colors: [
      { name: "Metallic Gray", hex: "#7a8288" },
      { name: "Black", hex: "#1e1e1e" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 175
  },
  {
    id: "nothing-phone-2a",
    slug: "nothing-phone-2a",
    name: "Nothing Phone (2a)",
    brand: "Nothing",
    category: "Smartphones",
    price: 23999,
    originalPrice: 25999,
    badge: "BESTSELLER",
    searchQuery: "Nothing Phone 2a white official render transparent",
    specs: {
      display: "6.7\" Flexible AMOLED, 120Hz, 1300 nits peak",
      processor: "Dimensity 7200 Pro (4nm)",
      ram: "8GB / 12GB",
      storage: "128GB / 256GB",
      camera: "50MP Main OIS + 50MP Ultra Wide + 32MP Front",
      battery: "5000 mAh (Largest Nothing battery)",
      charging: "45W Fast Charging",
      os: "Nothing OS 2.6",
      features: ["Central 'Eyes' Dual Camera", "Glyph Interface", "Ultra-thin 2.1mm Bezels", "Clean UI"]
    },
    description: "Extraordinary design at an accessible price. Symmetrical bezels, dual 50MP cameras, and the unique Glyph lighting system.",
    colors: [
      { name: "Special Edition", hex: "#2b5c8f" },
      { name: "White", hex: "#f0f2f5" },
      { name: "Black", hex: "#1f2024" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 520
  },
  {
    id: "cmf-phone-1",
    slug: "cmf-phone-1",
    name: "CMF Phone 1 by Nothing",
    brand: "Nothing",
    category: "Smartphones",
    price: 15999,
    originalPrice: 17999,
    badge: "BESTSELLER",
    searchQuery: "CMF Phone 1 orange official render transparent",
    specs: {
      display: "6.67\" Super AMOLED, 120Hz, 2000 nits peak",
      processor: "MediaTek Dimensity 7300 5G (4nm)",
      ram: "6GB / 8GB",
      storage: "128GB (Expandable 2TB)",
      camera: "50MP Sony Sensor + Portrait Sensor + 16MP Selfie",
      battery: "5000 mAh with 33W Fast Charging",
      charging: "33W Fast Charging, 5W Reverse Wired",
      os: "Nothing OS 2.6",
      features: ["Interchangeable Back Covers", "Accessory Point (Lanyard/Stand)", "IP52 Water Resistant", "In-display Fingerprint"]
    },
    description: "Modularity meets beauty. Swap colored backs, attach stands and lanyards, powered by Dimensity 7300 with clean Nothing OS.",
    colors: [
      { name: "Orange", hex: "#e75a2d" },
      { name: "Black", hex: "#242526" },
      { name: "Light Green", hex: "#a4b998" },
      { name: "Blue", hex: "#2f5080" }
    ],
    inStock: true,
    rating: 4.6,
    reviewsCount: 410
  },

  // --- OPPO ---
  {
    id: "oppo-reno-12-pro",
    slug: "oppo-reno-12-pro",
    name: "Oppo Reno 12 Pro 5G",
    brand: "Oppo",
    category: "Smartphones",
    price: 36999,
    originalPrice: 39999,
    badge: "NEW",
    searchQuery: "Oppo Reno 12 Pro sunset gold official render transparent",
    specs: {
      display: "6.7\" Quad-Curved Infinite View AMOLED, 120Hz, 1200 nits",
      processor: "MediaTek Dimensity 7300-Energy (4nm)",
      ram: "12GB",
      storage: "256GB / 512GB",
      camera: "50MP Sony LYT-600 OIS + 50MP 2x Telephoto Portrait + 8MP Ultra Wide + 50MP Eye-AF Selfie",
      battery: "5000 mAh with 80W SUPERVOOC",
      charging: "80W Wired (46% in 18 min)",
      os: "ColorOS 14.1 with GenAI features",
      features: ["AI Eraser 2.0 & AI Studio", "High-strength Alloy Body", "IP65 Water Resistance", "Splash Touch"]
    },
    description: "AI-powered portrait studio with dual 50MP Sony cameras, quad-curved infinite screen, aerospace-grade high-strength alloy body.",
    colors: [
      { name: "Sunset Gold", hex: "#f0c68c" },
      { name: "Space Brown", hex: "#3e322d" }
    ],
    inStock: true,
    rating: 4.6,
    reviewsCount: 135
  },
  {
    id: "oppo-f27-pro-plus",
    slug: "oppo-f27-pro-plus",
    name: "Oppo F27 Pro+ 5G",
    brand: "Oppo",
    category: "Smartphones",
    price: 27999,
    originalPrice: 29999,
    badge: "HOT",
    searchQuery: "Oppo F27 Pro Plus dusk pink official render transparent",
    specs: {
      display: "6.7\" 3D Curved AMOLED, 120Hz, Gorilla Glass Victus 2",
      processor: "MediaTek Dimensity 7050 (6nm)",
      ram: "8GB",
      storage: "128GB / 256GB",
      camera: "64MP Ultra-clear OIS + 2MP Portrait + 8MP Selfie",
      battery: "5000 mAh with 67W SUPERVOOC",
      charging: "67W Fast Charging",
      os: "ColorOS 14",
      features: ["India's 1st IP69 Waterproof Phone", "Military Grade Shock Resistance", "Damage-Proof 360 Armour Body", "Vegan Leather Back"]
    },
    description: "India's first IP69, IP68, and IP66 waterproof smartphone with 360-degree Armour Body drop resistance and luxury leather finish.",
    colors: [
      { name: "Dusk Pink", hex: "#b5838d" },
      { name: "Midnight Navy", hex: "#1b263b" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 290
  },
  {
    id: "oppo-a79-5g",
    slug: "oppo-a79-5g",
    name: "Oppo A79 5G",
    brand: "Oppo",
    category: "Smartphones",
    price: 17999,
    originalPrice: 19999,
    badge: "SALE",
    searchQuery: "Oppo A79 5G glowing green official render transparent",
    specs: {
      display: "6.72\" FHD+ 90Hz Sunlight Display, 680 nits",
      processor: "MediaTek Dimensity 6020 5G",
      ram: "8GB + 8GB RAM Expansion",
      storage: "128GB",
      camera: "50MP AI Camera + 2MP Portrait + 8MP Selfie",
      battery: "5000 mAh with 33W SUPERVOOC",
      charging: "33W Fast Charging",
      os: "ColorOS 13.1",
      features: ["Glowing Feather Design", "Dual Stereo Speakers with 300% Ultra Volume Mode", "IPX4 Water Resistance"]
    },
    description: "Striking Glowing Feather design with 300% Ultra Volume dual speakers, 50MP AI camera, and reliable all-day battery.",
    colors: [
      { name: "Glowing Green", hex: "#52b788" },
      { name: "Mystery Black", hex: "#1e1e1e" }
    ],
    inStock: true,
    rating: 4.5,
    reviewsCount: 180
  },

  // --- REALME ---
  {
    id: "realme-gt-6",
    slug: "realme-gt-6",
    name: "Realme GT 6",
    brand: "Realme",
    category: "Smartphones",
    price: 40999,
    originalPrice: 44999,
    badge: "HOT",
    searchQuery: "Realme GT 6 fluid silver official render transparent",
    specs: {
      display: "6.78\" 8T LTPO AMOLED, 120Hz, Record 6000 nits peak brightness",
      processor: "Qualcomm Snapdragon 8s Gen 3 (4nm)",
      ram: "12GB / 16GB",
      storage: "256GB / 512GB",
      camera: "50MP Sony LYT-808 OIS + 50MP Telephoto (2x) + 8MP Ultra Wide",
      battery: "5500 mAh Dual Cell",
      charging: "120W SUPERVOOC (50% in 10 mins)",
      os: "realme UI 5.0 (Android 14)",
      features: ["World's Brightest 6000nit Display", "NextAI Smart Removal & Night Vision", "Iceberg Vapor Chamber", "Nano Mirror Design"]
    },
    description: "The AI Flagship Killer. World record 6000-nit ultra-bright display, Snapdragon 8s Gen 3, and 120W SuperVOOC charge.",
    colors: [
      { name: "Fluid Silver", hex: "#c0c5cc" },
      { name: "Razor Green", hex: "#2d5a43" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 310
  },
  {
    id: "realme-gt-6t",
    slug: "realme-gt-6t",
    name: "Realme GT 6T",
    brand: "Realme",
    category: "Smartphones",
    price: 30999,
    originalPrice: 32999,
    badge: "BESTSELLER",
    searchQuery: "Realme GT 6T fluid silver official render transparent",
    specs: {
      display: "6.78\" 8T LTPO 120Hz AMOLED, 6000 nits peak, Gorilla Glass Victus 2",
      processor: "Qualcomm Snapdragon 7+ Gen 3 (4nm)",
      ram: "8GB / 12GB",
      storage: "128GB / 256GB / 512GB",
      camera: "50MP Sony LYT-600 OIS + 8MP Ultra Wide + 32MP Sony Selfie",
      battery: "5500 mAh with 120W GaN Charger in Box",
      charging: "120W SUPERVOOC (50% in 10 mins)",
      os: "realme UI 5.0",
      features: ["Flagship Snapdragon 7+ Gen 3", "Iceberg VC Cooling 10014mm²", "Dual Stereo Speakers", "Hi-Res Audio"]
    },
    description: "Unmatched performance under ₹35,000. Snapdragon 7+ Gen 3 powerhouse with 120W fast charging and 6000-nit display.",
    colors: [
      { name: "Fluid Silver", hex: "#c0c5cc" },
      { name: "Razor Green", hex: "#2d5a43" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 275
  },
  {
    id: "realme-13-pro-plus",
    slug: "realme-13-pro-plus",
    name: "Realme 13 Pro+ 5G",
    brand: "Realme",
    category: "Smartphones",
    price: 32999,
    originalPrice: 36999,
    badge: "NEW",
    searchQuery: "Realme 13 Pro Plus monet gold official render transparent",
    specs: {
      display: "6.7\" Curved Vision OLED, 120Hz, 2000 nits, 2160Hz PWM Dimming",
      processor: "Qualcomm Snapdragon 7s Gen 2 (4nm)",
      ram: "8GB / 12GB",
      storage: "256GB / 512GB",
      camera: "50MP Sony LYT-701 OIS + 50MP Sony LYT-600 3x Periscope OIS (120x SuperZoom) + 8MP Ultra Wide",
      battery: "5200 mAh with 80W SUPERVOOC",
      charging: "80W Wired (50% in 19 min)",
      os: "realme UI 5.0 with HYPERIMAGE+",
      features: ["Monet Art Design (Inspired by Claude Monet)", "Dual Sony OIS Sensors", "IP65 Dust & Water Resistant", "ArmorShield Glass"]
    },
    description: "Monet-inspired luxury design featuring world-first dual Sony sensors with a 50MP 3x periscope telephoto lens.",
    colors: [
      { name: "Monet Gold", hex: "#d8be8d" },
      { name: "Emerald Green", hex: "#2b4c3f" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 190
  },
  {
    id: "realme-p1-pro",
    slug: "realme-p1-pro",
    name: "Realme P1 Pro 5G",
    brand: "Realme",
    category: "Smartphones",
    price: 19999,
    originalPrice: 21999,
    badge: "SALE",
    searchQuery: "Realme P1 Pro phoenix red official render transparent",
    specs: {
      display: "6.7\" Curved 120Hz AMOLED, 950 nits, Pro-XDR",
      processor: "Qualcomm Snapdragon 6 Gen 1 (4nm)",
      ram: "8GB",
      storage: "128GB / 256GB",
      camera: "50MP Sony LYT-600 OIS + 8MP Ultra Wide",
      battery: "5000 mAh with 45W SUPERVOOC",
      charging: "45W Fast Charging",
      os: "realme UI 5.0",
      features: ["Phoenix Design with 3D Micro-texture", "3D VC Cooling", "Rainwater Smart Touch", "Tactile Engine"]
    },
    description: "Best curved display phone under ₹20,000. Curved 120Hz AMOLED, Sony OIS camera, and Snapdragon 4nm performance.",
    colors: [
      { name: "Phoenix Red", hex: "#8c2d2d" },
      { name: "Parrot Blue", hex: "#276288" }
    ],
    inStock: true,
    rating: 4.6,
    reviewsCount: 310
  },

  // --- XIAOMI ---
  {
    id: "xiaomi-14-ultra",
    slug: "xiaomi-14-ultra",
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    category: "Smartphones",
    price: 99999,
    originalPrice: 119999,
    badge: "HOT",
    searchQuery: "Xiaomi 14 Ultra black official render transparent",
    specs: {
      display: "6.73\" WQHD+ 120Hz LTPO AMOLED, 3000 nits, Xiaomi Shield Glass",
      processor: "Qualcomm Snapdragon 8 Gen 3 (4nm)",
      ram: "16GB LPDDR5X",
      storage: "512GB UFS 4.0",
      camera: "50MP 1-inch Sony LYT-900 Stepless Variable Aperture (f/1.63-f/4.0) + 50MP 3.2x Telephoto + 50MP 5x Periscope + 50MP Ultra Wide (All Leica!)",
      battery: "5000 mAh High-density Silicon-Carbon",
      charging: "90W Wired (100% in 33 min), 80W Wireless",
      os: "Xiaomi HyperOS (Android 14)",
      features: ["Quad Leica 50MP Cameras", "Stepless Stepped Aperture", "All-Around Liquid Display", "IP68 Certified"]
    },
    description: "A professional camera disguised as a smartphone. Quad 50MP Leica optics with 1-inch Sony LYT-900 stepless aperture sensor.",
    colors: [
      { name: "Black", hex: "#1c1c1e" },
      { name: "White", hex: "#f0f2f5" }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 165
  },
  {
    id: "xiaomi-14",
    slug: "xiaomi-14",
    name: "Xiaomi 14",
    brand: "Xiaomi",
    category: "Smartphones",
    price: 69999,
    originalPrice: 79999,
    badge: "BESTSELLER",
    searchQuery: "Xiaomi 14 jade green official render transparent",
    specs: {
      display: "6.36\" 1.5K 120Hz LTPO AMOLED, 3000 nits, Ultra-thin 1.61mm bezels",
      processor: "Snapdragon 8 Gen 3 (4nm)",
      ram: "12GB",
      storage: "512GB",
      camera: "50MP Light Fusion 900 Leica + 50MP 75mm Floating Telephoto + 50MP Ultra Wide",
      battery: "4610 mAh with 90W HyperCharge",
      charging: "90W Wired (100% in 31 min), 50W Wireless",
      os: "Xiaomi HyperOS",
      features: ["Compact 6.36-inch Flagship", "Leica Summilux Lens", "IP68 Water Resistance", "Loop LiquidCool"]
    },
    description: "The compact powerhouse. 6.36-inch pocketable frame with Snapdragon 8 Gen 3, triple Leica lenses, and 90W HyperCharge.",
    colors: [
      { name: "Jade Green", hex: "#3e6459" },
      { name: "Black", hex: "#222222" },
      { name: "White", hex: "#f8f9fa" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 220
  },
  {
    id: "redmi-note-13-pro-plus",
    slug: "redmi-note-13-pro-plus",
    name: "Redmi Note 13 Pro+ 5G",
    brand: "Xiaomi",
    category: "Smartphones",
    price: 30999,
    originalPrice: 33999,
    badge: "BESTSELLER",
    searchQuery: "Redmi Note 13 Pro Plus fusion purple official render transparent",
    specs: {
      display: "6.67\" 1.5K Curved 120Hz AMOLED, 1800 nits, Gorilla Glass Victus",
      processor: "MediaTek Dimensity 7200 Ultra (4nm)",
      ram: "8GB / 12GB",
      storage: "256GB / 512GB",
      camera: "200MP Samsung ISOCELL HP3 OIS + 8MP Ultra Wide + 2MP Macro",
      battery: "5000 mAh with 120W HyperCharge in Box",
      charging: "120W Wired (100% in 19 mins)",
      os: "Xiaomi HyperOS",
      features: ["IP68 Water & Dust Resistance", "200MP In-Sensor 4x Lossless Zoom", "Curved AMOLED", "120W Charger"]
    },
    description: "200MP ultra-clear photography with IP68 flagship water protection, curved 1.5K AMOLED, and 120W lightning charge.",
    colors: [
      { name: "Fusion Purple", hex: "#a48dbb" },
      { name: "Fusion Black", hex: "#1e1e1e" },
      { name: "Fusion White", hex: "#f8f9fa" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 540
  },
  {
    id: "poco-x6-pro-5g",
    slug: "poco-x6-pro-5g",
    name: "POCO X6 Pro 5G",
    brand: "Xiaomi",
    category: "Smartphones",
    price: 23999,
    originalPrice: 26999,
    badge: "BESTSELLER",
    searchQuery: "POCO X6 Pro yellow official render transparent",
    specs: {
      display: "6.67\" 1.5K 120Hz Flow AMOLED, 1800 nits, Dolby Vision",
      processor: "MediaTek Dimensity 8300 Ultra (4nm, AnTuTu 1.46M+)",
      ram: "8GB / 12GB LPDDR5X",
      storage: "256GB / 512GB UFS 4.0",
      camera: "64MP Triple OIS Camera + 8MP Ultra Wide",
      battery: "5000 mAh with 67W Turbo Charge",
      charging: "67W Fast Charging (100% in 45 min)",
      os: "Xiaomi HyperOS",
      features: ["Segment Leader AnTuTu 1.46 Million", "WildBoost Gaming Optimization 2.0", "Vegan Leather Yellow Back", "Stereo Speakers"]
    },
    description: "Unbeatable gaming performance under ₹25K. Dimensity 8300 Ultra chipset, 1.5K Flow AMOLED, and blazing UFS 4.0 storage.",
    colors: [
      { name: "POCO Yellow", hex: "#ffcc00" },
      { name: "Racing Grey", hex: "#3a3d40" },
      { name: "Spectre Black", hex: "#1f2022" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 460
  },

  // --- AUDIO & EARBUDS ---
  {
    id: "apple-airpods-pro-2",
    slug: "apple-airpods-pro-2",
    name: "Apple AirPods Pro (2nd Gen, USB-C)",
    brand: "Apple",
    category: "Earbuds",
    price: 24900,
    originalPrice: 26900,
    badge: "HOT",
    searchQuery: "Apple AirPods Pro 2 USB-C official render white background",
    specs: {
      display: "H2 Apple silicon chip, U1 chip in case",
      processor: "Apple H2 Headphone Chip",
      battery: "Up to 6 hours listening with ANC (30 hours with case)",
      charging: "MagSafe Charging (USB-C), Apple Watch charger, Qi wireless",
      features: ["2x More Active Noise Cancellation", "Adaptive Audio & Transparency Mode", "Personalized Spatial Audio with Dynamic Head Tracking", "IP54 Dust, Sweat, & Water Resistant"]
    },
    description: "Industry benchmark in noise cancellation. Powered by the H2 chip with Adaptive Audio, Conversation Awareness, and USB-C MagSafe case.",
    colors: [{ name: "White", hex: "#ffffff" }],
    inStock: true,
    rating: 4.9,
    reviewsCount: 650
  },
  {
    id: "samsung-galaxy-buds-2-pro",
    slug: "samsung-galaxy-buds-2-pro",
    name: "Samsung Galaxy Buds 2 Pro",
    brand: "Samsung",
    category: "Earbuds",
    price: 13999,
    originalPrice: 17999,
    badge: "SALE",
    searchQuery: "Galaxy Buds 2 Pro bora purple official render transparent",
    specs: {
      processor: "Samsung Seamless Codec (SSC)",
      battery: "Up to 5 hours with ANC (18 hours with case)",
      charging: "Wireless PowerShare & USB-C Fast Charging",
      features: ["24-bit Hi-Fi Audio Quality", "Intelligent 360 Audio with Direct Multi-channel", "Enhanced Wind Shield ANC", "IPX7 Water Resistance"]
    },
    description: "Studio-grade sound in your ears. 24-bit Hi-Fi audio, 360 spatial audio, and top-tier IPX7 water protection.",
    colors: [
      { name: "Bora Purple", hex: "#8a5fb5" },
      { name: "Graphite", hex: "#2b2b2e" },
      { name: "White", hex: "#f8f9fa" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 290
  },
  {
    id: "sony-wf-1000xm5",
    slug: "sony-wf-1000xm5",
    name: "Sony WF-1000XM5 ANC Earbuds",
    brand: "Sony",
    category: "Earbuds",
    price: 24990,
    originalPrice: 29990,
    badge: "TOP RATED",
    searchQuery: "Sony WF-1000XM5 black official render transparent",
    specs: {
      processor: "Integrated Processor V2 & HD Noise Cancelling Processor QN2e",
      battery: "8 hours with ANC (24 hours total with case)",
      charging: "Qi Wireless & 3-minute quick charge for 60 mins playback",
      features: ["Best Noise Canceling on the Market", "Dynamic Driver X 8.4mm", "Hi-Res Wireless LDAC", "Bone Conduction Sensors for Calls"]
    },
    description: "Sony's flagship wireless earbuds with Dual Processor noise cancelling, Dynamic Driver X, and AI-based voice clarity.",
    colors: [
      { name: "Black", hex: "#1f1f1f" },
      { name: "Silver", hex: "#cfcfcf" }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 210
  },
  {
    id: "oneplus-buds-pro-2",
    slug: "oneplus-buds-pro-2",
    name: "OnePlus Buds Pro 2",
    brand: "OnePlus",
    category: "Earbuds",
    price: 11999,
    originalPrice: 13999,
    badge: "BESTSELLER",
    searchQuery: "OnePlus Buds Pro 2 arbor green official render transparent",
    specs: {
      processor: "BES2700 Audio SoC",
      battery: "Up to 9 hours (39 hours total)",
      charging: "Wired Flash Charge (10 mins = 10 hrs) & Qi Wireless",
      features: ["MelodyBoost Dual Drivers Co-created with Dynaudio", "Spatial Audio with Head Tracking", "Up to 48dB Smart Adaptive ANC", "LHDC 4.0 Lossless"]
    },
    description: "Co-created with Dynaudio. Dual drivers deliver rich bass and crystal highs, with 48dB adaptive noise cancellation.",
    colors: [
      { name: "Arbor Green", hex: "#3b5847" },
      { name: "Obsidian Black", hex: "#1c1c1c" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 320
  },
  {
    id: "nothing-ear-2",
    slug: "nothing-ear-2",
    name: "Nothing Ear (2)",
    brand: "Nothing",
    category: "Earbuds",
    price: 9999,
    originalPrice: 12999,
    badge: "SALE",
    searchQuery: "Nothing Ear 2 official render transparent",
    specs: {
      processor: "Custom 11.6mm dynamic driver",
      battery: "Up to 36 hours total with case",
      charging: "USB-C & 2.5W Qi Wireless Charging",
      features: ["Hi-Res Audio Certified with LHDC 5.0", "Personalized Sound Profile", "Smart Active Noise Cancellation up to 40dB", "Dual Connection Multipoint"]
    },
    description: "Ultra-light transparent design weighing just 4.5g. Hi-Res Audio certified, custom sound profiles, and dual connection.",
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#121212" }
    ],
    inStock: true,
    rating: 4.6,
    reviewsCount: 280
  },

  // --- SMARTWATCHES ---
  {
    id: "apple-watch-series-9",
    slug: "apple-watch-series-9",
    name: "Apple Watch Series 9 (GPS)",
    brand: "Apple",
    category: "Smartwatches",
    price: 41900,
    originalPrice: 44900,
    badge: "HOT",
    searchQuery: "Apple Watch Series 9 starlight official render transparent",
    specs: {
      display: "Always-On Retina OLED, 2000 nits, Edge-to-edge",
      processor: "S9 SiP with 4-core Neural Engine",
      battery: "18 hours all-day (36 hours in Low Power Mode)",
      charging: "Fast magnetic USB-C charging",
      features: ["Double Tap Gesture Control", "On-Device Siri with Health Data", "Blood Oxygen & ECG Apps", "Precision Finding for iPhone"]
    },
    description: "Smarter, brighter, mightier. Introducing magical Double Tap gestures, 2000-nit display, and advanced health sensors.",
    colors: [
      { name: "Midnight", hex: "#1c2331" },
      { name: "Starlight", hex: "#f0ece1" },
      { name: "Silver", hex: "#e1e4e6" },
      { name: "Pink", hex: "#f2cbd4" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 390
  },
  {
    id: "apple-watch-ultra-2",
    slug: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    category: "Smartwatches",
    price: 89900,
    originalPrice: 94900,
    badge: "TOP RATED",
    searchQuery: "Apple Watch Ultra 2 titanium official render transparent",
    specs: {
      display: "49mm Aerospace Titanium Case, 3000 nits brightest display",
      processor: "S9 SiP with 4-core Neural Engine",
      battery: "36 hours normal use (Up to 72 hours in Low Power Mode)",
      charging: "Fast magnetic wireless charging",
      features: ["Precision Dual-Frequency GPS", "100m Water Resistance & 40m Recreational Dive Computer", "Customizable Action Button", "86dB Emergency Siren"]
    },
    description: "The most rugged and capable Apple Watch. 49mm titanium case, 3000 nits brightness, dual-frequency GPS, and up to 72 hours of battery.",
    colors: [
      { name: "Natural Titanium", hex: "#9d9893" },
      { name: "Black Titanium", hex: "#2b2b2b" }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 140
  },
  {
    id: "samsung-galaxy-watch-6-classic",
    slug: "samsung-galaxy-watch-6-classic",
    name: "Samsung Galaxy Watch 6 Classic",
    brand: "Samsung",
    category: "Smartwatches",
    price: 34999,
    originalPrice: 38999,
    badge: "BESTSELLER",
    searchQuery: "Galaxy Watch 6 Classic black rotating bezel official render transparent",
    specs: {
      display: "1.5\" Super AMOLED, 2000 nits, Sapphire Crystal Glass",
      processor: "Exynos W930 Dual Core 1.4GHz",
      battery: "425 mAh with WPC wireless fast charging",
      features: ["Physical Rotating Bezel", "BioActive Sensor (ECG, BIA Body Composition, HR)", "Advanced Sleep Coaching", "5ATM + IP68 Durability"]
    },
    description: "Timeless classic styling with the iconic physical rotating bezel, sapphire crystal face, and advanced body composition analysis.",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Silver", hex: "#d8d8d8" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 220
  },

  // --- TABLETS ---
  {
    id: "apple-ipad-pro-11-m4",
    slug: "apple-ipad-pro-11-m4",
    name: "iPad Pro 11-inch (M4 Chip)",
    brand: "Apple",
    category: "Tablets",
    price: 99900,
    originalPrice: 104900,
    badge: "HOT",
    searchQuery: "iPad Pro 11 M4 space black official render transparent",
    specs: {
      display: "11\" Ultra Retina XDR Tandem OLED, 120Hz ProMotion, 1600 nits peak",
      processor: "Apple M4 Chip (Next-gen 3nm, 38 TOPS Neural Engine)",
      ram: "8GB / 16GB",
      storage: "256GB / 512GB / 1TB / 2TB",
      camera: "12MP Wide + LiDAR Scanner + Landscape 12MP Center Stage Camera",
      battery: "Up to 10 hours web/video, USB-C Thunderbolt 4",
      features: ["Incredibly Thin 5.3mm Profile", "Tandem OLED Display", "Apple Pencil Pro Support", "Magic Keyboard Compatibility"]
    },
    description: "The thinnest Apple product ever made (5.3mm). Features breakthrough Tandem OLED Ultra Retina XDR screen and desktop-crushing M4 speed.",
    colors: [
      { name: "Space Black", hex: "#222224" },
      { name: "Silver", hex: "#e5e6e8" }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 185
  },
  {
    id: "apple-ipad-air-11-m2",
    slug: "apple-ipad-air-11-m2",
    name: "iPad Air 11-inch (M2 Chip)",
    brand: "Apple",
    category: "Tablets",
    price: 59900,
    originalPrice: 64900,
    badge: "BESTSELLER",
    searchQuery: "iPad Air 11 M2 blue official render transparent",
    specs: {
      display: "11\" Liquid Retina Display with P3 Wide Color, True Tone",
      processor: "Apple M2 Chip (8-core CPU, 10-core GPU)",
      ram: "8GB",
      storage: "128GB / 256GB / 512GB",
      camera: "12MP Wide + Landscape 12MP Ultra Wide with Center Stage",
      features: ["Apple Pencil Pro & Apple Pencil USB-C", "Magic Keyboard Compatible", "Touch ID in Top Button", "Stereo Speakers"]
    },
    description: "Fresh power with the M2 chip. Landscape FaceTime camera with Center Stage, stunning Liquid Retina display, and Apple Pencil Pro support.",
    colors: [
      { name: "Blue", hex: "#b5c9dc" },
      { name: "Purple", hex: "#d2c7db" },
      { name: "Starlight", hex: "#f1ece1" },
      { name: "Space Gray", hex: "#5b5c60" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 310
  },
  {
    id: "samsung-galaxy-tab-s9-ultra",
    slug: "samsung-galaxy-tab-s9-ultra",
    name: "Samsung Galaxy Tab S9 Ultra",
    brand: "Samsung",
    category: "Tablets",
    price: 108999,
    originalPrice: 119999,
    badge: "TOP RATED",
    searchQuery: "Galaxy Tab S9 Ultra graphite official render transparent",
    specs: {
      display: "14.6\" Dynamic AMOLED 2X, 120Hz, HDR10+, Vision Booster",
      processor: "Qualcomm Snapdragon 8 Gen 2 for Galaxy",
      ram: "12GB",
      storage: "256GB / 512GB (Expandable microSD up to 1TB)",
      camera: "13MP + 8MP Dual Rear + 12MP Dual Front Cameras",
      battery: "11200 mAh with 45W Fast Charging",
      features: ["S-Pen Included in Box", "IP68 Water & Dust Resistant", "Samsung DeX Desktop Mode", "Quad AKG Speakers"]
    },
    description: "Huge 14.6-inch Dynamic AMOLED 2X canvas. IP68 water resistance on both tablet and S-Pen, quad AKG speakers, and full Samsung DeX workstation mode.",
    colors: [
      { name: "Graphite", hex: "#2f3136" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 145
  },
  {
    id: "oneplus-pad",
    slug: "oneplus-pad",
    name: "OnePlus Pad",
    brand: "OnePlus",
    category: "Tablets",
    price: 37999,
    originalPrice: 39999,
    badge: "SALE",
    searchQuery: "OnePlus Pad halo green official render transparent",
    specs: {
      display: "11.61\" 7:5 ReadFit 144Hz LCD, 2800x2000, 500 nits, Dolby Vision",
      processor: "MediaTek Dimensity 9000 (4nm)",
      ram: "8GB / 12GB LPDDR5",
      storage: "128GB / 256GB UFS 3.1",
      camera: "13MP Center Rear Camera + 8MP Front",
      battery: "9510 mAh with 67W SUPERVOOC Charge",
      features: ["Unique 7:5 ReadFit Aspect Ratio", "CNC Aluminum Unibody with Star Orbit Engraving", "Omnibearing Quad Speakers", "Cellular Data Sharing"]
    },
    description: "Read, watch, and create effortlessly with the world-first 7:5 ReadFit display, 144Hz refresh rate, and 67W fast charging.",
    colors: [
      { name: "Halo Green", hex: "#415d43" }
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 220
  },

  // --- ACCESSORIES ---
  {
    id: "apple-20w-usb-c-power-adapter",
    slug: "apple-20w-usb-c-power-adapter",
    name: "Apple 20W USB-C Power Adapter",
    brand: "Apple",
    category: "Accessories",
    price: 1900,
    originalPrice: 1999,
    badge: "BESTSELLER",
    searchQuery: "Apple 20W USB-C Power Adapter official render white background",
    specs: {
      features: ["Original 100% Apple Genuine Product", "Fast charging for iPhone 15/16 series (0-50% in 30 min)", "Compatible with all USB-C devices", "Compact plug design with overload protection"]
    },
    description: "Original Apple 20W USB-C Power Adapter. Fast, efficient charging at home, in the office, or on the go.",
    colors: [{ name: "White", hex: "#ffffff" }],
    inStock: true,
    rating: 4.9,
    reviewsCount: 1200
  },
  {
    id: "samsung-25w-type-c-adapter",
    slug: "samsung-25w-type-c-adapter",
    name: "Samsung 25W Super Fast Travel Adapter",
    brand: "Samsung",
    category: "Accessories",
    price: 1299,
    originalPrice: 1699,
    badge: "BESTSELLER",
    searchQuery: "Samsung 25W Super Fast Adapter official render transparent",
    specs: {
      features: ["Original Samsung Genuine Accessory", "25W Power Delivery 3.0 PPS", "Short-circuit & Over-voltage protection", "Type-C output"]
    },
    description: "Give your Galaxy the Super Fast Charge it deserves with genuine 25W PPS technology.",
    colors: [
      { name: "Black", hex: "#1f1f1f" },
      { name: "White", hex: "#ffffff" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 880
  },
  {
    id: "anker-737-power-bank",
    slug: "anker-737-power-bank",
    name: "Anker 737 Power Bank (PowerCore 24K)",
    brand: "Anker",
    category: "Accessories",
    price: 11999,
    originalPrice: 13999,
    badge: "TOP RATED",
    searchQuery: "Anker 737 Power Bank PowerCore 24K official render transparent",
    specs: {
      battery: "24,000 mAh Capacity",
      charging: "140W Ultra-Powerful Two-Way Fast Charging",
      features: ["Smart Digital Display showing output and recharge time", "Charge a MacBook Pro 16\" to 50% in 40 mins", "ActiveShield 2.0 temperature monitoring", "Dual USB-C + USB-A ports"]
    },
    description: "The ultimate power bank. 140W output with smart color digital display and 24,000mAh capacity to power phones, tablets, and laptops.",
    colors: [{ name: "Charcoal", hex: "#2b2b2b" }],
    inStock: true,
    rating: 4.9,
    reviewsCount: 310
  },
  {
    id: "belkin-3-in-1-magsafe-charger",
    slug: "belkin-3-in-1-magsafe-charger",
    name: "Belkin BoostCharge Pro 3-in-1 MagSafe",
    brand: "Belkin",
    category: "Accessories",
    price: 13999,
    originalPrice: 15999,
    badge: "HOT",
    searchQuery: "Belkin BoostCharge Pro 3-in-1 Wireless Charger official render transparent",
    specs: {
      features: ["Official 'Made for MagSafe' 15W wireless charging", "Charges iPhone, Apple Watch, and AirPods simultaneously", "Fast charging for Apple Watch Series 7/8/9/Ultra", "Architectural floating stainless steel design"]
    },
    description: "Premium desktop wireless stand. Wirelessly charge your iPhone, Apple Watch, and AirPods all at once in high-speed 15W MagSafe perfection.",
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#1f1f1f" }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 195
  }
];

// Calculate EMI start helper
export function calculateEmiStartsAt(price) {
  // 6 or 12 month 0% interest EMI estimation
  const months = price > 70000 ? 12 : 6;
  const emi = Math.round(price / months);
  return `₹${emi.toLocaleString('en-IN')}/mo`;
}

// Format INR currency
export function formatINR(val) {
  return `₹${val.toLocaleString('en-IN')}`;
}

// Fetch images from web
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
      // Find clean format
      const valid = imgData.results.find(r => 
        r.image && (r.image.endsWith('.png') || r.image.endsWith('.jpg') || r.image.endsWith('.jpeg') || r.image.endsWith('.webp'))
      );
      return valid ? valid.image : imgData.results[0].image;
    }
  } catch (err) {
    // Silent fallback
  }
  return null;
}

async function searchImageWikipedia(query) {
  try {
    const url = 'https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=' + encodeURIComponent(query) + '&gsrlimit=1&prop=pageimages&pithumbsize=800&piprop=original|thumbnail&format=json';
    const res = await fetch(url, { headers: { 'User-Agent': 'SRComsBot/2.0' } });
    const data = await res.json();
    if (data.query && data.query.pages) {
      const page = Object.values(data.query.pages)[0];
      return page.thumbnail?.source || page.original?.source;
    }
  } catch (e) {}
  return null;
}

// Download image and save to public/products
async function downloadImage(url, destPath) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    clearTimeout(timeout);
    if (!res.ok) return false;
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    if (buffer.length < 2000) return false; // Ignore corrupted or placeholder 1x1 pixels
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (e) {
    return false;
  }
}

// Main execution function
export async function updateCatalog(options = {}) {
  console.log('🚀 Starting SR Communication Catalog Updater...');
  const forceImages = options.forceImages || false;
  const targetBrand = options.brand?.toLowerCase();
  const targetCategory = options.category?.toLowerCase();

  const finalProducts = [];

  for (let i = 0; i < DEFAULT_CATALOG.length; i++) {
    const p = { ...DEFAULT_CATALOG[i] };
    
    if (targetBrand && p.brand.toLowerCase() !== targetBrand) continue;
    if (targetCategory && p.category.toLowerCase() !== targetCategory) continue;

    console.log(`\n[${i + 1}/${DEFAULT_CATALOG.length}] Processing: ${p.name} (${p.brand})`);

    // Ensure formatted prices
    p.formattedPrice = formatINR(p.price);
    if (p.originalPrice) {
      p.formattedOriginalPrice = formatINR(p.originalPrice);
    }
    p.emiStartsAt = calculateEmiStartsAt(p.price);

    // Image file path
    const localFileName = `${p.slug}.png`;
    const localJpegName = `${p.slug}.jpg`;
    const localPngPath = path.join(PRODUCTS_DIR, localFileName);
    const localJpegPath = path.join(PRODUCTS_DIR, localJpegName);

    let assignedImage = null;

    if (fs.existsSync(localPngPath) && !forceImages) {
      assignedImage = `/products/${localFileName}`;
      console.log(`  ✓ Image already exists: ${assignedImage}`);
    } else if (fs.existsSync(localJpegPath) && !forceImages) {
      assignedImage = `/products/${localJpegName}`;
      console.log(`  ✓ Image already exists: ${assignedImage}`);
    } else {
      console.log(`  🌐 Searching web for high-res photo: "${p.searchQuery || p.name}"...`);
      let foundUrl = await searchImageDuckDuckGo(p.searchQuery || `${p.name} official render transparent background`);
      
      if (!foundUrl) {
        foundUrl = await searchImageWikipedia(p.name);
      }

      if (foundUrl) {
        console.log(`  📥 Downloading from: ${foundUrl.substring(0, 60)}...`);
        const isJpg = foundUrl.includes('.jpg') || foundUrl.includes('.jpeg');
        const targetPath = isJpg ? localJpegPath : localPngPath;
        const targetPublic = isJpg ? `/products/${localJpegName}` : `/products/${localFileName}`;

        const ok = await downloadImage(foundUrl, targetPath);
        if (ok) {
          assignedImage = targetPublic;
          console.log(`  ✅ Successfully saved to: ${targetPublic}`);
        } else {
          console.log(`  ⚠️ Download failed, using fallback public image.`);
        }
      } else {
        console.log(`  ⚠️ No web image found for ${p.name}`);
      }
    }

    // Fallback if needed
    if (!assignedImage) {
      // Check if existing public folder has a match
      if (fs.existsSync(path.join(ROOT_DIR, 'public', `${p.slug}.jpg`))) {
        assignedImage = `/${p.slug}.jpg`;
      } else if (p.category === 'Smartphones') {
        assignedImage = '/hero1.png';
      } else if (p.category === 'Earbuds') {
        assignedImage = '/cat_earbuds_1790916882546.png';
      } else if (p.category === 'Smartwatches') {
        assignedImage = '/cat_watches_1790916896158.png';
      } else if (p.category === 'Tablets') {
        assignedImage = '/cat_tablets_1790916920076.png';
      } else {
        assignedImage = '/cat_accessories_1790916908147.png';
      }
    }

    p.image = assignedImage;
    p.gallery = [assignedImage];

    finalProducts.push(p);
  }

  // Write JSON
  fs.writeFileSync(DATA_FILE_JSON, JSON.stringify(finalProducts, null, 2), 'utf-8');
  console.log(`\n💾 Saved ${finalProducts.length} products to ${DATA_FILE_JSON}`);

  // Write TypeScript code for src/data/products.ts
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

export const PRODUCTS: Product[] = ${JSON.stringify(finalProducts, null, 2)};

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (!category || category === "All") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export function getProductsByBrand(brand: string): Product[] {
  if (!brand || brand === "All") return PRODUCTS;
  return PRODUCTS.filter((p) => p.brand.toLowerCase() === brand.toLowerCase());
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.badge === "HOT" || p.badge === "BESTSELLER" || p.badge === "NEW");
}

export function searchCatalog(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.specs.processor && p.specs.processor.toLowerCase().includes(q)) ||
      (p.specs.camera && p.specs.camera.toLowerCase().includes(q))
  );
}
`;

  fs.writeFileSync(DATA_FILE_TS, tsContent, 'utf-8');
  console.log(`💾 Saved TypeScript API to ${DATA_FILE_TS}`);
  console.log('🎉 Catalog update completed successfully!');
}

// If executed directly from CLI
if (process.argv[1] && process.argv[1].endsWith('update-catalog.mjs')) {
  const args = process.argv.slice(2);
  const options = {
    forceImages: args.includes('--force') || args.includes('--force-images'),
  };
  const brandIdx = args.indexOf('--brand');
  if (brandIdx !== -1 && args[brandIdx + 1]) options.brand = args[brandIdx + 1];
  const catIdx = args.indexOf('--category');
  if (catIdx !== -1 && args[catIdx + 1]) options.category = args[catIdx + 1];

  updateCatalog(options).catch((err) => {
    console.error('Error in updateCatalog:', err);
    process.exit(1);
  });
}
