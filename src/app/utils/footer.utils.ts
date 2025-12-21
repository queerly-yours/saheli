  export const FooterType = {
    REDIRECT: 'REDIRECT',
    OPEN: 'OPEN'
  } as const;

  export const footerLinkList = [
    {
      label: 'About Us',
      labelHindi: 'हमारे बारे में',
      hindiRouteLink: '/hi/details/1/category',
      routeLink: '/details/1/category',
      type: FooterType.REDIRECT
    },
    {
      label: 'Archive',
      labelHindi: 'पुरालेख',
      hindiRouteLink: '/hi/details/13/category',
      routeLink: '/details/13/category',
      type: FooterType.REDIRECT
    },
    {
      label: 'Publications',
      labelHindi: 'प्रकाशनों',
      hindiRouteLink: '/hi/details/14/category',
      routeLink: '/details/14/category',
      type: FooterType.REDIRECT
    },
    {
      label: 'Gallery',
      labelHindi: 'गैलरी',
      hindiRouteLink: '',
      routeLink: '/',
      type: FooterType.REDIRECT
    },
    {
      label: 'Connect',
      labelHindi: 'संपर्क करें',
      hindiRouteLink: '',
      routeLink: '/',
      type: FooterType.OPEN
    },
  ]

  export type FooterType = typeof FooterType[keyof typeof FooterType];