// User types
export interface User {
  id: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  phoneNumber: string;
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// Product types
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockQuantity: number;
  specifications: ProductSpecification[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductSpecification {
  name: string;
  value: string;
}

export interface ProductReview {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  createdAt: Date;
  helpful: number;
}

// Cart types
export interface CartItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  maxQuantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  itemCount: number;
}

// Blog types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: BlogAuthor;
  category: BlogCategory;
  tags: string[];
  publishedAt: Date;
  updatedAt: Date;
  readTime: number;
}

export interface BlogAuthor {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form validation schemas will be defined separately using Zod
