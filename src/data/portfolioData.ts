import { PersonalInfo, Capability, Project, EducationItem, ServiceItem, ContactInfo } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Juan Francisco",
  lastName: "Benevente",
  fullName: "Juan Francisco Benevente",
  roleTitle: "AGENTES DE IA & DESARROLLO DE SOFTWARE",
  age: 21,
  nationality: "Argentina",
  birthDate: "19/09/2005",
  summary: "Desarrollador enfocado en la convergencia de Aplicaciones Móviles, Plataformas Web y Sistemas Autónomos con Agentes de Inteligencia Artificial (Gemini API). Rigor técnico, enfoque analítico para resolver problemas complejos bajo presión y pasión por el diseño interactivo de alto rendimiento.",
  hardSkills: [
    "Desarrollo de Aplicaciones Móviles: Creación e integración de aplicaciones funcionales para dispositivos móviles.",
    "Desarrollo Web Frontend / Backend: Diseño y programación de plataformas interactivas y sistemas modulares.",
    "Integración y Gestión de Agentes de IA: Implementación y orquestación de modelos LLM (Gemini API) aplicados a software.",
    "Arquitectura de Software y Control de Calidad: Revisión minuciosa de código, optimización y estabilidad garantizada."
  ],
  softSkills: [
    {
      name: "Resolución de Problemas bajo Presión",
      description: "Enfoque analítico, sereno y estructurado para diagnosticar y solucionar fallas o imprevistos técnicos sin perder la calma."
    },
    {
      name: "Organización y Planificación",
      description: "Alta capacidad para estructurar proyectos, gestionar tiempos y mantener procesos de trabajo ordenados."
    },
    {
      name: "Atención al Detalle",
      description: "Rigor estético y funcional tanto en la arquitectura de código como en la terminación visual de interfaces."
    },
    {
      name: "Comunicación Clara y Didáctica",
      description: "Habilidad para explicar conceptos técnicos complejos paso a paso a clientes o miembros del equipo."
    }
  ],
  tools: {
    ai: ["Gemini API", "Modelos de Lenguaje (LLMs)", "Agentes Autónomos", "Prompt Engineering"],
    development: ["TypeScript / JavaScript", "React", "HTML5 / CSS3", "Tailwind CSS", "Vite", "Node.js / Python"],
    design: ["UI/UX Design", "Canva / Canvas API", "Glassmorphism", "Prototipado Interactivo"]
  }
};

export const capabilities: Capability[] = [
  {
    id: "ai-agents",
    title: "AGENTES DE IA & GEMINI",
    shortDesc: "ORQUESTACIÓN Y AUTOMATIZACIÓN DE LLMs",
    fullDesc: "Implementación de flujos autónomos utilizando la API de Google Gemini y modelos de lenguaje de última generación. Supervisión de lógica estructurada, validación de respuestas y conexión de agentes con bases de datos y herramientas externas.",
    iconName: "Bot",
    technologies: ["Gemini API", "LLMs", "Function Calling", "Agentes Reactivos"],
    metricsOrHighlight: "Optimización de flujos y respuestas en tiempo real"
  },
  {
    id: "mobile-dev",
    title: "APPS MÓVILES",
    shortDesc: "DESARROLLO FUNCIONAL MULTIPLATAFORMA",
    fullDesc: "Construcción y diseño de interfaces móviles intuitivas, fluidas y optimizadas para rendimiento en smartphones y tablets. Integración de lógica offline, almacenamiento local y APIs REST.",
    iconName: "Smartphone",
    technologies: ["Mobile Dev", "Responsive UI", "REST APIs", "Clean Architecture"],
    metricsOrHighlight: "Interfaces reactivas y navegación fluida"
  },
  {
    id: "web-dev",
    title: "DESARROLLO WEB FULLSTACK",
    shortDesc: "PLATAFORMAS MODERNAS & APIS",
    fullDesc: "Diseño y programación de sitios web y aplicaciones interactivas con React, TypeScript, Vite y Tailwind CSS. Enfoque en accesibilidad, rendimiento de carga instantáneo y fidelidad visual.",
    iconName: "Globe",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    metricsOrHighlight: "Rendimiento LCP óptimo y código desacoplado"
  },
  {
    id: "software-architecture",
    title: "ARQUITECTURA & QA",
    shortDesc: "CONTROL DE CALIDAD Y OPTIMIZACIÓN",
    fullDesc: "Revisión minuciosa de código fuente, supervisión de procesos de compilación y detección temprana de errores para garantizar soluciones estables, escalables y libres de vulnerabilidades.",
    iconName: "ShieldCheck",
    technologies: ["Code Review", "Control de Calidad", "Refactorización", "Testing"],
    metricsOrHighlight: "Alta estabilidad y fiabilidad operativa"
  },
  {
    id: "game-prototyping",
    title: "PROTOTIPADO VIDEOJUEGOS",
    shortDesc: "MECÁNICAS LÚDICAS Y DINÁMICAS",
    fullDesc: "Modelado de sistemas de juego, simulación física y programación de mecánicas interactivas. Enfoque en la experiencia de usuario inmersiva y respuesta inmediata en tiempo real.",
    iconName: "Gamepad2",
    technologies: ["Lógica de Juegos", "Animación", "Física 2D/3D", "Canvas API"],
    metricsOrHighlight: "Prototipado ágil y bucle de juego reactivo"
  },
  {
    id: "3d-fabrication",
    title: "MODELADO 3D & IMPRESIÓN",
    shortDesc: "FABRICACIÓN ADITIVA Y DISEÑO",
    fullDesc: "Diseño y modelado de piezas tridimensionales, animación técnica y preparación de archivos para manufactura aditiva con impresoras 3D y mecanizado de precisión.",
    iconName: "Box",
    technologies: ["Impresión 3D", "Animación 3D", "Modelado Técnico", "Tornería"],
    metricsOrHighlight: "Precisión milimétrica y prototipos físicos"
  }
];

