export const contactLinks = {
  email: 'hello@yigitcanozdemir.com',
  linkedin: 'https://linkedin.com/in/yiğit-can-özdemir',
  github: 'https://github.com/yigitcanozdemir',
  instagram: 'https://instagram.com/yigitcanozdemir',
  location: {
    label: 'Osmaniye, Turkey',
    mapUrl: 'https://www.google.com/maps?q=Osmaniye%2C+Turkey'
  },
  phone: {
    label: 'Available on request',
    href: 'mailto:hello@yigitcanozdemir.com?subject=Phone%20Request'
  }
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
