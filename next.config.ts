import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/eren-portfolio",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/eren-portfolio",
  },
};

export default nextConfig;
