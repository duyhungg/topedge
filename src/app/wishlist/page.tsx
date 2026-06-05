"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useTranslations } from "@/lib/useTranslations";

// Mock wishlist data
const wishlistItems = [
  {
    id: 1,
    name: "Tai Nghe Bluetooth Cao Cấp",
    price: "1.299.000đ",
    imageUrl: "/placeholder.svg",
    href: "/product/1",
  },
  {
    id: 2,
    name: "Bàn Phím Cơ Không Dây Siêu Mỏng",
    price: "2.499.000đ",
    imageUrl: "/placeholder.svg",
    href: "/product/2",
  },
  {
    id: 3,
    name: "Đồng Hồ Thông Minh Thế Hệ Mới",
    price: "3.999.000đ",
    imageUrl: "/placeholder.svg",
    href: "/product/3",
  },
];

const EmptyWishlist = () => {
  const t = useTranslations();
  return (
    <div className="text-center py-16">
      <Heart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
      <h2 className="text-2xl font-semibold mb-2">{t.wishlist.emptyTitle}</h2>
      <p className="text-muted-foreground mb-6">{t.wishlist.emptyDescription}</p>
      <Link href="/products">
        <Button>{t.wishlist.exploreProducts}</Button>
      </Link>
    </div>
  );
};

export default function WishlistPage() {
  const t = useTranslations();
  const hasItems = wishlistItems.length > 0;

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{t.wishlist.title}</h1>
      </header>

      {hasItems ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="overflow-hidden group">
              <Link href={item.href}>
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Image</span>
                </div>
              </Link>
              <CardContent className="p-4">
                <Link href={item.href}>
                  <h3 className="font-semibold line-clamp-2 mb-2 hover:text-primary transition-colors">{item.name}</h3>
                </Link>
                <p className="text-lg font-bold text-primary mb-4">{item.price}</p>
                <div className="flex flex-col gap-2">
                  <Button size="sm" className="w-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {t.wishlist.addToCart}
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    <Trash2 className="h-4 w-4 mr-2" />
                    {t.wishlist.remove}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyWishlist />
      )}
    </div>
  );
}

