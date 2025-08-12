import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover Amazing
                <span className="text-primary"> Products</span> Today
              </h1>
              <p className="text-lg text-muted-foreground">
                Millions of quality products at the best prices. Fast shipping
                and easy returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button size="lg" className="text-lg px-8">
                    Shop Now
                  </Button>
                </Link>
                <Link href="/categories">
                  <Button variant="outline" size="lg" className="text-lg px-8">
                    Browse Categories
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
          Featured Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Electronics",
              icon: "📱",
              count: "1,234",
              href: "/category/electronics",
            },
            {
              name: "Fashion",
              icon: "👕",
              count: "2,567",
              href: "/category/fashion",
            },
            { name: "Home", icon: "🏠", count: "890", href: "/category/home" },
            {
              name: "Books",
              icon: "📚",
              count: "3,456",
              href: "/category/books",
            },
          ].map((category) => (
            <Link key={category.name} href={category.href}>
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
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link href="/products">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative aspect-square bg-muted rounded-t-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    📦 Sản phẩm {i + 1}
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <Badge className="absolute top-2 left-2">-20%</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold line-clamp-2 mb-2">
                  Tên sản phẩm rất dài có thể xuống dòng {i + 1}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${
                        j < 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">
                    (123)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">
                    299.000đ
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    399.000đ
                  </span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Thêm vào giỏ
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">Ưu đãi đặc biệt</h2>
          <p className="text-lg mb-6 opacity-90">
            Giảm giá lên đến 50% cho tất cả sản phẩm điện tử
          </p>
          <Button size="lg" variant="secondary">
            Mua ngay
          </Button>
        </div>
      </section>
    </div>
  );
}
