/*
|-----------------------------------------
| setting up Data for the App
| @author: Toufiquer Rahman
| @company: Stars English Centre
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

const navData = {
  baseInfo: {
    firstName: 'Stars',
    lastName: ' English Centre',
  },

  about: {
    groupTitle: 'About',
    fullName: 'Stars English Centre',
    description:
      'Private-care English training centre providing professional courses, IELTS preparation, and corporate training programs.',
    links: [
      {
        id: 1,
        title: 'Who We Are',
        url: '/about',
        description:
          'Stars English Centre offers personalized English learning programs for students and professionals.',
      },
      {
        id: 2,
        title: 'Our Mission',
        url: '/about#mission',
        description:
          'To help learners master English language skills and achieve global communication confidence.',
      },
      {
        id: 3,
        title: 'Why Choose Us',
        url: '/about#why-us',
        description:
          'We ensure top-quality mentoring, modern course design, and 100% student support for success.',
      },
    ],
  },

  services: {
    groupTitle: 'Courses & Services',
    data: [
      {
        title: 'Foundation English (Regular & Executive)',
        href: '/courses/foundation-english',
        description:
          'Improve grammar, speaking, and writing skills in 2.5–3 months. Ideal for beginners.',
      },
      {
        title: 'Advanced Spoken & Phonetics',
        href: '/courses/advanced-spoken',
        description:
          'Enhance pronunciation, fluency, and confidence through advanced communication practice.',
      },
      {
        title: 'Grammar & Freehand Writing',
        href: '/courses/grammar-writing',
        description:
          'Develop strong grammatical accuracy and writing flow for academic and professional success.',
      },
      {
        title: 'IELTS (Regular, Executive & Crash)',
        href: '/courses/ielts',
        description:
          'Target your desired IELTS score with personalized training and mock tests.',
      },
      {
        title: 'PTE Academic / UK VI',
        href: '/courses/pte',
        description:
          'Learn with structured guidance to achieve your desired PTE Academic or UK VI test score.',
      },
      {
        title: 'Kids & Juniors English',
        href: '/courses/kids-juniors',
        description:
          'Long-term English development for school students focusing on speaking, writing, and reading.',
      },
      {
        title: 'Corporate Training',
        href: '/corporate-training',
        description:
          'Tailored English communication programs for businesses and professionals.',
      },
    ],
  },

  othersLink: [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'Admission', url: '/admission' },
    { id: 3, title: 'Contact', url: '/contact' },
    { id: 4, title: 'Blog', url: '/blog' },
  ],
};

export default navData;
