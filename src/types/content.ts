export interface HeroContent {
  headline: string;
  subheadline: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  rating: number;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  hours?: string;
  accounting_email?: string;
  rates_email?: string;
  linkedin?: string;
  dat_directory?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  phone: string;
  extension: string;
  email: string;
}

export interface ServicePageContent {
  id: string;
  title: string;
  description: string;
  highlights?: string[];
  features?: FeatureItem[];
}

export interface HomeContent {
  hero: HeroContent;
  statsHeadline?: string;
  features: FeatureItem[];
  testimonials: Testimonial[];
  contact: ContactInfo;
  agent: { title: string; description: string };
  carrier: { title: string; description: string };
  stats: { label: string; value: string }[];
  process: { step: string; title: string }[];
}

export interface SiteContent {
  home: HomeContent;
  solutions: Record<string, ServicePageContent>;
  industries: Record<string, ServicePageContent>;
  about: { title: string; description: string };
  team: TeamMember[];
}
