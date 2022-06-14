const { description } = require('../../package')

module.exports = {
  locales: {
    '/': {
      lang: 'zh-Hant-TW'
    }
  },
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Advtek 教育訓練文件',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/document/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: "viewport", content: "width=device-width,user-scaleble=0,initial-scale=1.0,maximum-scale=1.0" }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: false,
    nav: [
      {
        text: '一. 安裝開發工具',
        link: '/env/'
      },
      {
        text: '二. 建立前,後端專案',
        link: '/project-structure/'
      },
      {
        text: '三. 開發範例 ',
        link: '/example/'
      }
    ],
    sidebar: {
      '/env/': [
        {
          title: '一. 安裝開發工具',
          collapsable: false,
          children: [
            '',
            'gradle',
            'nvm',
            'vue-cli',
            'quasar-cli',
            'intellij',
            'vscode',
            'postman',
            'git'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
