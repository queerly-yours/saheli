  export const FooterType = {
    REDIRECT: 'REDIRECT',
    OPEN: 'OPEN'
  } as const;

  export const footerLinkList = [
    {
      label: 'About Us',
      routeLink: '/details/1/category',
      type: FooterType.REDIRECT
    },
    {
      label: 'Archive',
      routeLink: '/details/13/category',
      type: FooterType.REDIRECT
    },
    {
      label: 'Publications',
      routeLink: '/details/14/category',
      type: FooterType.REDIRECT
    },
    {
      label: 'Gallery',
      routeLink: '/',
      type: FooterType.REDIRECT
    },
    {
      label: 'Connect',
      routeLink: '/',
      type: FooterType.OPEN
    },
  ]

  export type FooterType = typeof FooterType[keyof typeof FooterType];