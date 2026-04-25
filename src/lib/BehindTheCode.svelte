<script lang="ts">
  import { i18n } from "../store/i18n.svelte";
</script>

<div id="about-me" class="mt-5 pt-3">
  <div class="d-flex align-items-center mb-4">
    <h2 class="mb-0 d-flex align-items-center">
      <span class="text-primary me-2 fw-bold">#</span> {i18n.t('sections.behind_the_code')}
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
        <h3 class="h5 fw-bold mb-3 text-primary">{i18n.t('behind.s1_title')}</h3>
        <p class="opacity-75 small">
          {@html i18n.t('behind.s1_text')}
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
        <h3 class="h5 fw-bold mb-3 text-primary">{i18n.t('behind.s2_title')}</h3>
        <p class="opacity-75 small">
          {@html i18n.t('behind.s2_text')}
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
        <h3 class="h5 fw-bold mb-3 text-primary">{i18n.t('behind.s3_title')}</h3>
        <p class="opacity-75 small">
          {@html i18n.t('behind.s3_text')}
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
  
  :global(strong) {
    color: var(--color-primary);
    font-weight: 600;
  }
</style>
