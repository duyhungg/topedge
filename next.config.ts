import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // i18n handled via client-side context (App Router doesn't support next.config i18n)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
