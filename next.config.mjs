/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bootdey.com',
        port: '',
        pathname: '/image/**',
      },
    ],
  },
};

export default nextConfig;
