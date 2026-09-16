<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<div class="progress-paper">
  <div class="progress-paper-bar w-1/2">50%</div>
</div>
<div class="progress-paper">
  <div class="progress-paper-bar progress-paper-striped w-2/3">66%</div>
</div>`;

const colors = `<div class="progress-paper">
  <div class="progress-paper-bar progress-paper-bar-secondary w-[80%]">80%</div>
</div>
<div class="progress-paper">
  <div class="progress-paper-bar progress-paper-striped-secondary w-[75%]">75%</div>
</div>
<div class="progress-paper">
  <div class="progress-paper-bar progress-paper-bar-success w-[70%]">70%</div>
</div>
<div class="progress-paper">
  <div class="progress-paper-bar progress-paper-striped-success w-[65%]">65%</div>
</div>
<div class="progress-paper">
  <div class="progress-paper-bar progress-paper-bar-warning w-[60%]">60%</div>
</div>
<div class="progress-paper">
  <div class="progress-paper-bar progress-paper-striped-warning w-[50%]">50%</div>
</div>
<div class="progress-paper">
  <div class="progress-paper-bar progress-paper-bar-danger w-[50%]">50%</div>
</div>
<div class="progress-paper">
  <div class="progress-paper-bar progress-paper-striped-danger w-[50%]">50%</div>
</div>
<div class="progress-paper">
  <div class="progress-paper-bar progress-paper-bar-muted w-[40%]">40%</div>
</div>
<div class="progress-paper">
  <div class="progress-paper-bar progress-paper-striped-muted w-[40%]">40%</div>
</div>`;

const variables = [
  { name: "--paper-progress-track-border-color", value: "var(--paper-primary)" },
  { name: "--paper-progress-bar-stripe-size", value: "0.25rem" },
  { name: "--paper-progress-primary-bg", value: "var(--paper-primary-soft)" },
  { name: "--paper-progress-secondary-bg", value: "var(--paper-secondary-soft)" },
  { name: "--paper-progress-success-bg", value: "var(--paper-success-soft)" },
  { name: "--paper-progress-warning-bg", value: "var(--paper-warning-soft)" },
  { name: "--paper-progress-danger-bg", value: "var(--paper-danger-soft)" },
  { name: "--paper-progress-muted-bg", value: "var(--paper-muted-soft)" },
  { name: "--paper-progress-primary-fg", value: "var(--paper-primary-soft-fg)" },
  {
    name: "--paper-progress-secondary-fg",
    value: "var(--paper-secondary-soft-fg)",
  },
  { name: "--paper-progress-success-fg", value: "var(--paper-success-soft-fg)" },
  { name: "--paper-progress-warning-fg", value: "var(--paper-warning-soft-fg)" },
  { name: "--paper-progress-danger-fg", value: "var(--paper-danger-soft-fg)" },
  { name: "--paper-progress-muted-fg", value: "var(--paper-muted-soft-fg)" },
  { name: "--paper-progress-primary-stripe-color", value: "var(--paper-primary-300)" },
  {
    name: "--paper-progress-secondary-stripe-color",
    value: "var(--paper-secondary-300)",
  },
  { name: "--paper-progress-success-stripe-color", value: "var(--paper-success-300)" },
  { name: "--paper-progress-warning-stripe-color", value: "var(--paper-warning-300)" },
  { name: "--paper-progress-danger-stripe-color", value: "var(--paper-danger-300)" },
  { name: "--paper-progress-muted-stripe-color", value: "var(--paper-muted-300)" },
  { name: "--paper-progress-bar-bg", value: "var(--paper-progress-primary-bg)" },
  {
    name: "--paper-progress-bar-border-color",
    value: "var(--paper-primary-soft-border-color)",
  },
  { name: "--paper-progress-bar-fg", value: "var(--paper-progress-primary-fg)" },
  {
    name: "--paper-progress-bar-stripe-color",
    value: "var(--paper-progress-primary-stripe-color)",
  },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Progress</h1>

    <DocsSection title="Usage" :code="usage" demo-class="space-y-3">
      <div class="progress-paper">
        <div class="progress-paper-bar w-1/2">50%</div>
      </div>
      <div class="progress-paper">
        <div class="progress-paper-bar progress-paper-striped w-2/3">66%</div>
      </div>
    </DocsSection>

    <DocsSection title="Colors" :code="colors" demo-class="space-y-3">
      <div class="progress-paper">
        <div class="progress-paper-bar progress-paper-bar-secondary w-[80%]">80%</div>
      </div>
      <div class="progress-paper">
        <div class="progress-paper-bar progress-paper-striped-secondary w-[75%]">75%</div>
      </div>
      <div class="progress-paper">
        <div class="progress-paper-bar progress-paper-bar-success w-[70%]">70%</div>
      </div>
      <div class="progress-paper">
        <div class="progress-paper-bar progress-paper-striped-success w-[65%]">65%</div>
      </div>
      <div class="progress-paper">
        <div class="progress-paper-bar progress-paper-bar-warning w-[60%]">60%</div>
      </div>
      <div class="progress-paper">
        <div class="progress-paper-bar progress-paper-striped-warning w-[50%]">50%</div>
      </div>
      <div class="progress-paper">
        <div class="progress-paper-bar progress-paper-bar-danger w-[50%]">50%</div>
      </div>
      <div class="progress-paper">
        <div class="progress-paper-bar progress-paper-striped-danger w-[50%]">50%</div>
      </div>
      <div class="progress-paper">
        <div class="progress-paper-bar progress-paper-bar-muted w-[40%]">40%</div>
      </div>
      <div class="progress-paper">
        <div class="progress-paper-bar progress-paper-striped-muted w-[40%]">40%</div>
      </div>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
