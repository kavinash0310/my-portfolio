export interface Skill {
    name: string;
    icon: string;
  }
  
  /* ================= BACKEND ================= */
  export const backendSkills: Skill[] = [
    { name: "Java", icon: "☕" },
    { name: "Spring Boot", icon: "🌱" },
    { name: "Spring Security", icon: "🛡️" },
    { name: "REST APIs", icon: "🔗" },
    { name: "JWT Authentication", icon: "🔐" },
    { name: "Microservices", icon: "🧩" },
    { name: "Apache Kafka", icon: "📡" }
  ];
  
  /* ================= FRONTEND ================= */
  export const frontendSkills: Skill[] = [
    { name: "JavaScript", icon: "⚡" },
    { name: "TypeScript", icon: "📘" },
    { name: "Angular", icon: "🅰️" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🎨" }
  ];
  
  /* ================= DATABASES ================= */
  export const databaseSkills: Skill[] = [
    { name: "MySQL", icon: "🗄️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" }
  ];
  
  /* ================= TESTING ================= */
  export const testingSkills: Skill[] = [
    { name: "JUnit 5", icon: "🧪" },
    { name: "Mockito", icon: "🎭" }
  ];
  
  /* ================= TOOLS & DEVOPS ================= */
  export const toolsSkills: Skill[] = [
    { name: "Git", icon: "📦" },
    { name: "Docker", icon: "🐳" },
    { name: "Jenkins", icon: "⚙️" },
    { name: "Postman", icon: "📮" },
    { name: "VS Code", icon: "🧠" },
    { name: "IntelliJ IDEA", icon: "💡" }
  ];