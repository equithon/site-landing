import React from 'react';

export const siteColors = {
  offBlack: '#46484a',
  offWhite: '#EFEFEF',
  warning: '#F4A867',
  error: '#F07285',

  darkerPurple: '#854DD0',
  primary: '#9A71D1',
  lighterPurple: '#E2D4F5',

  darkerBlue: '#4270DE',
  secondary: '#4B97E0',
  lighterBlue: '#A9C2F8'
};

export const siteStructure = {
  sections: [
    { name: 'About', scrollTo: 'about' },
    { name: 'Event', scrollTo: 'event' },
    { name: 'Sponsors', scrollTo: 'sponsors' },
    { name: 'FAQ', scrollTo: 'faq' }
  ]
};

export const siteButtons = {
  contactButton: {
    text: 'Contact',
    link: 'mailto:hello@equithon.org',
    location: '_self'
  },
  applyButton: {
    text: 'Apply',
    link: 'https://www.my.equithon.org',
    location: '_self'
  },
  signupButton: {
    text: 'Stay Posted',
    link:
      'https://www.google.com/search?q=this+should+sign+the+user+up+for+a+mailing+list&oq=this+should+sign+the+user+up+for+a+mailing+list&aqs=chrome..69i57.5475j0j1&sourceid=chrome&ie=UTF-8',
    location: '_blank'
  }
};

export const mobileMenuData = {
  links: siteStructure.sections
};

export const headerData = {
  logoSrc: '',
  links: siteStructure.sections,
  actionButton: siteButtons.contactButton
};

export const mainPageData = {
  header: 'Be a part of the change.',
  actionText:
    'Join us in working towards social equity at Equithon on May 3-5, 2019.',
  actionButton: siteButtons.contactButton
};

export const aboutPageData = {
  header: 'What is Equithon?',
  desc:
    'Equithon is a student-run hackathon held at the University of Waterloo where participants create solutions for a variety of social equity challenges. Our goal is to create an inclusive environment where all attendees feel comfortable learning, sharing their ideas, and developing something amazing that can improve the world around us.',
  testimonials: [
    {
      authorName: 'Mandy Meindersma',
      authorDesc: 'Equithon 2018 Category Winner',
      authorQuote:
        'I was able to meet three amazing badass women who helped me grow and made me a better person. We all found our own strengths and we made something amazing together.'
    },
    {
      authorName: 'Mandy Meindersma',
      authorDesc: 'University of Alberta CS, Equithon 2018 Category Winner',
      authorQuote:
        'I was able to meet three amazing bad ass women who helped me grow and made me a better person. We all found our own strengths and we made something amazing together.'
    }
  ]
};

export const previewPageData = {
  header: "What's in store?",
  previewDesc: [
    'Whether you’re a talented and curious beginner who wants to learn more about technology and its role in improving social equity, or a veteran of the hackathon scene looking for a unique challenge, Equithon invites you to take part and work towards a brighter future.',
    'We want you to improve the world and yourself in the process; at the event, you’ll encounter enriching workshops, fun activities, and the chance to work with brilliant idea and technical mentors, fellow hackers, and professionals in various fields.'
  ],
  lastYear: {
    header: 'A Look Back At 2018',
    statBubbles: [
      {
        contents: (
          <div>
            <span style={{ fontWeight: 600 }}>58% Female</span>,{' '}
            <span style={{ fontWeight: 600 }}>40% Male</span>, and{' '}
            <span style={{ fontWeight: 600 }}>2% Non-Binary</span>{' '}
            Representation
          </div>
        ),
        backgroundColor: '#AE85E6',
        color: 'white'
      },
      {
        contents: (
          <div>
            Global presence from{' '}
            <span style={{ fontWeight: 600 }}>Canada, USA, Europe</span>, and{' '}
            <span style={{ fontWeight: 600 }}>India</span>
          </div>
        ),
        backgroundColor: '#E2D4F5',
        color: 'siteColors.offBlack'
      },
      {
        contents: (
          <div>
            Hackers with{' '}
            <span style={{ fontWeight: 600 }}>
              diverse academic backgrounds
            </span>{' '}
            ranging from <span style={{ fontWeight: 600 }}>Engineering</span> to{' '}
            <span style={{ fontWeight: 600 }}>Arts</span>
          </div>
        ),
        backgroundColor: '#AE85E6',
        color: 'white'
      }
    ]
  },
  thisYear: {
    header: 'A Sneak Peek At 2019',
    statCounters: [
      {
        start: 0,
        end: 500,
        suffix: '+',
        subtitle: 'Attendees',
        gridArea: 'statAttendees'
      },
      { start: 0, end: 36, subtitle: 'Hours', gridArea: 'statDuration' },
      {
        start: 0,
        end: 5,
        textAbove: 'Participants will work towards one of:',
        subtitle: 'Tracks',
        color: '#854dd0',
        gridArea: 'statCategories'
      },
      {
        start: 100,
        end: 1,
        subtitle: 'Common Goal',
        color: 'white',
        gridArea: 'statGoal'
      }
    ],
    categories: [
      {
        contents: <div style={{ fontWeight: 500 }}>Physical Accessibility</div>,
        backgroundColor: '#E2D4F5',
        color: 'siteColors.offBlack'
      },
      {
        contents: <div style={{ fontWeight: 500 }}>Female Empowerment</div>,
        backgroundColor: '#AE85E6',
        color: 'white'
      },
      {
        contents: <div style={{ fontWeight: 500 }}>Economic Disparity</div>,
        backgroundColor: '#E2D4F5',
        color: 'siteColors.offBlack'
      },
      {
        contents: <div style={{ fontWeight: 500 }}>Mobility Rights</div>,
        backgroundColor: '#E2D4F5',
        color: 'siteColors.offBlack'
      },
      {
        contents: <div style={{ fontWeight: 500 }}>Mental Health</div>,
        backgroundColor: '#AE85E6',
        color: 'white'
      }
    ]
  }
};

