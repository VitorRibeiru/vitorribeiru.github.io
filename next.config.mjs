/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === 'GH_PAGES';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/vitorribeiru.github.io' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
