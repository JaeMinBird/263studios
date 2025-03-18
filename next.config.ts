import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.uniqlo.com',
        port: '',
        pathname: '/UQ/ST3/us/imagesgoods/**',
      },
    ],
  },
};

export default nextConfig;
