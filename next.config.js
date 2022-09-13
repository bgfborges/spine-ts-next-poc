/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
}

const SpinePlayerCompile = require('next-transpile-modules')(['@esotericsoftware/spine-player', '@esotericsoftware/spine-core', '@esotericsoftware/spine-canvas', '@esotericsoftware/spine-threejs', '@esotericsoftware/spine-webgl']); // pass the modules you would like to see transpiled
module.exports = SpinePlayerCompile({})