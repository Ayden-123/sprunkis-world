/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io', 'ship-app-assets.fra1.digitaloceanspaces.com'],
    remotePatterns: [{
      protocol: "https",
      hostname: "replicate.delivery",
    },
    {
      protocol: "http",
      hostname: "replicate.delivery",
    },
    {
      protocol: "https",
      hostname: "image.appfeeds.info"
    },
    {
      protocol: "https",
      hostname: "file.appfeeds.info"
    },
    {
      protocol: "https",
      hostname: "ideogram.ai"
    },
    {
      protocol: "https",
      hostname: "file.deeposter.com"
    }
    ]
  },
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
