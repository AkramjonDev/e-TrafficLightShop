const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["tashkent.znaki154.ru", "jssuntek.com"],
  },
};

module.exports = withNextIntl(nextConfig);
