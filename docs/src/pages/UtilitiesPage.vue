<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";

const borders = `<div class="border-paper border-primary p-4">border-paper</div>
<div class="border-paper-2 border-secondary p-4">border-paper-2</div>
<div class="border-paper-3 border-success p-4">border-paper-3</div>
<div class="border-paper-4 border-warning p-4">border-paper-4</div>
<div class="border-paper-5 border-danger p-4">border-paper-5</div>
<div class="border-paper-6 border-muted p-4">border-paper-6</div>
<div class="border-paper border-paper-thick border-primary p-4">border-paper-thick</div>`;

const childBorders = `<div class="child-borders-paper grid grid-cols-2 gap-4 sm:grid-cols-3">
  <div class="border-primary p-4">1</div>
  <div class="border-secondary p-4">2</div>
  <div class="border-success p-4">3</div>
  <div class="border-warning p-4">4</div>
  <div class="border-danger p-4">5</div>
  <div class="border-muted p-4">6</div>
</div>`;

const rounded = `<div class="rounded-paper border-2 border-primary bg-surface-raised p-4">rounded-paper</div>
<div class="rounded-paper-2 border-2 border-secondary bg-surface-raised p-4">rounded-paper-2</div>
<div class="rounded-paper-3 border-2 border-success bg-surface-raised p-4">rounded-paper-3</div>
<div class="rounded-paper-4 border-2 border-warning bg-surface-raised p-4">rounded-paper-4</div>
<div class="rounded-paper-5 border-2 border-danger bg-surface-raised p-4">rounded-paper-5</div>
<div class="rounded-paper-6 border-2 border-muted bg-surface-raised p-4">rounded-paper-6</div>
<div class="rounded-paper-soft border-2 border-primary bg-surface-raised p-4">rounded-paper-soft</div>`;

const circles = `<div class="rounded-paper-circle size-14 border-2 border-primary bg-secondary-soft"></div>
<div class="rounded-paper-circle-1 size-14 border-2 border-primary bg-secondary-soft"></div>
<div class="rounded-paper-circle-2 size-14 border-2 border-secondary bg-secondary-soft"></div>
<div class="rounded-paper-circle-3 size-14 border-2 border-success bg-success-soft"></div>
<div class="rounded-paper-circle-4 size-14 border-2 border-warning bg-warning-soft"></div>
<div class="rounded-paper-circle-5 size-14 border-2 border-danger bg-danger-soft"></div>
<div class="rounded-paper-circle-6 size-14 border-2 border-muted bg-muted-soft"></div>`;

const shadows = `<div class="border-paper border-primary bg-surface p-4 shadow-paper-sm">shadow-paper-sm</div>
<div class="border-paper border-primary bg-surface p-4 shadow-paper">shadow-paper</div>
<div class="border-paper border-primary bg-surface p-4 shadow-paper-lg">shadow-paper-lg</div>
<div class="border-paper border-primary bg-surface p-4 shadow-paper hover:shadow-paper-lift">
  hover → shadow-paper-lift
</div>`;

const childShadows = `<div class="child-shadows-paper-hover grid gap-4 sm:grid-cols-3">
  <div class="border-paper border-primary bg-surface p-4">Hover me</div>
  <div class="border-paper border-secondary bg-surface p-4">Hover me</div>
  <div class="border-paper border-success bg-surface p-4">Hover me</div>
</div>`;

const fonts = `<p class="font-paper text-xl">font-paper (Neucha)</p>
<p class="font-paper-heading text-3xl">font-paper-heading</p>
<p class="text-paper-base">text-paper-base</p>`;

const links = `<a class="link-paper" href="#">link-paper</a>
<a class="link-paper-plain" href="#">link-paper-plain</a>`;

const disabled = `<button type="button" class="btn-paper disabled-paper" disabled>disabled-paper</button>
<input class="input-paper disabled-paper" disabled value="Disabled field" />`;

