import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  teciz,
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
    title: "Full Stack Blockchain Developer",
    icon: web,
  },
  {
    title: "Smart Contract Developer",
    icon: mobile,
  },
  {
    title: "Mern Stack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  // {
  //   name: "Hardhat",
  //   icon: hardhat,
  // },
  {
    name: "Ethereum",
    icon: eth,
  },

  {
    name: "Three JS",
    icon: threejs,
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
    title: "Software Engineer",
    company_name: "US based health care company Human Health Care",
    icon: teciz,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications for their pharmacy using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Working with Woocommerce Restfull APIs.",
      "An AI based Image and LAb detection model that can sort file to thier respective folder.",
      "An Excel Automation to send whatsapp message directly from one click."
    ],
  },
  {
    title: "Blockchain Developer Intern",
    company_name: "Japan based InfoTech Company NFTstudio24",
    icon: technyx,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Feb 2023",
    points: [
      "Creating BlockChain Name Service (BNS) and writing smart contracts for decentralized web applications.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with with web with help of EtherJs and Meta Mask.",
      "On purchasing Domain an NFT is Generated based on their Domain and transfer to their Wallet.",
      "Implementing responsive design.",
      "Participating in code reviews and providing constructive feedback to other developers.",

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
      "I thought it was impossible to make a website as beautiful as our product, but Hammad proved me wrong.",
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

const projects = [{
  name: "ThirJob.",
  description:
    "A Freelanceplatform powered by Blockchain with instant payment and record on blockchain.",
  tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "Ether Js",
      color: "green-text-gradient",
    },
    {
      name: "Solidity",
      color: "pink-text-gradient",
    },
    {
      name: "cloud mongodb",
      color: "blue-text-gradient",
    },
  ],
  image: Project10,
  source_code_link: "https://github.com/RaoSahab14127",
},
  {
    name: "Web3 Uber",
    description: `A Decentrilize car rental Application.`,
    tags: [
      {
        name: "nextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "MapBox",
        color: "green-text-gradient",
      },
      {
        name: "Sanity.io",
        color: "green-text-gradient",
      },
      {
        name: "MetaMask",
        color: "pink-text-gradient",
      },
      {
        name: "EtherJs",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/RaoSahab14127",
  },
  {
    name: "HMWheels",
    description: `An decentrilized Car Selling Website with Google auth and metaMask.`,
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "HardHat",
        color: "blue-text-gradient",
      },
      {
        name: "EtherJs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "FireBase",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/RaoSahab14127",
  },
  {
    name: "Web3Chat App",
    description:
      "A blockchain based chat application.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "HardHat",
        color: "green-text-gradient",
      },
      {
        name: "SmartContracts",
        color: "pink-text-gradient",
      },
    ],
    image: Project3,
    source_code_link: "https://github.com/RaoSahab14127",
  },
  {
    name: "Human Health  Care",
    description:
      "web application for patients to purchace Med and see their Medical record.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "WooCommerce Rest API",
        color: "green-text-gradient",
      },
      {
        name: "Excel React Integration",
        color: "pink-text-gradient",
      },
    ],
    image: Project4,
    source_code_link: "https://github.com/RaoSahab14127",
  },
  {
    name: "Wow Domain Name",
    description:
      "Domain name generator with respect to thier Wallet Address also generate their NFT and send that to their Wallet.",
    tags: [
      {
        name: "BlockChain Name Service",
        color: "blue-text-gradient",
      },
      {
        name: "Ether Js",
        color: "green-text-gradient",
      },
      {
        name: "NFT ERC721",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/RaoSahab14127",
  },
  {
    name: "Human Health Care ChatBot",
    description:
      "An Chat bot made on react for customer help.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Project6,
    source_code_link: "https://github.com/RaoSahab14127",
  },
];

export { services, technologies, experiences, testimonials, projects };
