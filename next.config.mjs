/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    // buildActivity is no longer configurable
    position: 'bottom-right',
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
