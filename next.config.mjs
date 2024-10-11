/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add this line
  basePath: process.env.NODE_ENV === 'production' ? '/junaid.github.io' : '',
};

export default nextConfig;
