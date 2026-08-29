/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

import withPWAInit from 'next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  disable: true,
});

export default withPWA(nextConfig);
