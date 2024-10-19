import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LuoH-AN API",
  description: "LuoH-AN API 是一个简洁高效的接口解决方案，专注于提供快速、可靠的数据访问和处理功能。该 API 采用现代化架构设计，支持多种请求方式，便于集成到不同类型的应用中。通过高度优化的请求处理，LuoH-AN API 提供出色的性能，适合高并发场景。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
