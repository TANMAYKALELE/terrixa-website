/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/about#contact',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
