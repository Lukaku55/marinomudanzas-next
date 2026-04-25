import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blog",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
