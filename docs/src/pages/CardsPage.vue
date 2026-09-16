<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<div class="card-paper rounded-paper max-w-md">
  <header>Header</header>
  <div class="card-paper-body">
    <h4 class="card-paper-title">Card title</h4>
    <p class="card-paper-subtitle">Subtitle</p>
    <p class="mb-4">Card content.</p>
    <button type="button" class="btn-paper btn-paper-sm btn-paper-primary">Action</button>
  </div>
  <footer class="text-sm text-muted-600 dark:text-muted-400">Footer</footer>
</div>`;

const withImage = `<div class="card-paper rounded-paper max-w-md">
  <img
    src="https://picsum.photos/seed/papier-card/768"
    alt="Card cover"
  />
  <div class="card-paper-body">
    <h4 class="card-paper-title">Card with image</h4>
    <p class="card-paper-subtitle">Top image</p>
    <p class="mb-4">Shadow + border paper style, composed with Tailwind spacing.</p>
    <button type="button" class="btn-paper btn-paper-sm btn-paper-primary">Action</button>
  </div>
  <footer class="text-sm text-muted-600 dark:text-muted-400">Footer</footer>
</div>`;

const variables = [
  { name: "--paper-card-title-size", value: "1.5rem" },
  {
    name: "--paper-card-subtitle-color",
    value: "var(--paper-subtitle-color)",
  },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Card</h1>

    <DocsSection title="Usage" :code="usage" demo-class="max-w-md">
      <div class="card-paper rounded-paper max-w-md">
        <header>Header</header>
        <div class="card-paper-body">
          <h4 class="card-paper-title">Card title</h4>
          <p class="card-paper-subtitle">Subtitle</p>
          <p class="mb-4">Card content.</p>
          <button type="button" class="btn-paper btn-paper-sm btn-paper-primary">
            Action
          </button>
        </div>
        <footer class="text-sm text-muted-600 dark:text-muted-400">Footer</footer>
      </div>
    </DocsSection>

    <DocsSection title="With image" :code="withImage" demo-class="max-w-md">
      <div class="card-paper rounded-paper max-w-md">
        <img
          src="https://picsum.photos/seed/papier-card/768"
          alt="Card cover"
        />
        <div class="card-paper-body">
          <h4 class="card-paper-title">Card with image</h4>
          <p class="card-paper-subtitle">Top image</p>
          <p class="mb-4">Shadow + border paper style, composed with Tailwind spacing.</p>
          <button type="button" class="btn-paper btn-paper-sm btn-paper-primary">
            Action
          </button>
        </div>
        <footer class="text-sm text-muted-600 dark:text-muted-400">Footer</footer>
      </div>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
