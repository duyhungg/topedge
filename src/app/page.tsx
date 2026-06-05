"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Star,
  ShoppingCart,
  Heart,
  ChevronLeft,
  ChevronRight,
  Truck,
  Shield,
  RotateCcw,
  Headphones,
  ArrowRight,
  Zap,
  Clock,
  Mail,
  Smartphone,
  Gift,
  CreditCard,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "@/lib/useTranslations";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/components/ui/use-toast";
import { mockProducts, getCategories, mockReviews } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

// ── Flash Sale Countdown Hook ──────────────────────────────────

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = targetDate.getTime() - Date.now();
    return diff > 0 ? diff : 0;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      const diff = targetDate.getTime() - Date.now();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { hours, minutes, seconds, isExpired: timeLeft <= 0 };
}

// ── Countdown Display ──────────────────────────────────────────

function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-primary text-primary-foreground font-bold text-xl w-12 h-12 rounded-lg flex items-center justify-center tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-xs text-muted-foreground mt-1">{label}</span>
    </div>
  );
}

// ── Hero Slides Data ───────────────────────────────────────────

const heroSlides = [
  {
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    emoji: "🔥",
    titleKey: "heroSlide1Title",
    titleDefault: "Flash Sale Cuối Tuần",
    descKey: "heroSlide1Desc",
    descDefault: "Giảm giá lên đến 50% cho hàng nghìn sản phẩm điện tử",
    ctaKey: "heroSlide1Cta",
    ctaDefault: "Mua ngay",
    href: "/products",
  },
  {
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    emoji: "🚚",
    titleKey: "heroSlide2Title",
    titleDefault: "Miễn Phí Vận Chuyển",
    descKey: "heroSlide2Desc",
    descDefault: "Cho mọi đơn hàng từ 500.000đ. Giao hàng nhanh toàn quốc",
    ctaKey: "heroSlide2Cta",
    ctaDefault: "Khám phá",
    href: "/products",
  },
  {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    emoji: "✨",
    titleKey: "heroSlide3Title",
    titleDefault: "Sản Phẩm Mới Ra Mắt",
    descKey: "heroSlide3Desc",
    descDefault: "Khám phá bộ sưu tập công nghệ mới nhất 2024",
    ctaKey: "heroSlide3Cta",
    ctaDefault: "Xem ngay",
    href: "/products",
  },
];

// ── Trust Bar Items ────────────────────────────────────────────

const trustItems = [
  {
    icon: Truck,
    titleKey: "trustFreeShip",
    titleDefault: "Miễn phí vận chuyển",
    descKey: "trustFreeShipDesc",
    descDefault: "Cho đơn hàng từ 500k",
  },
  {
    icon: Shield,
    titleKey: "trustWarranty",
    titleDefault: "Bảo hành chính hãng",
    descKey: "trustWarrantyDesc",
    descDefault: "Up to 2 năm",
  },
  {
    icon: RotateCcw,
    titleKey: "trustReturn",
    titleDefault: "Đổi trả 30 ngày",
    descKey: "trustReturnDesc",
    descDefault: "Hoàn tiền 100%",
  },
  {
    icon: Headphones,
    titleKey: "trustSupport",
    titleDefault: "Hỗ trợ 24/7",
    descKey: "trustSupportDesc",
    descDefault: "Hotline: 1900 1234",
  },
];

// ── Brands ─────────────────────────────────────────────────────

const brands = [
  "AudioTech",
  "FitTech",
  "LensMaster",
  "KeyForge",
  "ViewPro",
  "LuxeTime",
  "UrbanHide",
  "NordicTime",
  "SprintX",
  "ErgoMax",
];

// ── Main Component ─────────────────────────────────────────────

