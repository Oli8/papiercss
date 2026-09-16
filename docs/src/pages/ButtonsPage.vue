<script setup lang="ts">
import CodeBlock from "../components/CodeBlock.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<button class="btn-paper btn-paper-secondary">Save</button>
<a href="#" class="btn-paper btn-paper-primary">Link button</a>`;

const sizes = `<button class="btn-paper btn-paper-sm">Small</button>
<button class="btn-paper">Default</button>
<button class="btn-paper btn-paper-lg">Large</button>
<button class="btn-paper btn-paper-block btn-paper-primary">Block</button>`;

const colors = `<button class="btn-paper">Default</button>
<button class="btn-paper btn-paper-primary">Primary</button>
<button class="btn-paper btn-paper-secondary">Secondary</button>
<button class="btn-paper btn-paper-success">Success</button>
<button class="btn-paper btn-paper-warning">Warning</button>
<button class="btn-paper btn-paper-danger">Danger</button>
<button class="btn-paper btn-paper-muted">Muted</button>`;

const outlines = `<button class="btn-paper btn-paper-primary-outline">Primary</button>
<button class="btn-paper btn-paper-secondary-outline">Secondary</button>
<button class="btn-paper btn-paper-success-outline">Success</button>
<button class="btn-paper btn-paper-warning-outline">Warning</button>
<button class="btn-paper btn-paper-danger-outline">Danger</button>
<button class="btn-paper btn-paper-muted-outline">Muted</button>`;

const disabled = `<button class="btn-paper" disabled>Disabled</button>
<button class="btn-paper btn-paper-secondary disabled">Disabled class</button>`;

const loading = `<button class="btn-paper btn-paper-secondary" type="button" disabled>
  <span
    class="spinner-paper spinner-paper-sm spinner-paper-inline me-2"
    role="status"
    aria-hidden="true"
  ></span>
  Please wait
