<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<span class="tag-paper">DEFAULT</span>
<span class="tag-paper tag-paper-primary">PRIMARY</span>
<span class="tag-paper tag-paper-secondary">SECONDARY</span>
<span class="tag-paper tag-paper-success">SUCCESS</span>
<span class="tag-paper tag-paper-warning">WARNING</span>
<span class="tag-paper tag-paper-danger">DANGER</span>
<span class="tag-paper tag-paper-muted">MUTED</span>`;

const variables = [
  { name: "--paper-tag-text-color", value: "var(--paper-white)" },
  { name: "--paper-tag-primary-bg", value: "var(--paper-primary-700)" },
  { name: "--paper-tag-secondary-bg", value: "var(--paper-secondary-700)" },
  { name: "--paper-tag-success-bg", value: "var(--paper-success-600)" },
  { name: "--paper-tag-warning-bg", value: "var(--paper-warning-600)" },
  { name: "--paper-tag-danger-bg", value: "var(--paper-danger-700)" },
  { name: "--paper-tag-muted-bg", value: "var(--paper-muted-600)" },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Tag</h1>

    <DocsSection
      title="Usage"
      :code="usage"
      demo-class="flex flex-wrap gap-2 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <span class="tag-paper">DEFAULT</span>
      <span class="tag-paper tag-paper-primary">PRIMARY</span>
      <span class="tag-paper tag-paper-secondary">SECONDARY</span>
      <span class="tag-paper tag-paper-success">SUCCESS</span>
      <span class="tag-paper tag-paper-warning">WARNING</span>
      <span class="tag-paper tag-paper-danger">DANGER</span>
      <span class="tag-paper tag-paper-muted">MUTED</span>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
