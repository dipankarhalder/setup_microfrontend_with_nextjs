import NextFederationPlugin from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'product_app',
        remotes: {},
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './SectionBody': './components/sectionbody.tsx',
          './Category': './pages/category/index.tsx',
          './Book': './pages/book/index.tsx',
        },
        extraOptions: {
          debug: false,
          exposePages: false,
        },
        shared: {},
      })
    );
    return config;
  },
};

export default nextConfig;
