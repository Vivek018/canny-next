/** @type {import('next').NextConfig} */
const plugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// The NextJS config defined separately
// Gets passed to next-offline
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/assets/models/",
            publicPath: "/_next/static/assets/models/",
            esModule: false, // Important for gltf-webpack-loader compatibility
          },
        },
      ],
    });

    return config;
  },
};

module.exports = plugins([withBundleAnalyzer], nextConfig);
