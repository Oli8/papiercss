<script setup lang="ts">
import { RouterLink } from "vue-router";
import CodeBlock from "../components/CodeBlock.vue";

const quickStart = `@import "papiercss/fonts.css";
@import "tailwindcss";
@import "papiercss";`;
</script>

<template>
  <section class="space-y-8">
    <div class="space-y-3">
      <h1 class="font-paper-heading text-5xl text-primary">PapierCSS</h1>
      <p class="max-w-2xl text-xl text-muted-600 dark:text-muted-400">
        The less formal CSS framework, rebuilt with Tailwind v4.
      </p>
      <p class="text-muted-600 dark:text-muted-400">
        Based on
        <a
          class="link-paper"
          href="https://github.com/papercss/papercss"
          target="_blank"
          rel="noopener noreferrer"
        >
          PaperCSS
        </a>
        by
        <a
          class="link-paper"
          href="https://github.com/rhyneav"
          target="_blank"
          rel="noopener noreferrer"
        >
          @rhyneav
        </a>
        .
      </p>
    </div>

    <div class="space-y-3 rounded-paper border-paper border-muted-border bg-surface-raised p-6 shadow-paper">
      <h2 class="font-paper-heading mt-0 text-2xl">Quick Start</h2>
      <CodeBlock lang="css" :code="quickStart" />
    </div>

    <div class="space-y-3">
      <h2 class="font-paper-heading text-3xl">Explore</h2>
      <ul class="list-paper space-y-2">
        <li><RouterLink class="link-paper" to="/guide/getting-started">Getting Started</RouterLink></li>
        <li><RouterLink class="link-paper" to="/guide/colors">Colors</RouterLink></li>
        <li><RouterLink class="link-paper" to="/guide/dark-mode">Dark Mode</RouterLink></li>
        <li><RouterLink class="link-paper" to="/guide/theming">Theming</RouterLink></li>
        <li><RouterLink class="link-paper" to="/components">Components</RouterLink></li>
        <li><RouterLink class="link-paper" to="/utilities">Utilities</RouterLink></li>
      </ul>
    </div>
  </section>
</template>
