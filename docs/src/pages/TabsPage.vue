<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<div class="tabs-paper border-paper border-muted-border p-3">
  <input id="docs-tab1" type="radio" name="docs-tabs" checked />
  <label for="docs-tab1">Tab one</label>
  <input id="docs-tab2" type="radio" name="docs-tabs" />
  <label for="docs-tab2">Tab two</label>
  <input id="docs-tab3" type="radio" name="docs-tabs" />
  <label for="docs-tab3">Tab three</label>
  <div id="docs-content1" class="tabs-paper-content">First panel — evenly spaced (default).</div>
  <div id="docs-content2" class="tabs-paper-content">Second panel — evenly spaced (default).</div>
  <div id="docs-content3" class="tabs-paper-content">Third panel — evenly spaced (default).</div>
</div>`;

const start = `<div class="tabs-paper tabs-paper-start border-paper border-muted-border p-3">
  <input id="docs-start-tab1" type="radio" name="docs-tabs-start" checked />
  <label for="docs-start-tab1">Tab one</label>
  <input id="docs-start-tab2" type="radio" name="docs-tabs-start" />
  <label for="docs-start-tab2">Tab two</label>
  <input id="docs-start-tab3" type="radio" name="docs-tabs-start" />
  <label for="docs-start-tab3">Tab three</label>
  <div id="docs-start-content1" class="tabs-paper-content">First panel — start.</div>
  <div id="docs-start-content2" class="tabs-paper-content">Second panel — start.</div>
  <div id="docs-start-content3" class="tabs-paper-content">Third panel — start.</div>
</div>`;

const center = `<div class="tabs-paper tabs-paper-center border-paper border-muted-border p-3">
  <input id="docs-center-tab1" type="radio" name="docs-tabs-center" checked />
  <label for="docs-center-tab1">Tab one</label>
  <input id="docs-center-tab2" type="radio" name="docs-tabs-center" />
  <label for="docs-center-tab2">Tab two</label>
  <input id="docs-center-tab3" type="radio" name="docs-tabs-center" />
  <label for="docs-center-tab3">Tab three</label>
  <div id="docs-center-content1" class="tabs-paper-content">First panel — center.</div>
  <div id="docs-center-content2" class="tabs-paper-content">Second panel — center.</div>
  <div id="docs-center-content3" class="tabs-paper-content">Third panel — center.</div>
</div>`;

const end = `<div class="tabs-paper tabs-paper-end border-paper border-muted-border p-3">
  <input id="docs-end-tab1" type="radio" name="docs-tabs-end" checked />
  <label for="docs-end-tab1">Tab one</label>
  <input id="docs-end-tab2" type="radio" name="docs-tabs-end" />
  <label for="docs-end-tab2">Tab two</label>
  <input id="docs-end-tab3" type="radio" name="docs-tabs-end" />
  <label for="docs-end-tab3">Tab three</label>
  <div id="docs-end-content1" class="tabs-paper-content">First panel — end.</div>
  <div id="docs-end-content2" class="tabs-paper-content">Second panel — end.</div>
  <div id="docs-end-content3" class="tabs-paper-content">Third panel — end.</div>
</div>`;

const between = `<div class="tabs-paper tabs-paper-between border-paper border-muted-border p-3">
  <input id="docs-between-tab1" type="radio" name="docs-tabs-between" checked />
  <label for="docs-between-tab1">Tab one</label>
  <input id="docs-between-tab2" type="radio" name="docs-tabs-between" />
  <label for="docs-between-tab2">Tab two</label>
  <input id="docs-between-tab3" type="radio" name="docs-tabs-between" />
  <label for="docs-between-tab3">Tab three</label>
  <div id="docs-between-content1" class="tabs-paper-content">First panel — between.</div>
  <div id="docs-between-content2" class="tabs-paper-content">Second panel — between.</div>
  <div id="docs-between-content3" class="tabs-paper-content">Third panel — between.</div>
</div>`;

const around = `<div class="tabs-paper tabs-paper-around border-paper border-muted-border p-3">
  <input id="docs-around-tab1" type="radio" name="docs-tabs-around" checked />
  <label for="docs-around-tab1">Tab one</label>
  <input id="docs-around-tab2" type="radio" name="docs-tabs-around" />
  <label for="docs-around-tab2">Tab two</label>
  <input id="docs-around-tab3" type="radio" name="docs-tabs-around" />
  <label for="docs-around-tab3">Tab three</label>
  <div id="docs-around-content1" class="tabs-paper-content">First panel — around.</div>
  <div id="docs-around-content2" class="tabs-paper-content">Second panel — around.</div>
  <div id="docs-around-content3" class="tabs-paper-content">Third panel — around.</div>
