<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const colors = `<span class="avatar-paper">OB</span>
<span class="avatar-paper avatar-paper-primary">AB</span>
<span class="avatar-paper avatar-paper-secondary">CD</span>
<span class="avatar-paper avatar-paper-success">EF</span>
<span class="avatar-paper avatar-paper-warning">GH</span>
<span class="avatar-paper avatar-paper-danger">IJ</span>
<span class="avatar-paper avatar-paper-muted">KL</span>`;

const sizes = `<span class="avatar-paper avatar-paper-sm avatar-paper-secondary">SM</span>
<span class="avatar-paper avatar-paper-secondary">MD</span>
<span class="avatar-paper avatar-paper-lg avatar-paper-secondary">LG</span>`;

const circles = `<span class="avatar-paper avatar-paper-circle-2">A</span>
<span class="avatar-paper avatar-paper-circle-4 avatar-paper-primary">B</span>
<span class="avatar-paper avatar-paper-circle-6 avatar-paper-danger">C</span>`;

const images = `<span class="avatar-paper avatar-paper-secondary">
  <img src="https://picsum.photos/seed/papier-avatar/128" alt="Olivier" />
</span>
<span class="avatar-paper avatar-paper-lg avatar-paper-circle-3">
  <img src="https://picsum.photos/seed/papier-avatar-2/192" alt="Team member" />
</span>`;

const stack = `<div class="avatar-paper-stack">
  <span class="avatar-paper avatar-paper-primary">AB</span>
  <span class="avatar-paper avatar-paper-secondary">CD</span>
  <span class="avatar-paper avatar-paper-success">EF</span>
  <span class="avatar-paper avatar-paper-warning">GH</span>
</div>

<div class="avatar-paper-stack avatar-paper-stack-lg">
  <span class="avatar-paper avatar-paper-circle-2">
    <img src="https://picsum.photos/seed/papier-stack-1/128" alt="Member 1" />
  </span>
  <span class="avatar-paper avatar-paper-circle-4">
    <img src="https://picsum.photos/seed/papier-stack-2/128" alt="Member 2" />
  </span>
  <span class="avatar-paper avatar-paper-circle-6">
    <img src="https://picsum.photos/seed/papier-stack-3/128" alt="Member 3" />
  </span>
  <span class="avatar-paper avatar-paper-muted">+2</span>
</div>`;