export const projects: Project[] = [
  {
    id: "ai-assistant-agent",
    title: "GEMINI AUTONOMOUS WORKFLOW",
    category: "Inteligencia Artificial",
    description: "Sistema orquestador de agentes de IA con Gemini API para procesamiento de datos, validación estructurada y respuesta contextual instantánea.",
    tags: ["Gemini API", "TypeScript", "LLM Orchestration"],
    codeUrl: "https://github.com/JuanBenevente",
    demoUrl: "#",
    status: "Completado"
  },
  {
    id: "mobile-app-concept",
    title: "MOBILE APP PROTO DASHBOARD",
    category: "Desarrollo Móvil",
    description: "Aplicación móvil interactiva con diseño Glassmorphic, monitoreo de señales en tiempo real y arquitectura de componentes desacoplada.",
    tags: ["Mobile", "Tailwind", "Responsive"],
    codeUrl: "https://github.com/JuanBenevente",
    demoUrl: "#",
    status: "En Desarrollo"
  },
  {
    id: "game-prototype-signal",
    title: "INFINITE SIGNAL INTERACTIVE CANVAS",
    category: "Prototipado",
    description: "Motor visual interactivo en Canvas con cubos 3D y partículas reactivas al cursor simulando señales de telecomunicaciones y trading.",
    tags: ["Canvas API", "WebGL", "TypeScript"],
    codeUrl: "https://github.com/JuanBenevente",
    demoUrl: "#",
    status: "Completado"
  }
];

