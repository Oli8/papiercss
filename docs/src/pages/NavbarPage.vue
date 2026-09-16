<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<nav class="nav-paper nav-paper-split border-paper border-muted-border">
  <div class="font-paper-heading text-2xl">
    <a href="#">PapierCSS</a>
  </div>
  <div class="nav-paper-collapsible">
    <input
      id="nav-toggle-demo"
      class="nav-paper-collapsible-input"
      type="checkbox"
    />
    <label class="nav-paper-burger" for="nav-toggle-demo">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </label>
    <div class="nav-paper-collapsible-body">
      <ul class="inline">
        <li><a href="#">Docs</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">GitHub</a></li>
      </ul>
    </div>
  </div>
</nav>`;

const variables: { name: string; value: string }[] = [
  { name: "--breakpoint-paper-nav", value: "48rem" },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Navbar</h1>
    <p class="max-w-2xl text-muted-600 dark:text-muted-400">
      Below
      <code class="text-sm">--breakpoint-paper-nav</code>
      (default <code class="text-sm">48rem</code>) the links collapse behind a
      hamburger (checkbox toggle, no JS). Use a unique
      <code class="text-sm">id</code> / <code class="text-sm">for</code> pair per
      navbar on the page.
    </p>

    <DocsSection title="Usage" :code="usage">
      <nav class="nav-paper nav-paper-split border-paper border-muted-border">
        <div class="font-paper-heading text-2xl">
          <a href="#" @click.prevent>PapierCSS</a>
        </div>
        <div class="nav-paper-collapsible">
          <input
            id="nav-toggle-docs"
            class="nav-paper-collapsible-input"
            type="checkbox"
          />
          <label class="nav-paper-burger" for="nav-toggle-docs">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </label>
          <div class="nav-paper-collapsible-body">
            <ul class="inline">
              <li><a href="#" @click.prevent>Docs</a></li>
              <li><a href="#" @click.prevent>About</a></li>
              <li><a href="#" @click.prevent>GitHub</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
