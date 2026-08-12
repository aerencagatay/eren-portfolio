import type { MetadataRoute } from 'next'

import { siteUrl } from '@/content/cv'

// Required by `output: 'export'` — the sitemap is emitted at build time.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/contact'].map(route => ({
    url: `${siteUrl}${route}`
  }))
}
