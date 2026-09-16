<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<ol class="breadcrumb-paper">
  <li><a href="#">Home</a></li>
  <li><a href="#">Components</a></li>
  <li>Breadcrumb</li>
</ol>`;

const variables = [
  { name: "--paper-breadcrumb-separator", value: '"/\\00a0"' },
  { name: "--paper-breadcrumb-link-color", value: "var(--paper-secondary)" },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Breadcrumb</h1>

    <DocsSection title="Usage" :code="usage">
      <ol class="breadcrumb-paper">
        <li><a href="#" @click.prevent>Home</a></li>
        <li><a href="#" @click.prevent>Components</a></li>
        <li>Breadcrumb</li>
      </ol>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
