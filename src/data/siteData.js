import React from 'react';

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

export const mobileMenuData = {
  links: siteStructure.sections
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
        color: '#46484A'
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
        color: '#46484A'
      },
      {
        contents: <div style={{ fontWeight: 500 }}>Female Empowerment</div>,
        backgroundColor: '#AE85E6',
        color: 'white'
      },
      {
        contents: <div style={{ fontWeight: 500 }}>Economic Disparity</div>,
        backgroundColor: '#E2D4F5',
        color: '#46484A'
      },
      {
        contents: <div style={{ fontWeight: 500 }}>Mobility Rights</div>,
        backgroundColor: '#E2D4F5',
        color: '#46484A'
      },
      {
        contents: <div style={{ fontWeight: 500 }}>Mental Health</div>,
        backgroundColor: '#AE85E6',
        color: 'white'
      }
    ]
  }
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
        'You’ll get the chance to make a diffeet the chance to make a diffeet the chance to make a diffeet the chance to make a diffeet the chance to make a diffeet the chance to make a diffeet the chance to make a diffeet the chance to make a diffeet the chance to make a diffeet the chance to make a difference in the world! Over the course of a 36 hours, you and up to 3 team members will create a technical project that soes an issue in one of our 5 project tracks.'
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
      question: 'What exactly do you do at Equithon?',
      answer:
        'You’ll get the chance to make a difference in the world! Over the course of a 36 hours, you and up to 3 other team members will create a technical project that solves an issue in one of our 5 project tracks.'
    },
    {
      question: "What's going to be happening?",
      answer:
        'You’ll get the chance to make a difference in the world! Over the course of a 36 hours, you and up to 3 team members will create a technical project that soes an issue in one of our 5 project tracks.'
    }
  ]
};
