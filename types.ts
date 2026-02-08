export interface Publication {
  id: number;
  authors: string;
  year: string;
  title: string;
  journal: string;
  doi?: string;
  link?: string;
  type: 'Journal Article' | 'Book Chapter';
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  details?: string[];
}

export interface ExperienceItem {
  role: string;
  project?: string;
  organization?: string;
  funding?: string;
  period: string;
  responsibilities: string[];
}

export interface TeachingItem {
  role: string;
  institution: string;
  period: string;
  courses?: string[];
  description: string;
}

export interface ResearchInterest {
  title: string;
  description: string;
}

export interface Award {
  title: string;
  date: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ScholarStats {
  citations: number;
  hIndex: number;
  i10Index: number;
  citationsSince2019: number;
  hIndexSince2019: number;
  i10IndexSince2019: number;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
  description?: string;
}