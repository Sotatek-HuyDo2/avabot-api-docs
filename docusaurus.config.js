// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Avabot API Services",
  tagline: "Avabot API Services",
  favicon: "img/favicon.ico",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  // organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "ava-api-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // derived from docusaurus-theme-openapi-docs
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Avabot",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "eth",
            position: "left",
            label: "API Services",
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Moralis",
            items: [
              {
                label: "Moralis Academy",
                to: "/docs/intro",
              },
              {
                label: "Pricing",
                to: "/docs/intro",
              },
              {
                label: "Careers",
                to: "/docs/intro",
              },
              {
                label: "Blog",
                to: "/docs/intro",
              },
              {
                label: "Contract Support",
                to: "/docs/intro",
              },
              {
                label: "Status",
                to: "/docs/intro",
              },
              {
                label: "FAQ",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Forum",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Stack OverFlow",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Twitter",
                to: "/blog",
              },
              {
                label: "Youtube",
                href: "https://github.com/facebook/docusaurus",
              },
              {
                label: "Linkedin",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy",
                to: "/blog",
              },
              {
                label: "Terms",
                href: "https://github.com/facebook/docusaurus",
              },
              {
                label: "Cookie Policy",
                to: "/blog",
              },
              {
                label: "Security Policy",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Avabot API Services, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          eth: {
            specPath: "examples/eth.json",
            outputDir: "docs/eth",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
