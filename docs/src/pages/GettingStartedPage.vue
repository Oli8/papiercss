<script setup lang="ts">
import CodeBlock from "../components/CodeBlock.vue";

const install = `npm install papiercss tailwindcss`;
const imports = `@import "papiercss/fonts.css";
@import "tailwindcss";
@import "papiercss";`;
const docsDev = `npm run docs:dev`;
</script>

<template>
  <section class="space-y-6">
    <h1 class="font-paper-heading text-4xl">Getting Started</h1>

    <div class="space-y-2">
      <h2 class="font-paper-heading text-2xl">Install</h2>
      <CodeBlock lang="bash" :code="install" />
    </div>

    <div class="space-y-2">
      <h2 class="font-paper-heading text-2xl">Import</h2>
      <CodeBlock lang="css" :code="imports" />
    </div>
  </section>
</template>
