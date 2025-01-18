import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Supprime les logs console en production
  },
};

export default nextConfig;
