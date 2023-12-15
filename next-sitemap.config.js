module.exports = {
  siteUrl: 'https://www.beyondnow.services',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    return {
      loc: path,  // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      images: [
        {
          loc: 'https://beyond.services/dalle-logo.png',
          caption: "Logo of Beyond Services",
          title: "Beyond Services Logo",
        }
      ],
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
