export const personalInfo = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 123-456-7890',
  address: '123 Main St, Anytown, USA',
  bio: 'I’m Pranshu Jain, a developer who began my journey in tech as a Full Stack Web Developer in 2020, inspired by Google Assistant. I quickly fell in love with coding and web development, crafting innovative and functional applications. Over time, my focus shifted to Machine Learning, AI, and Deep Networks. I’m currently pursuing an M.Tech CSE with a specialization in Artificial Intelligence & Data Analytics (AI&DA). Previously, I contributed to the Sunbird ED project, where I worked on solving real-world problems to make a positive impact. I’m always eager to explore new technologies and push the boundaries of what’s possible, with the goal of creating solutions that make a meaningful difference.',
  shortBio: 'Experienced in developing and deploying full-functional, robust and scalable web applications from base to production.',
  profilePicture: 'https://via.placeholder.com/300',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  recentSkills: [
    'AI Agents',
    'NLP',
    'Deep Learning',
    'LLM',
  ],
  achievementsLink: '/achievements',
  resumeLink: '/resume.pdf', // Placeholder for resume link
};

export const skills = {
  core: [
    { name: 'C/C++', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'R', level: 80 },
    { name: 'Java', level: 70 },
    { name: 'React.js', level: 90 },
    { name: 'Golang', level: 75 },
    { name: 'Next.js', level: 80 },
    { name: 'AngularJs', level: 70 },
    { name: 'Node.js/Express.js', level: 80 },
    { name: 'Nest.js', level: 70 },
    { name: 'Mongo DB', level: 70 },
    { name: 'My Sql (Queries)', level: 75 },
  ],
  other: [
    { name: 'Tensorflow', level: 80 },
    { name: 'Keras', level: 80 },
    { name: 'Git/Github', level: 75 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Firebase', level: 70 },
    { name: 'Cloud Functions', level: 70 },
    { name: 'Data Structures & Algorithms', level: 80 },
    { name: 'Sockets and webRTC', level: 70 },
    { name: 'Redux', level: 70 },
    { name: 'NPM Package Development', level: 80 },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of project one.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/300x200.png/007bff/ffffff?text=Project+One',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of project two.',
    technologies: ['TypeScript', 'Node.js', 'Express'],
    image: 'https://via.placeholder.com/300x200.png/28a745/ffffff?text=Project+Two',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export const experience = [
  {
    company: 'Packt Publishing',
    title: 'Technical Reviewer',
    date: 'Feb 2024 - Mar 2024',
    description: [
      'Actively reviewed a comprehensive Node.js book covering beginner to advanced topics. Focused on enhancing the material by integrating practical suggestions and relevant real-world examples.',
      'Delved into explaining intricate concepts such as error handling and event emitting, ensuring the content is accessible and understandable for readers of all levels.',
    ],
    link: 'https://www.amazon.in/Node-js-Beginners-comprehensive-full-featured-applications/dp/1803245174',
  },
  {
    company: 'C4GT\'23',
    title: 'Software Developer Intern',
    date: 'May 2023 - Aug 2023',
    description: [
      'Developed and maintained web applications using React and Node.js.',
      'Collaborated with a team to implement new features and improve existing ones.',
    ],
    link: '#', // Placeholder link
  },
  {
    company: 'Digilocker',
    title: 'Frontend Developer',
    date: 'Jan 2023 - Apr 2023',
    description: [
      'Contributed to the development of user interfaces for Digilocker platform.',
      'Implemented responsive designs and optimized for various devices.',
    ],
    link: '#', // Placeholder link
  },
  {
    company: 'Parentheses Labs',
    title: 'Backend Developer',
    date: 'Oct 2022 - Dec 2022',
    description: [
      'Designed and implemented RESTful APIs using Python and FastAPI.',
      'Managed database interactions and ensured data integrity.',
    ],
    link: '#', // Placeholder link
  },
  {
    company: 'Omikron Technologies',
    title: 'Full-Stack Developer',
    date: 'Jul 2022 - Sep 2022',
    description: [
      'Developed and deployed full-stack applications using MERN stack.',
      'Participated in code reviews and contributed to architectural decisions.',
    ],
    link: '#', // Placeholder link
  },
];

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' }, // Assuming a research section
  { name: 'Achievements', href: '/achievements' },
  { name: 'Contact', href: '#contact' },
];