<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<label class="paper-radio">
  <input type="radio" name="docs-radio" />
  <span>Radio A</span>
</label>
<label class="paper-radio">
  <input type="radio" name="docs-radio" checked />
  <span>Radio B</span>
</label>`;

const disabled = `<label class="paper-radio">
  <input type="radio" name="docs-radio-disabled" disabled />
  <span>Disabled</span>
</label>
<label class="paper-radio">
  <input type="radio" name="docs-radio-disabled" checked disabled />
  <span>Disabled checked</span>
</label>`;

const variables = [
  { name: "--paper-radio-border-color", value: "var(--paper-primary)" },
  { name: "--paper-radio-checked-color", value: "var(--paper-secondary)" },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Radio</h1>

    <DocsSection
      title="Usage"
      :code="usage"
      demo-class="flex flex-col gap-3 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <label class="paper-radio">
        <input type="radio" name="docs-radio" />
        <span>Radio A</span>
      </label>
      <label class="paper-radio">
        <input type="radio" name="docs-radio" checked />
        <span>Radio B</span>
      </label>
    </DocsSection>

    <DocsSection
      title="Disabled"
      :code="disabled"
      demo-class="flex flex-col gap-3 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <label class="paper-radio">
        <input type="radio" name="docs-radio-disabled" disabled />
        <span>Disabled</span>
      </label>
      <label class="paper-radio">
        <input type="radio" name="docs-radio-disabled" checked disabled />
        <span>Disabled checked</span>
      </label>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
