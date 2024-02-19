// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

const sponsorUrl = 'https://github.com/sponsors/replica-io';
const gitHubUrl = 'https://github.com/replica-io/replica-io';
const discordUrl = 'https://discordapp.com/invite/CzPfN75URD';
const twitterUrl = 'https://x.com/Replica_IO';
const youtubeUrl = 'https://www.youtube.com/@Replica_IO';
const siteGitHubUrl = 'https://github.com/replica-io/replica-io.github.io';
const siteLicense = {
  name: "Creative Commons Attribution 4.0 International",
  icon: "https://i.creativecommons.org/l/by/4.0/80x15.png",
  url: "http://creativecommons.org/licenses/by/4.0/",
};


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Replica_IO',
  tagline: 'Compose practical distributed replication mechanisms',
  favicon: 'img/favicon.ico',

  url: 'https://replica-io.dev',
  baseUrl: '/',

  customFields: {
    description: 'An open-source framework for building practical distributed replication mechanisms.',
    gitHubUrl: gitHubUrl,
  },

  // GitHub pages deployment config.
  organizationName: 'replica-io',
  projectName: 'replica-io.github.io',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          // Remove this to remove the "edit this page" links.
          editUrl: `${siteGitHubUrl}/edit/main/`,
        },
        blog: {
          blogTitle: 'Replica_IO Blog',
          blogDescription: 'Blog of the Replica_IO project - an open-source framework for building practical distributed replication mechanisms.',
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl: `${siteGitHubUrl}/edit/main/`,
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: 'decentralization, decentralized-computing, distributed-systems, fault-tolerance, replication',
        },
      ],
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      image: 'img/social-card.png',
      navbar: {
        title: 'Replica_IO',
        logo: {
          alt: 'Replica_IO Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'blog',
            label: 'Blog',
          },
          {
            to: sponsorUrl,
            'aria-label': 'Sponsor',
            html: '<i class="fa-regular fa-heart"></i>',
            position: 'right',
            className: 'navbar-icon sponsor-icon',
          },
          {
            href: gitHubUrl,
            'aria-label': 'GitHub',
            html: '<i class="fa-brands fa-github"></i>',
            position: 'right',
            className: 'navbar-icon',
          },
          {
            href: discordUrl,
            'aria-label': 'Discord',
            html: '<i class="fa-brands fa-discord"></i>',
            position: 'right',
            className: 'navbar-icon',
          },
          {
            href: twitterUrl,
            'aria-label': 'Twitter / X',
            html: '<i class="fa-brands fa-x-twitter"></i>',
            position: 'right',
            className: 'navbar-icon',
          },
          {
            href: youtubeUrl,
            'aria-label': 'YouTube',
            html: '<i class="fa-brands fa-youtube"></i>',
            position: 'right',
            className: 'navbar-icon',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: discordUrl,
              },
              {
                label: 'Twitter / X',
                href: twitterUrl,
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: gitHubUrl,
              },
              {
                label: 'YouTube',
                href: youtubeUrl,
              },
            ],
          },
        ],
        copyright: `<div>Made with ❤️ on Earth.</div><div><a rel="license" href="${siteLicense.url}" target="_blank"> <img alt="${siteLicense.name}" style="border-width:0" src="${siteLicense.icon}" /></a> The content of this site is licensed under the <a rel="license" href="${siteLicense.url}" target="_blank">${siteLicense.name}</a> license.</div><div>© ${new Date().getFullYear()} <a target="_blank" href="${siteGitHubUrl}/graphs/contributors">Replica_IO website contributors</a>.</div><div>Built with <a target="_blank" href="https://docusaurus.io/">Docusaurus</a>.</div>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash'],
      },
    }),
};

export default config;
