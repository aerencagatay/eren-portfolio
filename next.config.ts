import type { NextConfig } from 'next'

/**
 * Deployed as a static export to GitHub Pages under /eren-portfolio, so every
 * asset path needs the base path. `next/image` and `next/link` handle it, but
 * raw <img src> and the three.js loaders do not — those go through
 * `asset()` in src/lib/utils.ts, which reads NEXT_PUBLIC_BASE_PATH.
 */
const basePath = '/eren-portfolio'

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
}

export default nextConfig
