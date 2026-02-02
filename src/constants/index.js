import {
  java,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  bootstrap,
  tailwind,
  nodejs,
  mongodb,
  git,
  canva,
  docker,
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "bootstrap",
    icon: bootstrap,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "canva",
    icon: canva,
  },
  {
    name: "java",
    icon: java,
  },
];

// const experiences = [
//   {
//     title: "Freelance Frontend Developer",
//     company_name: "Self-employed",
//     icon: freelance, // Replace with any icon you like
//     iconBg: "#0188E3",
//     date: "Jan 2023 - Present",
//     points: [
//       "Built responsive and interactive web apps using React.js, Tailwind CSS, and GSAP.",
//       "Developed and deployed modern landing pages and portfolio websites for clients.",
//       "Integrated APIs and handled form validation, animations, and smooth scroll effects.",
//       "Delivered pixel-perfect UI designs based on Figma and Adobe XD mockups.",
//     ],
//   },
//   {
//     title: "Full Stack Development Trainee",
//     company_name: "Sheryians Coding School",
//     icon: sheryians, // Or institute logo
//     iconBg: "#ffff",
//     date: "Aug 2023 - Mar 2025",
//     points: [
//       "Completed an intensive training program focused on MERN stack development.",
//       "Built multiple full-stack projects, including CRUD apps and authentication systems.",
//       "Worked with tools like Node.js, Express.js, MongoDB, React.js, and Git.",
//       "Gained hands-on experience in deploying apps and following clean code practices.",
//     ],
//   },
// ];

const experiences = [
  {
    title: "Trainee Software Developer (Internship & Certification)",
    company_name: "Coding Ninjas",
    icon: sheryians, 
    iconBg: "#ffff",
    date: "February 2024 - Present",
    points: [
      "Built and debugged web application features using JavaScript, Node.js, and frontend frameworks, improving load time by 20%, while collaborating in code reviews to boost software quality and increase personal DSA problem-solving efficiency by 40%.",
      "Deployed code via Git/GitHub, ensuring seamless version control and integration.",
    ],
  },
  {
    title: "Core Member",
    company_name: "Student Media Team",
    icon: freelance, 
    iconBg: "#0188E3",
    date: "November 2023 - Present",
    points: [
      "Spearheaded campus media coverage, boosting student engagement by 30%.",
      "Led design and photography initiatives for institutional activities, ensuring timely coverage.",
      "Produced digital content that boosted event engagement by 20% across campus platforms.",
    ],
  },
  {
    title: "Student Member",
    company_name: "Vedantu",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2021 - August 2023",
    points: [
      "Selected for Vedantu's JEE Eklavya 2023 program, ranked top 1% nationwide.",
      "Trained in advanced problem-solving and competitive exam strategies, improving problem-solving skills by 30% through analytical and logical reasoning enhancement.",
      "Recognized for academic excellence in a prestigious IIT-focused program by India's leading EdTech platform.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
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

// const projects = [
//   {
//     name: "MacBookPro-redesign",
//     description:
//       "A visually engaging website that showcases a redesigned MacBook Pro with smooth animations and a realistic 3D model, offering users an interactive and immersive way to explore the product’s look and features.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "three.js",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: macbookpro,
//     source_code_link: "https://github.com/gitswastik08/macbook_landingpage",
//     live_website_link: "https://macbookpro3d.netlify.app/",
//   },
//   {
//     name: "Falverra Redesign",
//     description:
//       "A sleek and animated website redesign for Falverra, combining a clean layout with smooth transitions to deliver an engaging, modern browsing experience that highlights the brand’s visual identity and message.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "multi-page",
//         color: "green-text-gradient",
//       },
//     ],
//     image: falverra,
//     source_code_link: "https://github.com/gitswastik08/falverra-redesign",
//     live_website_link: "https://falverra-recode.netlify.app/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     // github link ⬇️
//     source_code_link: "https://github.com/",
//     // project link ⬇️
//     live_website_link: "https://app.netlify.com/teams/gitswastik08/projects",
//   },
// ];

const projects = [
  {
    name: "Movie Recommendation App",
    description:
      "A dynamic movie recommendation web app using JavaScript and TMDB API, achieving 90%+ user satisfaction, reducing page load time by 25%, and handling 500+ movie data points via asynchronous XHR requests and API integration.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "tmdb-api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/Mrutunjaya-Panda/Movie-Recommendation",
    live_website_link: "https://mrutunjaya-panda.github.io/Movie-Recommendation/",
  },
  {
    name: "Visual Seat Booking Web App",
    description:
      "Implemented front-end functionalities using HTML, CSS, and JavaScript, leveraging DOM manipulation and event handling to enhance user experience, by improving usability by 40%.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: falverra,
    source_code_link: "https://github.com/Mrutunjaya-Panda/Seat-BookingWebsite",
    live_website_link: "https://mrutunjaya-panda.github.io/Seat-BookingWebsite/",
  },
  {
    name: "Tic-Tac-Toe game",
    description:
      "Developed a console-based Tic-Tac-Toe game in Core Java using OOP principles, enhancing engagement and improving user interaction efficiency by 30% through optimized logic and seamless CLI experience.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
      {
        name: "cli",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Mrutunjaya-Panda/Tic-Tac-Toe-Game",
    live_website_link: "https://github.com/Mrutunjaya-Panda/Tic-Tac-Toe-Game",
  },
];

export { services, technologies, experiences, testimonials, projects };
