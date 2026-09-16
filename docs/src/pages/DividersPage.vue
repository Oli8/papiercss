<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<hr class="divider-paper" />`;

const variables = [
  { name: "--paper-divider-fg", value: "var(--paper-muted)" },
  { name: "--paper-divider-content", value: '"~~~"' },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Divider</h1>

    <DocsSection title="Usage" :code="usage">
      <hr class="divider-paper" />
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
