/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      // domains: ['utfs.io'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utfs.io',
          port: ''
        }
      ]
    },
    experimental: {
      esmExternals: true,
    },
    reactStrictMode: false
};

export default nextConfig;