export const sponsorsPageData = {
  header: 'Special Thanks',
  sponsorUsBlurb:
    'Equithon would not be possible without the generous sponsorship of companies and individuals who have all exhibited a passion for social innovation and are commited to helping us improve the world, one project at a time.',
  sponsorAction: {
    actionText: 'Interested in sponsoring?',
    link: {
      text: 'Shoot us an email.',
      to:
        'mailto: hello@equithon.org?subject=Equithon Sponsorship/Partnership Inquiry'
    }
  },
  sponsors: [
    {
      name: 'Loopio',
      link: 'http://loopio.com',
      tier: 'diamond',
      backgroundColor: 'blue',
      color: 'white'
    },
    {
      name: 'Loopio',
      link: 'http://loopio.com',
      tier: 'diamond',
      backgroundColor: 'blue',
      color: 'white'
    },
    {
      name: 'Loopio',
      link: 'http://loopio.com',
      tier: 'diamond',
      backgroundColor: 'blue',
      color: 'white'
    },
    {
      name: 'Loopio',
      link: 'http://loopio.com',
      tier: 'diamond',
      backgroundColor: 'blue',
      color: 'white'
    }
  ]
};

export const FAQPageData = {
  header: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'What exactly do you do at Equithon?',
      answer:
        'You’ll get the chance to make a difference in the world! Over the course of a 36 hours, you and up to 3 other team members will create a technical project that solves an issue in one of our 5 project tracks.'
    },
    {
      question: 'What do I have to do to participate?',
      answer:
        'You’ll get the chance to make a difference in the world! Over the course of a 36 hours, you and up to 3 other team members will create a technical project that solves an issue in one of our 5 project tracks.'
    },
    {
      question: 'How many people can be part of the same team?',
      answer:
        'You’ll get the chance to make a difference in the world! Over the course of a 36 hours, you and up to 3 team members will create a technical project that soes an issue in one of our 5 project tracks.'
    },
    {
      question: 'what',
      answer:
        "You’ll get the chance to make a diffeet the chance to make a diffeet the chance to make a diffeet the chance to make a diffeet the chance to make a diffeet the chance to make a diffeet the chance to make this question is intentionally written to overflow, we shouldn't have an answer as long as this a diffeet the chance to make a diffeet the chance to make a diffeet the chance to make a difference in the world! Over the course of a 36 hours, you and up to 3 team members will create a technical project that soes an issue in one of our 5 project tracks."
    },
    {
      question: 'What exactly do you do at Equithon?',
      answer:
        'You’ll get the chance to make a difference in the world! Over the course of a 36 hours, you and up to 3 other team members will create a technical project that solves an issue in one of our 5 project tracks.'
    },
    {
      question: "What's going to be happening?",
      answer:
        'You’ll get the chance to make a difference in the world! Over the course of a 36 hours, you and up to 3 team members will create a technical project that soes an issue in one of our 5 project tracks.'
    },
    {
      question:
        'What exactly do you do at Eqpgjwegpw epgjweogwegow epg wejgweog pwejgpwje pg jwegwpeuithon?',
      answer:
        'You’ll get the chance to make a difference in the world! Over the course of a 36 hours, you and up to 3 other team members will create a technical project that solves an issue in one of our 5 project tracks.'
    },
    {
      question: "What's going to be happening?",
      answer:
        'You’ll get the chance to make a difference in the world! Over the course of a 36 hours, you and up to 3 team members will create a technical project that soes an issue in one of our 5 project tracks.'
    }
  ],
  FAQAction: {
    actionText: 'Have another burning question?',
    link: {
      text: "Talk to our team (we don't bite).",
      to: 'mailto: hello@equithon.org'
    }
  }
};