export const educationList: EducationItem[] = [
  {
    title: "Desarrollo de Apps Móviles con Agentes de IA",
    institution: "C.F.L N°404",
    year: "2026",
    type: "Inteligencia Artificial",
    description: "Es un programa intensivo diseñado para convertirte en un profesional competente en el mundo del desarrollo de apps para dispositivos móviles. Aprenderás a crear soluciones digitales innovadoras que transforman ideas en aplicaciones funcionales y atractivas."
  },
  {
    title: "Prototipado de Videojuegos",
    institution: "C.F.L N°404",
    year: "2026",
    type: "Diseño & Juegos",
    description: "Preparar y disponer el área de trabajo para el desarrollo de videojuegos, conocer los fundamentos del diseño de videojuegos y mecánicas de juego, diseñar conceptos y documentación de videojuegos (Game Design Document), operar herramientas de desarrollo de videojuegos (motores gráficos), crear prototipos funcionales de videojuegos, implementar mecánicas de juego, sistemas de control y feedback al jugador, diseñar niveles y estructuras de juego, integrar elementos gráficos, sonido y animaciones básicas, realizar pruebas y debugging de prototipos, organizar y realizar el trabajo aplicando las normas de Seguridad e Higiene establecidas para la especialidad."
  },
  {
    title: "Operador / Administrador de Logística Portuaria",
    institution: "C.F.L N°404",
    year: "2025",
    type: "Logística",
    description: "El programa está dirigido al público en general que desee adquirir conocimientos en logística portuaria, personal portuario, logístico y del transporte intermodal (marítimo, fluvial, ferroviario y vial) de mandos medios y gerenciales, Armadores marítimos y fluviales, Agencias marítimas, Agentes de Cargas Internacionales, Funcionarios Públicos afines a la actividad del sector, Contratistas de terminales portuarias y logísticas, Profesionales de la Ingeniería y todo aquel que desempeña tareas afines a la actividad."
  },
  {
    title: "Tornería Mecánica de Precisión",
    institution: "C.F.P N°402",
    year: "2025",
    type: "Fabricación & 3D",
    description: "La tornería mecánica consiste en el mecanizado de piezas para obtener formas cilíndricas o superficies de revolución mediante el torneado, un proceso en el que la pieza gira mientras una herramienta de corte permanece fija. Su objetivo principal es fabricar o reparar componentes con alta precisión, cumpliendo las especificaciones de diseño y tolerancias establecidas."
  },
  {
    title: "Impresión 3D",
    institution: "C.F.L N°404",
    year: "2024 - 2025",
    type: "Fabricación & 3D",
    description: "El/la Modelador/a 3D con orientación a Impresión 3D estará capacitado para: Preparar y disponer el área de trabajo, conocer el proceso de Fabricación Aditiva, relevar objetos para su posterior modelado e impresión, operar las herramientas de diseño CAD y software de corte para Impresoras 3D, modelar piezas 3D orientadas a la fabricación en 3D, operar Impresoras 3D, mantenimiento de Impresoras 3D, evaluar y generar soluciones a problemas que presenten los modelos para fabricación 3D, diseñar estrategias de fabricación en 3D, organizar y realizar el trabajo aplicando las normas de Seguridad e Higiene establecidas para la especialidad."
  },
  {
    title: "Programación de Software",
    institution: "C.F.P N°402",
    year: "2024",
    type: "Programación",
    description: "En este curso se adquieren las habilidades técnicas esenciales aprendiendo Python, Java y la administración de Bases de Datos para el desarrollo de aplicaciones."
  },
  {
    title: "Animación y Modelado",
    institution: "C.F.P N°402",
    year: "2024",
    type: "Diseño & Juegos",
    description: "En este curso se adquieren las habilidades técnicas para modelar y crear objetos para diseño arquitectónico e industrial, etc."
  }
];

export const servicesList: ServiceItem[] = [
  {
    id: "serv-ai",
    title: "Integración de Agentes de IA",
    description: "Diseño e implementación de sistemas basados en Gemini API y LLMs para automatizar tareas cognitivas y optimizar flujos.",
    icon: "Bot"
  },
  {
    id: "serv-mobile",
    title: "Desarrollo de Apps Móviles",
    description: "Creación de aplicaciones para smartphones con alta ergonomía, diseño visual vanguardista y excelente rendimiento.",
    icon: "Layers"
  },
  {
    id: "serv-web",
    title: "Desarrollo Web & Plataformas",
    description: "Construcción de sitios web rápidos, responsivos y con estética Glassmorphism pulida que impactan visualmente.",
    icon: "Code"
  },
  {
    id: "serv-prototyping",
    title: "Prototipado y Control de Calidad",
    description: "Validación técnica rigurosa, revisión de código (QA) y prototipado rápido de software e interfaces interactivas.",
    icon: "Cpu"
  }
];

export const contactInfo: ContactInfo = {
  email: "juanfranciscobenevente175@gmail.com",
  phone: "+54 9 11 0000-0000",
  location: "Argentina",
  github: "https://github.com/juanfranciscobenevente175",
  linkedin: "https://linkedin.com/in/juan-francisco-benevente",
  whatsapp: ""
};
