"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "@/lib/useTranslations";
import { getCategories, getProductsByCategory, mockProducts } from "@/lib/mock-data";

// Category images mapping
const categoryImages: Record<string, string> = {
  Electronics:
    "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop",
  Wearables:
    "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=400&fit=crop",
  Photography:
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
  Fashion:
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
  Home:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  Books:
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop",
  Sports:
    "https://images.unsplash.com/photo-1461896836934-bd45ba7e5f3e?w=600&h=400&fit=crop",
  Accessories:
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
};

// Category descriptions
const categoryDescriptions: Record<string, { en: string; vi: string }> = {
  Electronics: {
    en: "Latest gadgets, audio gear, keyboards, monitors and more tech essentials.",
    vi: "Thiết bị mới nhất, tai nghe, bàn phím, màn hình và nhiều sản phẩm công nghệ khác.",
  },
  Wearables: {
    en: "Smartwatches, fitness trackers and wearable technology for your active lifestyle.",
    vi: "Đồng hồ thông minh, theo dõi sức khỏe và công nghệ đeo cho lối sống năng động.",
  },
  Photography: {
    en: "Professional cameras, lenses, tripods and photography accessories.",
    vi: "Máy ảnh chuyên nghiệp, ống kính, chân máy và phụ kiện nhiếp ảnh.",
  },
  Fashion: {
    en: "Bags, watches, sunglasses and stylish accessories to complement your look.",
    vi: "Túi xách, đồng hồ, kính mát và phụ kiện thời trang để hoàn thiện phong cách.",
  },
  Home: {
    en: "Smart home devices, furniture, lighting and living essentials.",
    vi: "Thiết bị thông minh, nội thất, đèn và đồ gia dụng thiết yếu.",
  },
  Books: {
    en: "Bestselling books on self-help, productivity, strategy and more.",
    vi: "Sách bán chạy về phát triển bản thân, năng suất, chiến lược và nhiều chủ đề khác.",
  },
  Sports: {
    en: "Fitness equipment, running shoes, yoga mats and sports gear.",
    vi: "Dụng cụ thể thao, giày chạy bộ, thảm yoga và trang phục thể thao.",
  },
  Accessories: {
    en: "Chargers, backpacks and everyday carry essentials.",
    vi: "Sạc, balo và phụ kiện thiết yếu hàng ngày.",
  },
};

export default function CategoriesPage() {
  const t = useTranslations();
  const categories = getCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
            <Package className="h-6 w-6 text-blue-500" />
          </div>
          <h1 className="text-3xl font-bold">{t.categories.pageTitle}</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t.categories.pageDescription}
        </p>
      </div>

      {/* Categories Grid */}
      {categories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const products = getProductsByCategory(category.name);
            const image = categoryImages[category.name];
            const description =
              categoryDescriptions[category.name]?.vi ||
              categoryDescriptions[category.name]?.en ||
              "";

            return (
              <Link
                key={category.name}
                href={`/products?category=${category.name.toLowerCase()}`}
              >
                <Card className="h-full group cursor-pointer hover:shadow-lg transition-all overflow-hidden">
                  <div className="aspect-[3/2] relative overflow-hidden">
                    {image ? (
                      <Image
                        src={image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-4xl">{category.icon}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{category.icon}</span>
                        <h3 className="text-xl font-bold text-white">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">
                        {category.count} {t.categories.products}
                      </Badge>
                      <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        {t.categories.viewProducts}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      ) : (
        /* Empty state */
        <div className="text-center py-16">
          <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">
            {t.categories.noCategoriesTitle}
          </h2>
          <p className="text-muted-foreground">
            {t.categories.noCategoriesDescription}
          </p>
        </div>
      )}
    </div>
  );
}
