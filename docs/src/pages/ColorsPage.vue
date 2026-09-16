<script setup lang="ts">
const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

const aliases = [
  { name: "primary", note: "700 / 50 dark" },
  { name: "secondary", note: "800 / 500 dark" },
  { name: "success", note: "400" },
  { name: "warning", note: "400" },
  { name: "danger", note: "700 / 500 dark" },
  { name: "muted", note: "400" },
];

const scales = ["primary", "secondary", "success", "warning", "danger", "muted"];

const surfaces = [
  { name: "surface", token: "--paper-surface" },
  { name: "surface-raised", token: "--paper-surface-raised" },
  { name: "surface-sunken", token: "--paper-surface-sunken" },
  { name: "primary-inverse", token: "--paper-primary-inverse" },
  { name: "light-dark", token: "--paper-light-dark" },
];

const softNames = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "muted",
];

function colorVar(name: string, step?: number | "alias") {
  if (step === undefined || step === "alias") return `var(--paper-${name})`;
  return `var(--paper-${name}-${step})`;
}

function scaleBorder(name: string, step: number) {
  if (name === "muted" && step <= 100) return "var(--paper-muted-border-color)";
  if (step <= 100) return `var(--paper-${name}-200)`;
  if (step >= 950) return `var(--paper-${name}-950)`;
  return `var(--paper-${name}-${Math.min(step + 100, 950)})`;
}
</script>

<template>
  <section class="space-y-12">
    <div class="space-y-3">
      <h1 class="font-paper-heading text-4xl">Colors</h1>
      <p class="max-w-2xl text-muted-600 dark:text-muted-400">
        Tailwind-style 50–950 scales. Toggle dark mode in the header to switch
        palettes.
      </p>
      <p class="max-w-2xl text-muted-600 dark:text-muted-400">
        Utils:
        <code class="text-sm text-secondary">bg-*</code>,
        <code class="text-sm text-secondary">text-*</code>,
        <code class="text-sm text-secondary">border-*</code>.
      </p>
    </div>

    <div class="space-y-4">
      <h2 class="font-paper-heading text-2xl">Base aliases</h2>
      <p class="text-sm text-muted-600 dark:text-muted-400">
        Each color has a default step via
        <code class="text-sm">--paper-primary</code>,
        <code class="text-sm">--paper-secondary</code>, … on
        <code class="text-sm">:root</code> /
        <code class="text-sm">.dark</code>.
      </p>
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        <div v-for="color in aliases" :key="color.name" class="space-y-1">
          <div
            class="border-paper h-20 shadow-paper-sm"
            :style="{
              backgroundColor: colorVar(color.name),
              borderColor: colorVar(color.name),
            }"
          ></div>
          <p class="font-paper text-sm">{{ color.name }}</p>
          <p class="text-xs text-muted-600 dark:text-muted-400">{{ color.note }}</p>
        </div>
      </div>
    </div>

    <div class="space-y-8">
      <h2 class="font-paper-heading text-2xl">Scales (50–950)</h2>

      <div v-for="name in scales" :key="name" class="space-y-3">
        <h3
          class="font-paper-heading text-xl"
          :style="{ color: colorVar(name, name === 'success' || name === 'warning' ? 700 : 'alias') }"
        >
          {{ name }}
        </h3>
        <div class="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-12">
          <div v-for="step in steps" :key="step" class="space-y-1">
            <div
              class="border-paper h-12"
              :style="{
                backgroundColor: colorVar(name, step),
                borderColor: scaleBorder(name, step),
              }"
            ></div>
            <p class="text-xs">{{ step }}</p>
          </div>
          <div class="space-y-1">
            <div
              class="border-paper h-12"
              :style="{
                backgroundColor: colorVar(name),
                borderColor: colorVar(name),
              }"
            ></div>
            <p class="text-xs">alias</p>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <h2 class="font-paper-heading text-2xl">Surfaces</h2>
      <p class="text-sm text-muted-600 dark:text-muted-400">
        Neutral canvas hierarchy.
      </p>
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        <div v-for="surface in surfaces" :key="surface.name" class="space-y-1">
          <div
            class="border-paper border-primary h-16"
            :style="{ backgroundColor: `var(${surface.token})` }"
          ></div>
          <p class="text-sm">{{ surface.name }}</p>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <h2 class="font-paper-heading text-2xl">Soft fills</h2>
      <p class="text-sm text-muted-600 dark:text-muted-400">
        Used by filled buttons / alerts:
        <code class="text-sm">bg-*-soft</code> +
        <code class="text-sm">text-*-soft-fg</code> +
        <code class="text-sm">border-*-soft-border</code>.
      </p>
      <div class="font-paper space-y-3">
        <div
          v-for="name in softNames"
          :key="`soft-${name}`"
          class="border-paper p-4"
          :style="{
            backgroundColor: `var(--paper-${name}-soft)`,
            color: `var(--paper-${name}-soft-fg)`,
            borderColor: `var(--paper-${name}-soft-border-color)`,
          }"
        >
          bg-{{ name }}-soft / text-{{ name }}-soft-fg / border-{{ name }}-soft-border
        </div>
      </div>
    </div>
  </section>
</template>
