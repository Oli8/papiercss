<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<form class="form-group-paper">
  <label for="docs-input-name">Name</label>
  <input id="docs-input-name" class="input-paper" placeholder="Type here" />
</form>`;

const textarea = `<form class="form-group-paper">
  <label for="docs-textarea-bio">Bio</label>
  <textarea id="docs-textarea-bio" class="textarea-paper" rows="3" placeholder="Say something…"></textarea>
</form>`;

const disabled = `<input class="input-paper" disabled value="Disabled input" />
<textarea class="textarea-paper" rows="2" disabled>Disabled textarea</textarea>`;

const variables = [
  { name: "--paper-input-fg", value: "var(--paper-field-fg)" },
  {
    name: "--paper-input-border-color",
    value: "var(--paper-field-border-color)",
  },
  {
    name: "--paper-input-border-focus-color",
    value: "var(--paper-field-border-focus-color)",
  },
  {
    name: "--paper-input-placeholder-color",
    value: "var(--paper-field-placeholder-color)",
  },
  { name: "--paper-textarea-fg", value: "var(--paper-field-fg)" },
  {
    name: "--paper-textarea-border-color",
    value: "var(--paper-field-border-color)",
  },
  {
    name: "--paper-textarea-border-focus-color",
    value: "var(--paper-field-border-focus-color)",
  },
  {
    name: "--paper-textarea-placeholder-color",
    value: "var(--paper-field-placeholder-color)",
  },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Input</h1>

    <DocsSection
      title="Usage"
      :code="usage"
      demo-class="max-w-md space-y-4 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <form class="form-group-paper">
        <label for="docs-input-name">Name</label>
        <input id="docs-input-name" class="input-paper" placeholder="Type here" />
      </form>
    </DocsSection>

    <DocsSection
      title="Textarea"
      :code="textarea"
      demo-class="max-w-md space-y-4 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <form class="form-group-paper">
        <label for="docs-textarea-bio">Bio</label>
        <textarea
          id="docs-textarea-bio"
          class="textarea-paper"
          rows="3"
          placeholder="Say something…"
        ></textarea>
      </form>
    </DocsSection>

    <DocsSection
      title="Disabled"
      :code="disabled"
      demo-class="max-w-md space-y-4 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <input class="input-paper" disabled value="Disabled input" />
      <textarea class="textarea-paper" rows="2" disabled>Disabled textarea</textarea>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
