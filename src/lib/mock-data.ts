import { Product, ProductReview } from "./types";

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Premium Wireless Headphones",
    description: "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort design.",
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
    id: "2",
    title: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS tracking, and 7-day battery life.",
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
      { name: "Display", value: "1.4\" AMOLED" },
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
    id: "3",
    title: "Professional Camera Lens",
    description: "Capture stunning photos with this professional-grade camera lens featuring advanced optics and weather sealing.",
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
];

export const mockReviews: ProductReview[] = [
  {
    id: "1",
    productId: "1",
    userId: "user1",
    userName: "John Smith",
    userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    title: "Excellent sound quality!",
    comment: "These headphones exceeded my expectations. The noise cancellation is fantastic and the battery life is exactly as advertised. Highly recommend!",
    createdAt: new Date("2024-01-18"),
    helpful: 12,
  },
  {
    id: "2",
    productId: "1",
    userId: "user2",
    userName: "Sarah Johnson",
    userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    rating: 4,
    title: "Great headphones, minor comfort issue",
    comment: "Sound quality is amazing and the features work as expected. Only issue is they can get a bit uncomfortable during long listening sessions.",
    createdAt: new Date("2024-01-16"),
    helpful: 8,
  },
  {
    id: "3",
    productId: "1",
    userId: "user3",
    userName: "Mike Chen",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    title: "Perfect for work from home",
    comment: "The noise cancellation is a game-changer for working from home. Crystal clear audio for calls and music. Worth every penny!",
    createdAt: new Date("2024-01-14"),
    helpful: 15,
  },
];

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return mockProducts.find(product => product.id === id);
}

// Helper function to get reviews for a product
export function getProductReviews(productId: string): ProductReview[] {
  return mockReviews.filter(review => review.productId === productId);
}

// Helper function to get related products (excluding current product)
export function getRelatedProducts(currentProductId: string, limit: number = 4): Product[] {
  return mockProducts
    .filter(product => product.id !== currentProductId)
    .slice(0, limit);
}