export default function Home() {
  const t = useTranslations();
  const { addItem } = useCart();
  const { toast } = useToast();

  // Hero slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);
  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Flash sale countdown — ends at end of today
  const [saleEnd] = useState(() => {
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    return end;
  });
  const countdown = useCountdown(saleEnd);

  // Flash sale products (those with originalPrice)
  const flashSaleProducts = mockProducts
    .filter((p) => p.originalPrice)
    .slice(0, 4);

  // Latest reviews for testimonials
  const testimonials = mockReviews.slice(0, 3);

  // Handle add to cart
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
      title: "Đã thêm vào giỏ hàng",
      description: `${product.title} đã được thêm vào giỏ hàng của bạn.`,
    });
  };

  // Get translation or fallback
  const tr = (key: string, fallback: string) => {
    const keys = key.split(".");
    let val: any = t;
    for (const k of keys) {
      val = val?.[k];
    }
    return val ?? fallback;
  };

  return (
    <div className="space-y-0">
      {/* ── Hero Slider ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className={`w-full flex-shrink-0 bg-gradient-to-r ${slide.gradient} py-16 lg:py-24`}
            >
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6 text-white">
                    <div className="text-6xl">{slide.emoji}</div>
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
                      {slide.titleDefault}
                    </h1>
                    <p className="text-lg opacity-90 max-w-md">
                      {slide.descDefault}
                    </p>
                    <Link href={slide.href}>
                      <Button
                        size="lg"
                        variant="secondary"
                        className="text-lg px-8 font-semibold"
                      >
                        {slide.ctaDefault}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                  <div className="hidden lg:flex justify-center">
                    <div className="w-72 h-72 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center text-9xl drop-shadow-2xl">
                      {slide.emoji}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === currentSlide
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── Trust Bar ───────────────────────────────────────────── */}
      <section className="bg-muted/50 border-y">
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.titleKey}
                  className="flex items-center gap-3 justify-center"
                >
                  <div className="bg-primary/10 p-2.5 rounded-full">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      {item.titleDefault}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.descDefault}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Flash Sale ──────────────────────────────────────────── */}
      <section className="container mx-auto px-4 pt-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-red-500 fill-red-500" />
              <h2 className="text-2xl lg:text-3xl font-bold">Flash Sale</h2>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-2 ml-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground mr-1">
                Kết thúc trong
              </span>
              <CountdownBlock value={countdown.hours} label="Giờ" />
              <span className="text-xl font-bold text-red-500">:</span>
              <CountdownBlock value={countdown.minutes} label="Phút" />
              <span className="text-xl font-bold text-red-500">:</span>
              <CountdownBlock value={countdown.seconds} label="Giây" />
            </div>
          </div>

          <Link href="/products">
            <Button variant="outline" className="group">
              Xem tất cả
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {flashSaleProducts.map((product) => {
            const discount = product.originalPrice
              ? Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100
                )
              : 0;

            return (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-red-100 dark:border-red-900/30"
              >
                <CardHeader className="p-0">
                  <Link href={`/product/${product.id}`}>
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 text-white font-bold px-2.5 py-1">
                        -{discount}%
                      </Badge>
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="h-8 w-8 rounded-full shadow-lg"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                </CardHeader>
                <CardContent className="p-4">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-semibold line-clamp-2 mb-2 hover:text-primary transition-colors min-h-[2.5rem]">
                      {product.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={`h-3.5 w-3.5 ${
                          j < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({product.reviewCount})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-red-500">
                      {formatCurrency(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatCurrency(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  {/* Progress bar (fake stock) */}
                  <div className="mt-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-red-500 font-medium">
                        Đã bán {Math.floor(Math.random() * 50 + 30)}
                      </span>
                      <span className="text-muted-foreground">
                        Còn {product.stockQuantity}
                      </span>
                    </div>
                    <div className="h-2 bg-red-100 dark:bg-red-900/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full"
                        style={{
                          width: `${Math.floor(Math.random() * 40 + 50)}%`,
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Mua ngay
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ── Featured Categories ─────────────────────────────────── */}
      <section className="container mx-auto px-4 pt-12">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          {tr("home.categoriesHeader", "Danh mục nổi bật")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {getCategories().map((category, i) => {
            const gradients = [
              "from-blue-500 to-blue-600",
              "from-pink-500 to-rose-500",
              "from-amber-500 to-orange-500",
              "from-emerald-500 to-green-600",
              "from-violet-500 to-purple-600",
              "from-cyan-500 to-teal-500",
              "from-red-500 to-pink-500",
              "from-indigo-500 to-blue-600",
            ];
            return (
              <Link
                key={category.name}
                href={`/products?category=${category.name.toLowerCase()}`}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden group">
                  <CardContent className="p-4">
                    <div
                      className={`w-14 h-14 mx-auto mb-2 rounded-xl bg-gradient-to-br ${
                        gradients[i % gradients.length]
                      } flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-sm">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {category.count} sản phẩm
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Dual Banner ─────────────────────────────────────────── */}
      <section className="container mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Banner 1 — Fashion */}
          <Link href="/products?category=fashion">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 p-6 lg:p-8 group cursor-pointer h-44">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              <div className="relative z-10 flex flex-col justify-center h-full text-white max-w-[60%]">
                <span className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-1">
                  Bộ sưu tập mới
                </span>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">
                  Thời Trang Mùa Hè
                </h3>
                <p className="text-sm opacity-90 mb-3">
                  Giảm đến 40% cho tất cả sản phẩm thời trang
                </p>
                <span className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Mua ngay <ArrowRight className="h-4 w-4" />
                </span>
              </div>
              <div className="absolute -right-4 -bottom-4 text-9xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">
                👗
              </div>
            </div>
          </Link>

          {/* Banner 2 — Electronics */}
          <Link href="/products?category=electronics">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-6 lg:p-8 group cursor-pointer h-44">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              <div className="relative z-10 flex flex-col justify-center h-full text-white max-w-[60%]">
                <span className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-1">
                  Ưu đãi công nghệ
                </span>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">
                  Điện Tử Giá Sốc
                </h3>
                <p className="text-sm opacity-90 mb-3">
                  Flash sale cuối tuần — giảm đến 50%
                </p>
                <span className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Khám phá ngay <ArrowRight className="h-4 w-4" />
                </span>
              </div>
              <div className="absolute -right-4 -bottom-4 text-9xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">
                📱
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Featured Products ───────────────────────────────────── */}
      <section className="container mx-auto px-4 pt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold">
            {tr("home.featuredProducts", "Sản phẩm nổi bật")}
          </h2>
          <Link href="/products">
            <Button variant="outline" className="group">
              {tr("home.viewAll", "Xem tất cả")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mockProducts.slice(0, 8).map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <Link href={`/product/${product.id}`}>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 rounded-full shadow-lg"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    {product.originalPrice && (
                      <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 text-white">
                        -
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        %
                      </Badge>
                    )}
                  </div>
                </Link>
              </CardHeader>
              <CardContent className="p-4">
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-semibold line-clamp-2 mb-2 hover:text-primary transition-colors min-h-[2.5rem]">
                    {product.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-3.5 w-3.5 ${
                        j < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
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
                <Button
                  className="w-full"
                  size="sm"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {tr("home.addToCart", "Thêm vào giỏ")}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Mid-Page Banner — New Arrivals ──────────────────────── */}
      <section className="container mx-auto px-4 pt-12">
        <Link href="/products">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 p-8 lg:p-10 group cursor-pointer">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRhMiAyIDAgMSAxLTQgMCAyIDIgMCAwIDEgNCAwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
              <div className="flex items-center gap-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <Sparkles className="h-10 w-10" />
                </div>
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider opacity-80">
                    Mới ra mắt
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold">
                    Bộ Sưu Tập Công Nghệ 2024
                  </h3>
                  <p className="opacity-90 mt-1">
                    Khám phá những sản phẩm mới nhất với công nghệ tiên tiến
                  </p>
                </div>
              </div>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 font-semibold shrink-0 group-hover:scale-105 transition-transform"
              >
                Khám phá
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </Link>
      </section>

      {/* ── Promo Banner ────────────────────────────────────────── */}
      <section className="container mx-auto px-4 pt-8">
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {tr("home.promotionTitle", "Ưu đãi đặc biệt")}
            </h2>
            <p className="text-lg mb-6 opacity-90 max-w-xl mx-auto">
              {tr(
                "home.promotionDescription",
                "Giảm giá lên đến 50% cho tất cả sản phẩm điện tử. Nhanh tay kẻo lỡ!"
              )}
            </p>
            <Link href="/products">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 font-semibold"
              >
                Mua ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Triple Feature Banners ─────────────────────────────── */}
      <section className="container mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Banner — Installment */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 group cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="relative z-10 text-white">
              <CreditCard className="h-8 w-8 mb-3 opacity-80" />
              <h3 className="text-lg font-bold mb-1">Trả góp 0%</h3>
              <p className="text-sm opacity-90">
                Áp dụng cho đơn hàng từ 3 triệu. Thủ tục nhanh gọn.
              </p>
            </div>
            <div className="absolute -right-2 -bottom-2 text-7xl opacity-15 group-hover:opacity-25 transition-all duration-500">
              💳
            </div>
          </div>

          {/* Banner — Gift */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 p-6 group cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="relative z-10 text-white">
              <Gift className="h-8 w-8 mb-3 opacity-80" />
              <h3 className="text-lg font-bold mb-1">Quà tặng hấp dẫn</h3>
              <p className="text-sm opacity-90">
                Tặng kèm phụ kiện chính hãng cho mọi đơn hàng điện tử.
              </p>
            </div>
            <div className="absolute -right-2 -bottom-2 text-7xl opacity-15 group-hover:opacity-25 transition-all duration-500">
              🎁
            </div>
          </div>

          {/* Banner — Trending */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 p-6 group cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="relative z-10 text-white">
              <TrendingUp className="h-8 w-8 mb-3 opacity-80" />
              <h3 className="text-lg font-bold mb-1">Xu hướng hôm nay</h3>
              <p className="text-sm opacity-90">
                Top 10 sản phẩm bán chạy nhất trong tuần qua.
              </p>
            </div>
            <div className="absolute -right-2 -bottom-2 text-7xl opacity-15 group-hover:opacity-25 transition-all duration-500">
              🔥
            </div>
          </div>
        </div>
      </section>

      {/* ── Brands Marquee ──────────────────────────────────────── */}
      <section className="pt-12 overflow-hidden">
        <div className="container mx-auto px-4 mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-center">
            Thương hiệu nổi bật
          </h2>
        </div>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="mx-8 flex items-center justify-center text-xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────── */}
      <section className="container mx-auto px-4 pt-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
          Khách hàng nói gì về chúng tôi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((review) => (
            <Card
              key={review.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${
                        j < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <h4 className="font-semibold mb-2">{review.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {review.comment}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={review.userAvatar || "/placeholder-avatar.png"}
                    alt={review.userName}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">{review.userName}</p>
                    <p className="text-xs text-muted-foreground">
                      Khách hàng đã mua hàng
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── App Download Banner ─────────────────────────────────── */}
      <section className="container mx-auto px-4 pt-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-gray-900 to-zinc-900 p-8 lg:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="flex items-center gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <Smartphone className="h-12 w-12" />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  Tải ứng dụng ECommerce
                </h3>
                <p className="text-gray-300 max-w-md">
                  Mua sắm tiện lợi hơn với ứng dụng di động. Nhận thông báo
                  khuyến mãi độc quyền và theo dõi đơn hàng dễ dàng.
                </p>
              </div>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button
                variant="secondary"
                size="lg"
                className="font-semibold px-6"
              >
                🍎 App Store
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="font-semibold px-6"
              >
                🤖 Google Play
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────────────── */}
      <section className="container mx-auto px-4 pt-12 pb-16">
        <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12 text-center border">
          <Mail className="h-12 w-12 mx-auto text-primary mb-4" />
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">
            Đăng ký nhận tin
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Nhận thông tin khuyến mãi và sản phẩm mới nhất trực tiếp vào hộp
            mail của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" className="px-8">
              Đăng ký
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
