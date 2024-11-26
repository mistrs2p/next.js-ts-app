import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ["cdn.dummyjson.com"], // Add the allowed external domain(s) here
  },
};

export default nextConfig;
