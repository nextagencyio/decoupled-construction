// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredProjectsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeProject {
  id: string;
  body: { value: string; summary?: string };
  budget: string;
  featured: boolean;
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  path: string;
  projectType: any[];
  title: string;
  yearCompleted: string;
}

export interface NodeService {
  id: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  serviceArea: any[];
  title: string;
}

export interface NodeTeamMember {
  id: string;
  body: { value: string; summary?: string };
  email: string;
  path: string;
  phone: string;
  photo: { url: string; alt: string; width: number; height: number };
  position: string;
  title: string;
}

export interface NodeTestimonial {
  id: string;
  body: { value: string; summary?: string };
  clientName: string;
  path: string;
  photo: { url: string; alt: string; width: number; height: number };
  projectName: string;
  rating: number;
  title: string;
}
