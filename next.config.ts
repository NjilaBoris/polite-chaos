import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable native View Transitions API support in Next.js
    viewTransitions: true,
  },
};

export default nextConfig;
