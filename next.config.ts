// next.config.js (or next.config.ts if you're using TypeScript)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["upload.wikimedia.org", "about.gitlab.com",'randomuser.me',"picsum.photos","www.pngall.com"], // Add other domains if needed
  },
};

export default nextConfig;