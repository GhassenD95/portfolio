export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    items: ["Java 21", "Spring Boot 4", "Spring Security", "JPA/Hibernate", "REST APIs", "RabbitMQ", "Kafka"],
  },
  {
    title: "AI & Data",
    items: ["Groq API", "Llama 3.1", "LangChain4J", "Tesseract OCR", "Prompt Engineering", "PostgreSQL", "Full-Text Search"],
  },
  {
    title: "Frontend",
    items: ["React 19", "TypeScript", "Tailwind CSS v4", "TanStack Query", "React Router v7", "Vite"],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Docker Compose", "Nginx", "Git", "GitHub Actions", "Linux"],
  },
];
