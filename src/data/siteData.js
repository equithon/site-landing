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
  mainText: 'Be a part of the change.',
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
