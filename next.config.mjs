/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
}
module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}
export default nextConfig
