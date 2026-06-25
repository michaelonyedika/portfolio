// data/index.ts
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Building scalable AI-powered and full-stack applications.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "AI & Full-Stack Technology Stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Experienced in collaborating across global teams and time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 4,
    title:
      "Passionate about AI, cloud infrastructure, and modern software engineering.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently building AI-powered products and scalable backend systems.",
    description: "The focused",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's build your next AI or SaaS product.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Innohub - Crowdsourcing platform",
    des: "Enabling companies, governments, and NGOs to connect with a global network of problem solvers and innovators.",
    img: "/sdg-innohub-2.PNG",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://innohub.unsdgleadershipcenter.org/",
    pinLink: "unsdgleadershipcenter.org",
    clickableText: "Check Live Site",
  },
  {
    id: 2,
    title: "StoreFront - E-commerce website",
    des: "Simplify your e-commerce experience with StoreFront. Seamlessly connect with customers and manage your online store.",
    img: "/ecomm.PNG",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://heartfelt-cheesecake-33a5a3.netlify.app/",
    pinLink: "ecomm.com",
    clickableText: "Check Live Site",
    // clickableText: "Coming Soon",
  },
  {
    id: 3,
    title: "Appety - Restaurant booking & food delivery app",
    des: "Reintegrated payment services across POS, kiosk, digital menu, and delivery platforms using Express.js, GraphQL, Redis, and PostgreSQL, improving payment success rates to 99%",
    img: "/appety-site.PNG",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://web.appety.menu/",
    pinLink: "appety.menu",
    clickableText: "Check Live Site",
  },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    quote:
      "Delivered payment infrastructure improvements across POS, kiosk, digital menu, and delivery platforms, achieving 99%+ payment success rates and supporting reliable transaction processing at scale.",
    name: "99%+",
    title: "Payment Success Rate",
  },
  {
    quote:
      "Built a no-code e-commerce web builder that enabled merchants to launch online stores in minutes, reducing website setup time by more than 80%.",
    name: "80%+",
    title: "Reduction in Store Setup Time",
  },
  {
    quote:
      "Optimized backend services using Node.js, GraphQL, Redis, and PostgreSQL, improving API response times by 35% and enhancing system performance.",
    name: "35%",
    title: "Faster API Response Times",
  },
  {
    quote:
      "Developed and scaled SaaS, fintech, crowdsourcing, and e-commerce platforms used by hundreds of organizations and thousands of users.",
    name: "1,000+",
    title: "Users & Contributors Supported",
  },
  {
    quote:
      "Built and deployed machine learning solutions for real estate price prediction and loan approval automation using Python, Scikit-learn, and AWS cloud infrastructure.",
    name: "AI/ML",
    title: "Production ML Solutions",
  },
];

export const companies = [
  {
    id: 1,
    name: "Python",
    img: "/python-logo.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "JavaScript",
    img: "/javascript-logo.png",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "React JS",
    img: "/React-icon.png",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "PostgreSQL",
    img: "/Postgresql.png",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Engineer - Appety",
    desc: "Reintegrated payment services across POS, kiosk, digital menu, and delivery platforms using Express.js, GraphQL, and PostgreSQL, improving payment success rates to 99%.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Engineer - Deempay Technology Ltd.",
    desc: "Contributed to the development of scalable e-commerce solutions that expanded clients' digital presence, increasing customer reach and improving online shopping experiences.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer Intern - Deempay Technology Ltd.",
    desc: "Collaborated with other teams to deliver high-impact web applications using React.js, Next.js, Tailwind CSS, REST APIs, and modern frontend engineering practices.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/michaelonyedika",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/okoyentamichael",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/michael-okoyenta-8357aa163/",
  },
];
