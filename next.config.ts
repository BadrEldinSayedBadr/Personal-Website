import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⬅ تخطي فحص ESLint أثناء الـ build
  },
};

export default nextConfig;
