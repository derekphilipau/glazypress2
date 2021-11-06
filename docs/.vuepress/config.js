module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Glazy Help',
      description: 'The Free & Open Ceramics Library'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/icons/apple-touch-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
  ],
  themeConfig: {
    logo: '/img/logo.png',
    smoothScroll: true,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Support', link: '/support#how-to-support-glazy' },
      { text: 'Glazy.org', link: 'https://glazy.org' },
    ],
    sidebarDepth: 2,
    editLink: false,
    contributors: false,
    sidebar: [
      {
        text: 'Support',
        link: '/support.md',
      },
      {
        text: 'About',
        link: '/about/',
        children: [
          '/about/',
          '/about/changelog.md',
          '/about/health-warning.md',
          '/about/health-carty.md',
          '/about/privacy.md',
          '/about/terms-of-service.md'
        ]
      },
      {
        text: 'Guide',
        link: '/guide/',
        children: [
          '/guide/',
          '/guide/materials/',
          '/guide/inventory/',
          '/guide/recipes/',
          '/guide/calculator/',
          '/guide/targetsolve/',
          '/guide/searching/',
          '/guide/organizing/',
          '/guide/posts/'
        ]
      },
      /*
      {
        text: 'Recipe Types',
        children: [
          '/types/glazes/clear/',
          '/types/glazes/red/'
        ]
      },
      */
      {
        text: 'Concepts',
        link: '/concepts/analysis/',
        children: [
          '/concepts/analysis/',
          '/concepts/analysis/percent.md',
          '/concepts/analysis/formula.md',
          '/concepts/analysis/umf.md',
          '/concepts/calculation/',
          '/concepts/firing/',
          '/concepts/temperature/',
          '/concepts/limits/'
        ]
      },
      {
        text: 'Testing',
        link: '/testing/mixing-tests/',
        children: [
          '/testing/mixing-tests/',
          '/testing/blending/',
          '/testing/triaxials/',
          '/testing/blending-guides/'
        ]
      },
      {
        text: 'Tutorials',
        link: '/tutorials.md'
      },
      {
        text: 'Other Tools',
        link: '/tools.md'
      }
    ]
  }
}
