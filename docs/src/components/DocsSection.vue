<script setup lang="ts">
import CodeBlock from "./CodeBlock.vue";

withDefaults(
  defineProps<{
    title: string;
    code: string;
    lang?: string;
    demoClass?: string;
  }>(),
  {
    lang: "html",
    demoClass:
      "rounded-paper border-paper border-muted-border bg-surface-raised p-6",
  },
);
</script>

<template>
  <div class="space-y-4">
    <h2 class="font-paper-heading text-2xl">{{ title }}</h2>
    <div :class="demoClass">
      <slot />
    </div>
    <CodeBlock :lang="lang" :code="code" />
  </div>
</template>
