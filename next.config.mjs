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
    reactStrictMode: false,
    basePath: '/portfolio',
    output: 'export',
};

export default nextConfig;