<script lang="ts">
  import { onMount } from "svelte";
  import { Col, Container, Row, Button } from "sveltestrap";
  import avatarImage from "./assets/toon_avatar.png";

  let isDarkTheme = true;

  function updateTheme(dark: boolean) {
    isDarkTheme = dark;
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute('data-bs-theme', dark ? 'dark' : 'light');
    }
  }

  onMount(() => {
    // Initial check for system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    updateTheme(mediaQuery.matches);

    // Listen for OS/Browser theme changes
    const listener = (e: MediaQueryListEvent) => updateTheme(e.matches);
    mediaQuery.addEventListener('change', listener);
    
    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  });
</script>



<main class="d-flex align-items-center min-vh-100 py-5">
  <Container>
    <div class="glass-panel text-center">
      <!-- Wir nutzen die korrekten inneren Divs für Layouting und Spacing statt class am Element selbst -->
      <Row>
        <Col md="5" lg="4">
          <div class="avatar-wrapper mb-4 mb-md-0 d-flex justify-content-center align-items-center h-100">
            <!-- Render toon avatar from assets -->
            <img src={avatarImage} alt="Toon Avatar" class="img-fluid rounded-circle shadow-lg border border-3" />
          </div>
        </Col>
        <Col md="7" lg="8">
          <div class="text-md-start h-100 d-flex flex-column justify-content-center">
            <h1 class="display-4 fw-bold mb-3">Hi, ich bin <span class="text-primary">André Hauser</span></h1>
            <h3 class="h4 text-muted mb-4">IT-Systemintegrator & Software-Entwickler</h3>
            <p class="lead mb-4 opacity-75">
              Willkommen auf meinem dynamischen Online-Lebenslauf!
              Ich liebe es professionelle Software und robuste Infrastruktur zu kombinieren.
              <br/><br/>
              (Hinweis: Später werden wir hier deine finalen Profiltexte aus der PDF importieren!)
            </p>
            <div class="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
              <Button color="primary" size="lg">Mehr über mich</Button>
              <Button color="light" size="lg" outline>Meine Projekte</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </Container>
</main>

<style lang="scss">
  .avatar-wrapper {
    max-width: 260px;
    margin: 0 auto;
    
    img {
      border-color: var(--glass-border) !important;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
</style>
