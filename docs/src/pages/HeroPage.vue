<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<section class="hero-paper">
  <div class="hero-paper-body">
    <h2 class="hero-paper-title">PapierCSS</h2>
    <p class="hero-paper-lead">The less formal CSS framework, rebuilt with Tailwind v4.</p>
    <div>
      <button type="button" class="btn-paper btn-paper-primary">Get started</button>
    </div>
  </div>
</section>`;

const sizes = `<section class="hero-paper hero-paper-sm">
  <div class="hero-paper-body">
    <h2 class="hero-paper-title">Small</h2>
    <p class="hero-paper-lead">Tight padding.</p>
  </div>
</section>
<section class="hero-paper">
  <div class="hero-paper-body">
    <h2 class="hero-paper-title">Default</h2>
    <p class="hero-paper-lead">Comfortable banner padding.</p>
  </div>
</section>
<section class="hero-paper hero-paper-lg">
  <div class="hero-paper-body">
    <h2 class="hero-paper-title">Large</h2>
    <p class="hero-paper-lead">Roomy padding for a landing block.</p>
  </div>
</section>
<section class="hero-paper hero-paper-fullheight">
  <div class="hero-paper-body">
    <h2 class="hero-paper-title">Full height</h2>
    <p class="hero-paper-lead">min-height: 100vh</p>
  </div>
</section>`;

const colors = `<section class="hero-paper">Default</section>
<section class="hero-paper hero-paper-primary">Primary</section>
<section class="hero-paper hero-paper-secondary">Secondary</section>
<section class="hero-paper hero-paper-success">Success</section>
<section class="hero-paper hero-paper-warning">Warning</section>
<section class="hero-paper hero-paper-danger">Danger</section>
<section class="hero-paper hero-paper-muted">Muted</section>`;

const variables = [
  { name: "--paper-hero-bg", value: "var(--paper-hero-primary-bg)" },
  { name: "--paper-hero-fg", value: "var(--paper-hero-primary-fg)" },
  {
    name: "--paper-hero-border-color",
    value: "var(--paper-hero-primary-border-color)",
  },
  { name: "--paper-hero-padding-y", value: "3rem" },
  { name: "--paper-hero-padding-x", value: "4rem" },
  { name: "--paper-hero-margin-bottom", value: "2.5rem" },
  { name: "--paper-hero-sm-padding-y", value: "1.25rem" },
  { name: "--paper-hero-sm-padding-x", value: "2rem" },
  { name: "--paper-hero-lg-padding", value: "6.5rem" },
  { name: "--paper-hero-gap", value: "1.75rem" },
  { name: "--paper-hero-title-size", value: "4rem" },
  { name: "--paper-hero-lead-size", value: "1.25rem" },
  { name: "--paper-hero-primary-bg", value: "var(--paper-primary-soft)" },
  { name: "--paper-hero-primary-fg", value: "var(--paper-primary-soft-fg)" },
  {
    name: "--paper-hero-primary-border-color",
    value: "var(--paper-primary-soft-border-color)",
  },
  { name: "--paper-hero-secondary-bg", value: "var(--paper-secondary-soft)" },
  { name: "--paper-hero-secondary-fg", value: "var(--paper-secondary-soft-fg)" },
  {
    name: "--paper-hero-secondary-border-color",
    value: "var(--paper-secondary-soft-border-color)",
  },
  { name: "--paper-hero-success-bg", value: "var(--paper-success-soft)" },
  { name: "--paper-hero-success-fg", value: "var(--paper-success-soft-fg)" },
  {
    name: "--paper-hero-success-border-color",
    value: "var(--paper-success-soft-border-color)",
  },
  { name: "--paper-hero-warning-bg", value: "var(--paper-warning-soft)" },
  { name: "--paper-hero-warning-fg", value: "var(--paper-warning-soft-fg)" },
  {
    name: "--paper-hero-warning-border-color",
    value: "var(--paper-warning-soft-border-color)",
  },
  { name: "--paper-hero-danger-bg", value: "var(--paper-danger-soft)" },
  { name: "--paper-hero-danger-fg", value: "var(--paper-danger-soft-fg)" },
  {
    name: "--paper-hero-danger-border-color",
    value: "var(--paper-danger-soft-border-color)",
  },
  { name: "--paper-hero-muted-bg", value: "var(--paper-muted-soft)" },
  { name: "--paper-hero-muted-fg", value: "var(--paper-muted-soft-fg)" },
  {
    name: "--paper-hero-muted-border-color",
    value: "var(--paper-muted-soft-border-color)",
  },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Hero</h1>

    <DocsSection title="Usage" :code="usage" demo-class="space-y-3">
      <section class="hero-paper">
        <div class="hero-paper-body">
          <h2 class="hero-paper-title">PapierCSS</h2>
          <p class="hero-paper-lead">
            The less formal CSS framework, rebuilt with Tailwind v4.
          </p>
          <div>
            <button type="button" class="btn-paper btn-paper-primary">
              Get started
            </button>
          </div>
        </div>
      </section>
    </DocsSection>

    <DocsSection title="Sizes" :code="sizes" demo-class="space-y-3">
      <section class="hero-paper hero-paper-sm">
        <div class="hero-paper-body">
          <h2 class="hero-paper-title">Small</h2>
          <p class="hero-paper-lead">Tight padding.</p>
        </div>
      </section>
      <section class="hero-paper">
        <div class="hero-paper-body">
          <h2 class="hero-paper-title">Default</h2>
          <p class="hero-paper-lead">Comfortable banner padding.</p>
        </div>
      </section>
      <section class="hero-paper hero-paper-lg">
        <div class="hero-paper-body">
          <h2 class="hero-paper-title">Large</h2>
          <p class="hero-paper-lead">Roomy padding for a landing block.</p>
        </div>
      </section>
      <section class="hero-paper hero-paper-fullheight">
        <div class="hero-paper-body">
          <h2 class="hero-paper-title">Full height</h2>
          <p class="hero-paper-lead">min-height: 100vh</p>
        </div>
      </section>
    </DocsSection>

    <DocsSection title="Colors" :code="colors" demo-class="space-y-3">
      <section class="hero-paper">
        <div class="hero-paper-body">
          <h2 class="hero-paper-title">Default</h2>
        </div>
      </section>
      <section class="hero-paper hero-paper-primary">
        <div class="hero-paper-body">
          <h2 class="hero-paper-title">Primary</h2>
        </div>
      </section>
      <section class="hero-paper hero-paper-secondary">
        <div class="hero-paper-body">
          <h2 class="hero-paper-title">Secondary</h2>
        </div>
      </section>
      <section class="hero-paper hero-paper-success">
        <div class="hero-paper-body">
          <h2 class="hero-paper-title">Success</h2>
        </div>
      </section>
      <section class="hero-paper hero-paper-warning">
        <div class="hero-paper-body">
          <h2 class="hero-paper-title">Warning</h2>
        </div>
      </section>
      <section class="hero-paper hero-paper-danger">
        <div class="hero-paper-body">
          <h2 class="hero-paper-title">Danger</h2>
        </div>
      </section>
      <section class="hero-paper hero-paper-muted">
        <div class="hero-paper-body">
          <h2 class="hero-paper-title">Muted</h2>
        </div>
      </section>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
