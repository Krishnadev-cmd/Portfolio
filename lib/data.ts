export const personalInfo = {
  name: 'Krishnadev M',
  email: 'ksisop2003@gmail.com',
  phone: '+91 7356432693',
  address: 'Kannur , Kerala ,India',
  bio: 'I’m Krishnadev M, a developer who began my journey in tech as a AI Full Stack Web Developer in 2021. I quickly fell in love with coding and web development, crafting innovative and functional applications. Over time, my focus shifted to Machine Learning, AI, and Deep Networks. I’m currently pursuing an M.Tech CSE with a specialization in Artificial Intelligence & Data Analytics (AI&DA). Previously, I contributed to the Sunbird ED project, where I worked on solving real-world problems to make a positive impact. I’m always eager to explore new technologies and push the boundaries of what’s possible, with the goal of creating solutions that make a meaningful difference.',
  shortBio: 'Experienced in developing and deploying full-functional, robust and scalable web applications from base to production.',
  profilePicture: '/images/profile.png', // Update with your actual profile picture path
  social: {
    github: 'https://github.com/Krishnadev-cmd',
    linkedin: 'https://www.linkedin.com/in/krishnadev2263/',
  },
    location: 'Kannur , Kerala ,India',
  recentSkills: [
    'NextJS',
    'NLP',
    'Deep Learning',
    'LLM',
  ],
  achievementsLink: '/achievements',
  resumeLink: 'https://docs.google.com/document/d/1iHu5du8seaWvDOyASRNOpOHsHLSsqf4W/edit?usp=sharing&ouid=106453264344342090622&rtpof=true&sd=true', // Placeholder for resume link
};

export const skills = {
  core: [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 95 },
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 80 },
    { name: 'Mongo DB', level: 70 },
    { name: 'My Sql (Queries)', level: 75 },
    { name: 'PostgreSQL (Queries)', level: 75 },
    { name: 'Redis (Queries)', level: 75 },
    { name: 'Machine Learning', level: 75 },
    { name: 'Tensorflow', level: 80 },
    { name: 'Docker', level: 90 },
  ],
  other: [
    { name: 'Git/Github', level: 85 },
    { name: 'Tailwind CSS', level: 70 },
    { name: 'Cloud Functions', level: 70 },
    { name: 'Data Structures & Algorithms', level: 80 },
    { name: 'Socket.io', level: 70 },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Casual Competitor',
    description: 'A Streamlit web application for discovering causal relationships in your data using Microsoft\'s DoWhy library. This tool helps you identify and quantify causal effects between variables in your datasets through correlation-based graph discovery and rigorous causal inference.',
    technologies: ['Causica', 'DoWhy', 'Correlation Analysis' , 'Streamlit' , 'Data Analysis' , 'Machine Learning'],
    image: '/images/casual-competitor.png', // Update with your project image path
    liveUrl: 'https://casual-competitor-susbk7aqfls5uxswyrp2qz.streamlit.app/',
    githubUrl: 'https://github.com/Krishnadev-cmd/Casual-Competitor',
  },
  {
    id: 2,
    title: 'S Files',
    description: 'A comprehensive, production-ready file management platform built with Next.js 15, designed specifically for students to store files as a cluster and understand their content using AI. Features Google authentication, cloud storage integration, and modern web technologies.',
    technologies: ['TypeScript', 'Next.js', 'LLM' , 'File Management' , 'AWS S3 Object Storage' , 'R2 Containerization' ],
    image: '/images/s-files.png', // Update with your project image path
    liveUrl: 'https://s-files.vercel.app/',
    githubUrl: 'https://github.com/Krishnadev-cmd/S-files',
  },
  {
    id: 3,
    title: 'Skill Swap',
    description: 'A modern platform for exchanging skills and knowledge within a community. Connect with like-minded individuals, share your expertise, and learn new skills through real-time interactions.',
    technologies: ['TypeScript', 'Next.js', 'LLM' , 'File Management' , 'Socket.io' , 'WebRTC' ],
    image: '/images/skill-swap.png', // Update with your project image path
    liveUrl: 'https://skill-swap-mauve-rho.vercel.app/',
    githubUrl: 'https://github.com/Krishnadev-cmd/Skill-Swap',
  },
];

export const experience = [
  {
    company: 'Fellowship.AI',
    title: 'Data Science Fellow',
    date: 'Oct 2024 - Dec 2024',
    description: [
      'Orchestrated data collection and analysis for over 10,000 inventory items across multiple departments.',
      'Participated in structured internship training and collaborative development sprints with cross-functional teams.',
    ],
    link: 'https://drive.google.com/file/d/1xQUV55womg2LMQSV_e-OiZs6VQwEabF5/view?usp=sharing',
  },
];

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];