const field = `<input class="field-paper" placeholder="field-paper" />
<textarea class="field-paper" rows="2" placeholder="Also works on textarea"></textarea>`;
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Utilities</h1>

    <DocsSection
      title="Borders"
      :code="borders"
      demo-class="grid grid-cols-2 gap-4 sm:grid-cols-3"
    >
      <div class="border-paper border-primary bg-surface-raised p-4">border-paper</div>
      <div class="border-paper-2 border-secondary bg-surface-raised p-4">border-paper-2</div>
      <div class="border-paper-3 border-success bg-surface-raised p-4">border-paper-3</div>
      <div class="border-paper-4 border-warning bg-surface-raised p-4">border-paper-4</div>
      <div class="border-paper-5 border-danger bg-surface-raised p-4">border-paper-5</div>
      <div class="border-paper-6 border-muted bg-surface-raised p-4">border-paper-6</div>
      <div class="border-paper border-paper-thick border-primary bg-surface-raised p-4 sm:col-span-3">
        border-paper-thick
      </div>
    </DocsSection>

    <DocsSection
      title="Child borders"
      :code="childBorders"
      demo-class="space-y-3"
    >
      <div class="child-borders-paper grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div class="border-primary bg-surface-raised p-4">1</div>
        <div class="border-secondary bg-surface-raised p-4">2</div>
        <div class="border-success bg-surface-raised p-4">3</div>
        <div class="border-warning bg-surface-raised p-4">4</div>
        <div class="border-danger bg-surface-raised p-4">5</div>
        <div class="border-muted bg-surface-raised p-4">6</div>
      </div>
    </DocsSection>

    <DocsSection
      title="Rounded"
      :code="rounded"
      demo-class="grid grid-cols-2 gap-4 sm:grid-cols-3"
    >
      <div class="rounded-paper border-2 border-primary bg-surface-raised p-4">rounded-paper</div>
      <div class="rounded-paper-2 border-2 border-secondary bg-surface-raised p-4">
        rounded-paper-2
      </div>
      <div class="rounded-paper-3 border-2 border-success bg-surface-raised p-4">
        rounded-paper-3
      </div>
      <div class="rounded-paper-4 border-2 border-warning bg-surface-raised p-4">
        rounded-paper-4
      </div>
      <div class="rounded-paper-5 border-2 border-danger bg-surface-raised p-4">
        rounded-paper-5
      </div>
      <div class="rounded-paper-6 border-2 border-muted bg-surface-raised p-4">
        rounded-paper-6
      </div>
      <div class="rounded-paper-soft border-2 border-primary bg-surface-raised p-4 sm:col-span-3">
        rounded-paper-soft
      </div>
    </DocsSection>

    <DocsSection
      title="Circles"
      :code="circles"
      demo-class="flex flex-wrap items-center gap-4"
    >
      <div class="rounded-paper-circle size-14 border-2 border-primary bg-secondary-soft"></div>
      <div class="rounded-paper-circle-1 size-14 border-2 border-primary bg-secondary-soft"></div>
      <div class="rounded-paper-circle-2 size-14 border-2 border-secondary bg-secondary-soft"></div>
      <div class="rounded-paper-circle-3 size-14 border-2 border-success bg-success-soft"></div>
      <div class="rounded-paper-circle-4 size-14 border-2 border-warning bg-warning-soft"></div>
      <div class="rounded-paper-circle-5 size-14 border-2 border-danger bg-danger-soft"></div>
      <div class="rounded-paper-circle-6 size-14 border-2 border-muted bg-muted-soft"></div>
    </DocsSection>

    <DocsSection
      title="Shadows"
      :code="shadows"
      demo-class="grid gap-6 sm:grid-cols-2"
    >
      <div class="border-paper border-primary bg-surface p-4 shadow-paper-sm">shadow-paper-sm</div>
      <div class="border-paper border-primary bg-surface p-4 shadow-paper">shadow-paper</div>
      <div class="border-paper border-primary bg-surface p-4 shadow-paper-lg">shadow-paper-lg</div>
      <div
        class="border-paper border-primary bg-surface p-4 shadow-paper hover:shadow-paper-lift"
      >
        hover → shadow-paper-lift
      </div>
    </DocsSection>

    <DocsSection
      title="Child shadows"
      :code="childShadows"
      demo-class="space-y-3"
    >
      <div class="child-shadows-paper-hover grid gap-4 sm:grid-cols-3">
        <div class="border-paper border-primary bg-surface p-4">Hover me</div>
        <div class="border-paper border-secondary bg-surface p-4">Hover me</div>
        <div class="border-paper border-success bg-surface p-4">Hover me</div>
      </div>
    </DocsSection>

    <DocsSection title="Typography" :code="fonts" demo-class="space-y-3">
      <p class="font-paper text-xl">font-paper (Neucha)</p>
      <p class="font-paper-heading text-3xl">font-paper-heading</p>
      <p class="text-paper-base">text-paper-base</p>
    </DocsSection>

    <DocsSection title="Links" :code="links" demo-class="flex flex-wrap gap-6">
      <a class="link-paper" href="#" @click.prevent>link-paper</a>
      <a class="link-paper-plain" href="#" @click.prevent>link-paper-plain</a>
    </DocsSection>

    <DocsSection
      title="Disabled"
      :code="disabled"
      demo-class="flex max-w-md flex-col gap-4"
    >
      <button type="button" class="btn-paper disabled-paper" disabled>disabled-paper</button>
      <input class="input-paper disabled-paper" disabled value="Disabled field" />
    </DocsSection>
  </section>
</template>
