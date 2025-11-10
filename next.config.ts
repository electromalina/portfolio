import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co", "wbrlbxbwfkiftdlikjhb.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "wbrlbxbwfkiftdlikjhb.supabase.co",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;