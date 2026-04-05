// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

const sponsorUrl = 'https://github.com/sponsors/replica-io';
const gitHubUrl = 'https://github.com/replica-io/replica-io';
const discordUrl = 'https://discord.replica-io.dev';
const twitterUrl = 'https://x.com/Replica_IO';
const blueskyUrl = 'https://bsky.app/profile/replica-io.bsky.social';
const youtubeUrl = 'https://www.youtube.com/@Replica_IO';
const siteGitHubUrl = 'https://github.com/replica-io/replica-io.github.io';
const siteLicense = {
  name: "CC-BY-4.0",
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
    siteLicense: siteLicense,
    recentBlogPostsOnHomePage: 5,
    giscusConfig: {
      repo: 'replica-io/replica-io',
      repoId: 'R_kgDOJGevLg',
      category: 'General',
      categoryId: 'DIC_kwDOJGevLs4CUted',
      reactionsEnabled: '1',
      inputPosition: 'top',
      loading: 'lazy',
      themes: {light: 'light', dark: 'transparent_dark'},
    },
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

  clientModules: ['/js/unscrambleEmail.js'],

  plugins: [
    [
      './plugins/blog-plugin',
      {
        blogTitle: 'Replica_IO Blog',
        blogDescription: 'Blog of the Replica_IO project - an open-source framework for building practical distributed replication mechanisms.',
        showReadingTime: true,
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        onUntruncatedBlogPosts: 'throw',
        onInlineAuthors: 'throw',
        // Remove this to remove the "edit this page" links.
        editUrl: `${siteGitHubUrl}/edit/main/`,
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    'image-zoom',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        pages: {
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Remove this to remove the "edit this page" links.
          editUrl: `${siteGitHubUrl}/edit/main/`,
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
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
            href: blueskyUrl,
            'aria-label': 'Bluesky',
            html: '<i class="fa-brands fa-bluesky"></i>',
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
          {
            href: '/#contact-email',
            'aria-label': 'Contact Email',
            html: '<i class="fa-regular fa-envelope"></i>',
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
              {
                label: 'Bluesky',
                href: blueskyUrl,
              }
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
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Email',
                href: '/#contact-email',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} <a target="_blank" href="${siteGitHubUrl}/graphs/contributors">Replica_IO website contributors</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash'],
      },
      zoom: {
        selector: '.markdown img',
        background: {
          // Using `--ifm-color-white` in light theme because `--ifm-background-color` makes background transparent
          light: 'var(--ifm-color-white)',
          dark: 'var(--ifm-background-color)',
        }
      }
    }),
};

export default config;
