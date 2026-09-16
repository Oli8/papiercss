<script setup lang="ts">
import CodeBlock from "../components/CodeBlock.vue";

const paperVars = `:root {
  --paper-primary-700: #2a2a2a;
  --paper-primary: var(--paper-primary-700);
  --paper-secondary-800: #e85d04;
  --paper-secondary: var(--paper-secondary-800);
}

.dark {
  --paper-primary-50: #ffffff;
  --paper-primary: var(--paper-primary-50);
}`;

const themeBlock = `@import "tailwindcss";
@import "papiercss";

@theme {
  --color-primary: #2a2a2a;
  --color-secondary: #e85d04;
}`;

const componentTokens = `:root {
  --paper-btn-primary-bg: #ffe4e1;
  --paper-btn-primary-fg: #7f1d1d;
  --paper-btn-primary-border-color: #b91c1c;
}

.dark {
  --paper-btn-primary-bg: #3f1d1d;
  --paper-btn-primary-fg: #fecaca;
}`;

const scoped = `.product-hero {
  --paper-btn-secondary-bg: #cceeff;
  --paper-btn-secondary-fg: #0c4a6e;
}`;
</script>

<template>
  <section class="space-y-8">
    <div class="space-y-3">
      <h1 class="font-paper-heading text-4xl">Theming</h1>
      <p class="max-w-2xl text-muted-600 dark:text-muted-400">
        Most of PapierCSS is driven by CSS variables. You may override a
        token after importing the library.
      </p>
    </div>

    <div class="space-y-3">
      <h2 class="font-paper-heading text-2xl">Palette tokens</h2>
      <p class="text-muted-600 dark:text-muted-400">
        Semantic colors live as
        <code class="text-sm">--paper-&#123;name&#125;-&#123;50–950&#125;</code>
        plus a default alias
        <code class="text-sm">--paper-&#123;name&#125;</code>. Change a scale
        step and/or re-point the alias. Do the same under
        <code class="text-sm">.dark</code> when dark mode should differ.
      </p>
      <CodeBlock lang="css" :code="paperVars" />
    </div>

    <div class="space-y-3">
      <h2 class="font-paper-heading text-2xl">Tailwind @theme</h2>
      <p class="text-muted-600 dark:text-muted-400">
        Utility classes like
        <code class="text-sm">bg-primary</code> and
        <code class="text-sm">text-secondary</code> read
        <code class="text-sm">--color-*</code> from
        <code class="text-sm">@theme</code>. Override those if you only need
        Tailwind utilities to pick up new values.
      </p>
      <CodeBlock lang="css" :code="themeBlock" />
      <p class="text-sm text-muted-600 dark:text-muted-400">
        Prefer <code class="text-sm">--paper-*</code> when you also want
        components and dark remaps to follow the same source of truth.
      </p>
    </div>

    <div class="space-y-3">
      <h2 class="font-paper-heading text-2xl">Component tokens</h2>
      <p class="text-muted-600 dark:text-muted-400">
        Buttons, alerts, tables, progress, and other components expose their own
        <code class="text-sm">--paper-*</code> variables (documented on each
        component page).
      </p>
      <CodeBlock lang="css" :code="componentTokens" />
    </div>

    <div class="space-y-3">
      <h2 class="font-paper-heading text-2xl">Scoped overrides</h2>
      <p class="text-muted-600 dark:text-muted-400">
        Variables inherit. Set them on a wrapper to theme only that subtree.
      </p>
      <CodeBlock lang="css" :code="scoped" />
    </div>
  </section>
</template>
