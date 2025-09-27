import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
    ignoreDuringBuilds: true, 
  },
    webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'sch.sgp1.cdn.digitaloceanspaces.com',
    },
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
    },
    {
      protocol: 'https',
      hostname: 'drive.google.com',
    },
    {
      protocol: 'https',
      hostname: 'dev-api.raihasa.id',
    },
    {
      protocol: 'https',
      hostname: 'api.raihasa.id',
    },
  ],
  deviceSizes: [640, 768, 1024, 1280, 1600],
  imageSizes: [16, 32, 48, 64, 96],
  formats: ['image/webp'],
},
  pageExtensions: ["page.tsx", "page.ts", "api.ts",".tsx", ".ts", ".js", ".jsx"],
  reactStrictMode: true,
  swcMinify: true,


  async redirects() {
    return [
      { source: "/login", destination: "/auth/login", permanent: false },
      { source: "/register", destination: "/auth/register", permanent: false },
      { source: "/forgot-password", destination: "/auth/forgot-password", permanent: false },
      { source: "/reset-password", destination: "/auth/reset-password", permanent: false },
      { source: "/verify-email", destination: "/auth/verify-email", permanent: false },
      { source: "/profile", destination: "/profile/notification", permanent: false },
    ];
  },
};



export default nextConfig;
