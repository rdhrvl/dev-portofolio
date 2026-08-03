export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  quote: string;
  projectRef?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-placeholder-1",
    name: "[CLIENT / COLLABORATOR NAME]",
    role: "[TITLE / ROLE]",
    company: "[COMPANY / PROJECT NAME]",
    quote: "[INSERT TESTIMONIAL HERE: Add genuine feedback from client or team lead regarding technical quality, project delivery, and overall impact.]",
    projectRef: "PPKD Hotel Project"
  }
];
