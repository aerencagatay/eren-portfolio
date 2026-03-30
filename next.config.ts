import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/eren-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
