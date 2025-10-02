/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Add headers configuration for video files
  async headers() {
    return [
      {
        source: '/PxEvids/Videos/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          }
        ],
      },
    ];
  },
  
  // Ensure large files are handled properly
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      type: 'asset/resource',
    });
    
    return config;
  },

  // Increase static generation timeout for larger videos
  staticPageGenerationTimeout: 1000,
  
  // Remove the experimental section that's causing the issue
  // experimental: {
  //   optimizeCss: true, // This requires critters and causes the error
  // },
  
  // Improve image optimization
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
