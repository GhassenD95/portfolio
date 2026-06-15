export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    items: [
      "Java", "Spring Boot", "RabbitMQ", "PostgreSQL",
    ],
  },
  {
    title: "AI & Data",
    items: [
      "Groq API (Llama 3.1)",
      "Tesseract OCR", "Prompt Engineering",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React", "TypeScript", "Tailwind CSS", "Vite",
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      "Docker", "Nginx",
      "Git / CI", "Linux",
    ],
  },
];
