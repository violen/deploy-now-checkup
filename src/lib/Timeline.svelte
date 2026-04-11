<script lang="ts">
  let timelineContainer: HTMLDivElement;
  let showFab = false;

  function handleScroll() {
    if (timelineContainer) {
      showFab = timelineContainer.scrollTop > 120;
    }
  }

  function scrollToTop() {
    if (timelineContainer) {
      timelineContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Dummy data array for timeline
  const items = [
    {
      year: "02/2016 – Heute",
      title: "Softwareentwickler bei der neusta mobile solutions GmbH",
      company: "neusta mobile solutions GmbH",
      desc: "Fullstack-Entwickler für Android und Web-Anwendungen\nCross-Plattform-Entwicklung mit Flutter\nBackend-Entwicklung mit Ruby on Rails und Spring Boot\nCloud-Infrastruktur und DevOps\nCI/CD-Pipelines und Automatisierung",
    },
    {
      year: "01/2016 – 01/2016",
      title: "",
      company: "",
      desc: "arbeitssuchend und parallel dazu Vertiefung in Android App Entwicklung und REST-Serverdiensten",
    },
    {
      year: "03/2014 – 12/2015",
      title: "Anwendungsentwickler und Programmierer",
      company: "BBN GmbH – Bremen Business Net GmbH",
      desc: "Konzept und Entwicklung von Android Mobile Apps\nBackend- und Intranet-Systeme von webbasierten Anwendungen\n2D Spieleentwicklung\nAdministration von Kundenservern",
    },
    {
      year: "02/2013 – 02/2014",
      title:
        "Weiterbildungsstudium, Anwendungsentwicklung für Logistische Systeme",
      company: "Akademie für Weiterbildung der Universität Bremen",
      desc: "objektorientierte Programmierung mit Java\nSoftwaretechnik\nDatenbanken und Webanwendungen\nGeschäftsprozesse und Modelle der Logistik",
    },
    {
      year: "01/2013 – 01/2013",
      title: "",
      company: "",
      desc: "arbeitssuchend in der IT-Branche",
    },
    {
      year: "08/2012 – Heute",
      title: "",
      company: "",
      desc: "Freier Produkttester bei der Skopos Next GmbH",
    },
    {
      year: "08/2012 – 09/2013",
      title: "",
      company: "",
      desc: "Ehrenamtliches KiKo Mitglied in der Auferstehungsgemeinde Hastedt.",
    },
    {
      year: "08/2012 – 12/2012",
      title: "Angestellt als Verkäufer",
      company: "SCHUM EuroShop GmbH & Co KG, Bremen",
      desc: "(parallel dazu arbeitssuchend in der IT-Branche)",
    },
    {
      year: "07/2011 – 07/2012",
      title: "",
      company: "",
      desc: "arbeitssuchend und parallel dazu private Weiterbildung in Serverdiensten und Plattformunabhängigem Programmieren (auch mobile Apps)",
    },
    {
      year: "06/2009 – 06/2011",
      title: "Umschulung zum Fachinformatiker Fachrichtung Systemintegration",
      company: "cbm GmbH, Bremen",
      desc: "",
    },
    {
      year: "10/2008 – 06/2009",
      title:
        "berufsvorbereitende Weiterbildung in Webdesign und Projektmanagement",
      company: "ibs e.V. Bremen",
      desc: "Erstellen eines Webauftrittes, eines Firmenlogos, fortgeschrittene Bildbearbeitung sowie Team Coaching",
    },
    {
      year: "03/2008 - 10/2008",
      title: "ehrenamtlich beim Deutschen Roten Kreuz Kreisverband Bremen e.V.",
      company: "",
      desc: "Administration von Arbeitsstationen in der Begegnungsstätte und diverse Hausmeistertätigkeiten",
    },
    {
      year: "09/2007 - 02/2008",
      title: "",
      company: "",
      desc: "arbeitssuchend und nebenbei Betrieb von Gameserver mit Privater Weiterbildung im Bereich 3D-Design",
    },
    {
      year: "02/2007 - 08/2007",
      title: "Ausbildung zum Einzelhandelskaufmann\nFachrichtung Technik",
      company:
        "Deutsche Angestellten-Akademie Bremen / KARSTADT Warenhaus GmbH, Bremen",
      desc: "Betreuung und Beratung von Kunden, Instandhaltung und Gestaltung des Verkaufsraumes",
    },
    {
      year: "02/2004 - 02/2006",
      title: "Realschulabschluss an der Erwachsenenschule Bremen im Abendkurs",
    },
    {
      year: "1996 - 2003",
      title: "SEK I am SZ an der Graubündener Str.",
    },
    {
      year: "1992 - 1996",
      title: "Grundschule Schule Osterholz",
    },
  ];
</script>

<div class="glass-panel text-start h-100 position-relative">
  <h2 class="mb-4 d-flex align-items-center">
    <span class="text-primary me-2 fw-bold">#</span> Werdegang
  </h2>

  <div class="timeline-container scrollable-timeline" bind:this={timelineContainer} on:scroll={handleScroll}>
    <div class="timeline">
      {#each items as item}
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="badge bg-primary mb-2 shadow-sm fs-6 px-3 py-2"
              >{item.year}</span
            >
            <h4 class="h5 fw-bold mb-1">{item.title}</h4>
            {#if item.company}<h6 class="text-primary mb-2">
                {item.company}
              </h6>{/if}
            {#if item.desc}
              <div class="opacity-75 mb-0">
                {#if item.desc.includes("\n")}
                  <ul class="mb-0 ps-3">
                    {#each item.desc.split("\n") as line}
                      {#if line.trim()}
                        <li class="mb-1">{line.trim().replace(/^- /, "")}</li>
                      {/if}
                    {/each}
                  </ul>
                {:else}
                  <p class="mb-0">{item.desc}</p>
                {/if}
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>

  {#if showFab}
    <button class="fab-btn shadow-lg" on:click={scrollToTop} aria-label="Zurück nach oben">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
      </svg>
    </button>
  {/if}
</div>

<style lang="scss">
  .fab-btn {
    position: absolute;
    bottom: 25px;
    right: 25px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: var(--color-bg);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 50;
    transition: all 0.3s ease;
    opacity: 0.9;

    &:hover {
      transform: translateY(-4px) scale(1.05);
      opacity: 1;
      box-shadow: 0 8px 20px rgba(var(--bs-primary-rgb), 0.6) !important;
    }
  }

  .scrollable-timeline {
    max-height: 520px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 15px; // for scrollbar width offset
    padding-left: 15px; // Prevent markers getting cut off by overflow-x
    margin-left: -15px; // Realign the timeline visually

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

  .timeline {
    position: relative;
    padding-left: 20px;
    margin-top: 1.5rem;
    padding-bottom: 3rem;

    // Vertical line behind markers
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 6px;
      width: 2px;
      background-color: var(--glass-border); // Passt sich Hell/Dunkel an
    }
  }

  .timeline-item {
    position: relative;
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .timeline-marker {
    position: absolute;
    left: -20px;
    top: 6px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: var(--color-bg);
    border: 3px solid var(--color-primary);
    box-shadow: 0 0 10px rgba(var(--bs-primary-rgb), 0.5);
    z-index: 1;
    transform: translateX(-50%);
    transition: all 0.3s ease;
  }

  .timeline-content {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 1.25rem;
    transition:
      transform 0.3s ease,
      background 0.3s ease;
    border: 1px solid transparent;

    &:hover {
      background: rgba(var(--bs-primary-rgb), 0.05);
      border-color: rgba(var(--bs-primary-rgb), 0.2);
      transform: translateY(-2px);
    }
  }

  [data-bs-theme="light"] .timeline-content {
    background: rgba(0, 0, 0, 0.03);
  }

  .timeline-item:hover .timeline-marker {
    background-color: var(--color-primary);
    transform: translateX(-50%) scale(1.2);
  }
</style>
