<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const sizes = `<span class="spinner-paper" role="status" aria-label="Loading"></span>
<span class="spinner-paper spinner-paper-sm" role="status" aria-label="Loading"></span>
<span class="spinner-paper spinner-paper-lg" role="status" aria-label="Loading"></span>`;

const colors = `<span class="spinner-paper spinner-paper-primary" role="status" aria-label="Loading"></span>
<span class="spinner-paper spinner-paper-secondary" role="status" aria-label="Loading"></span>
<span class="spinner-paper spinner-paper-success" role="status" aria-label="Loading"></span>
<span class="spinner-paper spinner-paper-warning" role="status" aria-label="Loading"></span>
<span class="spinner-paper spinner-paper-danger" role="status" aria-label="Loading"></span>
<span class="spinner-paper spinner-paper-muted" role="status" aria-label="Loading"></span>`;

const inline = `<p>
  Saving
  <span class="spinner-paper spinner-paper-sm spinner-paper-inline" role="status" aria-label="Loading"></span>
  …
</p>
<button class="btn-paper btn-paper-secondary" type="button" disabled>
  <span class="spinner-paper spinner-paper-sm spinner-paper-inline me-2" role="status" aria-hidden="true"></span>
  Please wait
</button>`;

const variables = [
  { name: "--paper-spinner-size", value: "2rem" },
  { name: "--paper-spinner-size-sm", value: "1.25rem" },
  { name: "--paper-spinner-size-lg", value: "3rem" },
  { name: "--paper-spinner-border-width", value: "2px" },
  { name: "--paper-spinner-duration", value: "0.85s" },
  { name: "--paper-spinner-primary-color", value: "var(--paper-primary)" },
  { name: "--paper-spinner-secondary-color", value: "var(--paper-secondary)" },
  { name: "--paper-spinner-success-color", value: "var(--paper-success)" },
  { name: "--paper-spinner-warning-color", value: "var(--paper-warning)" },
  { name: "--paper-spinner-danger-color", value: "var(--paper-danger)" },
  { name: "--paper-spinner-muted-color", value: "var(--paper-muted)" },
  {
    name: "--paper-spinner-color",
    value: "var(--paper-spinner-secondary-color)",
  },
  { name: "--paper-spinner-track-color", value: "var(--paper-muted-200)" },
  { name: "--paper-spinner-radius", value: "var(--paper-circle-radius)" },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Spinner</h1>

    <DocsSection
      title="Sizes"
      :code="sizes"
      demo-class="flex flex-wrap items-center gap-6 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <span class="spinner-paper" role="status" aria-label="Loading"></span>
      <span class="spinner-paper spinner-paper-sm" role="status" aria-label="Loading"></span>
      <span class="spinner-paper spinner-paper-lg" role="status" aria-label="Loading"></span>
    </DocsSection>

    <DocsSection
      title="Colors"
      :code="colors"
      demo-class="flex flex-wrap items-center gap-6 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <span
        class="spinner-paper spinner-paper-primary"
        role="status"
        aria-label="Loading"
      ></span>
      <span
        class="spinner-paper spinner-paper-secondary"
        role="status"
        aria-label="Loading"
      ></span>
      <span
        class="spinner-paper spinner-paper-success"
        role="status"
        aria-label="Loading"
      ></span>
      <span
        class="spinner-paper spinner-paper-warning"
        role="status"
        aria-label="Loading"
      ></span>
      <span
        class="spinner-paper spinner-paper-danger"
        role="status"
        aria-label="Loading"
      ></span>
      <span class="spinner-paper spinner-paper-muted" role="status" aria-label="Loading"></span>
    </DocsSection>

    <DocsSection
      title="Inline"
      :code="inline"
      demo-class="space-y-4 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <p>
        Saving
        <span
          class="spinner-paper spinner-paper-sm spinner-paper-inline"
          role="status"
          aria-label="Loading"
        ></span>
        …
      </p>
      <button class="btn-paper btn-paper-secondary" type="button" disabled>
        <span
          class="spinner-paper spinner-paper-sm spinner-paper-inline me-2"
          role="status"
          aria-hidden="true"
        ></span>
        Please wait
      </button>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
