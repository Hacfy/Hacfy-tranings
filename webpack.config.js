// Additional webpack configuration to suppress SWC warnings
module.exports = {
  ignoreWarnings: [
    // Suppress warnings about unused SWC platform binaries
    {
      module: /node_modules\/@next\/swc/,
      message: /Managed item.*isn't a directory or doesn't contain a package\.json/,
    },
    // Suppress other common webpack warnings
    {
      message: /Critical dependency: the request of a dependency is an expression/,
    },
  ],
  resolve: {
    fallback: {
      fs: false,
      net: false,
      tls: false,
      crypto: false,
    },
  },
  // Optimize module resolution
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules\/(?!(@next\/swc-win32-x64-msvc))/,
        use: {
          loader: 'next-swc-loader',
          options: {
            // Only use the Windows x64 SWC binary
            target: 'es2017',
            module: 'esnext',
          },
        },
      },
    ],
  },
}
