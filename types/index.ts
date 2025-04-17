export interface ContactInfo {
  email: string;
  phone: string;
  website?: string;
  github?: string;
  linkedin?: string;
}

export interface Location {
  city: string;
  country: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Description {
  name: string;
  items: string[];
}

export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  description: Description[]
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface CVData {
  name: string;
  title: string;
  avatar: string;
  contact: ContactInfo;
  location: Location;
  profile: string;
  skills: Skill[];
  workExperience: WorkExperience[];
  education: Education[];
  languages: Language[];
  portfolio: Project[];
} 