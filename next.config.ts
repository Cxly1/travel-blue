import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/travel-blue",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
