<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

function syncSlider(event: Event) {
  const el = event.target as HTMLInputElement;
  const min = Number(el.min || 0);
  const max = Number(el.max || 100);
  const value = ((Number(el.value) - min) / (max - min)) * 100;
  el.style.setProperty("--value", `${value}%`);
}

const usage = `<input
  class="slider-paper"
  type="range"
  min="0"
  max="100"
  value="42"
  style="--value:42%"
  oninput="this.style.setProperty('--value', (this.value - this.min) / (this.max - this.min) * 100 + '%')"
/>`;

const colors = `<input class="slider-paper slider-paper-primary" type="range" min="0" max="100" value="60" style="--value:60%" />
<input class="slider-paper slider-paper-secondary" type="range" min="0" max="100" value="70" style="--value:70%" />
<input class="slider-paper slider-paper-success" type="range" min="0" max="100" value="55" style="--value:55%" />
<input class="slider-paper slider-paper-warning" type="range" min="0" max="100" value="40" style="--value:40%" />
<input class="slider-paper slider-paper-danger" type="range" min="0" max="100" value="35" style="--value:35%" />
<input class="slider-paper slider-paper-muted" type="range" min="0" max="100" value="50" style="--value:50%" />`;

const disabled = `<input
  class="slider-paper"
  type="range"
  min="0"
  max="100"
  value="42"
  style="--value:42%"
  disabled
/>`;

const variables = [
  { name: "--paper-slider-track-height", value: "0.625rem" },
  { name: "--paper-slider-track-radius", value: "18px" },
  { name: "--paper-slider-track-color", value: "var(--paper-muted-200)" },
  { name: "--paper-slider-thumb-color", value: "var(--paper-surface-raised)" },
  { name: "--paper-slider-thumb-size", value: "1rem" },
  {
    name: "--paper-slider-thumb-radius",
    value: "42% 58% 54% 46% / 47% 53% 44% 56%",
  },
  { name: "--paper-slider-primary-fill", value: "var(--paper-primary)" },
  { name: "--paper-slider-secondary-fill", value: "var(--paper-secondary)" },
  { name: "--paper-slider-success-fill", value: "var(--paper-success)" },
  { name: "--paper-slider-warning-fill", value: "var(--paper-warning)" },
  { name: "--paper-slider-danger-fill", value: "var(--paper-danger)" },
  { name: "--paper-slider-muted-fill", value: "var(--paper-muted)" },
  { name: "--paper-slider-primary-border-color", value: "var(--paper-primary)" },
  { name: "--paper-slider-secondary-border-color", value: "var(--paper-secondary)" },
  { name: "--paper-slider-success-border-color", value: "var(--paper-success)" },
  { name: "--paper-slider-warning-border-color", value: "var(--paper-warning)" },
  { name: "--paper-slider-danger-border-color", value: "var(--paper-danger)" },
  { name: "--paper-slider-muted-border-color", value: "var(--paper-muted)" },
  { name: "--paper-slider-fill", value: "var(--paper-slider-secondary-fill)" },
  {
    name: "--paper-slider-border-color",
    value: "var(--paper-slider-primary-border-color)",
  },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Slider</h1>

    <DocsSection
      title="Usage"
      :code="usage"
      demo-class="max-w-md space-y-3 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <input
        class="slider-paper"
        type="range"
        min="0"
        max="100"
        value="42"
        style="--value: 42%"
        @input="syncSlider"
      />
    </DocsSection>

    <DocsSection
      title="Colors"
      :code="colors"
      demo-class="max-w-md space-y-3 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <input
        class="slider-paper slider-paper-primary"
        type="range"
        min="0"
        max="100"
        value="60"
        style="--value: 60%"
        @input="syncSlider"
      />
      <input
        class="slider-paper slider-paper-secondary"
        type="range"
        min="0"
        max="100"
        value="70"
        style="--value: 70%"
        @input="syncSlider"
      />
      <input
        class="slider-paper slider-paper-success"
        type="range"
        min="0"
        max="100"
        value="55"
        style="--value: 55%"
        @input="syncSlider"
      />
      <input
        class="slider-paper slider-paper-warning"
        type="range"
        min="0"
        max="100"
        value="40"
        style="--value: 40%"
        @input="syncSlider"
      />
      <input
        class="slider-paper slider-paper-danger"
        type="range"
        min="0"
        max="100"
        value="35"
        style="--value: 35%"
        @input="syncSlider"
      />
      <input
        class="slider-paper slider-paper-muted"
        type="range"
        min="0"
        max="100"
        value="50"
        style="--value: 50%"
        @input="syncSlider"
      />
    </DocsSection>

    <DocsSection
      title="Disabled"
      :code="disabled"
      demo-class="max-w-md space-y-3 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <input
        class="slider-paper"
        type="range"
        min="0"
        max="100"
        value="42"
        style="--value: 42%"
        disabled
      />
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
