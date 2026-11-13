export interface PersonalInfo {
  name: string;
  lastName: string;
  fullName: string;
  roleTitle: string;
  age: number;
  nationality: string;
  birthDate: string;
  summary: string;
  hardSkills: string[];
  softSkills: { name: string; description: string }[];
  tools: {
    ai: string[];
    development: string[];
    design: string[];
  };
}

export interface Capability {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'Smartphone' | 'Bot' | 'Globe' | 'ShieldCheck' | 'Gamepad2' | 'Box';
  technologies: string[];
  metricsOrHighlight: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  codeUrl?: string;
  demoUrl?: string;
  status: 'Completado' | 'En Desarrollo' | 'Prototipo';
}

export interface EducationItem {
  title: string;
  institution: string;
  year?: string;
  type: 'Programación' | 'Fabricación & 3D' | 'Diseño & Juegos' | 'Logística' | 'Inteligencia Artificial';
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'Code' | 'Bot' | 'Layers' | 'Cpu';
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  whatsapp: string;
}
