/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // static HTML export
  trailingSlash: true,    // /homepage/ instead of /homepage (required for GitHub Pages)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,    // next/image optimization requires a server; use raw <img> in static export
  },
};

export default nextConfig;
