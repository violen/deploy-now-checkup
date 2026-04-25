<script lang="ts">
  import { onMount } from "svelte";
  import { Col, Container, Row } from "sveltestrap";
  import avatarImage from "./assets/toon_avatar.png";
  import Timeline from "./lib/Timeline.svelte";
  import Skills from "./lib/Skills.svelte";
  import Projects from "./lib/Projects.svelte";
  import BehindTheCode from "./lib/BehindTheCode.svelte";

  let isDarkTheme = true;

  function updateTheme(dark: boolean) {
    isDarkTheme = dark;
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute(
        "data-bs-theme",
        dark ? "dark" : "light",
      );
    }
  }

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scrollToProjects() {
    scrollToSection("projects");
  }

  function scrollToAbout() {
    scrollToSection("about-me");
  }


  onMount(() => {
    // Initial check for system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    updateTheme(mediaQuery.matches);

    // Listen for OS/Browser theme changes
    const listener = (e: MediaQueryListEvent) => updateTheme(e.matches);
    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  });
</script>

<main class="d-flex align-items-center min-vh-100 py-5">
  <Container>
    <div class="glass-panel text-center">
      <Row>
        <Col md="5" lg="4">
          <div
            class="avatar-wrapper mb-4 mb-md-0 d-flex justify-content-center align-items-center h-100"
          >
            <img
              src={avatarImage}
              alt="Toon Avatar"
              class="img-fluid rounded-circle shadow-lg border border-3"
            />
          </div>
        </Col>
        <Col md="7" lg="8">
          <div
            class="text-md-start h-100 d-flex flex-column justify-content-center"
          >
            <h1 class="display-4 fw-bold mb-3">
              Hi, ich bin <span class="text-primary">André Hauser</span>
            </h1>
            <h3 class="h4 text-muted mb-4">
              Senior Softwareentwickler | Systemintegrator | Cloud & Mobile Expert
            </h3>
            <p class="lead mb-4 opacity-75">
              Mit Wurzeln in der Systemintegration und über 15 Jahren IT-Erfahrung verbinde ich tiefes technisches Verständnis mit moderner Macher-Mentalität. 
              Von der ersten Codezeile in Flutter oder Kotlin bis zum automatisierten Deployment in Kubernetes-Clustern: 
              Ich liebe es, professionelle Software und robuste Infrastruktur nicht nur zu planen, sondern erfolgreich zum Leben zu erwecken.
            </p>
            <div
              class="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start"
            >
              <button type="button" class="btn btn-primary btn-lg px-4" onclick={scrollToAbout}>Mehr über mich</button>
              <button
                type="button"
                class="btn btn-outline-primary btn-lg px-4"
                onclick={scrollToProjects}>Meine Projekte</button
              >
            </div>
          </div>
        </Col>
      </Row>
    </div>

    <!-- Personal Philosophy Section -->
    <BehindTheCode />

    <!-- CV Section -->
    <div class="mt-5 pt-3">
      <Row>
        <Col lg="7">
          <div class="mb-5 mb-lg-0 h-100">
            <Timeline />
          </div>
        </Col>
        <Col lg="5">
          <div class="h-100">
            <Skills />
          </div>
        </Col>
      </Row>
    </div>

    <!-- Projects Section -->
    <Projects />
  </Container>
</main>

<style lang="scss">
  :global(html) {
    scroll-behavior: smooth;
  }

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

  // Ensure buttons match the custom primary color and have proper states
  .btn-primary {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-bg);
    
    &:hover {
      background-color: #ff8c00;
      border-color: #ff8c00;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(var(--bs-primary-rgb), 0.3);
    }
    
    &:active {
      background-color: #e66a00 !important;
      transform: translateY(0);
    }
  }

  .btn-outline-primary {
    border-color: var(--color-primary);
    color: var(--color-primary);
    
    &:hover {
      background-color: var(--color-primary);
      border-color: var(--color-primary);
      color: var(--color-bg);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(var(--bs-primary-rgb), 0.2);
    }

    &:active {
      background-color: var(--color-primary) !important;
      transform: translateY(0);
    }
  }
</style>
