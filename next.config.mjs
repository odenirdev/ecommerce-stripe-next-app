/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["production.na01.natura.com", "files.stripe.com"],
  },
};

export default nextConfig;
