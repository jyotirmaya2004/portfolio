import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/experience",
        destination: "/#experience",
        permanent: false,
      },
      {
        source: "/skills",
        destination: "/#skills",
        permanent: false,
      },
      {
        source: "/education",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/experience/sih",
        destination: "/#experience",
        permanent: false,
      },
      {
        source: "/experience/systems",
        destination: "/#experience",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
