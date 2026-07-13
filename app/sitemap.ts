import { MetadataRoute } from 'next';
import { stampDutyRates } from '@/data/stampDutyRates';

// Update this to your live custom domain
const BASE_URL = 'https://indistamp.mearksoft.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const statePages = stampDutyRates.map((state) => ({
    url: `${BASE_URL}/stamp-duty-calculator/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
     {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  return [...staticPages, ...statePages];
}