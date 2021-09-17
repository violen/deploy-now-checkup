<script lang="ts">
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
  import { Col, Container, Row } from "sveltestrap";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  />
</svelte:head>

<Container>
  <Col>
    <Row>
      <Col><h1>Frühstück auf Bestellung!</h1></Col>
    </Row>
    <Row>
      <Col>
        <p>
          Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build
          Svelte apps.
        </p>
      </Col>
      <Col>
        <p>
          Check out <a href="https://github.com/sveltejs/kit#readme"
            >SvelteKit</a
          > for the officially supported framework, also powered by Vite!
        </p>
      </Col>
    </Row>
  </Col>
</Container>

<main>
  <!-- <img src={logo} alt="Svelte Logo" /> -->
  <h1>Frühstück auf Bestellung!</h1>
</main>

<footer>
  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</footer>

<style lang="scss">
  $my-color: red;

  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: rgba(236, 234, 232, 0.466);
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    background: $my-color;
  }

  h1 {
    color: #333;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  footer {
    display: flex;
    position: relative;
    bottom: -200%;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
