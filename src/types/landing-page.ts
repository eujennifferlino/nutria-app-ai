import { LucideIcon } from "lucide-react";

export interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface StatProps {
  number: string;
  label: string;
}

export interface HowItWorksStepProps {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface HeroSectionProps {
  stats: StatProps[];
  isVideoOpen: boolean;
  onOpenVideo: () => void;
  onCloseVideo: () => void;
}

export interface FeaturesSectionProps {
  features: FeatureProps[];
}

export interface HowItWorksSectionProps {
  steps: HowItWorksStepProps[];
}

export interface TestimonialsSectionProps {
  testimonials: TestimonialProps[];
}
