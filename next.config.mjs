/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // static HTML export
  trailingSlash: true,    // /homepage/ instead of /homepage (required for GitHub Pages)
  productionBrowserSourceMaps: false, // Disable source maps in production
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,    // next/image optimization requires a server; use raw <img> in static export
  },
  webpack: (config, { dev }) => {
    // Disable source maps entirely in production
    if (!dev) {
      config.devtool = false;
    }
    return config;
  },
};

export default nextConfig;
