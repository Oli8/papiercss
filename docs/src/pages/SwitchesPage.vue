<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const switches = `<div class="flex items-center">
  <label class="paper-switch">
    <input id="docs-switch1" type="checkbox" />
    <span class="paper-switch-slider"></span>
  </label>
  <label for="docs-switch1" class="paper-switch-label">Off / on</label>
</div>
<div class="flex items-center">
  <label class="paper-switch">
    <input id="docs-switch2" type="checkbox" checked />
    <span class="paper-switch-slider round"></span>
  </label>
  <label for="docs-switch2" class="paper-switch-label">Round (on)</label>
</div>`;

const compact = `<div class="flex items-center">
  <label class="paper-switch-2">
    <input id="docs-switch3" type="checkbox" />
    <span class="paper-switch-slider"></span>
  </label>
  <label for="docs-switch3" class="paper-switch-2-label">Compact</label>
</div>
<div class="flex items-center">
  <label class="paper-switch-2">
    <input id="docs-switch4" type="checkbox" checked />
    <span class="paper-switch-slider round"></span>
  </label>
  <label for="docs-switch4" class="paper-switch-2-label">Compact round</label>
</div>`;

const tiles = `<label class="paper-switch-tile">
  <input id="docs-tile1" type="checkbox" />
  <div class="paper-switch-tile-card">
    <div class="paper-switch-tile-card-front bg-surface text-primary">
      Front
    </div>
    <div class="paper-switch-tile-card-back bg-tag-primary-bg text-tag-text border-tag-primary-bg">
      Back
    </div>
  </div>
</label>
<label class="paper-switch-tile">
  <input id="docs-tile2" type="checkbox" />
  <div class="paper-switch-tile-card">
    <div class="paper-switch-tile-card-front bg-warning-soft text-warning-soft-fg border-warning">
      Off
    </div>
    <div class="paper-switch-tile-card-back bg-secondary text-tag-text border-secondary">
      On
    </div>
  </div>
</label>
<label class="paper-switch-tile">
  <input id="docs-tile3" type="checkbox" checked />
  <div class="paper-switch-tile-card">
    <div class="paper-switch-tile-card-front bg-danger-soft text-danger-soft-fg border-danger">
      Declined
    </div>
    <div class="paper-switch-tile-card-back bg-success-soft text-success-soft-fg border-success">
      Accepted
    </div>
  </div>
</label>`;

const disabled = `<div class="flex items-center">
  <label class="paper-switch">
    <input id="docs-switch-disabled" type="checkbox" disabled />
    <span class="paper-switch-slider"></span>
  </label>
  <label for="docs-switch-disabled" class="paper-switch-label">Disabled</label>
</div>
<div class="flex items-center">
  <label class="paper-switch-2">
    <input id="docs-switch-disabled-2" type="checkbox" checked disabled />
    <span class="paper-switch-slider round"></span>
  </label>
  <label for="docs-switch-disabled-2" class="paper-switch-2-label">Disabled on</label>
</div>
<label class="paper-switch-tile">
  <input id="docs-tile-disabled" type="checkbox" disabled />
  <div class="paper-switch-tile-card">
    <div class="paper-switch-tile-card-front bg-surface text-primary">
      Off
    </div>
    <div class="paper-switch-tile-card-back bg-tag-primary-bg text-tag-text border-tag-primary-bg">
      On
    </div>
  </div>
</label>`;

