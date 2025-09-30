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
  unoptimized: true,
},
  pageExtensions: ["page.tsx", "page.ts", "api.ts"],
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
