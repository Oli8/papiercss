<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<div class="form-group-paper">
  <label for="docs-select-role">Role</label>
  <select id="docs-select-role" class="select-paper">
    <option>Designer</option>
    <option>Developer</option>
    <option>Writer</option>
  </select>
</div>`;

const disabled = `<select class="select-paper" disabled>
  <option>Disabled select</option>
</select>`;

const variables = [
  { name: "--paper-select-border-color", value: "var(--paper-primary)" },
  { name: "--paper-select-option-bg", value: "var(--paper-surface-raised)" },
  { name: "--paper-select-option-fg", value: "var(--paper-primary)" },
  {
    name: "--paper-select-option-hover-bg",
    value: "var(--paper-secondary-soft)",
  },
  {
    name: "--paper-select-option-hover-fg",
    value: "var(--paper-secondary-soft-fg)",
  },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Select</h1>

    <DocsSection
      title="Usage"
      :code="usage"
      demo-class="max-w-md space-y-4 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <div class="form-group-paper">
        <label for="docs-select-role">Role</label>
        <select id="docs-select-role" class="select-paper">
          <option>Designer</option>
          <option>Developer</option>
          <option>Writer</option>
        </select>
      </div>
    </DocsSection>

    <DocsSection
      title="Disabled"
      :code="disabled"
      demo-class="max-w-md space-y-4 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <select class="select-paper" disabled>
        <option>Disabled select</option>
      </select>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