</div>`;

const variables = [
  { name: "--paper-tabs-inactive-color", value: "var(--paper-primary-400)" },
  {
    name: "--paper-tabs-inactive-hover-color",
    value: "var(--paper-muted)",
  },
  { name: "--paper-tabs-active-color", value: "var(--paper-primary)" },
  {
    name: "--paper-tabs-underline-color",
    value: "var(--paper-secondary)",
  },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Tabs</h1>

    <DocsSection title="Usage" :code="usage" demo-class="space-y-3">
      <div class="tabs-paper border-paper border-muted-border p-3">
        <input id="docs-tab1" type="radio" name="docs-tabs" checked />
        <label for="docs-tab1">Tab one</label>
        <input id="docs-tab2" type="radio" name="docs-tabs" />
        <label for="docs-tab2">Tab two</label>
        <input id="docs-tab3" type="radio" name="docs-tabs" />
        <label for="docs-tab3">Tab three</label>
        <div id="docs-content1" class="tabs-paper-content">
          First panel — evenly spaced (default).
        </div>
        <div id="docs-content2" class="tabs-paper-content">
          Second panel — evenly spaced (default).
        </div>
        <div id="docs-content3" class="tabs-paper-content">
          Third panel — evenly spaced (default).
        </div>
      </div>
    </DocsSection>

    <DocsSection title="Start" :code="start" demo-class="space-y-3">
      <div class="tabs-paper tabs-paper-start border-paper border-muted-border p-3">
        <input id="docs-start-tab1" type="radio" name="docs-tabs-start" checked />
        <label for="docs-start-tab1">Tab one</label>
        <input id="docs-start-tab2" type="radio" name="docs-tabs-start" />
        <label for="docs-start-tab2">Tab two</label>
        <input id="docs-start-tab3" type="radio" name="docs-tabs-start" />
        <label for="docs-start-tab3">Tab three</label>
        <div id="docs-start-content1" class="tabs-paper-content">First panel — start.</div>
        <div id="docs-start-content2" class="tabs-paper-content">Second panel — start.</div>
        <div id="docs-start-content3" class="tabs-paper-content">Third panel — start.</div>
      </div>
    </DocsSection>

    <DocsSection title="Center" :code="center" demo-class="space-y-3">
      <div class="tabs-paper tabs-paper-center border-paper border-muted-border p-3">
        <input id="docs-center-tab1" type="radio" name="docs-tabs-center" checked />
        <label for="docs-center-tab1">Tab one</label>
        <input id="docs-center-tab2" type="radio" name="docs-tabs-center" />
        <label for="docs-center-tab2">Tab two</label>
        <input id="docs-center-tab3" type="radio" name="docs-tabs-center" />
        <label for="docs-center-tab3">Tab three</label>
        <div id="docs-center-content1" class="tabs-paper-content">First panel — center.</div>
        <div id="docs-center-content2" class="tabs-paper-content">Second panel — center.</div>
        <div id="docs-center-content3" class="tabs-paper-content">Third panel — center.</div>
      </div>
    </DocsSection>

    <DocsSection title="End" :code="end" demo-class="space-y-3">
      <div class="tabs-paper tabs-paper-end border-paper border-muted-border p-3">
        <input id="docs-end-tab1" type="radio" name="docs-tabs-end" checked />
        <label for="docs-end-tab1">Tab one</label>
        <input id="docs-end-tab2" type="radio" name="docs-tabs-end" />
        <label for="docs-end-tab2">Tab two</label>
        <input id="docs-end-tab3" type="radio" name="docs-tabs-end" />
        <label for="docs-end-tab3">Tab three</label>
        <div id="docs-end-content1" class="tabs-paper-content">First panel — end.</div>
        <div id="docs-end-content2" class="tabs-paper-content">Second panel — end.</div>
        <div id="docs-end-content3" class="tabs-paper-content">Third panel — end.</div>
      </div>
    </DocsSection>

    <DocsSection title="Between" :code="between" demo-class="space-y-3">
      <div class="tabs-paper tabs-paper-between border-paper border-muted-border p-3">
        <input id="docs-between-tab1" type="radio" name="docs-tabs-between" checked />
        <label for="docs-between-tab1">Tab one</label>
        <input id="docs-between-tab2" type="radio" name="docs-tabs-between" />
        <label for="docs-between-tab2">Tab two</label>
        <input id="docs-between-tab3" type="radio" name="docs-tabs-between" />
        <label for="docs-between-tab3">Tab three</label>
        <div id="docs-between-content1" class="tabs-paper-content">First panel — between.</div>
        <div id="docs-between-content2" class="tabs-paper-content">Second panel — between.</div>
        <div id="docs-between-content3" class="tabs-paper-content">Third panel — between.</div>
      </div>
    </DocsSection>

    <DocsSection title="Around" :code="around" demo-class="space-y-3">
      <div class="tabs-paper tabs-paper-around border-paper border-muted-border p-3">
        <input id="docs-around-tab1" type="radio" name="docs-tabs-around" checked />
        <label for="docs-around-tab1">Tab one</label>
        <input id="docs-around-tab2" type="radio" name="docs-tabs-around" />
        <label for="docs-around-tab2">Tab two</label>
        <input id="docs-around-tab3" type="radio" name="docs-tabs-around" />
        <label for="docs-around-tab3">Tab three</label>
        <div id="docs-around-content1" class="tabs-paper-content">First panel — around.</div>
        <div id="docs-around-content2" class="tabs-paper-content">Second panel — around.</div>
        <div id="docs-around-content3" class="tabs-paper-content">Third panel — around.</div>
      </div>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
