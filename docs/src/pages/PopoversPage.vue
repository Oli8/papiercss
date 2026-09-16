<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<button
  type="button"
  class="btn-paper btn-paper-sm popover-paper popover-paper-top"
  data-popover="Top tip"
>
  Top
</button>
<button
  type="button"
  class="btn-paper btn-paper-sm popover-paper popover-paper-bottom"
  data-popover="Bottom tip"
>
  Bottom
</button>
<button
  type="button"
  class="btn-paper btn-paper-sm popover-paper popover-paper-left"
  data-popover="Left tip"
>
  Left
</button>
<button
  type="button"
  class="btn-paper btn-paper-sm popover-paper popover-paper-right"
  data-popover="Right tip"
>
  Right
</button>`;

const colors = `<button type="button" class="btn-paper btn-paper-sm popover-paper popover-paper-top" data-popover="Primary">Primary</button>
<button type="button" class="btn-paper btn-paper-sm btn-paper-secondary popover-paper popover-paper-top popover-paper-secondary" data-popover="Secondary">Secondary</button>
<button type="button" class="btn-paper btn-paper-sm btn-paper-success popover-paper popover-paper-top popover-paper-success" data-popover="Success">Success</button>
<button type="button" class="btn-paper btn-paper-sm btn-paper-warning popover-paper popover-paper-top popover-paper-warning" data-popover="Warning">Warning</button>
<button type="button" class="btn-paper btn-paper-sm btn-paper-danger popover-paper popover-paper-top popover-paper-danger" data-popover="Danger">Danger</button>
<button type="button" class="btn-paper btn-paper-sm btn-paper-muted popover-paper popover-paper-top popover-paper-muted" data-popover="Muted">Muted</button>`;

const variables = [
  { name: "--paper-popover-bg", value: "var(--paper-popover-primary-bg)" },
  { name: "--paper-popover-fg", value: "var(--paper-popover-primary-fg)" },
  { name: "--paper-popover-border-color", value: "var(--paper-popover-primary-border-color)" },
  {
    name: "--paper-popover-primary-bg",
    value: "var(--paper-primary-600)",
  },
  {
    name: "--paper-popover-primary-fg",
    value: "var(--paper-primary-inverse)",
  },
  {
    name: "--paper-popover-primary-border-color",
    value: "var(--paper-primary)",
  },
  { name: "--paper-popover-secondary-bg", value: "var(--paper-secondary)" },
  { name: "--paper-popover-secondary-fg", value: "var(--paper-white)" },
  {
    name: "--paper-popover-secondary-border-color",
    value: "var(--paper-secondary)",
  },
  { name: "--paper-popover-success-bg", value: "var(--paper-success-600)" },
  { name: "--paper-popover-success-fg", value: "var(--paper-white)" },
  {
    name: "--paper-popover-success-border-color",
    value: "var(--paper-success-600)",
  },
  { name: "--paper-popover-warning-bg", value: "var(--paper-warning-600)" },
  { name: "--paper-popover-warning-fg", value: "var(--paper-white)" },
  {
    name: "--paper-popover-warning-border-color",
    value: "var(--paper-warning-600)",
  },
  { name: "--paper-popover-danger-bg", value: "var(--paper-danger)" },
  { name: "--paper-popover-danger-fg", value: "var(--paper-white)" },
  { name: "--paper-popover-danger-border-color", value: "var(--paper-danger)" },
  { name: "--paper-popover-muted-bg", value: "var(--paper-muted-600)" },
  { name: "--paper-popover-muted-fg", value: "var(--paper-white)" },
  { name: "--paper-popover-muted-border-color", value: "var(--paper-muted-600)" },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Popover</h1>

    <DocsSection
      title="Usage"
      :code="usage"
      demo-class="flex flex-wrap justify-center gap-10 py-8 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <button
        type="button"
        class="btn-paper btn-paper-sm popover-paper popover-paper-top"
        data-popover="Top tip"
      >
        Top
      </button>
      <button
        type="button"
        class="btn-paper btn-paper-sm popover-paper popover-paper-bottom"
        data-popover="Bottom tip"
      >
        Bottom
      </button>
      <button
        type="button"
        class="btn-paper btn-paper-sm popover-paper popover-paper-left"
        data-popover="Left tip"
      >
        Left
      </button>
      <button
        type="button"
        class="btn-paper btn-paper-sm popover-paper popover-paper-right"
        data-popover="Right tip"
      >
        Right
      </button>
    </DocsSection>

    <DocsSection
      title="Colors"
      :code="colors"
      demo-class="flex flex-wrap justify-center gap-6 py-8 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <button
        type="button"
        class="btn-paper btn-paper-sm popover-paper popover-paper-top"
        data-popover="Primary"
      >
        Primary
      </button>
      <button
        type="button"
        class="btn-paper btn-paper-sm btn-paper-secondary popover-paper popover-paper-top popover-paper-secondary"
        data-popover="Secondary"
      >
        Secondary
      </button>
      <button
        type="button"
        class="btn-paper btn-paper-sm btn-paper-success popover-paper popover-paper-top popover-paper-success"
        data-popover="Success"
      >
        Success
      </button>
      <button
        type="button"
        class="btn-paper btn-paper-sm btn-paper-warning popover-paper popover-paper-top popover-paper-warning"
        data-popover="Warning"
      >
        Warning
      </button>
      <button
        type="button"
        class="btn-paper btn-paper-sm btn-paper-danger popover-paper popover-paper-top popover-paper-danger"
        data-popover="Danger"
      >
        Danger
      </button>
      <button
        type="button"
        class="btn-paper btn-paper-sm btn-paper-muted popover-paper popover-paper-top popover-paper-muted"
        data-popover="Muted"
      >
        Muted
      </button>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
