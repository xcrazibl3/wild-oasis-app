import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kweclypeyylrosdsxgbi.supabase.co",
        port: "",
        pathname: "/storage/v1/object/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
