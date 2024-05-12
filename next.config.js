const createMDX = require('@next/mdx');

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    output: 'standalone',
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
});

module.exports = withMDX(nextConfig);
