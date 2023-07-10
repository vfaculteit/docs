// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const defaultOptions = {
  editUrl: 'https://github.com/actualbudget/docs/tree/master/',
  beforeDefaultRemarkPlugins: [
    require('./src/remark/rewrite-images'),
    require('./src/remark/mentions'),
  ],
};

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Consumeer Bewust',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.consumeer-bewust.vastgoedfaculteit.be',
  baseUrl: 'https://docs.financetracker-beta.vastgoedfaculteit.be/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./docs-sidebar.js'),
          ...defaultOptions,
        },
        blog: {
          ...defaultOptions,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'VastgoedFaculteit Consumeer Bewust',
          src: 'img/logo-min.png',
        },
        items: [
          {
            to: '/#features',
            // never render as active
            activeBaseRegex: '^$',
            label: 'Functies',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'index',
            label: 'Handleiding',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Vastgoed Faculteit',
            href: 'https://vastgoedfaculteit.be',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vastgoed Faculteit.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['nginx'],
      },
    }),
  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,
        indexDocSidebarParentCategories: 0,
        indexPages: false,
        language: 'en',
        style: undefined,
        maxSearchResults: 8,
        lunr: {
          tokenizerSeparator: /[\s\-]+/,

          b: 0.75,

          k1: 1.2,

          titleBoost: 5,
          contentBoost: 1,
          tagsBoost: 3,
          parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
        },
      },
    ],
    ['@docusaurus/plugin-ideal-image', { disableInDev: false }],
  ],
};
