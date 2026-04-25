export interface Skill {
  name: string;
  desc: { de: string; en: string };
}

export interface SkillCategory {
  category: { de: string; en: string };
  tags: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: { de: "Programmier- & Scriptsprachen", en: "Programming & Scripting" },
    tags: [
      { name: "Java", desc: { de: "Verbreitete, robuste Sprache für komplexe Enterprise-Backends.", en: "Widespread, robust language for complex enterprise backends." } },
      { name: "Kotlin", desc: { de: "Moderne, typsichere Sprache, Standard für Android-Apps.", en: "Modern, type-safe language, standard for Android apps." } },
      { name: "Dart", desc: { de: "Google-Sprache für App-Entwicklung mit dem Flutter-Framework.", en: "Google language for app development with the Flutter framework." } },
      { name: "Python", desc: { de: "Beliebt für Skripte, Automatisierung und Datenverarbeitung.", en: "Popular for scripting, automation, and data processing." } },
      { name: "Ruby & PHP", desc: { de: "Dynamische Sprachen, sehr populär in der Start-Up und Web-Welt.", en: "Dynamic languages, very popular in the startup and web world." } },
      { name: "TypeScript", desc: { de: "Erweitertes JavaScript für sichereren, typisierten Web-Code.", en: "Extended JavaScript for safer, typed web code." } },
      { name: "JavaScript", desc: { de: "Die universelle Hauptsprache direkt im Webbrowser.", en: "The universal main language directly in the web browser." } },
      { name: "HTML5 & SCSS", desc: { de: "Struktursprache und fortgeschrittenes Styling für moderne Websites.", en: "Structure language and advanced styling for modern websites." } },
      { name: "Go", desc: { de: "Hochperformante Sprache von Google für Netzwerke & Cloud.", en: "High-performance language from Google for networks & cloud." } },
      { name: "C / C++", desc: { de: "Hochperformante, hardwarenahe Programmierung.", en: "High-performance, low-level programming." } },
      { name: "C#", desc: { de: "Microsofts wichtigste Sprache für .NET Applikationen.", en: "Microsoft's main language for .NET applications." } },
      { name: "VB / VBA", desc: { de: "Makroprogrammierung für Microsoft Office und Automatisierung.", en: "Macro programming for Microsoft Office and automation." } },
      { name: "Bash & PowerShell", desc: { de: "Kommandozeilen-Sprachen zur IT-Automatisierung.", en: "Command-line languages for IT automation." } }
    ]
  },
  {
    category: { de: "Frameworks & Bibliotheken", en: "Frameworks & Libraries" },
    tags: [
      { name: "Spring Boot", desc: { de: "Mächtiges Java-Framework für sichere Geschäftsanwendungen.", en: "Powerful Java framework for secure business applications." } },
      { name: "Ruby on Rails", desc: { de: "Web-Framework für extrem schnelle Prototypen.", en: "Web framework for extremely fast prototyping." } },
      { name: "Node.js & Express", desc: { de: "Ermöglicht Server-Entwicklung direkt mit JavaScript.", en: "Enables server development directly with JavaScript." } },
      { name: "Svelte", desc: { de: "Hochmodernes Web-Framework (Dieses Profil ist damit gebaut!).", en: "Ultra-modern web framework (this profile is built with it!)." } },
      { name: "Flutter", desc: { de: "Framework für Apps auf Android, iOS & Web mit nur einer Codebasis.", en: "Framework for apps on Android, iOS & web with a single codebase." } },
      { name: "JUnit & Selenium", desc: { de: "Automatisierte Software- und Browser-Qualitätstests.", en: "Automated software and browser quality tests." } }
    ]
  },
  {
    category: { de: "Cloud, DevOps & Infrastruktur", en: "Cloud, DevOps & Infrastructure" },
    tags: [
      { name: "AWS & Azure & GCP", desc: { de: "Die drei größten professionellen Cloud-Plattformen weltweit.", en: "The three largest professional cloud platforms worldwide." } },
      { name: "Kubernetes & Docker", desc: { de: "Verpacken (Docker) und Steuern (K8s) von unabhängigen App-Containern.", en: "Packaging (Docker) and orchestrating (K8s) independent app containers." } },
      { name: "Terraform", desc: { de: "'Infrastructure as Code' – Serverarchitektur per Skript aufbauen.", en: "'Infrastructure as Code' – building server architecture via script." } },
      { name: "CI/CD", desc: { de: "Vollautomatisches Testen und Ausliefern von neuem Code.", en: "Fully automated testing and delivery of new code." } },
      { name: "Git", desc: { de: "Der weltweite Standard zur versionierten Quellcode-Verwaltung.", en: "The global standard for versioned source code management." } }
    ]
  },
  {
    category: { de: "Persönlichkeit", en: "Personality" },
    tags: [
      { name: "Analytisches Denken", desc: { de: "Komplexe Probleme erkennen und sachlich reduzieren.", en: "Identifying complex problems and reducing them objectively." } },
      { name: "Hands-on Mentalität", desc: { de: "Nicht nur reden, sondern ausprobieren und machen.", en: "Not just talking, but trying and doing." } },
      { name: "Problemlöser", desc: { de: "Es gibt für fast alles in der IT eine technische Lösung.", en: "There is a technical solution for almost everything in IT." } }
    ]
  }
];
