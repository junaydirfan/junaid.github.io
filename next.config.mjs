/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'techvify-software.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.britannica.com',
      },
      {
        protocol: 'https',
        hostname: 'www.verizon.com',
        pathname: '/about/sites/default/files/**',
      },
    ],
  },
};

export default nextConfig;
