export interface Project {
  id: number;
  title: string;
  description?: string;
  image: string;
  technologies: string[];
  url?: string;
  bgColor?: string;
  fontColor?: string;
}