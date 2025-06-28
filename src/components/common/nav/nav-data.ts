/*
|-----------------------------------------
| setting up Data for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
const navData = {
  baseInfo: {
    firstName: "",
    lastName: ""
  },
  about: {
    groupTitle: "About",
    fullName: "Stars' English Centre",
    description: "The perfect place to improve your English skills with clear, engaging, and helpful lessons for learners of all levels.",
    links: [
      {
        id: 1,
        title: "Introduction",
        url: "/",
        description: "Stars' English Centre is a highly recommended place to learn English, with easy-to-understand and very helpful lessons.",
      },
      {
        id: 2,
        title: "Best Service",
        url: "/",
        description: "We offer specialized courses like Spoken English with IPA practice and comprehensive IELTS preparation including free mock tests.",
      },
      {
        id: 3,
        title: "Trust and Experience",
        url: "/",
        description: "Learn with confidence from our experienced teachers and our honorable adviser, Mr. Sharif sir, in a supportive environment.",
      },
    ],
  },
  services: {
    groupTitle: "Services",
    data: [
      {
        title: "Supports",
        href: "/",
        description:
          "Dedicated support for students with special classes, free seminars, and guidance from experienced educators to help you succeed.",
      },
      {
        title: "Services",
        href: "/",
        description:
          "Our core services include Spoken English, IELTS preparation, free mock tests, and special seminars to boost your skills.",
      },
      {
        title: "Guide",
        href: "/",
        description:
          "Our free IELTS seminars and expert guidance will help you understand the path to achieving a high score.",
      },
      {
        title: "Helps",
        href: "/",
        description: "We help you build a strong foundation by practicing with IPA symbols (24 Consonant & 20 Vowel sounds).",
      },
      {
        title: "Information",
        href: "/",
        description:
          "For admission and information, contact our Badda (Head Office), Uttara, or Mymensingh branches to join our next batch.",
      },
    ],
  },
  othersLink: [
    { id: 1, title: "Course", url: "/course" },
    { id: 2, title: "Blog", url: "/blog" },
    { id: 3, title: "Contact", url: "/contact" },
  ],
};
export default navData;