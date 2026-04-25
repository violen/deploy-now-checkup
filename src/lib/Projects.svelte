<script lang="ts">
  import { i18n } from "../store/i18n.svelte";
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
        <span class="text-primary me-2 fw-bold">#</span> {i18n.t('sections.projects')}
      </h2>
      {#if projects.length > 0}
        <span class="ms-auto custom-badge">
          {projects.length} {i18n.t('projects.references')}
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
                    <h3 class="h5 fw-bold mb-0">{project.title[i18n.lang]}</h3>
                    <small class="text-muted">{project.period}</small>
                  </div>
                </div>
                <p class="opacity-75 mb-4 flex-grow-1">
                  {project.desc[i18n.lang]}
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
    </div>

    {#if isExpanded && showFab}
      <button 
        type="button"
        class="fab-btn shadow-lg animate-in" 
        onclick={scrollToTop} 
        aria-label={i18n.t('common.scroll_top')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>       
        </svg>
      </button>
    {/if}

    <div class="text-center mt-5">
      {#if !isExpanded}
        <div class="mb-3">
          <button type="button" class="btn btn-outline-primary btn-lg px-4" onclick={toggleExpand}>
            {i18n.t('projects.show_all', { count: projects.length })}
          </button>
        </div>
      {:else}
        <div class="mb-3">
          <button type="button" class="btn btn-link text-primary text-decoration-none" onclick={toggleExpand}>
            <i class="bi bi-dash-circle me-2"></i>{i18n.t('projects.show_less')}
          </button>
        </div>
      {/if}
      <p class="text-muted small mb-0">
        {i18n.t('projects.extract_note')}
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  .custom-badge {
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0.4rem 1rem;
    border-radius: 50px;
    background: rgba(var(--bs-primary-rgb), 0.1);
    color: var(--color-primary);
    border: 1px solid rgba(var(--bs-primary-rgb), 0.2);
  }

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

      -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
      mask-image: linear-gradient(to bottom, black 85%, transparent 100%);

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
      background: rgba(var(--bs-primary-rgb), 0.05);
      border-color: rgba(var(--bs-primary-rgb), 0.2);
      transform: translateY(-2px);
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
    background: rgba(var(--bs-primary-rgb), 0.1);
    border-radius: 10px;
  }

  .project-tag {
    font-weight: 500;
    font-size: 0.75rem;
    background: rgba(var(--bs-primary-rgb), 0.12) !important;
    color: var(--color-primary) !important;
    border: 1px solid rgba(var(--bs-primary-rgb), 0.2);
    padding: 0.5em 0.8em;
  }

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
    z-index: 100;
    transition: all 0.3s ease;
    opacity: 0.9;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3) !important;

    &:hover {
      transform: translateY(-4px) scale(1.05);
      opacity: 1;
      box-shadow: 0 8px 20px rgba(var(--bs-primary-rgb), 0.6) !important;
    }
  }

  .btn-outline-primary {
    border-color: var(--color-primary);
    color: var(--color-primary);
    
    &:hover {
      background-color: var(--color-primary);
      border-color: var(--color-primary);
      color: var(--color-bg);
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
