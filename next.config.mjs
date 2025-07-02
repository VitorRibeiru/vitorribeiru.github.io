const isGithubPages = process.env.DEPLOY_TARGET === 'GH_PAGES';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/vitorribeiru.github.io' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
