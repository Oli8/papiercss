<script setup lang="ts">
import CodeBlock from "../components/CodeBlock.vue";

const htmlClass = `<html class="dark">
  …
</html>`;

const toggle = `document.documentElement.classList.toggle("dark");`;

const persist = `const stored = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const dark = stored === "dark" || (!stored && prefersDark);

document.documentElement.classList.toggle("dark", dark);`;

const darkUtility = `<div class="bg-surface text-primary dark:bg-surface-sunken">
  …
</div>`;
</script>

<template>
  <section class="space-y-8">
    <div class="space-y-3">
      <h1 class="font-paper-heading text-4xl">Dark Mode</h1>
      <p class="max-w-2xl text-muted-600 dark:text-muted-400">
        PapierCSS uses a class-based dark theme. Add
        <code class="text-sm">dark</code> on a parent (usually
        <code class="text-sm">&lt;html&gt;</code>) and semantic colors remapped
        for dark surfaces automatically.
      </p>
    </div>

    <div class="space-y-3">
      <h2 class="font-paper-heading text-2xl">Enable</h2>
      <p class="text-muted-600 dark:text-muted-400">
        Toggle the class wherever you want the theme to apply
      </p>
      <CodeBlock lang="html" :code="htmlClass" />
      <CodeBlock lang="js" :code="toggle" />
    </div>

    <div class="space-y-3">
      <h2 class="font-paper-heading text-2xl">Respect system preference</h2>
      <p class="text-muted-600 dark:text-muted-400">
        On first load, read
        <code class="text-sm">prefers-color-scheme</code> (and optionally persist
        the user’s choice).
      </p>
      <CodeBlock lang="js" :code="persist" />
    </div>

    <div class="space-y-3">
      <h2 class="font-paper-heading text-2xl">Dark utilities</h2>
      <p class="text-muted-600 dark:text-muted-400">
        Tailwind’s <code class="text-sm">dark:</code> variant is wired to the same
        class, so you can override layout or one-off styles when needed.
      </p>
      <CodeBlock lang="html" :code="darkUtility" />
    </div>
  </section>
</template>
