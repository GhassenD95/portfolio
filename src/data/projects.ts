export interface Project {
  id: string;
  title: string;
  period: string;
  status: 'ACTIVE' | 'COMPLETED' | 'COMING_SOON';
  description: string;
  tags: string[];
  github?: string;
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
  },
  {
    id: "fintech",
    title: "Fintech Fraud Intelligence",
    period: "2026",
    status: "COMING_SOON",
    description:
      "Real-time transaction fraud detection system using event-driven architecture. Spring Boot + Kafka, rule engine, anomaly scoring, and a dashboard for investigation.",
    tags: ["Java", "Spring Boot", "Kafka", "Docker"],
  },
  {
    id: "automation",
    title: "AI Business Workflow Automation",
    period: "2026",
    status: "COMING_SOON",
    description:
      "LLM-powered email classification and task automation. Reads emails, extracts intent, creates tickets, updates CRM, and sends responses — with human-in-the-loop approval.",
    tags: ["Java", "Spring Boot", "LangChain4J", "n8n"],
  },
];
