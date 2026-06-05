import { Product, ProductReview } from "./types";

export const mockProducts: Product[] = [
  // ── Electronics ──────────────────────────────────────────────
  {
    id: "1",
    title: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort design.",
    price: 299.99,
    originalPrice: 399.99,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&h=600&fit=crop",
    ],
    category: "Electronics",
    brand: "AudioTech",
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    stockQuantity: 25,
    specifications: [
      { name: "Driver Size", value: "40mm" },
      { name: "Frequency Response", value: "20Hz - 20kHz" },
      { name: "Battery Life", value: "30 hours" },
      { name: "Charging Time", value: "2 hours" },
      { name: "Weight", value: "250g" },
      { name: "Connectivity", value: "Bluetooth 5.0, USB-C" },
      { name: "Noise Cancellation", value: "Active ANC" },
      { name: "Warranty", value: "2 years" },
    ],
    tags: ["wireless", "noise-cancelling", "premium", "bluetooth"],
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-20"),
  },
  {
    id: "4",
    title: "Wireless Bluetooth Earbuds Pro",
    description:
      "Compact true wireless earbuds with deep bass, touch controls, and IPX5 water resistance. Perfect for workouts and daily commutes.",
    price: 79.99,
    originalPrice: 129.99,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&h=600&fit=crop",
    ],
    category: "Electronics",
    brand: "SoundWave",
    rating: 4.2,
    reviewCount: 256,
    inStock: true,
    stockQuantity: 80,
    specifications: [
      { name: "Driver Size", value: "12mm" },
      { name: "Battery Life", value: "8 hours (32h with case)" },
      { name: "Water Resistance", value: "IPX5" },
      { name: "Connectivity", value: "Bluetooth 5.3" },
      { name: "Weight", value: "5.2g per earbud" },
      { name: "Charging", value: "USB-C, Qi Wireless" },
    ],
    tags: ["earbuds", "wireless", "waterproof", "bluetooth"],
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-02-15"),
  },
  {
    id: "5",
    title: "Mechanical Gaming Keyboard RGB",
    description:
      "Full-size mechanical keyboard with hot-swappable switches, per-key RGB lighting, and aircraft-grade aluminum frame.",
    price: 149.99,
    originalPrice: 189.99,
    images: [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&h=600&fit=crop",
    ],
    category: "Electronics",
    brand: "KeyForge",
    rating: 4.6,
    reviewCount: 342,
    inStock: true,
    stockQuantity: 40,
    specifications: [
      { name: "Switch Type", value: "Gateron Brown (Hot-swappable)" },
      { name: "Layout", value: "Full-size 104 keys" },
      { name: "Backlight", value: "Per-key RGB" },
      { name: "Connection", value: "USB-C, Bluetooth 5.0" },
      { name: "Frame", value: "Aircraft-grade aluminum" },
      { name: "Battery", value: "4000mAh" },
    ],
    tags: ["keyboard", "mechanical", "gaming", "rgb"],
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-02-01"),
  },
  {
    id: "6",
    title: "4K Ultra HD Monitor 27 inch",
    description:
      "Stunning 4K IPS display with 99% sRGB color accuracy, HDR400, and USB-C hub. Ideal for creative professionals.",
    price: 549.99,
    originalPrice: 699.99,
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=800&h=600&fit=crop",
    ],
    category: "Electronics",
    brand: "ViewPro",
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    stockQuantity: 12,
    specifications: [
      { name: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { name: "Panel Type", value: "IPS" },
      { name: "Refresh Rate", value: "60Hz" },
      { name: "Color Gamut", value: "99% sRGB, 95% DCI-P3" },
      { name: "HDR", value: "HDR400" },
      { name: "Ports", value: "USB-C 65W, HDMI 2.1, DP 1.4" },
    ],
    tags: ["monitor", "4k", "usb-c", "hdr"],
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-03-10"),
  },

  // ── Wearables ────────────────────────────────────────────────
  {
    id: "2",
    title: "Smart Fitness Watch",
    description:
      "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS tracking, and 7-day battery life.",
    price: 199.99,
    originalPrice: 249.99,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=600&fit=crop",
    ],
    category: "Wearables",
    brand: "FitTech",
    rating: 4.3,
    reviewCount: 89,
    inStock: true,
    stockQuantity: 15,
    specifications: [
      { name: "Display", value: '1.4" AMOLED' },
      { name: "Battery Life", value: "7 days" },
      { name: "Water Resistance", value: "5ATM" },
      { name: "Sensors", value: "Heart Rate, GPS, Accelerometer" },
      { name: "Compatibility", value: "iOS, Android" },
      { name: "Storage", value: "4GB" },
      { name: "Weight", value: "45g" },
      { name: "Warranty", value: "1 year" },
    ],
    tags: ["fitness", "smartwatch", "gps", "health"],
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-18"),
  },
  {
    id: "7",
    title: "Luxury Smart Watch Titanium",
    description:
      "Premium titanium smartwatch with sapphire crystal display, ECG monitoring, and luxury leather strap. Combines elegance with technology.",
    price: 449.99,
    images: [
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&h=600&fit=crop",
    ],
    category: "Wearables",
    brand: "LuxeTime",
    rating: 4.8,
    reviewCount: 34,
    inStock: true,
    stockQuantity: 8,
    specifications: [
      { name: "Case Material", value: "Grade 5 Titanium" },
      { name: "Display", value: '1.5" Sapphire AMOLED' },
      { name: "Battery Life", value: "10 days" },
      { name: "Health Sensors", value: "ECG, SpO2, Heart Rate" },
      { name: "Water Resistance", value: "10ATM" },
      { name: "Strap", value: "Italian leather + Silicone" },
    ],
    tags: ["luxury", "smartwatch", "titanium", "ecg"],
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-20"),
  },

  // ── Photography ──────────────────────────────────────────────
  {
    id: "3",
    title: "Professional Camera Lens 24-70mm",
    description:
      "Capture stunning photos with this professional-grade camera lens featuring advanced optics and weather sealing.",
    price: 899.99,
    images: [
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop",
    ],
    category: "Photography",
    brand: "LensMaster",
    rating: 4.8,
    reviewCount: 45,
    inStock: true,
    stockQuantity: 8,
    specifications: [
      { name: "Focal Length", value: "24-70mm" },
      { name: "Aperture", value: "f/2.8" },
      { name: "Mount", value: "Canon EF" },
      { name: "Weight", value: "805g" },
      { name: "Filter Size", value: "82mm" },
      { name: "Weather Sealing", value: "Yes" },
      { name: "Image Stabilization", value: "Optical IS" },
      { name: "Warranty", value: "3 years" },
    ],
    tags: ["photography", "professional", "lens", "canon"],
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "8",
    title: "Mirrorless Camera Body 45MP",
    description:
      "Full-frame mirrorless camera with 45MP sensor, 8K video recording, and advanced autofocus system for professionals.",
    price: 2499.99,
    originalPrice: 2799.99,
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop",
    ],
    category: "Photography",
    brand: "LensMaster",
    rating: 4.9,
    reviewCount: 22,
    inStock: true,
    stockQuantity: 5,
    specifications: [
      { name: "Sensor", value: "45MP Full-Frame CMOS" },
      { name: "ISO Range", value: "100 - 51200" },
      { name: "Video", value: "8K 30fps, 4K 120fps" },
      { name: "Autofocus", value: "1053-point Phase Detection" },
      { name: "Stabilization", value: "5-axis IBIS" },
      { name: "Card Slots", value: "CFexpress + SD UHS-II" },
    ],
    tags: ["camera", "mirrorless", "full-frame", "8k"],
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-03-01"),
  },
  {
    id: "9",
    title: "Carbon Fiber Travel Tripod",
    description:
      "Ultra-lightweight carbon fiber tripod with ball head, perfect for travel photography. Supports up to 15kg.",
    price: 189.99,
    originalPrice: 229.99,
    images: [
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=600&fit=crop",
    ],
    category: "Photography",
    brand: "StableShot",
    rating: 4.4,
    reviewCount: 67,
    inStock: true,
    stockQuantity: 20,
    specifications: [
      { name: "Material", value: "10-layer Carbon Fiber" },
      { name: "Max Height", value: "165cm" },
      { name: "Folded Length", value: "42cm" },
      { name: "Weight", value: "1.3kg" },
      { name: "Max Load", value: "15kg" },
      { name: "Head Type", value: "Arca-Swiss Ball Head" },
    ],
    tags: ["tripod", "carbon-fiber", "travel", "lightweight"],
    createdAt: new Date("2024-02-05"),
    updatedAt: new Date("2024-02-10"),
  },

  // ── Fashion ──────────────────────────────────────────────────
  {
    id: "10",
    title: "Classic Leather Crossbody Bag",
    description:
      "Handcrafted genuine leather crossbody bag with adjustable strap, multiple compartments, and vintage brass hardware.",
    price: 129.99,
    originalPrice: 179.99,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=600&fit=crop",
    ],
    category: "Fashion",
    brand: "UrbanHide",
    rating: 4.5,
    reviewCount: 189,
    inStock: true,
    stockQuantity: 35,
    specifications: [
      { name: "Material", value: "Full-grain Italian leather" },
      { name: "Dimensions", value: "28 x 20 x 8 cm" },
      { name: "Strap Drop", value: "52-60 cm (adjustable)" },
      { name: "Compartments", value: "3 main + 2 inner pockets" },
      { name: "Hardware", value: "Antique brass" },
      { name: "Closure", value: "Magnetic snap" },
    ],
    tags: ["bag", "leather", "crossbody", "handcrafted"],
    createdAt: new Date("2024-01-25"),
    updatedAt: new Date("2024-02-05"),
  },
  {
    id: "11",
    title: "Minimalist Analog Watch",
    description:
      "Elegant minimalist watch with Japanese quartz movement, sapphire crystal, and genuine leather strap.",
    price: 219.99,
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&h=600&fit=crop",
    ],
    category: "Fashion",
    brand: "NordicTime",
    rating: 4.6,
    reviewCount: 73,
    inStock: true,
    stockQuantity: 18,
    specifications: [
      { name: "Movement", value: "Japanese Miyota Quartz" },
      { name: "Case", value: "316L Stainless Steel, 40mm" },
      { name: "Crystal", value: "Sapphire" },
      { name: "Strap", value: "Genuine leather, 20mm" },
      { name: "Water Resistance", value: "5ATM" },
      { name: "Warranty", value: "2 years" },
    ],
    tags: ["watch", "minimalist", "analog", "leather"],
    createdAt: new Date("2024-03-05"),
    updatedAt: new Date("2024-03-10"),
  },
  {
    id: "12",
    title: "Premium Sunglasses UV400",
    description:
      "Polarized sunglasses with titanium frame, UV400 protection, and anti-scratch coated lenses.",
    price: 159.99,
    originalPrice: 199.99,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=600&fit=crop",
    ],
    category: "Fashion",
    brand: "ShadeCraft",
    rating: 4.3,
    reviewCount: 112,
    inStock: true,
    stockQuantity: 45,
    specifications: [
      { name: "Frame", value: "Beta-titanium" },
      { name: "Lens", value: "Polarized TAC" },
      { name: "UV Protection", value: "UV400" },
      { name: "Weight", value: "22g" },
      { name: "Lens Width", value: "52mm" },
      { name: "Includes", value: "Hard case, cleaning cloth" },
    ],
    tags: ["sunglasses", "polarized", "titanium", "uv400"],
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-02-20"),
  },

  // ── Home & Living ────────────────────────────────────────────
  {
    id: "13",
    title: "Smart LED Desk Lamp",
    description:
      "Adjustable LED desk lamp with wireless charging pad, 5 color temperatures, and touch dimmer control.",
    price: 69.99,
    originalPrice: 89.99,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=600&fit=crop",
    ],
    category: "Home",
    brand: "LumiDesk",
    rating: 4.4,
    reviewCount: 203,
    inStock: true,
    stockQuantity: 60,
    specifications: [
      { name: "Brightness", value: "800 lumens max" },
      { name: "Color Temperature", value: "2700K - 6500K" },
      { name: "Charging", value: "Qi 10W wireless + USB-A" },
      { name: "Dimmer", value: "Touch, 5 levels" },
      { name: "Arm", value: "Adjustable aluminum" },
      { name: "Power", value: "USB-C input" },
    ],
    tags: ["desk-lamp", "led", "wireless-charging", "smart"],
    createdAt: new Date("2024-01-30"),
    updatedAt: new Date("2024-02-10"),
  },
  {
    id: "14",
    title: "Aromatherapy Essential Oil Diffuser",
    description:
      "Ultrasonic diffuser with 500ml capacity, 7 LED mood colors, timer settings, and whisper-quiet operation.",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&h=600&fit=crop",
    ],
    category: "Home",
    brand: "ZenBreeze",
    rating: 4.5,
    reviewCount: 315,
    inStock: true,
    stockQuantity: 100,
    specifications: [
      { name: "Capacity", value: "500ml" },
      { name: "Run Time", value: "Up to 12 hours" },
      { name: "Mist Output", value: "30-50 ml/h" },
      { name: "LED Colors", value: "7 colors, auto-cycle" },
      { name: "Timer", value: "1H / 3H / 6H / ON" },
      { name: "Noise Level", value: "< 35dB" },
    ],
    tags: ["diffuser", "aromatherapy", "essential-oil", "humidifier"],
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-03-01"),
  },
  {
    id: "15",
    title: "Ergonomic Office Chair Mesh",
    description:
      "Full ergonomic office chair with breathable mesh back, adjustable lumbar support, and 4D armrests.",
    price: 399.99,
    originalPrice: 549.99,
    images: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=600&fit=crop",
    ],
    category: "Home",
    brand: "ErgoMax",
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    stockQuantity: 10,
    specifications: [
      { name: "Backrest", value: "High-density mesh" },
      { name: "Lumbar Support", value: "Adjustable height & depth" },
      { name: "Armrests", value: "4D (height, width, depth, angle)" },
      { name: "Seat", value: "High-resilience foam" },
      { name: "Recline", value: "90° - 135°" },
      { name: "Max Load", value: "150kg" },
    ],
    tags: ["chair", "ergonomic", "office", "mesh"],
    createdAt: new Date("2024-03-10"),
    updatedAt: new Date("2024-03-15"),
  },
  {
    id: "16",
    title: "Stainless Steel Insulated Bottle",
    description:
      "Double-wall vacuum insulated water bottle that keeps drinks cold 24h or hot 12h. BPA-free and leak-proof.",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523362628745-0c100fc988a4?w=800&h=600&fit=crop",
    ],
    category: "Home",
    brand: "HydroKeep",
    rating: 4.6,
    reviewCount: 428,
    inStock: true,
    stockQuantity: 200,
    specifications: [
      { name: "Capacity", value: "750ml" },
      { name: "Material", value: "18/8 Stainless Steel" },
      { name: "Insulation", value: "Double-wall vacuum" },
      { name: "Cold", value: "24 hours" },
      { name: "Hot", value: "12 hours" },
      { name: "Lid", value: "Leak-proof bamboo cap" },
    ],
    tags: ["bottle", "insulated", "stainless-steel", "eco-friendly"],
    createdAt: new Date("2024-01-08"),
    updatedAt: new Date("2024-01-15"),
  },

  // ── Books ────────────────────────────────────────────────────
  {
    id: "17",
    title: "Atomic Habits - James Clear",
    description:
      "The #1 guide to building good habits and breaking bad ones. Practical strategies for forming habits that stick.",
    price: 16.99,
    originalPrice: 24.99,
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop",
    ],
    category: "Books",
    brand: "Penguin Random House",
    rating: 4.9,
    reviewCount: 1024,
    inStock: true,
    stockQuantity: 150,
    specifications: [
      { name: "Author", value: "James Clear" },
      { name: "Pages", value: "320" },
      { name: "Language", value: "English" },
      { name: "Format", value: "Paperback" },
      { name: "Publisher", value: "Penguin Random House" },
      { name: "ISBN", value: "978-0735211292" },
    ],
    tags: ["self-help", "habits", "productivity", "bestseller"],
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-10"),
  },
  {
    id: "18",
    title: "Deep Work - Cal Newport",
    description:
      "Rules for focused success in a distracted world. Learn how to develop deep focus for better productivity.",
    price: 14.99,
    originalPrice: 19.99,
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop",
    ],
    category: "Books",
    brand: "Grand Central Publishing",
    rating: 4.7,
    reviewCount: 756,
    inStock: true,
    stockQuantity: 120,
    specifications: [
      { name: "Author", value: "Cal Newport" },
      { name: "Pages", value: "296" },
      { name: "Language", value: "English" },
      { name: "Format", value: "Paperback" },
      { name: "Publisher", value: "Grand Central Publishing" },
      { name: "ISBN", value: "978-1455586691" },
    ],
    tags: ["productivity", "focus", "self-help", "business"],
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-12"),
  },
  {
    id: "19",
    title: "The Art of War - Sun Tzu",
    description:
      "Timeless classic on strategy and leadership. This annotated edition includes modern business applications.",
    price: 12.99,
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop",
    ],
    category: "Books",
    brand: "Classics Press",
    rating: 4.6,
    reviewCount: 589,
    inStock: true,
    stockQuantity: 200,
    specifications: [
      { name: "Author", value: "Sun Tzu" },
      { name: "Pages", value: "272" },
      { name: "Language", value: "English" },
      { name: "Format", value: "Hardcover" },
      { name: "Edition", value: "Annotated" },
      { name: "ISBN", value: "978-1599869773" },
    ],
    tags: ["classic", "strategy", "leadership", "philosophy"],
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-02-05"),
  },

  // ── Sports & Outdoors ────────────────────────────────────────
  {
    id: "20",
    title: "Yoga Mat Premium Non-Slip",
    description:
      "Extra thick 6mm eco-friendly TPE yoga mat with alignment lines and carrying strap. Perfect grip on any surface.",
    price: 44.99,
    originalPrice: 59.99,
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=600&fit=crop",
    ],
    category: "Sports",
    brand: "ZenFlex",
    rating: 4.5,
    reviewCount: 287,
    inStock: true,
    stockQuantity: 75,
    specifications: [
      { name: "Material", value: "Eco-friendly TPE" },
      { name: "Thickness", value: "6mm" },
      { name: "Size", value: "183 x 61 cm" },
      { name: "Weight", value: "1.2kg" },
      { name: "Features", value: "Alignment lines, non-slip" },
      { name: "Includes", value: "Carrying strap" },
    ],
    tags: ["yoga", "mat", "fitness", "eco-friendly"],
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-02-15"),
  },
  {
    id: "21",
    title: "Adjustable Dumbbell Set 5-25kg",
    description:
      "Space-saving adjustable dumbbells with quick-change weight selector. Replace 15 pairs of dumbbells.",
    price: 299.99,
    originalPrice: 399.99,
    images: [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop",
    ],
    category: "Sports",
    brand: "IronGrip",
    rating: 4.7,
    reviewCount: 134,
    inStock: true,
    stockQuantity: 15,
    specifications: [
      { name: "Weight Range", value: "5 - 25 kg per dumbbell" },
      { name: "Increments", value: "2.5 kg" },
      { name: "Increments Count", value: "9 weight settings" },
      { name: "Material", value: "Steel plates, rubber grip" },
      { name: "Dimensions", value: "40 x 20 x 20 cm" },
      { name: "Includes", value: "Pair of dumbbells + tray" },
    ],
    tags: ["dumbbell", "adjustable", "home-gym", "strength"],
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-03-05"),
  },
  {
    id: "22",
    title: "Running Shoes Ultra Boost",
    description:
      "Lightweight responsive running shoes with energy-returning Boost midsole and Primeknit upper.",
    price: 179.99,
    originalPrice: 219.99,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=600&fit=crop",
    ],
    category: "Sports",
    brand: "SprintX",
    rating: 4.6,
    reviewCount: 245,
    inStock: true,
    stockQuantity: 30,
    specifications: [
      { name: "Upper", value: "Primeknit" },
      { name: "Midsole", value: "Boost (energy return)" },
      { name: "Outsole", value: "Continental rubber" },
      { name: "Drop", value: "10mm" },
      { name: "Weight", value: "310g (US 9)" },
      { name: "Sizes", value: "EU 39 - 47" },
    ],
    tags: ["shoes", "running", "boost", "lightweight"],
    createdAt: new Date("2024-02-25"),
    updatedAt: new Date("2024-03-01"),
  },

  // ── Accessories ──────────────────────────────────────────────
  {
    id: "23",
    title: "Wireless Charging Pad 15W",
    description:
      "Fast 15W Qi wireless charger compatible with all Qi-enabled devices. Slim aluminum design with LED indicator.",
    price: 29.99,
    originalPrice: 39.99,
    images: [
      "https://images.unsplash.com/photo-1591290619712-6f5a5e0e0c5b?w=800&h=600&fit=crop",
    ],
    category: "Accessories",
    brand: "ChargePro",
    rating: 4.3,
    reviewCount: 567,
    inStock: true,
    stockQuantity: 150,
    specifications: [
      { name: "Output", value: "15W / 10W / 7.5W / 5W" },
      { name: "Input", value: "USB-C (QC 3.0)" },
      { name: "Compatibility", value: "All Qi devices" },
      { name: "Material", value: "Aluminum + silicone base" },
      { name: "Size", value: "100 x 7mm" },
      { name: "Safety", value: "FOD, OVP, OCP, OTP" },
    ],
    tags: ["charger", "wireless", "qi", "fast-charge"],
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-02-01"),
  },
  {
    id: "24",
    title: "Laptop Backpack Anti-Theft",
    description:
      "Water-resistant anti-theft backpack with hidden zippers, USB charging port, and padded laptop compartment for up to 15.6\".",
    price: 59.99,
    originalPrice: 79.99,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=800&h=600&fit=crop",
    ],
    category: "Accessories",
    brand: "SecurePack",
    rating: 4.4,
    reviewCount: 198,
    inStock: true,
    stockQuantity: 50,
    specifications: [
      { name: "Capacity", value: "25L" },
      { name: "Laptop", value: 'Up to 15.6"' },
      { name: "Material", value: "Water-resistant polyester" },
      { name: "Features", value: "Hidden zippers, USB port" },
      { name: "Pockets", value: "12 compartments" },
      { name: "Weight", value: "0.85kg" },
    ],
    tags: ["backpack", "anti-theft", "laptop", "usb"],
    createdAt: new Date("2024-02-08"),
    updatedAt: new Date("2024-02-12"),
  },
];

