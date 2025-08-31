import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  flutter,
  html,
  css,
  reactjs,
  redux,
  frontend,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  whiterapps,
  technyx,
  solidity,
  hardhat,
  eth,
  project1,
  project2,
  Project3,
  Project4,
  Project10,
  Project6,
  project5,
  cornwall,
  dart,
  mysql,
  cornwallp,
  desiApp,
  kinect,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Flutter Developer",
    icon: flutter,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },

];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  }, {
    name: "Dart",
    icon: dart,
  }, {
    name: "Mysql",
    icon: mysql,
  }, {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },


  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Flutter intern",
    company_name: "Indian product based company",
    icon: whiterapps,
    iconBg: "#383E56",
    date: "March 2025 - june 2025",
    points: [
     " Developed using Flutter & Firebase:",
"Built a cross-platform mobile app with Flutter for the frontend (UI/UX).",
"Used Firebase backend services for scalability and security.",
"Core Features Implemented:",
"User Authentication → Integrated Firebase Authentication for secure login/sign-up.",
"Firestore Database → Designed and connected a real-time NoSQL database for dynamic data storage and retrieval.",
"State Management → Ensured smooth real-time updates in the UI using state management techniques.",
"Collaboration & Process:",
"Worked in an Agile environment, participating in sprints and stand-ups.",
"Fixed bugs & optimized performance for better user experience.",
"Implemented new features across both frontend (UI) and backend (database & auth).",
    ],
  },
  {
    title: "Website Maintenance",
company_name: "Cornwall Islamic Foundation",
icon: cornwall,
iconBg: "#E6DEDD",
date: "Dec 2022 - Feb 2023",
points: [
  "Developed and maintained the official website using Next.js and React.",
  "Integrated Sanity CMS for dynamic content management.",
  "Configured and deployed the website on Vercel with custom domain setup.",
  "Implemented authentication with Google and other providers using NextAuth.",
  "Debugged and resolved 500/504 server errors and deployment issues.",
  "Created responsive UI components and popup dialogs for announcements.",
  "Ensured SEO optimization and analytics integration (Google Analytics / Pixel).",
  "Collaborated with the team to provide technical support and updates.",
],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Umair proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kinect",
    description: `Attendance app for employees`,
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Provider",
        color: "green-text-gradient",
      },
    
    ],
     image: kinect,
   source_code_link: "https://github.com/Rao-Umair-Ali",
  },
  {
    name: "CornWall Islamic Foundation Web",
    description: `Landing Website with LMS`,
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "sanity.io",
        color: "green-text-gradient",
      },
      {
        name: "Vercel",
        color: "pink-text-gradient",
      },
    
    ],
     image: cornwallp,
   source_code_link: "https://github.com/Rao-Umair-Ali",
  },
  {
    name: "Desi-Mart",
    description:
      "An Ecommerce app Basic",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "PropDrilling",
        color: "pink-text-gradient",
      },
    ],
    image: desiApp,
   source_code_link: "https://github.com/Rao-Umair-Ali",
  },
 
];

export { services, technologies, experiences, testimonials, projects };
