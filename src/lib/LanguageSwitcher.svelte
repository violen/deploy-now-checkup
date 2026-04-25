<script lang="ts">
  import { i18n } from "../store/i18n.svelte";
</script>

<div class="language-switcher d-flex gap-2">
  <button 
    class="lang-btn {i18n.lang === 'de' ? 'active' : ''}" 
    onclick={() => i18n.setLanguage('de')}
    aria-label="Deutsch"
  >
    <span class="flag">🇩🇪</span> DE
  </button>
  <button 
    class="lang-btn {i18n.lang === 'en' ? 'active' : ''}" 
    onclick={() => i18n.setLanguage('en')}
    aria-label="English"
  >
    <span class="flag">🇺🇸</span> EN
  </button>
</div>

<style lang="scss">
  .language-switcher {
    padding: 0.5rem;
  }

  .lang-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    border-radius: 50px;
    padding: 0.3rem 0.8rem;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--color-text);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.4rem;

    .flag {
      font-size: 1.1rem;
    }

    &:hover {
      background: rgba(var(--bs-primary-rgb), 0.1);
      border-color: rgba(var(--bs-primary-rgb), 0.3);
      transform: translateY(-2px);
    }

    &.active {
      background: rgba(var(--bs-primary-rgb), 0.15);
      border-color: var(--color-primary);
      color: var(--color-primary);
      box-shadow: 0 4px 12px rgba(var(--bs-primary-rgb), 0.2);
    }
  }

  [data-bs-theme="light"] .lang-btn {
    background: rgba(0, 0, 0, 0.03);
  }
</style>
