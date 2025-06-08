import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

export default withMermaid(
  defineConfig({
    title: 'Writing Marker',
    description: '智能英语作文批改平台',
    lang: 'zh-CN',
    lastUpdated: true,
    cleanUrls: true,
    
    // Mermaid 配置
    mermaid: {
      // 可选：自定义 Mermaid 配置
      theme: 'default'
    },
    
    themeConfig: {
      logo: '/logo.png',
      siteTitle: 'Writing Marker',
      nav: navZh(),
      sidebar: sidebarZh(),
      outline: { level: [2, 3] },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/your-repo' }
      ],
      footer: {
        message: '基于 CC BY-NC-SA 4.0 协议发布',
        copyright: '© 2025 Writing Marker'
      },
      editLink: {
        pattern: 'https://github.com/your-repo/edit/main/docs/:path',
        text: '在 GitHub 上编辑此页'
      },
      lastUpdatedText: '最后更新',
      docFooter: { prev: '上一页', next: '下一页' }
    },
    locales: {
      root: { label: '简体中文', lang: 'zh-CN' },
      en: {
        label: 'English',
        lang: 'en-US',
        themeConfig: {
          siteTitle: 'Writing Marker',
          nav: navEn(),
          sidebar: sidebarEn(),
          outline: { level: [2, 3] },
          socialLinks: [
            { icon: 'github', link: 'https://github.com/your-repo' }
          ],
          footer: {
            message: 'Released under the CC BY-NC-SA 4.0 License',
            copyright: '© 2025 Writing Marker'
          },
          editLink: {
            pattern: 'https://github.com/your-repo/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
          },
          lastUpdatedText: 'Last Updated',
          docFooter: { prev: 'Previous', next: 'Next' }
        }
      }
    }
  })
);

function navZh() {
  return [
    { text: '快速开始', link: '/get-started' },
    { text: '功能介绍', items: [
      { text: '智能批改', link: '/usage/essay-correction' },
      { text: '个性化反馈', link: '/usage/personalized-feedback' },
      { text: '多格式支持', link: '/usage/multi-format' },
      { text: '学习资源推荐', link: '/usage/learning-resources' },
      { text: '教师协作平台', link: '/usage/teacher-platform' },
      { text: '数据驱动进步', link: '/usage/progress-tracking' }
    ]},
    { text: '技术方案', link: '/technical/architecture' }
  ];
}

function sidebarZh() {
  return {
    '/usage/': [
      { text: '功能介绍', items: [
        { text: '智能批改', link: '/usage/essay-correction' },
        { text: '个性化反馈', link: '/usage/personalized-feedback' },
        { text: '多格式支持', link: '/usage/multi-format' },
        { text: '学习资源推荐', link: '/usage/learning-resources' },
        { text: '教师协作平台', link: '/usage/teacher-platform' },
        { text: '数据驱动进步', link: '/usage/progress-tracking' }
      ]}
    ],
    '/technical/': [
      { text: '技术方案', items: [
        { text: '系统架构', link: '/technical/architecture' }
      ]}
    ]
  };
}

function navEn() {
  return [
    { text: 'Get Started', link: '/en/get-started' },
    { text: 'Features', items: [
      { text: 'Essay Correction', link: '/en/usage/essay-correction' },
      { text: 'Personalized Feedback', link: '/en/usage/personalized-feedback' },
      { text: 'Multi-format Support', link: '/en/usage/multi-format' },
      { text: 'Learning Resources', link: '/en/usage/learning-resources' },
      { text: 'Teacher Platform', link: '/en/usage/teacher-platform' },
      { text: 'Progress Tracking', link: '/en/usage/progress-tracking' }
    ]},
    { text: 'Technical', link: '/en/technical/architecture' }
  ];
}

function sidebarEn() {
  return {
    '/en/usage/': [
      { text: 'Features', items: [
        { text: 'Essay Correction', link: '/en/usage/essay-correction' },
        { text: 'Personalized Feedback', link: '/en/usage/personalized-feedback' },
        { text: 'Multi-format Support', link: '/en/usage/multi-format' },
        { text: 'Learning Resources', link: '/en/usage/learning-resources' },
        { text: 'Teacher Platform', link: '/en/usage/teacher-platform' },
        { text: 'Progress Tracking', link: '/en/usage/progress-tracking' }
      ]}
    ],
    '/en/technical/': [
      { text: 'Technical', items: [
        { text: 'Architecture', link: '/en/technical/architecture' }
      ]}
    ]
  };
}
