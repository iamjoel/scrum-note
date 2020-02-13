module.exports = {
  title: '敏捷开发',
  description: '敏捷开发',
  base: '/scrum-note/dist/', // 部署站点的基础路径
  dest: './dist', // 构建输出的位置，从项目根路径开始算。
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F
    nav: [
      // {text: 'GitHub', link: 'https://github.com/iamjoel'},
      // {text: '简书', link: 'https://www.jianshu.com/u/EhUmA3'}
    ],
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
    sidebar: [
      {
        title: '介绍',
        path: '/',
      },
      {
        title: '术语',
        collapsable: false,
        children: [
          {
            title: '用户故事',
            path: '/term/story',
          },
          {
            title: '故事点',
            path: '/term/story-point',
          }
        ]
    },
      {
        title: '推荐资源',
        path: '/resource',
      },

    
    ]

  }
}