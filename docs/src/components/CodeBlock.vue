<script setup lang="ts">
import { computed, ref } from "vue";
import { highlight } from "../lib/highlight";

const props = withDefaults(
  defineProps<{
    code: string;
    lang?: string;
  }>(),
  {
    lang: "text",
  },
);

const copied = ref(false);
let copyTimer: ReturnType<typeof setTimeout> | undefined;

const source = computed(() =>
  props.code.replace(/^\n+/, "").replace(/\n+$/, ""),
);

const html = computed(() => highlight(source.value, props.lang));

async function copy() {
  await navigator.clipboard.writeText(source.value);
  copied.value = true;
  clearTimeout(copyTimer);
  copyTimer = setTimeout(() => {
    copied.value = false;
  }, 1500);
}
</script>

<template>
  <div
    class="code-block group relative min-h-16 overflow-hidden rounded-paper border-paper border-muted-border bg-surface-raised dark:bg-primary-900"
  >
    <div class="absolute top-2 right-2 z-10 flex items-center gap-2">
      <span
        v-if="lang && lang !== 'text'"
        class="rounded-paper bg-surface-sunken px-2 py-0.5 text-xs text-muted-500"
      >
        {{ lang }}
      </span>
      <button
        type="button"
        class="rounded-paper border-paper border-muted-border bg-surface px-2 py-1 text-xs text-primary shadow-paper-sm"
        :aria-label="copied ? 'Copied' : 'Copy code'"
        @click="copy"
      >
        {{ copied ? "Copied!" : "Copy" }}
      </button>
    </div>
    <div
      class="code-block__body overflow-x-auto p-4 pt-10 text-sm leading-relaxed"
      v-html="html"
    />
  </div>
</template>

<style scoped>
.code-block__body :deep(pre) {
  margin: 0;
  background: transparent;
  overflow: visible;
}

.code-block__body :deep(code) {
  font-family:
    "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 0.875rem;
  background: transparent;
  color: var(--paper-primary);
}

.code-block__body :deep(.token-comment) {
  color: var(--paper-muted-500);
  font-style: italic;
}

.code-block__body :deep(.token-string),
.code-block__body :deep(.token-attr) {
  color: var(--paper-success-500);
}

.code-block__body :deep(.token-keyword),
.code-block__body :deep(.token-atrule),
.code-block__body :deep(.token-tag),
.code-block__body :deep(.token-command) {
  color: var(--paper-secondary-700);
}

.code-block__body :deep(.token-function),
.code-block__body :deep(.token-selector) {
  color: var(--paper-danger-500);
}

.code-block__body :deep(.token-number),
.code-block__body :deep(.token-flag) {
  color: var(--paper-warning-700);
}
</style>
