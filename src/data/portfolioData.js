const portfolioData = {
  personal: {
    name: 'Aditya Verma',
    title: 'Frontend Developer | React.js | JavaScript',
    location: 'East of Kailash, New Delhi, Delhi 110065',
    phone: '7379851567',
    email: 'adityafriendrahul@gmail.com',
    linkedin: 'https://linkedin.com/in/aditya-verma0',
    github: 'https://github.com/AdityaVermaeng',
    avatar: '/aditya-photo.jpg',
    resumePdf: '/resume.pdf',
    summary: 'Frontend Developer with hands-on experience building responsive, accessible web interfaces using React.js, HTML5, CSS3, and JavaScript (ES6+). Skilled at translating UI/UX designs into reusable component-based architectures and integrating RESTful APIs on the frontend. Strong foundation in Tailwind CSS, React Hooks, and web accessibility (a11y), backed by solid MERN full-stack expertise.',
  },
  whatIDo: [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Building responsive, interactive, and performant user interfaces using React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS.',
      icon: 'Layout',
      skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'React Hooks', 'Vite'],
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      description: 'Architecting RESTful APIs and database-driven backend solutions with Node.js, Express.js, and MongoDB.',
      icon: 'Server',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
    },
    {
      id: 'uiux',
      title: 'UI/UX Implementation',
      description: 'Translating design mockups from Figma into pixel-perfect, accessible (a11y), and user-friendly web components.',
      icon: 'Figma',
      skills: ['Figma', 'Accessibility (a11y)', 'Responsive Design', 'Component Architecture'],
    },
  ],
  skills: [
    {
      category: 'Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'React Hooks', 'React Router', 'Tailwind CSS', 'Bootstrap', 'Axios'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Nodemailer'],
    },
    {
      category: 'Database',
      items: ['MongoDB', 'Mongoose'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite', 'Figma', 'Netlify', 'Firebase', 'Google Cloud Platform'],
    },
  ],
  projects: [
    {
      id: 'estatehub',
      title: 'EstateHub',
      subtitle: 'Real Estate Management Platform',
      tech: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Google Maps'],
      description: 'A comprehensive real estate management platform with secure JWT authentication, role-based workflows for Buyers, Owners, and Admins, and interactive Google Maps property search.',
      highlights: [
        'Implemented secure JWT authentication and role-based access control for Buyer, Owner, and Admin users.',
        'Built responsive property listing and search modules with advanced filters, Google Maps integration, favorites, and inquiry management.',
        'Designed scalable backend APIs and MongoDB data models to support property management, admin approval workflows, and efficient CRUD operations.',
      ],
      github: 'https://github.com/AdityaVermaeng/ESTATE_HUB',
      live: null,
      caseStudy: {
        problem: 'Property buyers and owners struggle with fragmented property listings, lack of map-based location context, and delayed property verification.',
        solution: 'Built EstateHub with clear role separation (Buyer/Owner/Admin), real-time map integration, and an admin verification pipeline.',
        features: [
          'Role-based dashboards for Buyers, Owners, and Admins',
          'Interactive Google Maps location discovery & pin mapping',
          'Property inquiry submission and buyer saved favorites',
          'Admin approval workflow for new property submissions'
        ],
        contribution: 'Developed the responsive React UI, map component integration, role authorization checks, and backend REST endpoints.',
        outcome: 'Created a unified real estate portal providing complete property management from submission to buyer inquiry.'
      }
    },
    {
      id: 'eventora',
      title: 'Eventora',
      subtitle: 'Event Booking Platform',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Nodemailer', 'Tailwind CSS'],
      description: 'A full-stack event booking platform featuring JWT authentication, email-based OTP verification, seat availability validation, and admin booking approvals.',
      highlights: [
        'Developed JWT authentication, email-based OTP verification, and role-based access control for secure user and admin operations.',
        'Implemented end-to-end booking workflow with seat availability validation, booking approval management, and automated email notifications.',
        'Built responsive React dashboards for users and administrators with booking management and REST API integration.',
      ],
      github: 'https://github.com/AdityaVermaeng/EVENTORA',
      live: null,
      caseStudy: {
        problem: 'Preventing duplicate or unverified seat reservations while ensuring automated confirmation updates for event attendees.',
        solution: 'Integrated Nodemailer OTP verification upon signup and enforced real-time seat lock validation during checkout.',
        features: [
          'Email-based OTP authentication flow',
          'Seat availability lock & double-booking prevention',
          'Interactive seat map and dynamic event catalog',
          'Automated email confirmation dispatch via Nodemailer'
        ],
        contribution: 'Built the frontend booking wizard, seat selector interface, OTP modal, and Express API routes.',
        outcome: 'Achieved robust verification and seamless booking flow with real-time feedback.'
      }
    },
    {
      id: 'ai-assistant',
      title: 'AI Learning Assistant',
      subtitle: 'AI-Powered Learning Application',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
      description: 'An intelligent study companion application providing automated document handling, interactive flashcard generation, quiz practice, and study chat history.',
      highlights: [
        'Created interactive document processing and AI tutor interface with smooth real-time response streams.',
        'Built dynamic flashcard decks and instant quiz generation modules for automated study review.',
        'Structured MongoDB chat history persistence for contextual multi-session learning dialogues.',
      ],
      github: 'https://github.com/AdityaVermaeng',
      live: null,
      caseStudy: {
        problem: 'Students spend hours converting raw lecture notes into structured study cards and practice quizzes.',
        solution: 'Developed an AI learning assistant that transforms study materials into flashcards, quizzes, and chat tutoring sessions.',
        features: [
          'Document analysis and summary extraction',
          'Automated interactive flashcard deck creator',
          'Self-assessment quiz module with score breakdown',
          'Persistent study chat history across sessions'
        ],
        contribution: 'Architected the React frontend application, flashcard swipe UI, and REST API integration.',
        outcome: 'Automated study deck creation and reduced manual review preparation time significantly.'
      }
    },
    {
      id: 'bluebird-movies',
      title: 'BlueBird Movies',
      subtitle: 'Movie Discovery Application',
      tech: ['React.js', 'TMDB API', 'Firebase Auth', 'Tailwind CSS'],
      description: 'A movie discovery web application with live TMDB API integration, search and category filtering, Firebase Google OAuth authentication, and watchlist tracking.',
      highlights: [
        'Integrated TMDB REST API for real-time trending movies, genre filtering, and search functionality.',
        'Implemented Firebase Google OAuth authentication for fast user sign-in.',
        'Designed a cinema-themed responsive dark mode UI with modal trailer previews.',
      ],
      github: 'https://github.com/AdityaVermaeng',
      live: null,
      caseStudy: {
        problem: 'Users need a fast, responsive interface to discover trending movies, view ratings, and save favorites.',
        solution: 'Built BlueBird Movies using React with direct TMDB REST integration and Firebase user authentication.',
        features: [
          'Real-time trending movie and TV show catalog',
          'Firebase Google OAuth 2.0 authentication',
          'Debounced live movie search & genre tags',
          'Detailed backdrop modal with cast details'
        ],
        contribution: 'Designed UI components, handled API state caching, and implemented Firebase authentication.',
        outcome: 'Delivered an engaging entertainment discovery web application with rapid response times.'
      }
    },
  ],
  experience: [
    {
      role: 'Frontend Developer Intern',
      company: 'CETPA Infotech Pvt. Ltd.',
      location: 'Noida, Uttar Pradesh',
      period: 'Aug 2025 – Present',
      current: true,
      highlights: [
        'Built responsive, reusable React.js components delivering seamless UX across desktop and mobile devices.',
        'Consumed RESTful APIs via Fetch API and async/await to dynamically render data and manage frontend application state.',
        'Implemented interactive UI features — form validations, conditional rendering, and real-time updates — using React Hooks.',
        'Developed accessible login/registration interfaces with secure frontend authentication flows.',
      ],
    },
    {
      role: 'UI/UX Developer Trainee',
      company: 'NASSCOM Foundation — Accenture Project',
      location: 'Noida, Uttar Pradesh',
      period: 'Sep 2025 – Nov 2025',
      current: false,
      highlights: [
        'Translated Figma prototypes into pixel-perfect, responsive frontend components using HTML5, CSS3, and JavaScript.',
        'Improved web accessibility (a11y) and performance through semantic HTML, ARIA attributes, and optimized asset loading.',
        'Built interactive UI components with form validations and dynamic content rendering following modern UI/UX best practices.',
      ],
    },
  ],
  certifications: [
    {
      id: 'forage-sd',
      title: 'Software Development Job Simulation',
      issuer: 'Forage (Datacom)',
      date: 'August 11, 2026',
      pdf: '/certificates/software-development-job-simulation.pdf',
      description: 'Completed a practical Software Development Job Simulation involving software review, identifying root causes, and fixing application bugs.',
      highlights: ['Software code review', 'Identifying root causes and fixing bugs', 'Datacom developer workflow'],
      featured: true,
    },
    {
      id: 'be10x-ai',
      title: 'AI Tools & Claude Workshop Certificate',
      issuer: 'be10x',
      date: 'August 9, 2026',
      pdf: '/certificates/certificate.pdf',
      description: 'Certified in utilizing AI tools, Claude workflows, automated code debugging, and presentation data analysis in under 10 minutes.',
      highlights: ['AI-assisted coding & debugging', 'Claude prompt engineering', 'Workflow automation'],
      featured: false,
    },
  ],
  achievements: [
    {
      id: 'parampara',
      title: 'Technical Event Coordinator — PARAMPARA 2025',
      organization: 'ITM, GIDA, Gorakhpur',
      description: 'Organized coding and error-debugging competitions engaging 50+ participants, managing a volunteer team for smooth event execution and evaluation.',
    },
  ],
  education: {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'ITM College (Affiliated to AKTU)',
    location: 'Gorakhpur, Uttar Pradesh',
    period: 'Sep 2021 – Jun 2025',
    coursework: ['Data Structures & Algorithms', 'Web Technologies', 'UI/UX Principles', 'Software Methodology', 'Database Management'],
  },
  navLinks: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'What I Do', href: '#what-i-do' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default portfolioData;
