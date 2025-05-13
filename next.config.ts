import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
};

export default nextConfig;