</button>`;

const variables = [
  { name: "--paper-btn-bg", value: "var(--paper-surface-raised)" },
  { name: "--paper-btn-fg", value: "var(--paper-primary)" },
  { name: "--paper-btn-border-color", value: "var(--paper-primary)" },
  { name: "--paper-btn-focus-border-color", value: "var(--paper-secondary)" },
  { name: "--paper-btn-primary-bg", value: "var(--paper-primary-soft)" },
  { name: "--paper-btn-primary-fg", value: "var(--paper-primary-soft-fg)" },
  {
    name: "--paper-btn-primary-border-color",
    value: "var(--paper-primary-soft-border-color)",
  },
  { name: "--paper-btn-secondary-bg", value: "var(--paper-secondary-soft)" },
  { name: "--paper-btn-secondary-fg", value: "var(--paper-secondary-soft-fg)" },
  {
    name: "--paper-btn-secondary-border-color",
    value: "var(--paper-secondary-soft-border-color)",
  },
  { name: "--paper-btn-success-bg", value: "var(--paper-success-soft)" },
  { name: "--paper-btn-success-fg", value: "var(--paper-success-soft-fg)" },
  {
    name: "--paper-btn-success-border-color",
    value: "var(--paper-success-soft-border-color)",
  },
  { name: "--paper-btn-warning-bg", value: "var(--paper-warning-soft)" },
  { name: "--paper-btn-warning-fg", value: "var(--paper-warning-soft-fg)" },
  {
    name: "--paper-btn-warning-border-color",
    value: "var(--paper-warning-soft-border-color)",
  },
  { name: "--paper-btn-danger-bg", value: "var(--paper-danger-soft)" },
  { name: "--paper-btn-danger-fg", value: "var(--paper-danger-soft-fg)" },
  {
    name: "--paper-btn-danger-border-color",
    value: "var(--paper-danger-soft-border-color)",
  },
  { name: "--paper-btn-muted-bg", value: "var(--paper-muted-soft)" },
  { name: "--paper-btn-muted-fg", value: "var(--paper-muted-soft-fg)" },
  { name: "--paper-btn-muted-border-color", value: "var(--paper-muted-soft-border-color)" },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Button</h1>

    <div class="space-y-4">
      <h2 class="font-paper-heading text-2xl">Usage</h2>
      <div
        class="flex flex-wrap items-center gap-3 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
      >
        <button type="button" class="btn-paper btn-paper-secondary">Save</button>
        <a href="#" class="btn-paper btn-paper-primary" @click.prevent>Link button</a>
      </div>
      <CodeBlock lang="html" :code="usage" />
    </div>

    <div class="space-y-4">
      <h2 class="font-paper-heading text-2xl">Sizes</h2>
      <div
        class="space-y-4 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
      >
        <div class="flex flex-wrap items-center gap-3">
          <button type="button" class="btn-paper btn-paper-sm btn-paper-secondary">
            Small
          </button>
          <button type="button" class="btn-paper btn-paper-secondary">Default</button>
          <button type="button" class="btn-paper btn-paper-lg btn-paper-secondary">
            Large
          </button>
        </div>
        <button type="button" class="btn-paper btn-paper-block btn-paper-primary">
          Block
        </button>
      </div>
      <CodeBlock lang="html" :code="sizes" />
    </div>

    <div class="space-y-4">
      <h2 class="font-paper-heading text-2xl">Colors</h2>
      <div
        class="flex flex-wrap gap-3 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
      >
        <button type="button" class="btn-paper">Default</button>
        <button type="button" class="btn-paper btn-paper-primary">Primary</button>
        <button type="button" class="btn-paper btn-paper-secondary">Secondary</button>
        <button type="button" class="btn-paper btn-paper-success">Success</button>
        <button type="button" class="btn-paper btn-paper-warning">Warning</button>
        <button type="button" class="btn-paper btn-paper-danger">Danger</button>
        <button type="button" class="btn-paper btn-paper-muted">Muted</button>
      </div>
      <CodeBlock lang="html" :code="colors" />
    </div>

    <div class="space-y-4">
      <h2 class="font-paper-heading text-2xl">Outline</h2>
      <div
        class="flex flex-wrap gap-3 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
      >
        <button type="button" class="btn-paper btn-paper-primary-outline">Primary</button>
        <button type="button" class="btn-paper btn-paper-secondary-outline">
          Secondary
        </button>
        <button type="button" class="btn-paper btn-paper-success-outline">Success</button>
        <button type="button" class="btn-paper btn-paper-warning-outline">Warning</button>
        <button type="button" class="btn-paper btn-paper-danger-outline">Danger</button>
        <button type="button" class="btn-paper btn-paper-muted-outline">Muted</button>
      </div>
      <CodeBlock lang="html" :code="outlines" />
    </div>

    <div class="space-y-4">
      <h2 class="font-paper-heading text-2xl">Disabled</h2>
      <div
        class="flex flex-wrap gap-3 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
      >
        <button type="button" class="btn-paper" disabled>Disabled</button>
        <button type="button" class="btn-paper btn-paper-secondary" disabled>
          Disabled secondary
        </button>
        <a href="#" class="btn-paper btn-paper-danger disabled" @click.prevent>
          Disabled link
        </a>
      </div>
      <CodeBlock lang="html" :code="disabled" />
    </div>

    <div class="space-y-4">
      <h2 class="font-paper-heading text-2xl">Loading</h2>
      <div
        class="flex flex-wrap gap-3 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
      >
        <button type="button" class="btn-paper btn-paper-secondary" disabled>
          <span
            class="spinner-paper spinner-paper-sm spinner-paper-inline me-2"
            role="status"
            aria-hidden="true"
          ></span>
          Please wait
        </button>
        <button type="button" class="btn-paper btn-paper-primary" disabled>
          <span
            class="spinner-paper spinner-paper-sm spinner-paper-inline spinner-paper-primary me-2"
            role="status"
            aria-hidden="true"
          ></span>
          Saving…
        </button>
      </div>
      <CodeBlock lang="html" :code="loading" />
    </div>

    <DocsVariables :variables="variables" />
  </section>
</template>
