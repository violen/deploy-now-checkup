<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  let tooltips: any[] = [];
  
  onMount(() => {
    setTimeout(() => {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.bootstrap) {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        // @ts-ignore
        tooltips = [...tooltipTriggerList].map(el => new window.bootstrap.Tooltip(el, { container: 'body' }));
      }
    }, 200);
  });
  
  onDestroy(() => {
    tooltips.forEach(t => t.dispose());
  });

  const skills = [
    { 
      category: "Programmier- & Scriptsprachen", 
      tags: [
        { name: "Java", desc: "Verbreitete, robuste Sprache für komplexe Enterprise-Backends." },
        { name: "Kotlin", desc: "Moderne, typsichere Sprache, Standard für Android-Apps." },
        { name: "Dart", desc: "Google-Sprache für App-Entwicklung mit dem Flutter-Framework." },
        { name: "Python", desc: "Beliebt für Skripte, Automatisierung und Datenverarbeitung." },
        { name: "Ruby", desc: "Dynamische Sprache, sehr populär in der Start-Up Welt." },
        { name: "TypeScript", desc: "Erweitertes JavaScript für sichereren, typisierten Web-Code." },
        { name: "JavaScript", desc: "Die universelle Hauptsprache direkt im Webbrowser." },
        { name: "HTML5 & SCSS", desc: "Struktursprache und fortgeschrittenes Styling für moderne Websites." },
        { name: "Go", desc: "Hochperformante Sprache von Google für Netzwerke & Cloud." },
        { name: "C#", desc: "Microsofts wichtigste Sprache für .NET Applikationen." },
        { name: "Bash & PowerShell", desc: "Kommandozeilen-Sprachen zur IT-Automatisierung." }
      ] 
    },
    { 
      category: "Frameworks & Bibliotheken", 
      tags: [
        { name: "Spring Boot", "desc": "Mächtiges Java-Framework für sichere Geschäftsanwendungen." },
        { name: "Ruby on Rails", "desc": "Web-Framework für extrem schnelle Prototypen." },
        { name: "Node.js & Express", "desc": "Ermöglicht Server-Entwicklung direkt mit JavaScript." },
        { name: "Angular & Vue", "desc": "Beliebte Frameworks für interaktive Web-Benutzeroberflächen." },
        { name: "Svelte", "desc": "Hochmodernes Web-Framework (Dieses Profil ist damit gebaut!)." },
        { name: "Flutter", "desc": "Framework für Apps auf Android, iOS & Web mit nur einer Codebasis." },
        { name: "JUnit & Selenium", "desc": "Automatisierte Software- und Browser-Qualitätstests." }
      ] 
    },
    { 
      category: "Datenbanken", 
      tags: [
        { name: "MySQL & MariaDB", "desc": "Klassische, extrem bewährte relationale Datenbanksysteme." },
        { name: "PostgreSQL", "desc": "Sehr mächtige und komplexe Open-Source Datenbank." },
        { name: "MongoDB", "desc": "Dokumentenbasierte Datenbank, ideal für flexible Datenmengen." },
        { name: "Redis", "desc": "Rasend schneller In-Memory Speicher für temporäre Daten (Caching)." },
        { name: "AWS DynamoDB", "desc": "Serverlose, hochskalierbare Cloud-Datenbank von Amazon." }
      ] 
    },
    { 
      category: "Cloud, DevOps & Infrastruktur", 
      tags: [
        { name: "AWS & Azure & GCP", "desc": "Die drei größten professionellen Cloud-Plattformen weltweit." },
        { name: "Kubernetes & Docker", "desc": "Verpacken (Docker) und Steuern (K8s) von unabhängigen App-Containern." },
        { name: "CI/CD", "desc": "Vollautomatisches Testen und Ausliefern von neuem Code." },
        { name: "Terraform", "desc": "'Infrastructure as Code' – Serverarchitektur per Skript aufbauen." },
        { name: "Git", "desc": "Der weltweite Standard zur versionierten Quellcode-Verwaltung." }
      ] 
    },
    { 
      category: "Server & OS", 
      tags: [
        { name: "Linux / Ubuntu", "desc": "Der globale Standard für hochverfügbare Web-Server." },
        { name: "Windows Server", "desc": "Microsofts Enterprise System für Unternehmensnetzwerke." },
        { name: "Webserver (Apache/Nginx)", "desc": "Leiten Anfragen aus dem Internet an die richtige Website." },
        { name: "Virtualisierung", "desc": "Mehrere Server-Systeme isoliert auf einer Hardware betreiben." }
      ] 
    },
    { 
      category: "Methoden & Engineering", 
      tags: [
        { name: "Clean Code", "desc": "Schreiben von Code, den auch Kollegen Jahre später noch verstehen." },
        { name: "Microservices", "desc": "Aufteilen großer Apps in kleine, unabhängige Bausteine." },
        { name: "Agile (Scrum / TDD)", "desc": "Moderne Projektplanung und Softwaretests noch bevor man programmiert." }
      ] 
    },
    { 
      category: "Persönlichkeit", 
      tags: [
        { name: "Analytisches Denken", "desc": "Komplexe Probleme erkennen und sachlich reduzieren." },
        { name: "Hands-on Mentalität", "desc": "Nicht nur reden, sondern ausprobieren und machen." },
        { name: "Problemlöser", "desc": "Es gibt für fast alles in der IT eine technische Lösung." }
      ] 
    }
  ];
</script>

<div class="glass-panel text-start h-100">
  <h2 class="mb-4 d-flex align-items-center">
    <span class="text-primary me-2 fw-bold">#</span> Kompetenzen
  </h2>

  <div class="skills-container scrollable-skills">
    {#each skills as section, sectionIdx}
      <div class="skill-category mb-4 pb-2">
        <h5 class="h6 text-uppercase fw-bold opacity-75 mb-3 border-bottom border-light pb-2">{section.category}</h5>
        <div class="d-flex flex-wrap gap-2">
          {#each section.tags as tag, tagIdx}
            {@const uniqueId = `skill-${sectionIdx}-${tagIdx}`}
            <span id={uniqueId} class="badge skill-badge fs-6 fw-normal px-3 py-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={tag.desc}>
              {tag.name}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .scrollable-skills {
    max-height: 520px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 15px; // for scrollbar offset
    padding-bottom: 2rem;

    // Fade out mask at bottom
    -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 85%, transparent 100%);

    /* Custom Modern Scrollbar */
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--glass-border);
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--color-primary);
    }
  }

  .skill-badge {
    background: rgba(var(--bs-primary-rgb), 0.1);
    color: var(--color-primary);
    border: 1px solid rgba(var(--bs-primary-rgb), 0.3);
    transition: all 0.3s ease;
    cursor: help; // Zeigt dem User, dass es hier Infos gibt!

    &:hover {
      background: var(--color-primary);
      color: var(--color-bg);
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(var(--bs-primary-rgb), 0.4);
    }
  }

  [data-bs-theme="light"] .border-light {
    border-color: rgba(0,0,0,0.1) !important;
  }
  
  [data-bs-theme="dark"] .border-light {
    border-color: rgba(255,255,255,0.1) !important;
  }
</style>
