/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['techvify-software.com', 'cdn.britannica.com', 'www.verizon.com'],
  },
  // Add this line
  basePath: process.env.NODE_ENV === 'production' ? '/junaid.github.io' : '',
};

export default nextConfig;