// ── Reviews ────────────────────────────────────────────────────

export const mockReviews: ProductReview[] = [
  // Reviews for Product 1 - Premium Wireless Headphones
  {
    id: "1",
    productId: "1",
    userId: "user1",
    userName: "John Smith",
    userAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    title: "Excellent sound quality!",
    comment:
      "These headphones exceeded my expectations. The noise cancellation is fantastic and the battery life is exactly as advertised. Highly recommend!",
    createdAt: new Date("2024-01-18"),
    helpful: 12,
  },
  {
    id: "2",
    productId: "1",
    userId: "user2",
    userName: "Sarah Johnson",
    userAvatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    rating: 4,
    title: "Great headphones, minor comfort issue",
    comment:
      "Sound quality is amazing and the features work as expected. Only issue is they can get a bit uncomfortable during long listening sessions.",
    createdAt: new Date("2024-01-16"),
    helpful: 8,
  },
  {
    id: "3",
    productId: "1",
    userId: "user3",
    userName: "Mike Chen",
    userAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    title: "Perfect for work from home",
    comment:
      "The noise cancellation is a game-changer for working from home. Crystal clear audio for calls and music. Worth every penny!",
    createdAt: new Date("2024-01-14"),
    helpful: 15,
  },

  // Reviews for Product 2 - Smart Fitness Watch
  {
    id: "4",
    productId: "2",
    userId: "user4",
    userName: "Emily Davis",
    userAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    title: "Best fitness tracker I've owned",
    comment:
      "The GPS tracking is super accurate and the heart rate monitor works great during workouts. Battery lasts a full week as promised.",
    createdAt: new Date("2024-01-20"),
    helpful: 10,
  },
  {
    id: "5",
    productId: "2",
    userId: "user5",
    userName: "David Lee",
    userAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    rating: 4,
    title: "Great value for the price",
    comment:
      "Does everything a smartwatch should. The only downside is the app could use some improvements, but the watch itself is solid.",
    createdAt: new Date("2024-01-12"),
    helpful: 6,
  },

  // Reviews for Product 4 - Wireless Earbuds
  {
    id: "6",
    productId: "4",
    userId: "user6",
    userName: "Lisa Wang",
    userAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    title: "Amazing sound for the size",
    comment:
      "These tiny earbuds pack a serious punch. Deep bass, clear mids, and the touch controls are intuitive. Best purchase this year!",
    createdAt: new Date("2024-02-15"),
    helpful: 18,
  },
  {
    id: "7",
    productId: "4",
    userId: "user7",
    userName: "Tom Brown",
    userAvatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
    rating: 4,
    title: "Good but could be better",
    comment:
      "Sound quality is great for the price. The case charges fast and battery life is decent. Wish the ANC was a bit stronger though.",
    createdAt: new Date("2024-02-12"),
    helpful: 5,
  },

  // Reviews for Product 5 - Mechanical Keyboard
  {
    id: "8",
    productId: "5",
    userId: "user8",
    userName: "Alex Kim",
    userAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    title: "The keyboard I've been searching for",
    comment:
      "Hot-swappable switches are a game-changer. The RGB is stunning and the aluminum frame feels premium. Typing experience is top-notch.",
    createdAt: new Date("2024-01-25"),
    helpful: 22,
  },

  // Reviews for Product 17 - Atomic Habits
  {
    id: "9",
    productId: "17",
    userId: "user9",
    userName: "Rachel Green",
    userAvatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    title: "Life-changing book",
    comment:
      "This book completely changed how I approach my daily routines. The strategies are practical and easy to implement. A must-read!",
    createdAt: new Date("2024-01-10"),
    helpful: 45,
  },
  {
    id: "10",
    productId: "17",
    userId: "user10",
    userName: "James Wilson",
    userAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    rating: 4,
    title: "Practical and actionable",
    comment:
      "Clear, well-structured, and full of actionable advice. The 1% improvement concept really resonated with me. Highly recommended.",
    createdAt: new Date("2024-01-08"),
    helpful: 32,
  },

  // Reviews for Product 22 - Running Shoes
  {
    id: "11",
    productId: "22",
    userId: "user11",
    userName: "Sophie Martin",
    userAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    title: "Most comfortable running shoes ever",
    comment:
      "The Boost midsole is incredibly responsive. Ran my first half-marathon in these and my feet felt great. Worth every cent!",
    createdAt: new Date("2024-03-05"),
    helpful: 14,
  },
];

