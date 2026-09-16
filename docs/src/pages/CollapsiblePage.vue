<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<details class="collapsible-paper border-paper border-muted-border">
  <summary>A single collapsible</summary>
  hey there
</details>`;

const independent = `<div class="border-paper border-muted-border overflow-hidden">
  <details class="collapsible-paper">
    <summary>First section</summary>
    Content of the first collapsible panel.
  </details>
  <details class="collapsible-paper">
    <summary>Second section</summary>
    Multiple can stay open.
  </details>
  <details class="collapsible-paper" open>
    <summary>Open by default</summary>
    Starts expanded via the open attribute.
  </details>
</div>`;

const accordion = `<div class="border-paper border-muted-border overflow-hidden">
  <details class="collapsible-paper" name="docs-accordion">
    <summary>One</summary>
    Only one panel in this group can be open at a time.
  </details>
  <details class="collapsible-paper" name="docs-accordion" open>
    <summary>Two</summary>
    Opening another closes this one (shared name).
  </details>
  <details class="collapsible-paper" name="docs-accordion">
    <summary>Three</summary>
    Native accordion — no JS.
  </details>
</div>`;

const variables = [
  { name: "--paper-collapsible-duration", value: "0.3s" },
  { name: "--paper-collapsible-border-color", value: "var(--paper-muted-border-color)" },
  {
    name: "--paper-collapsible-content-bg",
    value: "var(--paper-surface-sunken)",
  },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Collapsible</h1>

    <DocsSection
      title="Usage"
      :code="usage"
      demo-class="space-y-3 rounded-paper border-paper border-muted-border bg-surface p-6"
    >
      <details class="collapsible-paper border-paper border-muted-border">
        <summary>A single collapsible</summary>
        hey there
      </details>
    </DocsSection>

    <DocsSection
      title="Independent"
      :code="independent"
      demo-class="space-y-3 rounded-paper border-paper border-muted-border bg-surface p-6"
    >
      <div class="border-paper border-muted-border overflow-hidden">
        <details class="collapsible-paper">
          <summary>First section</summary>
          Content of the first collapsible panel.
        </details>
        <details class="collapsible-paper">
          <summary>Second section</summary>
          Multiple can stay open.
        </details>
        <details class="collapsible-paper" open>
          <summary>Open by default</summary>
          Starts expanded via the open attribute.
        </details>
      </div>
    </DocsSection>

    <DocsSection
      title="Accordion"
      :code="accordion"
      demo-class="space-y-3 rounded-paper border-paper border-muted-border bg-surface p-6"
    >
      <div class="border-paper border-muted-border overflow-hidden">
        <details class="collapsible-paper" name="docs-accordion">
          <summary>One</summary>
          Only one panel in this group can be open at a time.
        </details>
        <details class="collapsible-paper" name="docs-accordion" open>
          <summary>Two</summary>
          Opening another closes this one (shared name).
        </details>
        <details class="collapsible-paper" name="docs-accordion">
          <summary>Three</summary>
          Native accordion — no JS.
        </details>
      </div>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
