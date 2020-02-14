module.exports = {
  title: '敏捷开发',
  description: '敏捷开发',
  base: '/scrum-note/dist/', // 部署站点的基础路径
  dest: './dist', // 构建输出的位置，从项目根路径开始算。
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F
    nav: [
      {text: 'GitHub', link: 'https://github.com/iamjoel/scrum-note'},
    ],
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
    sidebar: [
      {
        title: '介绍',
        path: '/',
      },
      {
        title: '内容',
        collapsable: false,
        children: [
          {
            title: '敏捷的完整流程',
            path: '/content/',
          },
          {
            title: '团队',
            children: [
              {
                title: '团队规模',
                path: '/content/group/scale',
              },
              {
                title: '团队角色',
                path: '/content/group/role',
              },
            ]
          },
          {
            title: '会议',
            collapsable: false,
            children: [
              {
                title: '冲刺规划会',
                path: '/content/meeting/sprint',
              },
              {
                title: '每日站会',
                path: '/content/meeting/stand-up',
              },
              {
                title: '冲刺回顾会议',
                path: '/content/meeting/sprint-review',
              },
            ]
          },
          {
            title: '工作量估算',
            path: '/content/evaluate-project',
          },
          {
            title: '控制在制品数量',
            path: '/content/wip-num',
          },
          {
            title: '关于加班',
            path: '/content/work-overtime',
          },
        ]
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
          },
          {
            title: '冲刺',
            path: '/term/sprint',
          },
          {
            title: '看板',
            path: '/term/kanban',
          },
          {
            title: '在制品',
            path: '/term/wip',
          },
          {
            title: '燃尽图',
            path: '/term/burn-down-chart/',
          },
        ]
      },
      {
        title: '推荐资源',
        path: '/resource',
      },
    ]

  }
}