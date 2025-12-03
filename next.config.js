/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  env: {
    API_PROD_URL: "https://api.aarkaytest.com/api/admin",
    storageURL: "https://api.aarkaytest.com",
  },

  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.aarkaytest.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },

  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
