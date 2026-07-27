/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

import withPWAInit from 'next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  disable: false,
});

export default withPWA({
  nextConfig,
});
