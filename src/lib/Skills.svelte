<script lang="ts">
  const skills = [
    { 
      category: "IT-Systemintegration", 
      tags: ["Windows Server", "Linux", "Netzwerktechnik", "Active Directory", "Virtualisierung", "Docker"] 
    },
    { 
      category: "Software-Entwicklung", 
      tags: ["Svelte", "Node.js", "TypeScript", "SCSS", "Git", "REST APIs"] 
    },
    { 
      category: "Persönlichkeit", 
      tags: ["Analytisches Denken", "Teamplayer", "Hands-on Mentalität", "Problemlöser"] 
    }
  ];
</script>

<div class="glass-panel text-start h-100">
  <h2 class="mb-4 d-flex align-items-center">
    <span class="text-primary me-2 fw-bold">#</span> Kompetenzen
  </h2>

  <div class="skills-container">
    {#each skills as section}
      <div class="skill-category mb-4 pb-2">
        <h5 class="h6 text-uppercase fw-bold opacity-75 mb-3 border-bottom border-light pb-2">{section.category}</h5>
        <div class="d-flex flex-wrap gap-2">
          {#each section.tags as tag}
            <span class="badge skill-badge fs-6 fw-normal px-3 py-2">
              {tag}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .skill-badge {
    background: rgba(var(--bs-primary-rgb), 0.1);
    color: var(--color-primary);
    border: 1px solid rgba(var(--bs-primary-rgb), 0.3);
    transition: all 0.3s ease;
    cursor: default;

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
