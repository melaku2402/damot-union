import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  allowedDevOrigins: ["10.33.185.115", "localhost:3000"],

  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
