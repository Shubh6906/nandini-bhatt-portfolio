/**
 * Portfolio Data Configuration for Nandini Bhatt
 * Faculty in Computer Engineering, Neotech Campus | M.E. Scholar
 * 
 * Edit this file to update course offerings, publications, thesis progress,
 * awards, and contact details without editing HTML markup.
 */

const portfolioData = {
  personalInfo: {
    fullName: "Nandini Bhatt",
    preferredName: "Prof. Nandini Bhatt",
    designation: "Faculty in Computer Engineering",
    affiliation: "Department of Computer Engineering, Neotech Campus",
    campusLocation: "Neotech Technical Campus, Vadodara, Gujarat, India",
    degreePursuing: "Master of Engineering (M.E.) in Computer Engineering",
    specialization: "Distributed Systems & Machine Learning",
    email: "nandini.bhatt@neotechcampus.in",
    alternateEmail: "nandinibhatt.ce@gmail.com",
    avatarUrl: "assets/images/avatar-placeholder.svg",
    resumeUrl: "assets/documents/Nandini_Bhatt_Academic_CV.html",
    bio: [
      "I am a passionate Computer Engineering educator and postgraduate scholar at Neotech Campus. My academic mission centers on bridging theoretical computational foundations with pragmatic, industry-aligned software engineering.",
      "Currently pursuing my Master's in Computer Engineering, my research explores edge intelligence, distributed machine learning, and scalable systems. In the classroom, I emphasize interactive pedagogy, experiential coding labs, and continuous student mentorship to cultivate problem-solving acumen.",
      "Beyond lectures, I serve as a faculty coordinator for departmental technical symposiums, hackathons, and project-based learning initiatives."
    ],
    highlights: [
      { label: "Active Faculty", value: "Neotech Campus" },
      { label: "Current Program", value: "M.E. in Computer Engg." },
      { label: "Students Guided", value: "450+" },
      { label: "Courses Delivered", value: "6+ Core Subjects" },
      { label: "Research Papers", value: "4 Scholarly Works" }
    ],
    socialLinks: {
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
      orcid: "https://orcid.org/",
      linkedin: "https://www.linkedin.com/in/",
      github: "https://github.com/",
      email: "mailto:nandini.bhatt@neotechcampus.in"
    }
  },

  academicStats: [
    { number: "5+", label: "Academic Semesters Taught", icon: "calendar" },
    { number: "450+", label: "Students Mentored", icon: "users" },
    { number: "12+", label: "Capstone Projects Guided", icon: "folder-git2" },
    { number: "8+", label: "FDPs & Workshops Attended", icon: "award" }
  ],

  academicTimeline: [
    {
      period: "2023 – Present",
      role: "Faculty in Computer Engineering",
      institution: "Neotech Campus (Faculty of Technology & Engineering)",
      location: "Vadodara, Gujarat",
      type: "Teaching & Academic Administration",
      description: "Instructing undergraduate (B.E./B.Tech) engineering students in Data Structures, Database Management, and Web Technologies. Guiding academic capstone projects, formulating laboratory assignments, and serving on departmental assessment committees."
    },
    {
      period: "2023 – Present (Ongoing)",
      role: "Master of Engineering (M.E.) in Computer Engineering",
      institution: "Gujarat Technological University Affiliated PG Center",
      location: "Gujarat, India",
      type: "Postgraduate Research",
      description: "Specializing in High-Performance Computing, Distributed Machine Learning, and Edge Systems. Conducting thesis research under academic advisement with a focus on resource-constrained model inference."
    },
    {
      period: "2019 – 2023",
      role: "Bachelor of Engineering (B.E.) in Computer Engineering",
      institution: "State Technological University",
      location: "Gujarat, India",
      type: "Undergraduate Degree",
      description: "Graduated with First Class with Distinction. Demonstrated excellence in algorithm design, object-oriented paradigms, and systems engineering. Led the departmental student coding chapter."
    }
  ],

  thesisSpotlight: {
    title: "Lightweight Edge-Assisted Distributed Machine Learning for Constrained Computing Environments",
    domain: "Distributed Computing • Edge AI • Computer Systems",
    status: "Research & Benchmarking Phase",
    abstract: "Modern deep learning models demand considerable computational power and memory, making deployment on resource-constrained Internet of Things (IoT) nodes and edge gateways challenging. This Master's thesis investigates hybrid model partitioning, quantization-aware execution, and federated gradient updates to achieve sub-second inference latency with minimal communication overhead.",
    advisor: "Senior Professor & Post-Graduate Research Guide",
    institution: "Department of Computer Engineering",
    progress: 75,
    milestones: [
      { name: "Comprehensive Literature Survey & Problem Formulation", done: true },
      { name: "Mathematical Architecture & Partitioning Schema", done: true },
      { name: "Simulation & Experimental Benchmarking", done: true },
      { name: "Empirical Analysis, Thesis Drafting & Defense", done: false }
    ],
    technologies: ["Python", "PyTorch / TensorFlow Lite", "Docker", "Edge Kubernetes", "CUDA", "ZeroMQ"]
  },

  teachingPortfolio: [
    {
      id: "dsa-2024",
      code: "CE302",
      title: "Data Structures & Algorithms",
      semester: "3rd Semester",
      category: "Core Computing",
      description: "Foundational analysis of linear and non-linear data structures, asymptotic notation, sorting/searching algorithms, graph traversals, and dynamic programming.",
      learningOutcomes: [
        "Mastery of linked lists, trees, heaps, hash tables, and graphs",
        "Algorithmic complexity analysis using Big-O, Omega, and Theta",
        "Hands-on C/C++ implementation of memory-efficient algorithms"
      ],
      resources: {
        syllabus: "#",
        slides: "#",
        labManual: "#",
        codeRepo: "https://github.com/"
      }
    },
    {
      id: "dbms-2024",
      code: "CE403",
      title: "Database Management Systems",
      semester: "4th Semester",
      category: "Systems & Databases",
      description: "Comprehensive study of relational database design, E-R modeling, relational algebra, SQL optimization, normalization (1NF to BCNF), and ACID transaction concurrency.",
      learningOutcomes: [
        "Relational schema design and Boyce-Codd normal forms",
        "Complex SQL queries, triggers, stored procedures, and views",
        "Transaction scheduling, locking protocols, and crash recovery"
      ],
      resources: {
        syllabus: "#",
        slides: "#",
        labManual: "#",
        codeRepo: "https://github.com/"
      }
    },
    {
      id: "oop-java",
      code: "CE305",
      title: "Object-Oriented Programming with Java",
      semester: "3rd Semester",
      category: "Programming & Dev",
      description: "In-depth treatment of object-oriented design principles, encapsulation, polymorphism, Java Collections Framework, multithreading, and GUI basics.",
      learningOutcomes: [
        "Solid command over SOLID design principles",
        "Robust exception handling and concurrent thread synchronization",
        "Building modular, maintainable desktop and backend utilities"
      ],
      resources: {
        syllabus: "#",
        slides: "#",
        labManual: "#",
        codeRepo: "https://github.com/"
      }
    },
    {
      id: "web-tech",
      code: "CE504",
      title: "Web Technologies & Full Stack Development",
      semester: "5th Semester",
      category: "Programming & Dev",
      description: "End-to-end modern web architecture: HTML5, CSS3, JavaScript (ES6+), asynchronous API communication, RESTful services, and server-side paradigms.",
      learningOutcomes: [
        "Responsive, accessible user interface engineering",
        "REST API design and asynchronous data integration",
        "Client-server security best practices and state handling"
      ],
      resources: {
        syllabus: "#",
        slides: "#",
        labManual: "#",
        codeRepo: "https://github.com/"
      }
    },
    {
      id: "os-systems",
      code: "CE405",
      title: "Operating Systems & Shell Programming",
      semester: "4th Semester",
      category: "Systems & Databases",
      description: "Exploration of process lifecycle, CPU scheduling, synchronization primitives (mutex/semaphores), virtual memory management, file systems, and POSIX shell scripts.",
      learningOutcomes: [
        "Process scheduling and inter-process communication (IPC)",
        "Memory paging, segmentation, and page replacement policies",
        "Automated Unix/Linux bash shell scripting"
      ],
      resources: {
        syllabus: "#",
        slides: "#",
        labManual: "#",
        codeRepo: "https://github.com/"
      }
    },
    {
      id: "ds-lab",
      code: "CE306P",
      title: "Data Structures & Algorithms Laboratory",
      semester: "3rd Semester",
      category: "Laboratories",
      description: "Rigorous weekly coding laboratory assignments focusing on benchmarked implementations of tree balancing, shortest path algorithms, and memory leak profiling.",
      learningOutcomes: [
        "Practical debugging using GDB and memory analysis tools",
        "Writing clean, modular, and unit-tested code",
        "Collaborative version control with Git and GitHub"
      ],
      resources: {
        syllabus: "#",
        slides: "#",
        labManual: "#",
        codeRepo: "https://github.com/"
      }
    }
  ],

  researchPublications: [
    {
      id: "pub-01",
      title: "Adaptive Task Offloading and Resource Allocation for Edge-Intelligent IoT Systems",
      authors: ["Nandini Bhatt", "Research Collaborators"],
      venue: "International Journal of Emerging Computing Architectures",
      year: 2024,
      type: "Journal",
      indexing: "Peer Reviewed / Scopus Indexed",
      doi: "10.1016/j.ijeca.2024.10892",
      abstract: "This paper introduces a dynamic heuristic algorithm for partitioning computational load between local edge nodes and proximate micro-servers. Experimental benchmarks demonstrate a 28% reduction in latency and a 34% drop in network energy consumption.",
      pdfUrl: "#",
      bibtex: `@article{bhatt2024adaptive,
  title={Adaptive Task Offloading and Resource Allocation for Edge-Intelligent IoT Systems},
  author={Bhatt, Nandini and Collaborators, Research},
  journal={International Journal of Emerging Computing Architectures},
  volume={14},
  number={2},
  pages={112--126},
  year={2024},
  publisher={Academic Press}
}`
    },
    {
      id: "pub-02",
      title: "Performance Benchmarking of Distributed Ledger Consensus in Smart Campus Management",
      authors: ["Nandini Bhatt", "Academic Co-Author"],
      venue: "IEEE International Conference on Advanced Information Communication Technologies (AICT)",
      year: 2023,
      type: "Conference",
      indexing: "IEEE Xplore",
      doi: "10.1109/AICT.2023.10142981",
      abstract: "We investigate throughput and computational overhead across proof-of-authority and raft-based consensus mechanisms when applied to automated educational credential verification across multi-campus institutions.",
      pdfUrl: "#",
      bibtex: `@inproceedings{bhatt2023performance,
  title={Performance Benchmarking of Distributed Ledger Consensus in Smart Campus Management},
  author={Bhatt, Nandini and Co-Author, Academic},
  booktitle={2023 IEEE International Conference on Advanced Information Communication Technologies (AICT)},
  pages={1--6},
  year={2023},
  organization={IEEE}
}`
    },
    {
      id: "pub-03",
      title: "A Comparative Study on In-Memory Database Query Optimizers for High-Velocity Stream Ingestion",
      authors: ["Nandini Bhatt"],
      venue: "National Conference on Innovations in Computer Engineering & Technology (NCICET)",
      year: 2023,
      type: "Conference",
      indexing: "Conference Proceedings",
      doi: "10.5281/zenodo.ncicet.2023.45",
      abstract: "Evaluating query execution plan stability in modern columnar vs row-oriented in-memory data engines handling non-stationary telemetry feeds.",
      pdfUrl: "#",
      bibtex: `@inproceedings{bhatt2023comparative,
  title={A Comparative Study on In-Memory Database Query Optimizers for High-Velocity Stream Ingestion},
  author={Bhatt, Nandini},
  booktitle={National Conference on Innovations in Computer Engineering & Technology},
  year={2023}
}`
    },
    {
      id: "pub-04",
      title: "Survey of Lightweight Neural Architecture Search for Edge Microcontrollers",
      authors: ["Nandini Bhatt", "PG Research Guide"],
      venue: "Preprint Repository / Academic Working Paper Series",
      year: 2024,
      type: "Preprint",
      indexing: "arXiv / Tech Report",
      doi: "10.48550/arXiv.2403.xxxxx",
      abstract: "A systematic review classifying modern differentiable architecture search methods tailored to sub-100KB SRAM microcontroller units.",
      pdfUrl: "#",
      bibtex: `@misc{bhatt2024survey,
  title={Survey of Lightweight Neural Architecture Search for Edge Microcontrollers},
  author={Bhatt, Nandini and Guide, PG Research},
  year={2024},
  eprint={2403.xxxxx},
  archivePrefix={arXiv},
  primaryClass={cs.LG}
}`
    }
  ],

  studentProjectsGuided: [
    {
      title: "CampusIQ: Automated Academic & Laboratory Resource Scheduler",
      team: "Final Year B.E. Students (Neotech Campus)",
      academicYear: "2023 – 2024",
      techStack: ["React", "FastAPI", "PostgreSQL", "Genetic Algorithms"],
      description: "Mentored an undergraduate project team building a constraint-satisfaction scheduling engine for conflict-free classroom and computer lab allocations across departments.",
      outcome: "Selected for Departmental Best Capstone Project & Internal Campus Pilot."
    },
    {
      title: "SecureExam: Lightweight Proctoring & Integrity Monitoring System",
      team: "Pre-Final Year Students",
      academicYear: "2023 – 2024",
      techStack: ["Python", "OpenCV", "MediaPipe", "Flask"],
      description: "Supervised the design of a privacy-respecting client-side proctoring engine that performs local gaze verification without uploading raw camera feeds to the cloud.",
      outcome: "Presented at Regional Collegiate Hackathon with 2nd Place Recognition."
    },
    {
      title: "AgroSense: Distributed IoT Telemetry for Precision Agriculture",
      team: "Multi-disciplinary Student Cohort",
      academicYear: "2023",
      techStack: ["NodeMCU ESP8266", "MQTT Broker", "Node.js", "Chart.js"],
      description: "Guided sensor calibration, MQTT communication security, and low-latency visualization dashboard for soil moisture and ambient temperature surveillance.",
      outcome: "Implemented as a prototype demonstration for institute open-house."
    }
  ],

  certificationsAndFDPs: [
    {
      title: "AICTE-ATAL Faculty Development Program on 'Advanced Data Engineering & Distributed Systems'",
      organization: "All India Council for Technical Education (AICTE)",
      year: "2024",
      category: "FDP",
      duration: "1 Week Intensive"
    },
    {
      title: "NPTEL Swayam Certification: 'Design and Analysis of Algorithms'",
      organization: "IIT Madras / NPTEL (Elite Category)",
      year: "2023",
      category: "Certification",
      duration: "12 Weeks Course"
    },
    {
      title: "National STTP on 'Cloud-Native Microservices and DevOps Pipelines'",
      organization: "Indian Society for Technical Education (ISTE)",
      year: "2023",
      category: "STTP",
      duration: "5 Days Hands-On"
    },
    {
      title: "Oracle Academy Certified Instructor: Database Foundations & SQL",
      organization: "Oracle Academy",
      year: "2023",
      category: "Industry Cert",
      duration: "Global Certification"
    },
    {
      title: "Google Cloud Computing Foundations for Educators",
      organization: "Google Cloud Platform",
      year: "2022",
      category: "Industry Cert",
      duration: "Educator Cohort"
    }
  ],

  institutionalRoles: [
    {
      role: "Faculty Laboratory In-Charge",
      department: "Computer Engineering Department, Neotech Campus",
      responsibilities: "Managing hardware/software installations, laboratory safety audits, and scheduling hands-on curriculum sessions for 60+ workstations."
    },
    {
      role: "Academic Mentor & Student Counselor",
      department: "Undergraduate Class Batch",
      responsibilities: "Conducting bi-weekly progress reviews, advising on remedial coursework, and guiding student career development and internship pathways."
    },
    {
      role: "Technical Symposium & Hackathon Faculty Coordinator",
      department: "Annual Institute TechFest",
      responsibilities: "Formulating coding problem statements, reviewing evaluation rubrics, and supervising student organizing committees."
    },
    {
      role: "Departmental NBA / NAAC Documentation Committee",
      department: "Institutional Quality Assurance",
      responsibilities: "Contributing to course outcome (CO) and program outcome (PO) attainment calculations and course file verifications."
    }
  ],

  technicalSkills: {
    languages: ["C", "C++", "Java", "Python", "SQL", "JavaScript (ES6+)"],
    frameworks: ["React", "Node.js / Express", "FastAPI", "Tailwind CSS"],
    systemsAndDBs: ["MySQL", "PostgreSQL", "MongoDB", "Linux / POSIX Shell", "Docker"],
    pedagogyTools: ["Google Classroom", "Moodle LMS", "Overleaf LaTeX", "Git / GitHub Classroom", "Jupyter Notebooks"]
  },

  officeHours: {
    schedule: "Monday to Friday: 03:30 PM – 04:45 PM IST",
    room: "Room 204, Faculty Block, Department of Computer Engineering",
    campus: "Neotech Technical Campus, Vadodara",
    policy: "Students are welcome during walk-in office hours. For project reviews or research discussions, prior email appointment is recommended."
  }
};
