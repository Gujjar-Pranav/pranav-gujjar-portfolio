import type { ReactNode } from "react";

export type LinkSet = { code: string; demo?: string; docs?: string };

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: LinkSet;
  badges?: { label: string; icon: ReactNode }[];
  highlights?: string[];
  architecture?: string[];
  coverImage?: string;
  screenshots?: string[];
  icon?: ReactNode;
};

export type Experience = {
  role: string;
  company?: string;
  period: string;
  bullets: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  notes?: string[];
};

export type SkillGroup = {
  title: string;
  subtitle: string;
  items: string[];
};
