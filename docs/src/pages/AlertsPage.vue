<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<div class="alert-paper">Default alert</div>
<div class="alert-paper alert-paper-primary">Primary alert</div>
<div class="alert-paper alert-paper-secondary">Secondary alert</div>
<div class="alert-paper alert-paper-success">Success alert</div>
<div class="alert-paper alert-paper-warning">Warning alert</div>
<div class="alert-paper alert-paper-danger">Danger alert</div>
<div class="alert-paper alert-paper-muted">Muted alert</div>`;

const variables = [
  { name: "--paper-alert-bg", value: "var(--paper-surface-raised)" },
  { name: "--paper-alert-fg", value: "var(--paper-primary)" },
  { name: "--paper-alert-border-color", value: "var(--paper-primary)" },
  { name: "--paper-alert-primary-bg", value: "var(--paper-primary-soft)" },
  { name: "--paper-alert-primary-fg", value: "var(--paper-primary-soft-fg)" },
  {
    name: "--paper-alert-primary-border-color",
    value: "var(--paper-primary-soft-border-color)",
  },
  { name: "--paper-alert-secondary-bg", value: "var(--paper-secondary-soft)" },
  { name: "--paper-alert-secondary-fg", value: "var(--paper-secondary-soft-fg)" },
  {
    name: "--paper-alert-secondary-border-color",
    value: "var(--paper-secondary-soft-border-color)",
  },
  { name: "--paper-alert-success-bg", value: "var(--paper-success-soft)" },
  { name: "--paper-alert-success-fg", value: "var(--paper-success-soft-fg)" },
  {
    name: "--paper-alert-success-border-color",
    value: "var(--paper-success-soft-border-color)",
  },
  { name: "--paper-alert-warning-bg", value: "var(--paper-warning-soft)" },
  { name: "--paper-alert-warning-fg", value: "var(--paper-warning-soft-fg)" },
  {
    name: "--paper-alert-warning-border-color",
    value: "var(--paper-warning-soft-border-color)",
  },
  { name: "--paper-alert-danger-bg", value: "var(--paper-danger-soft)" },
  { name: "--paper-alert-danger-fg", value: "var(--paper-danger-soft-fg)" },
  {
    name: "--paper-alert-danger-border-color",
    value: "var(--paper-danger-soft-border-color)",
  },
  { name: "--paper-alert-muted-bg", value: "var(--paper-muted-soft)" },
  { name: "--paper-alert-muted-fg", value: "var(--paper-muted-soft-fg)" },
  {
    name: "--paper-alert-muted-border-color",
    value: "var(--paper-muted-soft-border-color)",
  },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Alert</h1>

    <DocsSection title="Usage" :code="usage" demo-class="space-y-3">
      <div class="alert-paper">Default alert</div>
      <div class="alert-paper alert-paper-primary">Primary alert</div>
      <div class="alert-paper alert-paper-secondary">Secondary alert</div>
      <div class="alert-paper alert-paper-success">Success alert</div>
      <div class="alert-paper alert-paper-warning">Warning alert</div>
      <div class="alert-paper alert-paper-danger">Danger alert</div>
      <div class="alert-paper alert-paper-muted">Muted alert</div>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
