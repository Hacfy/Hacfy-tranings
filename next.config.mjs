/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Suppress webpack warnings for unused SWC binaries
  webpack: (config, { isServer }) => {
    config.ignoreWarnings = [
      // Suppress warnings about unused SWC platform binaries
      {
        module: /node_modules\/@next\/swc/,
        message: /Managed item.*isn't a directory or doesn't contain a package\.json/,
      },
    ]
    
    // Optimize for Windows platform
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    
    return config
  },
  // Optimize SWC configuration
  swcMinify: true,
  // Suppress specific webpack warnings
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
}

export default nextConfig
