"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/components/ui/use-toast";
import { formatCurrency } from "@/lib/utils";
import { mockProducts } from "@/lib/mock-data";

export default function ProductsPage() {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof mockProducts[0]) => {
    addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      maxQuantity: product.stockQuantity,
    });

    toast({
      title: "Added to cart",
      description: `${product.title} added to your cart.`,
      variant: "success",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Products</h1>
        <p className="text-muted-foreground">
          Discover our amazing collection of products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <Link href={`/product/${product.id}`}>
                <div className="aspect-square relative overflow-hidden rounded-md mb-4">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  {product.originalPrice && (
                    <Badge variant="destructive" className="absolute top-2 left-2">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
              </Link>

              <div className="space-y-2">
                <div className="flex items-center gap-1 mb-1">
                  <Badge variant="secondary" className="text-xs">
                    {product.brand}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>

                <Link href={`/product/${product.id}`}>
                  <h3 className="font-medium text-lg line-clamp-2 hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                </Link>

                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-lg">{formatCurrency(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatCurrency(product.originalPrice)}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className={`h-2 w-2 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
                    <span className={`text-xs ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  {product.inStock && (
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className="h-8"
                    >
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      Add
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty state if no products */}
      {mockProducts.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-2">No products found</h2>
          <p className="text-muted-foreground mb-4">
            We couldn't find any products matching your criteria.
          </p>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
