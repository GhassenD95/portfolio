export interface SkillDetail {
  summary: string;
  projects: { id: string; title: string }[];
}

const skillDetails: Record<string, SkillDetail> = {
  Java: {
    summary:
      'Core language for the entire Document AI Pipeline backend — record types, sealed interfaces, virtual threads, and structured concurrency for async document processing.',
    projects: [{ id: 'doc-ai', title: 'Document AI Pipeline' }],
  },
  'Spring Boot': {
    summary:
      'Built the entire Document AI Pipeline backend with Spring Boot 4 — REST APIs, JPA persistence, RabbitMQ messaging, and async document processing.',
    projects: [{ id: 'doc-ai', title: 'Document AI Pipeline' }],
  },
  RabbitMQ: {
    summary:
      'Used as the async message broker in the Document AI Pipeline. Document processing tasks are published to a queue and consumed asynchronously, decoupling the upload API from OCR/LLM processing.',
    projects: [{ id: 'doc-ai', title: 'Document AI Pipeline' }],
  },
  'Groq API (Llama 3.1)': {
    summary:
      'Extracts structured invoice data from OCR text via Groq API (Llama 3.1). Designed prompts for field extraction and parses JSON responses.',
    projects: [{ id: 'doc-ai', title: 'Document AI Pipeline' }],
  },
  'Tesseract OCR': {
    summary:
      'Integrated Tesseract OCR 5 into the Document AI Pipeline as the text extraction layer. PDF uploads are processed server-side with OCR before LLM analysis.',
    projects: [{ id: 'doc-ai', title: 'Document AI Pipeline' }],
  },
  'Prompt Engineering': {
    summary:
      'Designed structured prompts for Llama 3.1 via Groq API to extract invoice fields as valid JSON. Iterated on few-shot examples to improve extraction accuracy.',
    projects: [{ id: 'doc-ai', title: 'Document AI Pipeline' }],
  },
  PostgreSQL: {
    summary:
      'Used as the primary database in the Document AI Pipeline with full-text search (tsvector) for document metadata and extracted invoice data.',
    projects: [{ id: 'doc-ai', title: 'Document AI Pipeline' }],
  },
  React: {
    summary:
      'Built the Document AI Pipeline frontend with React 19 — file upload, document status polling, extracted data display. This portfolio is also built with React.',
    projects: [{ id: 'doc-ai', title: 'Document AI Pipeline' }],
  },
  TypeScript: {
    summary:
      'Used throughout both the Document AI Pipeline frontend and this portfolio. Type-safe React components, API client typing, and data model definitions.',
    projects: [{ id: 'doc-ai', title: 'Document AI Pipeline' }],
  },
  'Tailwind CSS': {
    summary:
      'Styled the Document AI Pipeline frontend and this portfolio. Utility-first approach for rapid, consistent UI without leaving the markup.',
    projects: [{ id: 'doc-ai', title: 'Document AI Pipeline' }],
  },
  Vite: {
    summary:
      'Build tool for both this portfolio and the Document AI Pipeline frontend. Fast HMR, TypeScript support, and optimized production builds.',
    projects: [{ id: 'doc-ai', title: 'Document AI Pipeline' }],
  },
  Docker: {
    summary:
      'Containerized the Document AI Pipeline (backend + frontend + PostgreSQL + RabbitMQ) with multi-stage builds. Wrote Compose files for local dev and production.',
    projects: [{ id: 'doc-ai', title: 'Document AI Pipeline' }],
  },
  Nginx: {
    summary:
      'Configured as reverse proxy for the Document AI Pipeline frontend, routing /api calls to the backend container with SPA fallback.',
    projects: [{ id: 'doc-ai', title: 'Document AI Pipeline' }],
  },
  'Git / CI': {
    summary:
      'Git-based version control with GitHub for all projects. Set up automated CI workflows for build and testing.',
    projects: [{ id: 'doc-ai', title: 'Document AI Pipeline' }],
  },
  Linux: {
    summary:
      'Daily driver for development — shell scripting, server management, Docker host, and deployment automation.',
    projects: [],
  },
};

export function getSkillDetail(name: string): SkillDetail | undefined {
  return skillDetails[name];
}
