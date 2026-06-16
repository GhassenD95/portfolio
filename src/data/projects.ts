export interface Project {
  id: string;
  title: string;
  period: string;
  status: 'ACTIVE' | 'COMPLETED' | 'COMING_SOON';
  description: string;
  tags: string[];
  github?: string;
  links?: { label: string; url: string }[];
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "doc-ai",
    title: "Document AI Pipeline",
    period: "2026",
    status: "COMPLETED",
    description:
      "Automated invoice processing system. Upload a PDF — Tesseract OCR extracts text, then Groq (Llama 3.1) parses invoice number, date, total, and vendor. Async processing via RabbitMQ, full-text search with PostgreSQL tsvector.",
    tags: ["Java", "Spring Boot", "React", "RabbitMQ", "Tesseract", "Groq"],
    github: "https://github.com/GhassenD95/document-ai-pipeline-backend",
    demo: "https://document-ai-pipeline-frontend.ghassendhaoui-eng.workers.dev",
    links: [
      { label: "Live Demo", url: "https://document-ai-pipeline-frontend.ghassendhaoui-eng.workers.dev" },
      { label: "Backend Repository", url: "https://github.com/GhassenD95/document-ai-pipeline-backend" },
      { label: "Frontend Repository", url: "https://github.com/GhassenD95/document-ai-pipeline-frontend" },
    ],
  },
];
