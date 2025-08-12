import { ReactNode } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top bar with logo and theme toggle */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">E</span>
          </div>
          <span className="text-xl font-bold">ECommerce</span>
        </Link>

        {/* Theme toggle */}
        <ThemeToggle />
      </div>

      {/* Main content */}
      <main className="flex items-center justify-center min-h-screen p-4">
        {children}
      </main>

      {/* Footer */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <p className="text-sm text-muted-foreground">
          © 2024 ECommerce. All rights reserved.
        </p>
      </div>
    </div>
  );
}
