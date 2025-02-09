/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
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
    images: {
      unoptimized: true,
    },
    assetPrefix: isProd ? '/portfolio/' : '',
  basePath: isProd ? '/portfolio' : '',
  // output: 'export'
};

export default nextConfig;