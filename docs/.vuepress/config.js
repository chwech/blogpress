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
        title: 'js',
        collapsable: true,
        children: [
          '/js/js面试题.md'
        ]
      },
      {
        title: 'css',
        collapsable: true,
        children: [
          '/css/css-horizontal-and-vertical-align-summary.md'
        ]
      },
      {
        title: 'mysql',
        collapsable: true,
        children: [
          '/mysql/与MySQL的零距离接触.md'
        ]
      },
      {
        title: 'markdown',
        collapsable: true,
        children: [
          '/markdown/markdown语法.md'
        ]
      }
    ]
  },
  
}