const variables = [
  { name: "--paper-switch-border-color", value: "var(--paper-primary)" },
  { name: "--paper-switch-knob-color", value: "var(--paper-secondary)" },
  { name: "--paper-switch-checked-bg", value: "var(--paper-success-soft)" },
  { name: "--paper-switch-focus-color", value: "var(--paper-secondary)" },
  { name: "--paper-switch-tile-border-color", value: "var(--paper-primary)" },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Switch</h1>

    <DocsSection
      title="Usage"
      :code="switches"
      demo-class="flex flex-wrap items-center gap-y-4 gap-x-6 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <div class="flex items-center">
        <label class="paper-switch">
          <input id="docs-switch1" type="checkbox" />
          <span class="paper-switch-slider"></span>
        </label>
        <label for="docs-switch1" class="paper-switch-label">Off / on</label>
      </div>
      <div class="flex items-center">
        <label class="paper-switch">
          <input id="docs-switch2" type="checkbox" checked />
          <span class="paper-switch-slider round"></span>
        </label>
        <label for="docs-switch2" class="paper-switch-label">Round (on)</label>
      </div>
    </DocsSection>

    <DocsSection
      title="Compact"
      :code="compact"
      demo-class="flex flex-wrap items-center gap-y-4 gap-x-6 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <div class="flex items-center">
        <label class="paper-switch-2">
          <input id="docs-switch3" type="checkbox" />
          <span class="paper-switch-slider"></span>
        </label>
        <label for="docs-switch3" class="paper-switch-2-label">Compact</label>
      </div>
      <div class="flex items-center">
        <label class="paper-switch-2">
          <input id="docs-switch4" type="checkbox" checked />
          <span class="paper-switch-slider round"></span>
        </label>
        <label for="docs-switch4" class="paper-switch-2-label">Compact round</label>
      </div>
    </DocsSection>

    <DocsSection
      title="Tiles"
      :code="tiles"
      demo-class="flex flex-wrap gap-6 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <label class="paper-switch-tile">
        <input id="docs-tile1" type="checkbox" />
        <div class="paper-switch-tile-card">
          <div class="paper-switch-tile-card-front bg-surface text-primary">Front</div>
          <div
            class="paper-switch-tile-card-back bg-tag-primary-bg text-tag-text border-tag-primary-bg"
          >
            Back
          </div>
        </div>
      </label>
      <label class="paper-switch-tile">
        <input id="docs-tile2" type="checkbox" />
        <div class="paper-switch-tile-card">
          <div
            class="paper-switch-tile-card-front bg-warning-soft text-warning-soft-fg border-warning"
          >
            Off
          </div>
          <div class="paper-switch-tile-card-back bg-secondary text-tag-text border-secondary">
            On
          </div>
        </div>
      </label>
      <label class="paper-switch-tile">
        <input id="docs-tile3" type="checkbox" checked />
        <div class="paper-switch-tile-card">
          <div
            class="paper-switch-tile-card-front bg-danger-soft text-danger-soft-fg border-danger"
          >
            Declined
          </div>
          <div
            class="paper-switch-tile-card-back bg-success-soft text-success-soft-fg border-success"
          >
            Accepted
          </div>
        </div>
      </label>
    </DocsSection>

    <DocsSection
      title="Disabled"
      :code="disabled"
      demo-class="flex flex-wrap items-center gap-y-4 gap-x-6 rounded-paper border-paper border-muted-border bg-surface-raised p-6"
    >
      <div class="flex items-center">
        <label class="paper-switch">
          <input id="docs-switch-disabled" type="checkbox" disabled />
          <span class="paper-switch-slider"></span>
        </label>
        <label for="docs-switch-disabled" class="paper-switch-label">Disabled</label>
      </div>
      <div class="flex items-center">
        <label class="paper-switch-2">
          <input id="docs-switch-disabled-2" type="checkbox" checked disabled />
          <span class="paper-switch-slider round"></span>
        </label>
        <label for="docs-switch-disabled-2" class="paper-switch-2-label">Disabled on</label>
      </div>
      <label class="paper-switch-tile">
        <input id="docs-tile-disabled" type="checkbox" disabled />
        <div class="paper-switch-tile-card">
          <div class="paper-switch-tile-card-front bg-surface text-primary">Off</div>
          <div
            class="paper-switch-tile-card-back bg-tag-primary-bg text-tag-text border-tag-primary-bg"
          >
            On
          </div>
        </div>
      </label>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
