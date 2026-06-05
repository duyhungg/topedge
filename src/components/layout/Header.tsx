"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Heart,
  LogIn,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { useCart } from "@/lib/cart-context";
import { useTranslations } from "@/lib/useTranslations";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="border-b bg-muted/50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden md:flex items-center space-x-4">
              <span>Miễn phí vận chuyển cho đơn hàng trên 500k</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="hover:underline">
                {t.header.signIn}
              </Link>
              <Link href="/register" className="hover:underline">
                {t.header.signUp}
              </Link>
              <Link href="/help" className="hover:underline">
                {t.header.help}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                E
              </span>
            </div>
            <span className="text-xl font-bold">ECommerce</span>
          </Link>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full pl-4 pr-12"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center space-x-2">
              <LocaleSwitcher />
              <ThemeToggle />

              <Button variant="ghost" size="icon" asChild>
                <Link href="/wishlist">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">{t.header.wishlist}</span>
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <Link href="/account">
                  <User className="h-5 w-5" />
                  <span className="sr-only">{t.header.account}</span>
                </Link>
              </Button>

              <Button variant="ghost" size="icon" className="relative" asChild>
                <Link href="/cart">
                  <ShoppingCart className="h-5 w-5" />
                  {cart.itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                      {cart.itemCount}
                    </span>
                  )}
                  <span className="sr-only">{t.header.cart}</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Input
              type="search"
              placeholder={t.header.searchPlaceholder}
              className="w-full pl-4 pr-12"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t">
        <div className="container mx-auto px-4">
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8 py-3">
            <Link
              href="/products"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t.header.nav.products}
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t.header.nav.dashboard}
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t.header.nav.categories}
            </Link>
            <Link
              href="/deals"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t.header.nav.deals}
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t.header.nav.blog}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t.header.nav.about}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t.header.nav.contact}
            </Link>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <div className="flex items-center space-x-4 pb-4 border-b">
                <ThemeToggle />

                <Button variant="ghost" size="icon" asChild>
                  <Link href="/wishlist">
                    <Heart className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/account">
                    <User className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  asChild
                >
                  <Link href="/cart">
                    <ShoppingCart className="h-5 w-5" />
                    {cart.itemCount > 0 && (
                      <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                        {cart.itemCount}
                      </span>
                    )}
                  </Link>
                </Button>
              </div>

              <div className="space-y-3">
                <Link
                  href="/dashboard"
                  className="block text-sm font-medium hover:text-primary transition-colors"
                >
                  {t.header.nav.dashboard}
                </Link>
                <Link
                  href="/products"
                  className="block text-sm font-medium hover:text-primary transition-colors"
                >
                  {t.header.nav.products}
                </Link>
                <Link
                  href="/categories"
                  className="block text-sm font-medium hover:text-primary transition-colors"
                >
                  {t.header.nav.categories}
                </Link>
                <Link
                  href="/deals"
                  className="block text-sm font-medium hover:text-primary transition-colors"
                >
                  {t.header.nav.deals}
                </Link>
                <Link
                  href="/blog"
                  className="block text-sm font-medium hover:text-primary transition-colors"
                >
                  {t.header.nav.blog}
                </Link>
                <Link
                  href="/about"
                  className="block text-sm font-medium hover:text-primary transition-colors"
                >
                  {t.header.nav.about}
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm font-medium hover:text-primary transition-colors"
                >
                  {t.header.nav.contact}
                </Link>
                <div className="pt-3 border-t space-y-3">
                  <Link
                    href="/login"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <LogIn className="h-4 w-4" />
                    {t.header.signIn}
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <UserPlus className="h-4 w-4" />
                    {t.header.signUp}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
