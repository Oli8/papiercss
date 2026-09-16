<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const usage = `<article class="article-paper border-paper border-muted-border">
  <h4 class="article-paper-title">Handwritten headlines</h4>
  <p class="article-paper-meta">
    By <a href="#">Author</a> · Aug 6, 2026
  </p>
  <p class="article-paper-lead">A short lead that sets the tone of the piece.</p>
  <p>
    Body copy uses the paper font and comfortable line-height. Mix with
    <a class="link-paper" href="#">links</a> as needed.
  </p>
</article>`;

const variables = [
  { name: "--paper-article-meta-color", value: "var(--paper-muted-600)" },
  { name: "--paper-article-padding", value: "1.5rem" },
];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">Article</h1>

    <DocsSection
      title="Usage"
      :code="usage"
      demo-class="space-y-3 rounded-paper border-paper border-muted-border bg-surface p-6"
    >
      <article class="article-paper border-paper border-muted-border">
        <h4 class="article-paper-title">Handwritten headlines</h4>
        <p class="article-paper-meta">
          By
          <a href="#" @click.prevent>Author</a>
          · Aug 6, 2026
        </p>
        <p class="article-paper-lead">A short lead that sets the tone of the piece.</p>
        <p>
          Body copy uses the paper font and comfortable line-height. Mix with
          <a class="link-paper" href="#" @click.prevent>links</a>
          as needed.
        </p>
      </article>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