// ── Helper Functions ───────────────────────────────────────────

export function getProductById(id: string): Product | undefined {
  return mockProducts.find((product) => product.id === id);
}

export function getProductReviews(productId: string): ProductReview[] {
  return mockReviews.filter((review) => review.productId === productId);
}

export function getRelatedProducts(
  currentProductId: string,
  limit: number = 4
): Product[] {
  const currentProduct = getProductById(currentProductId);
  if (!currentProduct) return mockProducts.slice(0, limit);

  // Prioritize same category, then fill with others
  const sameCategory = mockProducts.filter(
    (p) => p.id !== currentProductId && p.category === currentProduct.category
  );
  const others = mockProducts.filter(
    (p) => p.id !== currentProductId && p.category !== currentProduct.category
  );

  return [...sameCategory, ...others].slice(0, limit);
}

export function getProductsByCategory(category: string): Product[] {
  return mockProducts.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
}

export function getCategories(): { name: string; count: number; icon: string }[] {
  const categoryMap = new Map<string, number>();
  mockProducts.forEach((p) => {
    categoryMap.set(p.category, (categoryMap.get(p.category) || 0) + 1);
  });

  const iconMap: Record<string, string> = {
    Electronics: "📱",
    Wearables: "⌚",
    Photography: "📷",
    Fashion: "👕",
    Home: "🏠",
    Books: "📚",
    Sports: "🏃",
    Accessories: "🎒",
  };

  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    count,
    icon: iconMap[name] || "📦",
  }));
}
