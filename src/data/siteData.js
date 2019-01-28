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

export const sponsorBubbleTiers = {
  diamond: 200,
  gold: 150,
  silver: 110,
  bronze: 75
};

export const sponsorsPageData = {
  sponsorBubbles: [
    {
      name: 'Facebook',
      size: sponsorBubbleTiers.diamond,
      link: 'www.facebook.com',
      imgSrc: 'fb_logo.jpg',
      backgroundColor: '#3b5998',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'University of Waterloo',
      size: sponsorBubbleTiers.diamond,
      link: 'www.uwaterloo.com',
      imgSrc: 'fb_logo.jpg',
      backgroundColor: '#FFD54F',
      x: 0,
      y: 260,
      vy: -0.1
    },
    {
      name: 'Flipp',
      size: sponsorBubbleTiers.diamond,
      link: 'www.facebook.com',
      imgSrc: 'fb_logo.jpg',
      backgroundColor: '#00c6d7',
      x: 20,
      y: 470,
      vy: 0.1
    },
    {
      name: 'WiCS',
      size: sponsorBubbleTiers.diamond,
      link: 'www.wics.com',
      imgSrc: 'fb_logo.jpg',
      backgroundColor: '#ffd1dc',
      x: 230,
      y: 120,
      vy: 0.1
    },
    {
      name: 'Google',
      size: sponsorBubbleTiers.diamond,
      link: 'www.google.com',
      imgSrc: 'fb_logo.jpg',
      backgroundColor: '#fff',
      x: 215,
      y: 345,
      vy: 0.1
    },
    {
      name: 'Stripe',
      size: sponsorBubbleTiers.gold,
      link: 'www.facebook.com',
      imgSrc: 'fb_logo.jpg',
      backgroundColor: '#00afe1',
      x: 225,
      y: 550,
      vy: 0.1
    },
    {
      name: 'Bloomberg',
      size: sponsorBubbleTiers.diamond,
      link: 'www.facebook.com',
      imgSrc: 'fb_logo.jpg',
      backgroundColor: '#2d2d2d',
      x: 1050,
      y: 100,
      vy: 0.1
    },
    {
      name: 'Datadog',
      size: sponsorBubbleTiers.diamond,
      link: 'www.facebook.com',
      imgSrc: 'fb_logo.jpg',
      backgroundColor: '#2d2d2d',
      x: 1050,
      y: 100,
      vy: 0.1
    },
    {
      name: 'Square',
      size: sponsorBubbleTiers.diamond,
      link: 'www.facebook.com',
      imgSrc: 'fb_logo.jpg',
      backgroundColor: '#2d2d2d',
      x: 1050,
      y: 100,
      vy: 0.1
    },
    {
      name: 'Shopify',
      size: sponsorBubbleTiers.diamond,
      link: 'www.facebook.com',
      imgSrc: 'fb_logo.jpg',
      backgroundColor: '#2d2d2d',
      x: 1050,
      y: 100,
      vy: 0.1
    },
    {
      name: 'Microsoft',
      size: sponsorBubbleTiers.diamond,
      link: 'www.facebook.com',
      imgSrc: 'fb_logo.jpg',
      backgroundColor: '#2d2d2d',
      x: 1050,
      y: 100,
      vy: 0.1
    },
    {
      name: 'Dropbox',
      size: sponsorBubbleTiers.diamond,
      link: 'www.facebook.com',
      imgSrc: 'fb_logo.jpg',
      backgroundColor: '#2d2d2d',
      x: 1050,
      y: 100,
      vy: 0.1
    },
    {
      name: 'SeatGeek',
      size: sponsorBubbleTiers.diamond,
      link: 'www.facebook.com',
      imgSrc: 'fb_logo.jpg',
      backgroundColor: '#2d2d2d',
      x: 1050,
      y: 100,
      vy: 0.1
    },
    {
      name: 'Loopio',
      size: sponsorBubbleTiers.diamond,
      link: 'www.facebook.com',
      imgSrc: 'fb_logo.jpg',
      backgroundColor: '#2d2d2d',
      x: 1050,
      y: 100,
      vy: 0.1
    },
    {
      name: 'Top Hat',
      size: sponsorBubbleTiers.diamond,
      link: 'www.facebook.com',
      imgSrc: 'fb_logo.jpg',
      backgroundColor: '#2d2d2d',
      x: 1050,
      y: 100,
      vy: 0.1
    }
  ]
};

export const mobileMenuData = {
  links: siteStructure.sections
};
