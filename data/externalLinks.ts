export const contactLinks = {
  email: 'hello@yigitcanozdemir.com',
  linkedin: 'https://linkedin.com/in/yiğit-can-özdemir',
  github: 'https://github.com/yigitcanozdemir',
}

export type ProjectKey =
  | 'eCommerceAgent'
  | 'cinesearch'

export const projectDemoLinks: Record<ProjectKey, string> = {
  eCommerceAgent: 'https://app.yigitcanozdemir.com/',
  cinesearch: 'https://demo-link.com',
}

export const imagePaths = {
  profilePortrait: '/portrait.png',
  eCommerceAgent: '/eCommerceAgent.png',
  cinesearch: '/cinesearch.png',
  projectPlaceholder: '/placeholder.svg',
} as const
