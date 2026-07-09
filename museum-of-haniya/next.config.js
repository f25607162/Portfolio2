const path = require("path");
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/Portfolio2" : "",
  assetPrefix: isGitHubPages ? "/Portfolio2/" : "",
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // three.js ships as an unbundled ES module; transpiling it (and the
  // react-three packages that wrap it) avoids interop issues with
  // Next.js's webpack build.
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  webpack: (config, { isServer }) => {
    // Force a single, deduplicated copy of react / react-dom on the
    // client bundle only, so @react-three/fiber's internal reconciler
    // never resolves against a second copy of React (the cause of the
    // "Cannot read properties of undefined (reading 'ReactCurrentOwner')"
    // crash). The server bundle must keep using Next's own compiled
    // React internals, so this alias is skipped there.
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: path.resolve(__dirname, "node_modules/react"),
        "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
      };
    }
    return config;
  },
};

module.exports = nextConfig;
