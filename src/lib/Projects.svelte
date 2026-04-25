<script lang="ts">
  import { projects } from "../data/projects";

  let isExpanded = $state(false);
  let showFab = $state(false);
  let projectContainer: HTMLElement | null = $state(null);

  // Svelte 5 derived state
  let visibleProjects = $derived(isExpanded ? projects : projects.slice(0, 6));

  function handleScroll(e: Event) {
    const target = e.target as HTMLElement;
    if (target) {
      showFab = target.scrollTop > 150;
    }
  }

  function scrollToTop() {
    if (projectContainer) {
      projectContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function toggleExpand() {
    isExpanded = !isExpanded;
  }
</script>

<div id="projects" class="mt-5 pt-3 pb-5">
  <div class="glass-panel text-start position-relative">
    <div class="d-flex align-items-center mb-4">
      <h2 class="mb-0 d-flex align-items-center">
        <span class="text-primary me-2 fw-bold">#</span> Projekte
      </h2>
      {#if projects.length > 0}
        <span class="ms-auto badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill fs-6 fw-normal">
          {projects.length} Referenzen
        </span>
      {/if}
    </div>

    <div 
      class="projects-grid-container {isExpanded ? 'is-expanded' : ''}" 
      bind:this={projectContainer}
      onscroll={handleScroll}
    >
      <div class="project-grid-inner">
        <div class="row g-4">
          {#each visibleProjects as project}
            <div class="col-md-6 col-lg-4">
              <div class="project-card h-100">
                <div class="d-flex align-items-center mb-3">
                  <div class="project-icon-wrapper me-3">
                    <i class="bi {project.icon} fs-3 text-primary"></i>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold mb-0">{project.title}</h3>
                    <small class="text-muted">{project.period}</small>
                  </div>
                </div>
                <p class="opacity-75 mb-4 flex-grow-1">
                  {project.desc}
                </p>
                <div class="d-flex flex-wrap gap-2 mt-auto">
                  {#each project.tags as tag}
                    <span class="badge rounded-pill project-tag">
                      {tag}
                    </span>
                  {/each}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      {#if isExpanded && showFab}
        <button 
          type="button"
          class="fab-btn shadow-lg animate-in" 
          onclick={scrollToTop} 
          aria-label="Nach oben scrollen"
        >
          <i class="bi bi-arrow-up"></i>
        </button>
      {/if}
    </div>

    <div class="text-center mt-5">
      {#if !isExpanded}
        <div class="mb-3">
          <button type="button" class="btn btn-outline-primary btn-lg" onclick={toggleExpand}>
            Alle {projects.length} Projekte zeigen
          </button>
        </div>
      {:else}
        <div class="mb-3">
          <button type="button" class="btn btn-outline-secondary btn-sm" onclick={toggleExpand}>
            Weniger anzeigen
          </button>
        </div>
      {/if}
      <p class="text-muted small mb-0">
        (Diese Daten wurden direkt aus deinen Profil-PDFs extrahiert.)
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  .projects-grid-container {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    max-height: 1400px; 
    overflow: hidden;
    position: relative;
    padding: 0.5rem;

    &.is-expanded {
      max-height: 850px; 
      overflow-y: auto;
      padding-right: 1rem;

      /* Custom Modern Scrollbar */
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        background: rgba(230, 106, 0, 0.05);
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgba(230, 106, 0, 0.2);
        border-radius: 10px;
        &:hover {
          background: rgba(230, 106, 0, 0.4);
        }
      }
    }
  }

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
      background: rgba(230, 106, 0, 0.05);
      border-color: rgba(230, 106, 0, 0.3);
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
    min-width: 48px;
    height: 48px;
    background: rgba(230, 106, 0, 0.1);
    border-radius: 10px;
  }

  .project-tag {
    font-weight: 500;
    font-size: 0.75rem;
    background: rgba(230, 106, 0, 0.15) !important;
    color: var(--color-primary) !important;
    border: 1px solid rgba(230, 106, 0, 0.2);
    padding: 0.5em 0.8em;
  }

  .fab-btn {
    position: sticky;
    bottom: 20px;
    right: 20px;
    float: right;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    transition: all 0.3s ease;
    margin-top: -65px; 

    &:hover {
      background-color: #ff8c00;
      transform: scale(1.1);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px) scale(0.9); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  .animate-in {
    animation: fadeIn 0.3s ease forwards;
  }
</style>
