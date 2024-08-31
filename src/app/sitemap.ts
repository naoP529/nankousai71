import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
          url: 'https://www.nankousai71.jp',
          lastModified: new Date(),
          changeFrequency: 'daily',
          priority: 1,
        },
        {
          url: 'https://www.nankousai71.jp/event',
          lastModified: new Date(),
          changeFrequency: 'daily',
          priority: 0.9,
        },
        {
          url: 'https://www.nankousai71.jp/map',
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.5,
        },
        {
            url: 'https://www.nankousai71.jp/timetable',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://www.nankousai71.jp/info',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: 'https://www.nankousai71.jp/gallery',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.3,
        },
        {
            url: 'https://www.nankousai71.jp/event/introduction',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.5,
        },
        {
            url: 'https://www.nankousai71.jp/event/preview',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.1,
        },
      ]
}