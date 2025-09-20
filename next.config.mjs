/** @type {import('next').NextConfig} */
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const nextConfig = {
  // Produce a static export suitable for GitHub Pages
  output: 'export',
  // If deploying as a Project Page (username.github.io/repo), set env NEXT_PUBLIC_BASE_PATH="/repo"
  basePath: repoBasePath,
  assetPrefix: repoBasePath ? `${repoBasePath}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
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
