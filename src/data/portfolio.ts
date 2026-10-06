// Semua konten website ada di file ini. Edit di sini, komponen tidak perlu disentuh.

export const profile = {
  firstName: 'Amanda',
  lastName: 'Priscilia',
  role: 'Front-End & Web Developer',
  intro: 'I build responsive, accessible web interfaces that are clean to read and easy to use.',
  photo: '/images/5.webp',
  contactPhoto: '/images/6.webp',
  aboutPhoto: '/images/no-bg.webp',
  about: [
    "Hi, I'm Priscilia, an Informatics graduate from Universitas Mercu Buana Yogyakarta with a strong interest in Web Development and UI/UX.",

    'I have experience developing websites using React.js, Next.js, and Laravel, along with a basic understanding of UI/UX design using Figma. I am also familiar with Machine Learning, Back-End Development, and AI technologies.',

    'I enjoy learning by doing and continuously improving my skills through academic and real-world projects. I am passionate about creating websites that are functional, responsive, and user-friendly while continuously exploring new technologies and improving my problem-solving skills.',
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'My Journey', href: '#training' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
// TODO: ganti dengan project asli. Taruh gambar di public/images/projects/
export const projects = [
  {
    name: 'NaraStock - Weekly Stock Market Analysis for Beginners',
    description:
      'A Capstone Project from Coding Camp by DBS Foundation in collaboration with Dicoding, developed as a team project. Contributed as a Full-Stack Developer, focusing on website development, back-end development, API integration, and application testing.',
    image: '/images/proj2.webp',
    link: 'https://amandapriscilia.github.io/NaraStocksm/',
  },
  {
    name: 'Client Project: Personal Portfolio Website',
    description: 'A cinematic personal portfolio website for filmmaker and director Markus Matulessy, showcasing his film works, creative projects, and professional portfolio.',
    image: '/images/proj5.webp',
    link: 'https://markmatulessy.com/',
  },
  {
    name: 'Story App',
    description: 'A platform for gen Z to share stories and opinions around social issues and drive positive change.',
    image: '/images/proj1.webp',
    link: 'https://suaraku.netlify.app/',
  },
  {
    name: 'Article Website',
    description: 'Responsive web of cultural articles from the Maluku region.',
    image: '/images/proj3.webp',
    link: 'https://amandapriscilia.github.io/UTSProject/',
  },
  {
    name: 'Notes App',
    description: 'Notes application platform that uses simple design and connects directly to APIs.',
    image: '/images/proj4.webp',
    link: 'https://amandapriscilia.github.io/NotesApp/',
  },
];

export const educations = [
  {
    title: 'Bachelor of Informatics',
    place: 'Universitas Mercu Buana Yogyakarta',
    period: '2022 – 2026',
    detail:
      'Completed a Bachelor of Informatics with a strong interest in Web Development, Artificial Intelligence, and Machine Learning. Studied programming fundamentals, algorithms, Computer Vision, image processing, data mining, and various computational methods. Graduated with a GPA of 3.78/4.00.',
  },
];

export const experiences = [
  {
    title: 'Web Development Teaching Assistant (Asisten Praktikum)',
    place: 'Universitas Mercu Buana Yogyakarta',
    period: '2025 – 2026',
    detail:
      'Assisted students in learning Full-Stack Web Development fundamentals using HTML, CSS, PHP, and database integration. Guided students through practical exercises, basic web application development, and implementation of web technologies.',
    images: ['/images/asdos/1.jpg'],
  },
  {
    title: 'Deputy Secretary General (Wakil Sekretaris Jenderal)',
    place: 'Student Representative Council (Majelis Permusyawaratan Mahasiswa), Universitas Mercu Buana Yogyakarta',
    period: '2025 – 2026',
    detail: 'Reported to the Secretary General and the Chairperson. Coordinated with divisions to carry out work programs and served as a liaison to ensure information flowed between the Secretary-General and each commission.',
    images: ['/images/sekre/1.jpg',
      '/images/sekre/2.jpg',
      '/images/sekre/3.jpg',
      '/images/sekre/4.jpg',
      '/images/sekre/5.jpg',
      '/images/sekre/6.jpg'
    ],
  },
];

export const training = {
  program: 'Studi Independent',
  path: 'Learning Path: Front-End & Back-End Developer',
  organizer: 'Coding Camp Dicoding by DBS Foundation',
  period: 'February 2025 – July 2025',
  summary:
    'Successfully completed the program with a Distinction predicate, achieving a final score of 93.5 / 100. Focused on Front End, JavaScript, API integration, UI/UX Design principles, Native web technologies, and developing strong Teamwork & Soft Skills.',
};

export const certifications = [
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    issued: 'September 19, 2026',
    images: ['/images/microsoft/1.jpg',
      '/images/microsoft/2.jpg',
    ],
  },
  {
    title: 'Learning Path: Front-End & Back-End Developer',
    issuer: 'Coding Camp Dicoding by DBS Foundation',
    issued: 'Februari 2025',
    images: ['/images/codingcamp/1.jpg', '/images/codingcamp/2.jpg'],
  },
];
export const achievements = [
  {
    title: '1st Place Faculty-Level Programming Competition',
    issuer: 'Faculty of Information Technology, Universitas Mercu Buana Yogyakarta',
    date: 'December 2025',
    description:
      'Served as Team Lead and Front-End Developer in a three-member team, leading UI design and website development using HTML, CSS, Tailwind CSS, and Vanilla JavaScript.',
    images: [
      '/images/lomba/1.jpg',
      '/images/lomba/2.jpg',
      '/images/lomba/3.webp',
      '/images/lomba/4.webp',
    ],
  },

];

export const skills = [
  {
    name: 'Next.js',
    icon: '/images/skills/next.svg',
  },
  {
    name: 'HTML',
    icon: '/images/skills/html.svg',
  },
  {
    name: 'CSS',
    icon: '/images/skills/css.svg',
  },
  {
    name: 'React.js',
    icon: '/images/skills/react.svg',
  },

  {
    name: 'JavaScript',
    icon: '/images/skills/javascript.svg',
  },
  {
    name: 'Git',
    icon: '/images/skills/git.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: '/images/skills/tailwindcss.svg',
  },
  {
    name: 'Figma',
    icon: '/images/skills/figma.svg',
  },
  {
    name: 'PHP',
    icon: '/images/skills/php.svg',
  },
  {
    name: 'Laravel',
    icon: '/images/skills/laravel.svg',
  },
  {
    name: 'Postman',
    icon: '/images/skills/postman.svg',
  },
  {
    name: 'Python',
    icon: '/images/skills/python.svg',
  },
  {
    name: 'TypeScript',
    icon: '/images/skills/Typescript.svg',
  },
];

export const contact = {
  email: 'priscillaleza@gmail.com',
  phone: '+62 821 3890 9595',
  phoneHref: 'https://wa.me/6282138909595',
  location: 'Condongcatur, Sleman, DIY',
};


export const socials = [
  { label: 'LinkedIn', href: 'www.linkedin.com/in/priscilialeza' },
  { label: 'GitHub', href: 'https://github.com/AmandaPriscilia' },
  { label: 'X', href: 'https://x.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/mndprscl7?igsh=MWN6dWp1cnRiZGZzNw' },
];
