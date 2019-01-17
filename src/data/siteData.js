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
      question:
        'Save the date! Equithon will be held on May 3-5, 2019 at the University of Waterloo. ',
      answer:
        'You’ll get the chance to make a difference in the world! Over the course of a 36 hours, you and up to 3 other team members will create a technical project that solves an issue in one of our 5 project tracks.'
    },
    {
      question: "Who's able to attend?",
      answer:
        'As long as you’re currently enrolled in a Canadian post-secondary institution or a local Kitchener-Waterloo high school, we’d love to see you at the event as a hacker! If you’re not, don’t worry - you’ll have the chance to share your knowledge as a mentor or volunteer.'
    },
    {
      question: 'What categories will Equithon be covering this year?',
      answer:
        "Equithon's 5 categories, or tracks, for 2019 are Economic Disparity, Female Empowerment, Mental Health, Mobility Rights, and Physical Accessibility. Participants will get a chance to create a project that contributes meaningfully to one of these fields, and more information regarding each category will be posted on our social media platforms in the coming weeks!"
    },
    {
      question: 'How is Equithon different from other hackathons?',
      answer:
        'Equithon is one of its kind in the hackathon community! We are a non-overnight hackathon and our categories are targeted specifically at tackling today’s most pressing social equity issues.'
    },
    {
      question: 'What if I’ve never been to a hackathon before?',
      answer:
        'Equithon is open to hackers with varying levels of experience. Our workshops will be tailored based on competency levels and we will also be hosting mentors from different industries to guide you and your ideas throughout the hackathon!'
    },
    {
      question: 'When will applications open for 2019?',
      answer:
        'Applications will be live later this term. Be sure to subscribe to our mailing list and/or follow us on our social media platforms to stay updated!'
    },
    {
      question: "I'm interested! Where can I find more information?",
      answer:
        'Subscribe to our mailing list and follow us on Instagram, Twitter, LinkedIn, and Facebook for more updates! Feel free to reach out to us at hello@equithon.org if you have any further questions.'
    }
  ]
};
