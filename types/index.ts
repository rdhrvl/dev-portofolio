export interface ProjectFeature {
  title: string;
  description: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  metric1: string;
  metric1Label: string;
  metric2: string;
  metric2Label: string;
  clientName: string;
  clientIndustry: string;
  projectGoal: string;
  stackUsed: string[];
  features: ProjectFeature[];
  featured?: boolean;
  liveUrl?: string;
}
