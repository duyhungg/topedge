"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart, Percent, ArrowRight, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/components/ui/use-toast";
import { useTranslations } from "@/lib/useTranslations";
import { formatCurrency } from "@/lib/utils";
import { mockProducts } from "@/lib/mock-data";

type FilterLevel = "all" | "10" | "20" | "30";

export default function DealsPage() {
  const t = useTranslations();
  const { addItem } = useCart();
  const { toast } = useToast();
  const [filter, setFilter] = useState<FilterLevel>("all");

  // Filter products that have a discount (originalPrice > price)
  const dealProducts = mockProducts
    .filter((p) => p.originalPrice && p.originalPrice > p.price)
    .filter((p) => {
      if (filter === "all") return true;
      const discount = ((p.originalPrice! - p.price) / p.originalPrice!) * 100;
      return discount >= Number(filter);
    })
    .sort(
      (a, b) =>
        (b.originalPrice! - b.price) / b.originalPrice! -
        (a.originalPrice! - a.price) / a.originalPrice!
    );

  const handleAddToCart = (product: (typeof mockProducts)[0]) => {
    addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      maxQuantity: product.stockQuantity,
    });

    toast({
      title: t.deals.addedToCartTitle,
      description: t.deals.addedToCartDescription.replace("{0}", product.title),
      variant: "default",
    });
  };

  const filters: { key: FilterLevel; label: string }[] = [
    { key: "all", label: t.deals.filterAll },
    { key: "10", label: t.deals.filter10 },
    { key: "20", label: t.deals.filter20 },
    { key: "30", label: t.deals.filter30 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
            <Zap className="h-6 w-6 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold">{t.deals.pageTitle}</h1>
        </div>
        <p className="text-muted-foreground">{t.deals.pageDescription}</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <Button
            key={f.key}
            variant={filter === f.key ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(f.key)}
          >
            <Percent className="h-3 w-3 mr-1" />
            {f.label}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      {dealProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dealProducts.map((product) => {
            const discount = Math.round(
              ((product.originalPrice! - product.price) /
                product.originalPrice!) *
                100
            );
            const savings = product.originalPrice! - product.price;

            return (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
              >
                <CardContent className="p-4">
                  <Link href={`/product/${product.id}`}>
                    <div className="aspect-square relative overflow-hidden rounded-md mb-4">
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      <Badge
                        variant="destructive"
                        className="absolute top-2 left-2 text-sm font-bold"
                      >
                        -{discount}% {t.deals.off}
                      </Badge>
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

                    {/* Price */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xl text-red-600 dark:text-red-400">
                          {formatCurrency(product.price)}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {formatCurrency(product.originalPrice!)}
                        </span>
                      </div>
                      <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                        {t.deals.save}: {formatCurrency(savings)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            product.inStock ? "bg-green-500" : "bg-red-500"
                          }`}
                        />
                        <span
                          className={`text-xs ${
                            product.inStock
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {product.inStock
                            ? t.products.inStock
                            : t.products.outOfStock}
                        </span>
                      </div>

                      {product.inStock && (
                        <Button
                          size="sm"
                          onClick={() => handleAddToCart(product)}
                          className="h-8"
                        >
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          {t.deals.addToCart}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        /* Empty state */
        <div className="text-center py-16">
          <Percent className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">{t.deals.noDealsTitle}</h2>
          <p className="text-muted-foreground mb-6">
            {t.deals.noDealsDescription}
          </p>
          <Link href="/">
            <Button>
              {t.deals.backToHome}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
