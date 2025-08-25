"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Star, Heart, Share2, Minus, Plus, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/components/ui/use-toast";
import { formatCurrency } from "@/lib/utils";
import { getProductById, getProductReviews, getRelatedProducts } from "@/lib/mock-data";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addItem, getItemQuantity } = useCart();
  const { toast } = useToast();

  const product = getProductById(productId);
  const reviews = getProductReviews(productId);
  const relatedProducts = getRelatedProducts(productId);
  const currentQuantityInCart = getItemQuantity(productId);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-4">The product you're looking for doesn't exist.</p>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (currentQuantityInCart + quantity > product.stockQuantity) {
      toast({
        title: "Cannot add to cart",
        description: `Only ${product.stockQuantity} items available in stock.`,
        variant: "destructive",
      });
      return;
    }

    addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity,
      maxQuantity: product.stockQuantity,
    });

    toast({
      title: "Added to cart",
      description: `${quantity} ${product.title} added to your cart.`,
      variant: "default",
    });
  };

  const increaseQuantity = () => {
    if (quantity < product.stockQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/category/${product.category.toLowerCase()}`}>
              {product.category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.images[selectedImageIndex]}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square relative overflow-hidden rounded-md border-2 ${
                    selectedImageIndex === index ? "border-primary" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{product.brand}</Badge>
              <Badge variant="outline">{product.category}</Badge>
            </div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold">{formatCurrency(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
              {product.originalPrice && (
                <Badge variant="destructive">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              )}
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
            <span className={`text-sm ${product.inStock ? "text-green-600" : "text-red-600"}`}>
              {product.inStock ? `In Stock (${product.stockQuantity} available)` : "Out of Stock"}
            </span>
          </div>

          {/* Quantity and Add to Cart */}
          {product.inStock && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 text-center min-w-[3rem]">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stockQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleAddToCart} className="flex-1">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">2 Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">30 Day Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <Card className="mb-12">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specifications.map((spec, index) => (
              <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                <span className="font-medium">{spec.name}</span>
                <span className="text-muted-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reviews */}
      <Card className="mb-12">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                <div className="flex items-start gap-4">
                  <Image
                    src={review.userAvatar || "/placeholder-avatar.png"}
                    alt={review.userName}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{review.userName}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <h4 className="font-medium mb-2">{review.title}</h4>
                    <p className="text-muted-foreground mb-2">{review.comment}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{review.createdAt.toLocaleDateString()}</span>
                      <span>{review.helpful} people found this helpful</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <Link href={`/product/${relatedProduct.id}`}>
                  <CardContent className="p-4">
                    <div className="aspect-square relative overflow-hidden rounded-md mb-4">
                      <Image
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="font-medium mb-2 line-clamp-2">{relatedProduct.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(relatedProduct.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({relatedProduct.reviewCount})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{formatCurrency(relatedProduct.price)}</span>
                      {relatedProduct.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatCurrency(relatedProduct.originalPrice)}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
