// Base node type
export interface DrupalNode {
  id: string
  title: string
  path: string
  created: { timestamp: number }
  changed: { timestamp: number }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: { processed: string }
  statsItems?: DrupalStatItem[]
  featuredProjectsTitle?: string
  ctaTitle?: string
  ctaDescription?: { processed: string }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: { nodes: DrupalHomepage[] }
}

// Project
export interface DrupalProject extends DrupalNode {
  body?: { processed: string; summary?: string }
  projectType?: DrupalTerm[]
  location?: string
  yearCompleted?: string
  budget?: string
  image?: DrupalImage
  featured?: boolean
}

export interface ProjectsData {
  nodeProjects: { nodes: DrupalProject[] }
}

// Service
export interface DrupalService extends DrupalNode {
  body?: { processed: string }
  serviceArea?: DrupalTerm[]
  image?: DrupalImage
}

export interface ServicesData {
  nodeServices: { nodes: DrupalService[] }
}

// Team Member
export interface DrupalTeamMember extends DrupalNode {
  body?: { processed: string }
  position?: string
  email?: string
  phone?: string
  photo?: DrupalImage
}

export interface TeamMembersData {
  nodeTeamMembers: { nodes: DrupalTeamMember[] }
}

// Testimonial
export interface DrupalTestimonial extends DrupalNode {
  body?: { processed: string }
  clientName?: string
  projectName?: string
  photo?: DrupalImage
  rating?: number
}

export interface TestimonialsData {
  nodeTestimonials: { nodes: DrupalTestimonial[] }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: { processed: string }
}

// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: Array<{ name: string; url: string; width: number; height: number }>
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