const variables = [
  { name: "--paper-avatar-size", value: "2.5rem" },
  { name: "--paper-avatar-size-sm", value: "2rem" },
  { name: "--paper-avatar-size-lg", value: "3.5rem" },
  { name: "--paper-avatar-font-size", value: "0.875rem" },
  { name: "--paper-avatar-font-size-sm", value: "0.75rem" },
  { name: "--paper-avatar-font-size-lg", value: "1.125rem" },
  { name: "--paper-avatar-radius", value: "var(--paper-circle-radius)" },
  { name: "--paper-avatar-bg", value: "var(--paper-muted-soft)" },
  { name: "--paper-avatar-fg", value: "var(--paper-muted-soft-fg)" },
  { name: "--paper-avatar-border-color", value: "var(--paper-muted-soft-border-color)" },
  { name: "--paper-avatar-primary-bg", value: "var(--paper-primary-soft)" },
  { name: "--paper-avatar-primary-fg", value: "var(--paper-primary-soft-fg)" },
  {
    name: "--paper-avatar-primary-border-color",
    value: "var(--paper-primary-soft-border-color)",
  },
  { name: "--paper-avatar-secondary-bg", value: "var(--paper-secondary-soft)" },
  { name: "--paper-avatar-secondary-fg", value: "var(--paper-secondary-soft-fg)" },
  {
    name: "--paper-avatar-secondary-border-color",
    value: "var(--paper-secondary-soft-border-color)",
  },
  { name: "--paper-avatar-success-bg", value: "var(--paper-success-soft)" },
  { name: "--paper-avatar-success-fg", value: "var(--paper-success-soft-fg)" },
  {
    name: "--paper-avatar-success-border-color",
    value: "var(--paper-success-soft-border-color)",
  },
  { name: "--paper-avatar-warning-bg", value: "var(--paper-warning-soft)" },
  { name: "--paper-avatar-warning-fg", value: "var(--paper-warning-soft-fg)" },
  {
    name: "--paper-avatar-warning-border-color",
    value: "var(--paper-warning-soft-border-color)",
  },
  { name: "--paper-avatar-danger-bg", value: "var(--paper-danger-soft)" },
  { name: "--paper-avatar-danger-fg", value: "var(--paper-danger-soft-fg)" },
  {
    name: "--paper-avatar-danger-border-color",
    value: "var(--paper-danger-soft-border-color)",
  },
  { name: "--paper-avatar-muted-bg", value: "var(--paper-muted-soft)" },
  { name: "--paper-avatar-muted-fg", value: "var(--paper-muted-soft-fg)" },
  { name: "--paper-avatar-muted-border-color", value: "var(--paper-muted-soft-border-color)" },
  {
    name: "--paper-avatar-stack-overlap",
    value: "calc(var(--paper-avatar-size) * 0.28)",
  },
  { name: "--paper-avatar-stack-ring-color", value: "var(--paper-surface)" },
  { name: "--paper-avatar-stack-ring-width", value: "2px" },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Avatar</h1>

    <DocsSection
      title="Colors"
      :code="colors"
      demo-class="flex flex-wrap items-center gap-4 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <span class="avatar-paper">OB</span>
      <span class="avatar-paper avatar-paper-primary">AB</span>
      <span class="avatar-paper avatar-paper-secondary">CD</span>
      <span class="avatar-paper avatar-paper-success">EF</span>
      <span class="avatar-paper avatar-paper-warning">GH</span>
      <span class="avatar-paper avatar-paper-danger">IJ</span>
      <span class="avatar-paper avatar-paper-muted">KL</span>
    </DocsSection>

    <DocsSection
      title="Sizes"
      :code="sizes"
      demo-class="flex flex-wrap items-center gap-4 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <span class="avatar-paper avatar-paper-sm avatar-paper-secondary">SM</span>
      <span class="avatar-paper avatar-paper-secondary">MD</span>
      <span class="avatar-paper avatar-paper-lg avatar-paper-secondary">LG</span>
    </DocsSection>

    <DocsSection
      title="Circle variants"
      :code="circles"
      demo-class="flex flex-wrap items-center gap-4 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <span class="avatar-paper avatar-paper-circle-2">A</span>
      <span class="avatar-paper avatar-paper-circle-4 avatar-paper-primary">B</span>
      <span class="avatar-paper avatar-paper-circle-6 avatar-paper-danger">C</span>
    </DocsSection>

    <DocsSection
      title="Images"
      :code="images"
      demo-class="flex flex-wrap items-center gap-4 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <span class="avatar-paper avatar-paper-secondary">
        <img src="https://picsum.photos/seed/papier-avatar/128" alt="Olivier" />
      </span>
      <span class="avatar-paper avatar-paper-lg avatar-paper-circle-3">
        <img src="https://picsum.photos/seed/papier-avatar-2/192" alt="Team member" />
      </span>
    </DocsSection>

    <DocsSection title="Stack" :code="stack" demo-class="space-y-6">
      <div class="avatar-paper-stack">
        <span class="avatar-paper avatar-paper-primary">AB</span>
        <span class="avatar-paper avatar-paper-secondary">CD</span>
        <span class="avatar-paper avatar-paper-success">EF</span>
        <span class="avatar-paper avatar-paper-warning">GH</span>
      </div>
      <div class="avatar-paper-stack avatar-paper-stack-lg">
        <span class="avatar-paper avatar-paper-circle-2">
          <img src="https://picsum.photos/seed/papier-stack-1/128" alt="Member 1" />
        </span>
        <span class="avatar-paper avatar-paper-circle-4">
          <img src="https://picsum.photos/seed/papier-stack-2/128" alt="Member 2" />
        </span>
        <span class="avatar-paper avatar-paper-circle-6">
          <img src="https://picsum.photos/seed/papier-stack-3/128" alt="Member 3" />
        </span>
        <span class="avatar-paper avatar-paper-muted">+2</span>
      </div>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
