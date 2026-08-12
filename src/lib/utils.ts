import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prefixes a public asset path with the deployment base path.
 *
 * `next/image` and `next/link` apply basePath automatically; raw <img src>,
 * CSS url() and the three.js GLTF/texture loaders do not. Anything loaded by
 * those must go through this helper or it 404s once the site is served from
 * a sub-path (GitHub Pages serves us from /eren-portfolio).
 */
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`
}
