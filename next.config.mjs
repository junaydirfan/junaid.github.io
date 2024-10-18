/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'techvify-software.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.britannica.com',
      },
      {
        protocol: 'https',
        hostname: 'www.verizon.com',
      },
    ],
  },
};

export default nextConfig;
