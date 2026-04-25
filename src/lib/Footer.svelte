<script lang="ts">
  import { i18n } from "../store/i18n.svelte";
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer mt-5 pb-4">
  <div class="container">
    <div class="glass-panel text-center py-4">
      <div class="row align-items-center">
        <div class="col-md-6 text-md-start mb-3 mb-md-0">
          <p class="mb-0 opacity-75">
            {i18n.t('footer.copyright', { year: currentYear })}
          </p>
          <small class="text-muted d-block mt-1">
            {i18n.t('footer.disclaimer')}
          </small>
        </div>
        <div class="col-md-6 text-md-end">
          <div class="d-flex justify-content-center justify-content-md-end gap-3">
            <a href="#legal" class="footer-link">{i18n.t('footer.legal')}</a>
            <span class="text-muted opacity-50">|</span>
            <a href="#privacy" class="footer-link">{i18n.t('footer.privacy')}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  .footer {
    border-top: 1px solid transparent; // Just for spacing
  }

  .footer-link {
    color: var(--color-text);
    text-decoration: none;
    font-size: 0.9rem;
    opacity: 0.7;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      color: var(--color-primary);
    }
  }

  [data-bs-theme="light"] .footer-link {
    color: #444;
    
    &:hover {
      color: var(--color-primary);
    }
  }
</style>
