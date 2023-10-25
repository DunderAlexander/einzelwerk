/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "testapi.einzelwerk.io",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
