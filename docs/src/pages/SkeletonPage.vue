<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<div class="skeleton-paper-group space-y-2" aria-busy="true">
  <div class="skeleton-paper h-8 w-full" aria-hidden="true" role="progressbar" aria-valuetext="Loading..."></div>
  <div class="skeleton-paper h-8 w-3/4" aria-hidden="true" role="progressbar" aria-valuetext="Loading..."></div>
  <div class="skeleton-paper h-8 w-1/2" aria-hidden="true" role="progressbar" aria-valuetext="Loading..."></div>
</div>`;

const circles = `<div class="skeleton-paper skeleton-paper-circle size-16 shrink-0" aria-hidden="true" role="progressbar" aria-valuetext="Loading..."></div>
<div class="skeleton-paper skeleton-paper-circle-2 size-16 shrink-0" aria-hidden="true" role="progressbar" aria-valuetext="Loading..."></div>
<div class="skeleton-paper skeleton-paper-circle-4 size-16 shrink-0" aria-hidden="true" role="progressbar" aria-valuetext="Loading..."></div>
<div class="skeleton-paper skeleton-paper-circle-6 size-16 shrink-0" aria-hidden="true" role="progressbar" aria-valuetext="Loading..."></div>`;

const group = `<div class="flex items-center gap-4">
  <div class="skeleton-paper skeleton-paper-circle-3 size-16 shrink-0" aria-hidden="true" role="progressbar" aria-valuetext="Loading..."></div>
  <div class="flex-1 space-y-2">
    <div class="skeleton-paper skeleton-paper-3 h-6 w-full" aria-hidden="true" role="progressbar" aria-valuetext="Loading..."></div>
    <div class="skeleton-paper skeleton-paper-5 h-4 w-2/3" aria-hidden="true" role="progressbar" aria-valuetext="Loading..."></div>
  </div>
</div>`;

const variables = [
  { name: "--paper-skeleton-from", value: "var(--paper-muted-300)" },
  { name: "--paper-skeleton-via", value: "var(--paper-muted-100)" },
  { name: "--paper-skeleton-to", value: "var(--paper-muted-300)" },
  {
    name: "--paper-skeleton-gradient",
    value:
      "linear-gradient(90deg, var(--paper-skeleton-from) 5%, var(--paper-skeleton-via) 20%, var(--paper-skeleton-to) 50%)",
  },
  {
    name: "--paper-skeleton-circle-1-radius",
    value: "var(--paper-circle-1-radius)",
  },
  {
    name: "--paper-skeleton-circle-2-radius",
    value: "var(--paper-circle-2-radius)",
  },
  {
    name: "--paper-skeleton-circle-3-radius",
    value: "var(--paper-circle-3-radius)",
  },
  {
    name: "--paper-skeleton-circle-4-radius",
    value: "var(--paper-circle-4-radius)",
  },
  {
    name: "--paper-skeleton-circle-5-radius",
    value: "var(--paper-circle-5-radius)",
  },
  {
    name: "--paper-skeleton-circle-6-radius",
    value: "var(--paper-circle-6-radius)",
  },
  {
    name: "--paper-skeleton-circle-radius",
    value: "var(--paper-circle-radius)",
  },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Skeleton</h1>

    <DocsSection title="Usage" :code="usage" demo-class="space-y-3">
      <div class="skeleton-paper-group space-y-2" aria-busy="true">
        <div
          class="skeleton-paper h-8 w-full"
          aria-hidden="true"
          role="progressbar"
          aria-valuetext="Loading..."
        ></div>
        <div
          class="skeleton-paper h-8 w-3/4"
          aria-hidden="true"
          role="progressbar"
          aria-valuetext="Loading..."
        ></div>
        <div
          class="skeleton-paper h-8 w-1/2"
          aria-hidden="true"
          role="progressbar"
          aria-valuetext="Loading..."
        ></div>
      </div>
    </DocsSection>

    <DocsSection
      title="Circles"
      :code="circles"
      demo-class="flex flex-wrap items-center gap-4 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <div
        class="skeleton-paper skeleton-paper-circle size-16 shrink-0"
        aria-hidden="true"
        role="progressbar"
        aria-valuetext="Loading..."
      ></div>
      <div
        class="skeleton-paper skeleton-paper-circle-2 size-16 shrink-0"
        aria-hidden="true"
        role="progressbar"
        aria-valuetext="Loading..."
      ></div>
      <div
        class="skeleton-paper skeleton-paper-circle-4 size-16 shrink-0"
        aria-hidden="true"
        role="progressbar"
        aria-valuetext="Loading..."
      ></div>
      <div
        class="skeleton-paper skeleton-paper-circle-6 size-16 shrink-0"
        aria-hidden="true"
        role="progressbar"
        aria-valuetext="Loading..."
      ></div>
    </DocsSection>

    <DocsSection title="Group" :code="group">
      <div class="flex items-center gap-4">
        <div
          class="skeleton-paper skeleton-paper-circle-3 size-16 shrink-0"
          aria-hidden="true"
          role="progressbar"
          aria-valuetext="Loading..."
        ></div>
        <div class="flex-1 space-y-2">
          <div
            class="skeleton-paper skeleton-paper-3 h-6 w-full"
            aria-hidden="true"
            role="progressbar"
            aria-valuetext="Loading..."
          ></div>
          <div
            class="skeleton-paper skeleton-paper-5 h-4 w-2/3"
            aria-hidden="true"
            role="progressbar"
            aria-valuetext="Loading..."
          ></div>
        </div>
      </div>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
