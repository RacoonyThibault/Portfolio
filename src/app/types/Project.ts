export interface Project {
  id: number;
  title: string;
  description?: string;
  image: string;
  technologies: string[];
  url?: string;
  github?: string;
  challenges?: string;
  skillsDeveloped?: string[];
}
