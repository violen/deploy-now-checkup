<script lang="ts">
  const projects = [
    {
      title: "Kitalino (Backend & DevOps)",
      desc: "Aufbau einer multiarchitekturbasierten, containerisierten Infrastruktur (K8s) via Infrastructure as Code (Terraform/Terragrunt). Umsetzung komplexer Backend-Features.",
      tags: ["Java", "Kotlin", "Terraform", "Kubernetes", "CI/CD"],
      icon: "bi-cloud-check"
    },
    {
      title: "Gestellpool (Flutter App)",
      desc: "Wartung und Weiterentwicklung einer mobilen Applikation zur Logistik-Steuerung. Migration auf moderne Entwicklungstechniken und Implementierung neuer Kernfeatures.",
      tags: ["Flutter", "Dart", "Mobile First", "Logistik"],
      icon: "bi-phone"
    },
    {
      title: "GdP (Headless Node.js)",
      desc: "Vollständiger Rewrite des Backends von PHP zu Node.js. Transition von Bare-Metal in eine containerisierte Umgebung und Automatisierung von SQL-Datenupdates.",
      tags: ["Node.js", "PHP Migration", "Docker", "API-Design"],
      icon: "bi-gear-wide-connected"
    },
    {
      title: "Cyberfitness (AWS Media Services)",
      desc: "Konzeption von videodatenbasierten Livestreams in AWS. Integration von Bezahldiensten (Adyen) und Entwicklung von Cloud-Skalierungsmechanismen.",
      tags: ["Java", "AWS", "MediaLive", "OpenAPI", "CloudFront"],
      icon: "bi-broadcast"
    },
    {
      title: "indiwa (Android & ML)",
      desc: "Projektverantwortung für eine native Android-App (Android 8+). Integration von Machine Learning Features via Google MLKit und dynamisches UI-Design.",
      tags: ["Android Native", "Kotlin", "MLKit", "Architektur"],
      icon: "bi-android2"
    },
    {
      title: "Golden City (Booking API)",
      desc: "Entwicklung einer Buchungs-API für Reservierungssysteme inklusive Implementierung von Push-Benachrichtigungs-Services für mobile Endgeräte.",
      tags: ["JavaScript", "API-Integration", "Push-Notifications"],
      icon: "bi-calendar-check"
    }
  ];
</script>

<div id="projects" class="mt-5 pt-3 pb-5">
  <div class="glass-panel text-start">
    <h2 class="mb-4 d-flex align-items-center">
      <span class="text-primary me-2 fw-bold">#</span> Projekte
    </h2>
    
    <div class="row g-4">
      {#each projects as project}
        <div class="col-md-6 col-lg-4">
          <div class="project-card h-100">
            <div class="d-flex align-items-center mb-3">
              <div class="project-icon-wrapper me-3">
                <i class="bi {project.icon} fs-3 text-primary"></i>
              </div>
              <h3 class="h5 fw-bold mb-0">{project.title}</h3>
            </div>
            <p class="opacity-75 mb-4 flex-grow-1">
              {project.desc}
            </p>
            <div class="d-flex flex-wrap gap-2 mt-auto tag-wrapper">
              {#each project.tags as tag}
                <span class="badge rounded-pill">
                  {tag}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-5">
      <p class="text-muted small">
        (Diese Daten wurden direkt aus deinen Profil-PDFs extrahiert.)
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  .project-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    cursor: default;

    &:hover {
      background: rgba(var(--bs-primary-rgb), 0.05);
      border-color: rgba(var(--bs-primary-rgb), 0.3);
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

      .project-icon-wrapper {
        transform: scale(1.1);
      }
    }
  }

  [data-bs-theme="light"] .project-card {
    background: rgba(0, 0, 0, 0.02);
  }

  .project-icon-wrapper {
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: rgba(var(--bs-primary-rgb), 0.1);
    border-radius: 10px;
  }

  .tag-wrapper {
    .badge {
      font-weight: 500;
      font-size: 0.75rem;
      background: rgba(var(--bs-primary-rgb), 0.15) !important;
      color: var(--color-primary) !important;
      border: 1px solid rgba(var(--bs-primary-rgb), 0.2);
      padding: 0.5em 0.8em;
    }
  }
</style>
