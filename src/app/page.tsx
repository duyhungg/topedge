"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "@/lib/useTranslations";
import { mockProducts, getCategories } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {t.home.hero.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t.home.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button size="lg" className="text-lg px-8">
                    {t.home.hero.shopNow}
                  </Button>
                </Link>
                <Link href="/categories">
                  <Button variant="outline" size="lg" className="text-lg px-8">
                    {t.home.hero.browseCategories}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🛍️</div>
                <p className="text-muted-foreground">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t.home.categoriesHeader}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {getCategories().map((category) => (
            <Link
              key={category.name}
              href={`/products?category=${category.name.toLowerCase()}`}
            >
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} products
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{t.home.featuredProducts}</h2>
          <Link href="/products">
            <Button variant="outline">{t.home.viewAll}</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.slice(0, 8).map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <Link href={`/product/${product.id}`}>
                  <div className="relative aspect-square bg-muted rounded-t-lg overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="secondary" className="h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    {product.originalPrice && (
                      <Badge className="absolute top-2 left-2">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </Badge>
                    )}
                  </div>
                </Link>
              </CardHeader>
              <CardContent className="p-4">
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-semibold line-clamp-2 mb-2 hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${
                        j < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">
                    ({product.reviewCount})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">
                    {formatCurrency(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatCurrency(product.originalPrice)}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {t.home.addToCart}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">{t.home.promotionTitle}</h2>
          <p className="text-lg mb-6 opacity-90">
            {t.home.promotionDescription}
          </p>
          <Button size="lg" variant="secondary">
            Mua ngay
          </Button>
        </div>
      </section>
    </div>
  );
}
