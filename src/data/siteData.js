export const siteStructure = {
  sections: [
    { name: 'About', scrollTo: 'about' },
    { name: 'Event', scrollTo: 'event' },
    { name: 'Sponsors', scrollTo: 'sponsors' },
    { name: 'FAQ', scrollTo: 'faq' }
  ]
};

export const siteButtons = {
  actionButton: { text: 'Contact', link: 'www.google.com' }
};

export const headerData = {
  logoSrc: '',
  links: siteStructure.sections,
  actionButton: siteButtons.actionButton
};

export const mainPageData = {
  mainText: 'Be a part of the change.',
  actionText:
    'Join us in working towards social equity at Equithon on May 1-3, 2018.',
  actionButton: siteButtons.actionButton
};

export const aboutPageData = {
  mainText: 'Be a part of the change.'
};

export const mobileMenuData = {
  links: siteStructure.sections
};
