import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  site: {
    title: '英子小屋',
    subtitle: 'Akirako',
    author: 'Akirako',
    description: '用文字描述生活中、工作中和学习中想要保存住的瞬间，BLOG记录生活',
    website: 'https://akirako.top',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/Akirako',
      },
      {
        name: 'youtube',
        href: 'https://www.youtube.com/@akirakow.9918',
      },
      {
        name: 'twitter',
        href: 'https://x.com/w_akirako',
      },
      {
        name: 'email',
        href: 'mailto:w.akirako@gmail.com',
      },
    ],
  },
  seo: { twitter: '@w_akirako' },
}
