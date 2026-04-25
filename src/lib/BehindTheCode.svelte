<script lang="ts">
  // Svelte 5 component for André Hauser's philosophy
</script>

<div id="about-me" class="mt-5 pt-3">
  <div class="d-flex align-items-center mb-4">
    <h2 class="mb-0 d-flex align-items-center">
      <span class="text-primary me-2 fw-bold">#</span> Behind the Code
    </h2>
  </div>

  <div class="row g-4">
    <!-- Säule 1: Strukturierte Vielseitigkeit -->
    <div class="col-md-4">
      <div class="philosophy-card h-100">
        <div class="icon-header mb-3">
          <div class="icon-wrapper">
            <i class="bi bi-journal-check fs-3"></i>
          </div>
        </div>
        <h3 class="h5 fw-bold mb-3 text-primary">Strukturierte Vielseitigkeit</h3>
        <p class="opacity-75 small">
          Mein breites Wissen von 3D-Design über native App-Entwicklung bis hin zu Cloud-Infrastrukturen führt nicht zur Zerstreutheit, sondern zu einem ganzheitlichen Verständnis. 
          Durch strikte **Selbstdisziplin, Kalenderplanung und saubere Notizführung** kanalisiere ich diese Vielseitigkeit zielgerichtet in robuste Lösungen.
        </p>
      </div>
    </div>

    <!-- Säule 2: Pragmatismus vor Hype -->
    <div class="col-md-4">
      <div class="philosophy-card h-100">
        <div class="icon-header mb-3">
          <div class="icon-wrapper">
            <i class="bi bi-shield-check fs-3"></i>
          </div>
        </div>
        <h3 class="h5 fw-bold mb-3 text-primary">Pragmatismus vor Hype</h3>
        <p class="opacity-75 small">
          Nach über **15 Jahren in der IT** wähle ich Technologien nach ihrem echten Mehrwert aus, nicht nach dem neuesten Trend. 
          Ob bewährte Enterprise-Lösungen wie Java/Spring oder moderne Frameworks wie Flutter und Svelte – das Werkzeug muss zum Problem passen, nicht umgekehrt.
        </p>
      </div>
    </div>

    <!-- Säule 3: Die Macher-Mentalität -->
    <div class="col-md-4">
      <div class="philosophy-card h-100">
        <div class="icon-header mb-3">
          <div class="icon-wrapper">
            <i class="bi bi-lightning-charge fs-3"></i>
          </div>
        </div>
        <h3 class="h5 fw-bold mb-3 text-primary">Die Macher-Mentalität</h3>
        <p class="opacity-75 small">
          Ich verstehe mich als Problemlöser mit unbedingtem Umsetzungswillen. 
          Für mich endet die Verantwortung nicht beim fertigen Code, sondern erst wenn das Produkt **stabil und automatisiert in der Cloud läuft**. 
          "Geht nicht" ist für mich nur ein Ansporn, die Infrastruktur passend zu machen.
        </p>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .philosophy-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 1.75rem;
    transition: all 0.3s ease;
    cursor: default;

    &:hover {
      background: rgba(var(--bs-primary-rgb), 0.05);
      border-color: rgba(var(--bs-primary-rgb), 0.3);
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

      .icon-wrapper {
        transform: scale(1.1) rotate(5deg);
        background: rgba(var(--bs-primary-rgb), 0.2);
        color: var(--color-primary);
      }
    }
  }

  [data-bs-theme="light"] .philosophy-card {
    background: rgba(0, 0, 0, 0.02);
  }

  .icon-wrapper {
    width: 56px;
    height: 56px;
    background: rgba(var(--bs-primary-rgb), 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    transition: all 0.3s ease;
  }

  h3 {
    letter-spacing: -0.02em;
  }

  p {
    line-height: 1.6;
    margin-bottom: 0;
  }
</style>
