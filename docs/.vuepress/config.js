module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/css-horizontal-and-vertical-align-summary.md' },
      { text: 'Guide', link: '/guide/' },
      { text: 'VuePress', link: 'https://vuepress.vuejs.org/' },
    ],
    sidebar: [
      {
        title: 'css',
        collapsable: true,
        children: [
          '/css/css-horizontal-and-vertical-align-summary.md'
        ]
      }
    ]
  },
  
}