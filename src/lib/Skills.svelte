<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { i18n } from "../store/i18n.svelte";
  import { skills } from "../data/skills";

  let tooltips: any[] = [];
  
  onMount(() => {
    initTooltips();
  });

  // Re-init tooltips when language changes
  $effect(() => {
    if (i18n.lang) {
      setTimeout(initTooltips, 200);
    }
  });

  function initTooltips() {
    tooltips.forEach(t => t.dispose());
    // @ts-ignore
    if (typeof window !== 'undefined' && window.bootstrap) {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      // @ts-ignore
      tooltips = [...tooltipTriggerList].map(el => new window.bootstrap.Tooltip(el, { container: 'body' }));
    }
  }

  onDestroy(() => {
    tooltips.forEach(t => t.dispose());
  });
</script>

<div class="glass-panel text-start h-100">
  <h2 class="mb-4 d-flex align-items-center">
    <span class="text-primary me-2 fw-bold">#</span> {i18n.t('sections.skills')}
  </h2>

  <div class="skills-container scrollable-skills">
    {#each skills as section, sectionIdx}
      <div class="skill-category mb-4 pb-2">
        <h5 class="h6 text-uppercase fw-bold opacity-75 mb-3 border-bottom border-light pb-2">
          {section.category[i18n.lang]}
        </h5>
        <div class="d-flex flex-wrap gap-2">
          {#each section.tags as tag, tagIdx}
            {@const uniqueId = `skill-${sectionIdx}-${tagIdx}`}
            <span id={uniqueId} class="badge skill-badge fs-6 fw-normal px-3 py-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={tag.desc[i18n.lang]}>
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
    padding-right: 15px; 
    padding-bottom: 2rem;

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

  .skill-badge {
    background: rgba(var(--bs-primary-rgb), 0.1);
    color: var(--color-primary);
    border: 1px solid rgba(var(--bs-primary-rgb), 0.3);
    transition: all 0.3s ease;
    cursor: help;

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
