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
  header: 'Be a part of the change.',
  actionText:
    'Join us in working towards social equity at Equithon on May 1-3, 2018.',
  actionButton: siteButtons.actionButton
};

export const aboutPageData = {
  header: 'What is Equithon?',
  desc:
    'Equithon is a student-run hackathon held at the University of Waterloo where participants create solutions for a variety of social equity challenges. Our goal is to create an inclusive environment where all attendees feel comfortable learning, sharing their ideas, and developing something amazing that can improve the world around us.',
  testimonials: [
    {
      authorName: 'Mandy Meindersma',
      authorDesc: 'University of Alberta CS, Equithon 2018 Category Winner',
      authorQuote:
        'I was able to meet three amazing bad ass women who helped me grow and made me a better person. We all found our own strengths and we made something amazing together.'
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
        contents: '... representation',
        backgroundColor: '#AE85E6',
        color: 'white'
      },
      {
        contents: '... countries',
        backgroundColor: '#A9C2F8',
        color: '#46484A'
      },
      {
        contents: '... backgrounds',
        backgroundColor: '#E2D4F5',
        color: '#46484A'
      }
    ]
  },
  thisYear: {
    header: 'A Sneak Peek At 2019',
    statCounters: [
      { start: 0, end: 500, suffix: '+', subtitle: 'Attendees' },
      { start: 0, end: 36, subtitle: 'Hours' },
      { start: 100, end: 1, subtitle: 'Common Goal' },
      {
        start: 0,
        end: 5,
        supertitle: 'Participants will work towards one of:',
        subtitle: 'Tracks'
      }
    ],
    categories: [
      {
        contents: 'Physical Accessibility',
        backgroundColor: '#E2D4F5',
        color: '#46484A'
      },
      {
        contents: 'Female Empowerment',
        backgroundColor: '#AE85E6',
        color: 'white'
      },
      {
        contents: 'Economic Disparity',
        backgroundColor: '#E2D4F5',
        color: '#46484A'
      },
      {
        contents: 'Mobility Rights',
        backgroundColor: '#AE85E6',
        color: 'white'
      },
      {
        contents: 'Mental Health',
        backgroundColor: '#E2D4F5',
        color: '#46484A'
      }
    ]
  }
};

export const mobileMenuData = {
  links: siteStructure.sections
};
