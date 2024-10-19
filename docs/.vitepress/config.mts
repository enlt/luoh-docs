import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "LuoH-AN API",
  description: "简洁高效，性能卓越",
  themeConfig: {
    logo: '/images/LuoH-AN-LOGO.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' }
    ],

    sidebar: [
      {
        text: "简介",
        link: "/introduce",
      },
      {
        text: "PicLibrary",
        items: [
          { text: "安装主题 💻", link: "/initall" },
          {
            text: "页面配置 📦",
            collapsed: false,
            items: [
              { text: "front-matter的基本认识", link: "/page/front-matter" },
              { text: "标签页配置", link: "/page/tags" },
              { text: "分类页配置", link: "/page/classify" },
              { text: "404页面配置", link: "/page/404" },
            ],
          },
          {
            text: "全局配置 🧠",
            collapsed: false,
            items: [
              { text: "基础配置", link: "/global/base" },
              { text: "额外配置", link: "/global/extra" },
            ],
          },
          {
            text: "进阶配置 🚀",
            collapsed: false,
            items: [
              { text: "全局配置", link: "/advanced/" },
              { text: "友情链接配置", link: "/page/links" },
              { text: "留言板页面配置", link: "/page/message" },
              { text: "我的装备页面配置", link: "/page/equipment" },
              { text: "追番页面配置", link: "/page/bilibili" },
              { text: "关于页面配置", link: "/page/about" },
              { text: "音乐馆页配置", link: "/page/music" },
              { text: "朋友圈页面配置", link: "/page/fcircle" },
              { text: "相册页面配置", link: "/page/album" },
              { text: "首页即刻说说页面配置", link: "/page/essay" },
            ],
          },
          {
            text: "常见问题 📖",
            link: "/FAQ",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    }
  }
})
