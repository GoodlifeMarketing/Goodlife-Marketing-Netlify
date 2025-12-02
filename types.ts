import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface StatItem {
  label: string;
  value: string;
  growth?: string;
  subtext?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface CaseStudyItem {
  company: string;
  title: string;
  stats: { label: string; value: string; growth?: string }[];
  description: string;
}

export interface ProcessStepItem {
  step: number;
  title: string;
  description?: string;
  items: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export enum SectionTheme {
  DARK = 'DARK',
  LIGHT = 'LIGHT'
}