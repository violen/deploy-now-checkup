<script lang="ts">
  import { i18n } from "../store/i18n.svelte";
  import { timelineItems } from "../data/timeline";

  let timelineContainer: HTMLDivElement;
  let showFab = $state(false);

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
</script>

<div class="glass-panel text-start h-100 position-relative">
  <h2 class="mb-4 d-flex align-items-center">
    <span class="text-primary me-2 fw-bold">#</span> {i18n.t('sections.timeline')}
  </h2>

  <div class="timeline-container scrollable-timeline" bind:this={timelineContainer} onscroll={handleScroll}>
    <div class="timeline">
      {#each timelineItems as item}
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="badge bg-primary mb-2 shadow-sm fs-6 px-3 py-2"
              >{item.year}</span
            >
            <h4 class="h5 fw-bold mb-1">{item.title[i18n.lang]}</h4>
            {#if item.company[i18n.lang]}
              <h6 class="text-primary mb-2">
                {item.company[i18n.lang]}
              </h6>
            {/if}
            {#if item.desc[i18n.lang]}
              <div class="opacity-75 mb-0">
                {#if item.desc[i18n.lang].includes("\n")}
                  <ul class="mb-0 ps-3">
                    {#each item.desc[i18n.lang].split("\n") as line}
                      {#if line.trim()}
                        <li class="mb-1">{line.trim().replace(/^- /, "")}</li>
                      {/if}
                    {/each}
                  </ul>
                {:else}
                  <p class="mb-0">{item.desc[i18n.lang]}</p>
                {/if}
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>

  {#if showFab}
    <button class="fab-btn shadow-lg animate-in" onclick={scrollToTop} aria-label={i18n.t('common.scroll_top')}>
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
    padding-right: 15px;
    padding-left: 15px; 
    margin-left: -15px; 

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

  .timeline {
    position: relative;
    padding-left: 20px;
    margin-top: 1.5rem;
    padding-bottom: 3rem;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 6px;
      width: 2px;
      background-color: var(--glass-border);
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

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px) scale(0.9); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  .animate-in {
    animation: fadeIn 0.3s ease forwards;
  }
</style>
