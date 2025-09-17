import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cyberdraft.ai'
  const currentDate = new Date().toISOString()

  // Blog posts data
  const blogPosts = [
    'cybersecurity-career-roadmap-2024',
    'ethical-hacking-fundamentals',
    'cybersecurity-certifications-guide',
    'incident-response-playbook',
    'network-security-monitoring',
    'cybersecurity-salary-report-2024'
  ]

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Dynamic blog post URLs
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}