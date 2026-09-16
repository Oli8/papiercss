<script setup lang="ts">
import { ref } from "vue";
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const dialog = ref<HTMLDialogElement | null>(null);

function open() {
  dialog.value?.showModal();
}

function onBackdropClick(e: MouseEvent) {
  if (e.target === dialog.value) {
    dialog.value?.close();
  }
}

const usage = `<button type="button" class="btn-paper btn-paper-secondary" onclick="document.getElementById('demo-modal').showModal()">
  Open modal
</button>

<dialog id="demo-modal" class="modal-paper rounded-paper" onclick="if (event.target === this) this.close()">
  <form method="dialog">
    <button type="submit" class="modal-paper-close" aria-label="Close">×</button>
  </form>
  <h4 class="modal-paper-title">Modal title</h4>
  <p class="modal-paper-subtitle">Subtitle</p>
  <p class="mb-4">Native dialog with Esc, focus trap, and form method="dialog".</p>
  <form method="dialog">
    <button type="submit" class="btn-paper btn-paper-sm btn-paper-primary">Close</button>
  </form>
</dialog>`;

const variables = [
  { name: "--paper-modal-duration", value: "0.3s" },
  { name: "--paper-modal-bg", value: "var(--paper-surface-raised)" },
  { name: "--paper-modal-fg", value: "var(--paper-primary)" },
  { name: "--paper-modal-border-color", value: "var(--paper-muted-border-color)" },
  { name: "--paper-modal-backdrop-color", value: "hsl(0 0% 0% / 0.6)" },
  { name: "--paper-modal-close-fg", value: "var(--paper-primary-400)" },
  { name: "--paper-modal-close-fg-hover", value: "var(--paper-primary)" },
  {
    name: "--paper-modal-subtitle-color",
    value: "var(--paper-subtitle-color)",
  },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Modal</h1>

    <DocsSection title="Usage" :code="usage">
      <button type="button" class="btn-paper btn-paper-secondary" @click="open">
        Open modal
      </button>

      <dialog
        ref="dialog"
        class="modal-paper rounded-paper"
        @click="onBackdropClick"
      >
        <form method="dialog">
          <button type="submit" class="modal-paper-close" aria-label="Close">×</button>
        </form>
        <h4 class="modal-paper-title">Modal title</h4>
        <p class="modal-paper-subtitle">Subtitle</p>
        <p class="mb-4">
          Native
          <code>&lt;dialog&gt;</code>
          — Esc, focus trap, and
          <code>form method="dialog"</code>
          to close.
        </p>
        <form method="dialog">
          <button type="submit" class="btn-paper btn-paper-sm btn-paper-primary">
            Close
          </button>
        </form>
      </dialog>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
