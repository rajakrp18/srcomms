export interface Category {
  id: string;
  title: string;
  slug: string;
  desc: string;
  itemCount: string;
  imgUrl: string;
  badge?: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "smartphones",
    title: "Smartphones",
    slug: "smartphones",
    desc: "Apple, Samsung, Vivo, OnePlus & More",
    itemCount: "30+ Models",
    imgUrl: "/cat_phones_1790916868141.png",
    badge: "0% EMI"
  },
  {
    id: "earbuds",
    title: "Earbuds & Audio",
    slug: "earbuds",
    desc: "AirPods, Galaxy Buds, Sony ANC",
    itemCount: "15+ Models",
    imgUrl: "/cat_earbuds_1790916882546.png",
    badge: "HI-RES"
  },
  {
    id: "smartwatches",
    title: "Smartwatches",
    slug: "smartwatches",
    desc: "Apple Watch, Galaxy Watch, Fitness",
    itemCount: "10+ Models",
    imgUrl: "/cat_watches_1790916896158.png",
    badge: "POPULAR"
  },
  {
    id: "tablets",
    title: "Tablets & iPads",
    slug: "tablets",
    desc: "iPad Pro M4, iPad Air, Galaxy Tab",
    itemCount: "8+ Models",
    imgUrl: "/cat_tablets_1790916920076.png",
    badge: "HOT"
  },
  {
    id: "accessories",
    title: "Accessories",
    slug: "accessories",
    desc: "20W Adapters, MagSafe, Power Banks",
    itemCount: "50+ In Stock",
    imgUrl: "/cat_accessories_1790916908147.png",
    badge: "ORIGINAL"
  }
];

export const BRANDS = [
  { name: "Apple", count: "11 Models", logo: "🍎" },
  { name: "Samsung", count: "12 Models", logo: "⚡" },
  { name: "Vivo", count: "4 Models", logo: "📸" },
  { name: "OnePlus", count: "3 Models", logo: "🔴" },
  { name: "Nothing", count: "4 Models", logo: "⚪" },
  { name: "Xiaomi", count: "4 Models", logo: "🟠" },
  { name: "Realme", count: "4 Models", logo: "🟡" },
  { name: "Oppo", count: "3 Models", logo: "🟢" }
];
