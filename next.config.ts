import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["drive.google.com"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
  },
};

export default nextConfig;
