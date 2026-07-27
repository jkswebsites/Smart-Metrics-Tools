/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: false,
});

export default withPWA({
  reactStrictMode: true,
});
