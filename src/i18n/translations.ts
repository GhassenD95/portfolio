export type Language = 'en' | 'fr' | 'de';

export type Translations = {
  site: { badge: string };
  nav: { identity: string; projects: string; skills: string; contact: string };
  contact_button: string;
  footer: { copyright: string; github: string; linkedin: string; email: string };
  hero: { label: string; title: string; description: string };
  about: { location: string; languages: string; focus: string; status: string; education: string; experience: string };
  projects: {
    title: string;
    subtitle: string;
    coming_soon: string;
    github_link: string;
    detail_link: string;
    case_label: string;
    items: Record<string, string>;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: Record<string, string>;
    context: Record<string, string>;
  };
  skillSummaries: Record<string, string>;
  easterEgg: {
    line: string;
    reset: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
  };
};

const translations: Record<Language, Translations> = {
  en: {
    site: { badge: 'GD' },
    nav: { identity: 'IDENTITY', projects: 'PROJECTS', skills: 'SKILLS', contact: 'CONTACT' },
    contact_button: 'CONTACT',
    footer: { copyright: '© 2026 GHASSEN DHAOUI', github: 'GITHUB', linkedin: 'LINKEDIN', email: 'EMAIL' },
    hero: {
      label: '// IDENTITY',
      title: 'AI Systems Engineer',
      description:
        'I build backend systems and AI-powered applications that process real-world data and are built to scale.',
    },
    about: {
      location: 'Tunisia',
      languages: 'AR (native) · EN (fluent) · FR (fluent) · DE (fluent)',
      focus: 'Backend · AI Integration · Systems',
      status: 'Open to internship opportunities in AI and software engineering',
      education: 'ESPRI Tunis — Engineering Degree in Computer Science (2024 – 2027)',
      experience: 'Research Intern · Talan Tunisie (Charguia) — Summer 2024 · 6 weeks. Researched sono-genetics (ultrasound + genetics) and built a prototype with Blender and Spring Boot.',
    },
    projects: {
      title: 'PROJECTS',
      subtitle: '// ARCHIVE_RECORDS',
      coming_soon: 'COMING SOON',
      github_link: 'GitHub →',
      detail_link: 'View Brief →',
      case_label: 'CASE-FILE',
      items: {
        'doc-ai':
          'An end-to-end OCR and AI-powered document processing pipeline with automatic classification, extraction, and validation.',
      },
    },
    skills: {
      title: 'SKILLS',
      subtitle: '// TECHNOLOGIES',
      categories: {
        'Backend Development': 'Backend Development',
        'AI & Data': 'AI & Data',
        'Frontend Development': 'Frontend Development',
        'DevOps & Tools': 'DevOps & Tools',
      },
      context: {
        'Backend Development': 'Java 21, Spring Boot 4, REST APIs, Messaging',
        'AI & Data': 'LLM APIs, OCR, Prompt Engineering, PostgreSQL',
        'Frontend Development': 'React 19, TypeScript, Tailwind CSS, Vite',
        'DevOps & Tools': 'Docker, Docker Compose, Linux, Git, CI',
      },
    },
    skillSummaries: {
      Java: 'Core language for the entire Document AI Pipeline backend — record types, sealed interfaces, virtual threads, and structured concurrency for async document processing.',
      'Spring Boot': 'Built the entire Document AI Pipeline backend with Spring Boot 4 — REST APIs, JPA persistence, RabbitMQ messaging, and async document processing.',
      RabbitMQ: 'Used as the async message broker in the Document AI Pipeline. Document processing tasks are published to a queue and consumed asynchronously, decoupling the upload API from OCR/LLM processing.',
      'Groq API (Llama 3.1)': 'Integrated Groq API with Llama 3.1 to extract structured invoice data from OCR text. Designed prompts for field extraction and parsed JSON responses.',
      'Tesseract OCR': 'Integrated Tesseract OCR 5 into the Document AI Pipeline as the text extraction layer. PDF uploads are processed server-side with OCR before LLM analysis.',
      'Prompt Engineering': 'Designed structured prompts for Llama 3.1 via Groq API to extract invoice fields as valid JSON. Iterated on few-shot examples to improve extraction accuracy.',
      PostgreSQL: 'Used as the primary database in the Document AI Pipeline with full-text search (tsvector) for document metadata and extracted invoice data.',
      React: 'Built the Document AI Pipeline frontend with React 19 — file upload, document status polling, extracted data display. This portfolio is also built with React.',
      TypeScript: 'Used throughout both the Document AI Pipeline frontend and this portfolio. Type-safe React components, API client typing, and data model definitions.',
      'Tailwind CSS': 'Styled the Document AI Pipeline frontend and this portfolio. Utility-first approach for rapid, consistent UI without leaving the markup.',
      Vite: 'Build tool for both this portfolio and the Document AI Pipeline frontend. Fast HMR, TypeScript support, and optimized production builds.',
      Docker: 'Containerized the Document AI Pipeline (backend + frontend + PostgreSQL + RabbitMQ) with multi-stage builds. Wrote Compose files for local dev and production.',
      Nginx: 'Configured as reverse proxy for the Document AI Pipeline frontend, routing /api calls to the backend container with SPA fallback.',
      'Git / CI': 'Git-based version control with GitHub for all projects. Set up automated CI workflows for build and testing.',
      Linux: 'Daily driver for development — shell scripting, server management, Docker host, and deployment automation.',
    },
    contact: {
      title: 'CONTACT',
      subtitle: '// CHANNELS',
      description: 'Open to internship and junior developer opportunities.',
    },
    easterEgg: {
      line: "Technology-agnostic mindset focused on building the right solution for the problem at hand.",
      reset: 'reset',
    },
  },
  fr: {
    site: { badge: 'GD' },
    nav: { identity: 'IDENTITÉ', projects: 'PROJETS', skills: 'COMPÉTENCES', contact: 'CONTACT' },
    contact_button: 'CONTACT',
    footer: { copyright: '© 2026 GHASSEN DHAOUI', github: 'GITHUB', linkedin: 'LINKEDIN', email: 'E-MAIL' },
    hero: {
      label: '// IDENTITÉ',
      title: "Ingénieur Systèmes IA",
      description:
        'Je développe des systèmes backend et des applications IA qui traitent des données réelles et qui sont conçus pour passer à l\'échelle.',
    },
    about: {
      location: 'Tunisie',
      languages: 'AR (natif) · EN (courant) · FR (courant) · DE (courant)',
      focus: 'Backend · Intégration IA · Systèmes',
      status: 'Ouvert aux stages en IA et génie logiciel',
      education: 'ESPRI Tunis — Diplôme d\'Ingénieur en Informatique (2024 – 2027)',
      experience: 'Stagiaire · Talan Tunisie (Charguia) — Été 2024 · 6 semaines. Recherche sur la sono-génétique (ultrasons + génétique) et prototypage avec Blender et Spring Boot.',
    },
    projects: {
      title: 'PROJETS',
      subtitle: '// ARCHIVES',
      coming_soon: 'À VENIR',
      github_link: 'GitHub →',
      detail_link: 'Voir le Dossier →',
      case_label: 'DOSSIER',
      items: {
        'doc-ai':
          'Une pipeline de traitement documentaire complète, propulsée par OCR et IA, avec classification automatique, extraction et validation.',
      },
    },
    skills: {
      title: 'COMPÉTENCES',
      subtitle: '// TECHNOLOGIES',
      categories: {
        'Backend Development': 'Développement Backend',
        'AI & Data': 'IA & Données',
        'Frontend Development': 'Développement Frontend',
        'DevOps & Tools': 'DevOps & Outils',
      },
      context: {
        'Backend Development': 'Java 21, Spring Boot 4, API REST, Messagerie',
        'AI & Data': 'API LLM, OCR, Ingénierie de Prompts, PostgreSQL',
        'Frontend Development': 'React 19, TypeScript, Tailwind CSS, Vite',
        'DevOps & Tools': 'Docker, Docker Compose, Linux, Git, CI',
      },
    },
    skillSummaries: {
      Java: 'Langage principal pour le backend du Document AI Pipeline — record types, interfaces scellées, threads virtuels et concurrence structurée.',
      'Spring Boot': "Backend complet du Document AI Pipeline avec Spring Boot 4 — API REST, JPA, RabbitMQ et traitement asynchrone des documents.",
      RabbitMQ: 'Courtier de messages asynchrone dans le Document AI Pipeline. Les tâches de traitement sont publiées dans une file d\'attente et consommées de manière asynchrone.',
      'Groq API (Llama 3.1)': "Intégration de l'API Groq avec Llama 3.1 pour extraire des données structurées de factures à partir de texte OCR. Conception de prompts et parsing JSON.",
      'Tesseract OCR': 'Intégration de Tesseract OCR 5 comme couche d\'extraction de texte dans le Document AI Pipeline. Les PDF sont traités côté serveur avant analyse LLM.',
      'Prompt Engineering': 'Conception de prompts structurés pour Llama 3.1 via Groq API afin d\'extraire les champs de factures en JSON. Itération avec exemples few-shot.',
      PostgreSQL: 'Base de données principale du Document AI Pipeline avec recherche plein texte (tsvector) pour les métadonnées des documents et les données extraites.',
      React: 'Frontend du Document AI Pipeline avec React 19 — upload de fichiers, sondage d\'état, affichage des données extraites. Ce portfolio est aussi construit avec React.',
      TypeScript: 'Utilisé dans le frontend du Document AI Pipeline et ce portfolio. Composants React typés, typage API client et définitions de modèles de données.',
      'Tailwind CSS': 'Styling du frontend du Document AI Pipeline et de ce portfolio. Approche utility-first pour une UI rapide et cohérente.',
      Vite: 'Outil de build pour ce portfolio et le frontend du Document AI Pipeline. HMR rapide, support TypeScript et builds optimisés.',
      Docker: 'Conteneurisation du Document AI Pipeline (backend + frontend + PostgreSQL + RabbitMQ) avec builds multi-étapes. Fichiers Compose pour dev et production.',
      Nginx: 'Configuré comme proxy inverse pour le frontend du Document AI Pipeline, routant les appels /api vers le backend avec fallback SPA.',
      'Git / CI': 'Versioning Git avec GitHub pour tous les projets. Mise en place de workflows CI automatisés pour le build et les tests.',
      Linux: 'Environnement de développement quotidien — scripts shell, administration serveur, hébergement Docker et automatisation de déploiement.',
    },
    contact: {
      title: 'CONTACT',
      subtitle: '// CANAUX',
      description: 'Ouvert aux opportunités de stage et aux postes de développeur junior.',
    },
    easterEgg: {
      line: 'Je privilégie la bonne solution au bon problème, indépendamment des technologies.',
      reset: 'réinitialiser',
    },
  },
  de: {
    site: { badge: 'GD' },
    nav: { identity: 'IDENTITÄT', projects: 'PROJEKTE', skills: 'FÄHIGKEITEN', contact: 'KONTAKT' },
    contact_button: 'KONTAKT',
    footer: { copyright: '© 2026 GHASSEN DHAOUI', github: 'GITHUB', linkedin: 'LINKEDIN', email: 'E-MAIL' },
    hero: {
      label: '// IDENTITÄT',
      title: 'KI-Systemingenieur',
      description:
        'Ich entwickle Backend-Systeme und KI-Anwendungen, die reale Daten verarbeiten und skalierbar sind.',
    },
    about: {
      location: 'Tunesien',
      languages: 'AR (Muttersprache) · EN (fließend) · FR (fließend) · DE (fließend)',
      focus: 'Backend · KI-Integration · Systeme',
      status: 'Offen für Praktika in den Bereichen KI und Softwareentwicklung',
      education: 'ESPRI Tunis — Ingenieurstudium Informatik (2024 – 2027)',
      experience: 'Praktikant · Talan Tunisie (Charguia) — Sommer 2024 · 6 Wochen. Forschung zu Sono-Genetik (Ultraschall + Genetik) und Prototypentwicklung mit Blender und Spring Boot.',
    },
    projects: {
      title: 'PROJEKTE',
      subtitle: '// ARCHIVAUFZEICHNUNGEN',
      coming_soon: 'DEMNÄCHST',
      github_link: 'GitHub →',
      detail_link: 'Zum Bericht →',
      case_label: 'FALL-AKTE',
      items: {
        'doc-ai':
          'Eine End-to-End-Dokumentenverarbeitungspipeline mit OCR und KI, inklusive automatischer Klassifizierung, Extraktion und Validierung.',
      },
    },
    skills: {
      title: 'FÄHIGKEITEN',
      subtitle: '// TECHNOLOGIES',
      categories: {
        'Backend Development': 'Backend-Entwicklung',
        'AI & Data': 'KI & Daten',
        'Frontend Development': 'Frontend-Entwicklung',
        'DevOps & Tools': 'DevOps & Tools',
      },
      context: {
        'Backend Development': 'Java 21, Spring Boot 4, REST-APIs, Messaging',
        'AI & Data': 'LLM-APIs, OCR, Prompt-Engineering, PostgreSQL',
        'Frontend Development': 'React 19, TypeScript, Tailwind CSS, Vite',
        'DevOps & Tools': 'Docker, Docker Compose, Linux, Git, CI',
      },
    },
    skillSummaries: {
      Java: 'Primäre Sprache für das gesamte Document AI Pipeline Backend — Record Types, Sealed Interfaces, Virtual Threads und Structured Concurrency.',
      'Spring Boot': 'Komplettes Backend des Document AI Pipeline mit Spring Boot 4 — REST-APIs, JPA, RabbitMQ und asynchrone Dokumentenverarbeitung.',
      RabbitMQ: 'Asynchroner Message Broker im Document AI Pipeline. Verarbeitungsaufgaben werden in eine Warteschlange gestellt und asynchron konsumiert.',
      'Groq API (Llama 3.1)': 'Integration der Groq API mit Llama 3.1 zur Extraktion strukturierter Rechnungsdaten aus OCR-Text. Prompt-Design und JSON-Parsing.',
      'Tesseract OCR': 'Integration von Tesseract OCR 5 als Textextraktionsebene im Document AI Pipeline. PDF-Uploads werden serverseitig vor der LLM-Analyse verarbeitet.',
      'Prompt Engineering': 'Entwicklung strukturierter Prompts für Llama 3.1 über die Groq API zur Extraktion von Rechnungsfeldern als JSON. Iteration mit Few-Shot-Beispielen.',
      PostgreSQL: 'Primäre Datenbank im Document AI Pipeline mit Volltextsuche (tsvector) für Dokumentenmetadaten und extrahierte Rechnungsdaten.',
      React: 'Frontend des Document AI Pipeline mit React 19 — Datei-Upload, Status-Polling, Anzeige extrahierter Daten. Dieses Portfolio ist ebenfalls mit React erstellt.',
      TypeScript: 'Verwendet im Frontend des Document AI Pipeline und in diesem Portfolio. Typsichere React-Komponenten, API-Client-Typisierung und Datenmodell-Definitionen.',
      'Tailwind CSS': 'Styling des Document AI Pipeline Frontends und dieses Portfolios. Utility-first-Ansatz für schnelles, konsistentes UI.',
      Vite: 'Build-Tool für dieses Portfolio und das Document AI Pipeline Frontend. Schnelles HMR, TypeScript-Support und optimierte Produktions-Builds.',
      Docker: 'Containerisierung des Document AI Pipeline (Backend + Frontend + PostgreSQL + RabbitMQ) mit Multi-Stage-Builds. Compose-Dateien für Entwicklung und Produktion.',
      Nginx: 'Als Reverse Proxy für das Document AI Pipeline Frontend konfiguriert, Weiterleitung von /api-Aufrufen an den Backend-Container mit SPA-Fallback.',
      'Git / CI': 'Git-basierte Versionskontrolle mit GitHub für alle Projekte. Einrichtung automatisierter CI-Workflows für Build und Tests.',
      Linux: 'Tägliche Entwicklungsumgebung — Shell-Scripting, Serververwaltung, Docker-Host und Bereitstellungsautomatisierung.',
    },
    contact: {
      title: 'KONTAKT',
      subtitle: '// KANÄLE',
      description: 'Offen für Praktikums- und Junior-Entwicklerstellen.',
    },
    easterEgg: {
      line: 'Ich konzentriere mich auf die richtige Lösung für das Problem, unabhängig von der Technologie.',
      reset: 'zurücksetzen',
    },
  },
};

export default translations;
