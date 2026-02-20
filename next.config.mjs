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
        source: '/locations',
        destination: '/markets',
        permanent: true,
      },
      {
        source: '/plotting',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
