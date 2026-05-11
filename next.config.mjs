/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
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
