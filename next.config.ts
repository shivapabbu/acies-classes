import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensures Turbopack/Next picks the app folder as root
    root: __dirname,
  },
};

export default nextConfig;
