import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Team',
      href: getPermalink('/team'),
    },
    {
      text: 'Events',
      href: getBlogPermalink(),
    },
    {
      text: 'Gallery',
      href: getPermalink('/gallery'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Brochure', href: '#', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Team', href: getPermalink('/team') },
        { text: 'Events', href: getBlogPermalink() },
        { text: 'Gallery', href: getPermalink('/gallery') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Maharaja Agrasen Institute of Technology', href: '#' },
        { text: 'csiinnowave@gmail.com', href: 'mailto:csiinnowave@gmail.com' },
        { text: '+91 8920125672', href: 'tel:+918920125672' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
  ],
  footNote: `
    Copyright © ${new Date().getFullYear()} CSI-INNOWAVE · All rights reserved.
  `,
};
