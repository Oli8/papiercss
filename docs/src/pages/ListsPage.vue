<script setup lang="ts">
import DocsSection from "../components/DocsSection.vue";
import DocsVariables from "../components/DocsVariables.vue";

const nested = `<ul class="list-paper">
  <li>First item</li>
  <li>
    Nested
    <ul>
      <li>Child A</li>
      <li>
        Child B
        <ul>
          <li>Grandchild</li>
          <li>
            Deeper
            <ul>
              <li>Level 4</li>
              <li>
                Deeper still
                <ul>
                  <li>Level 5</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Last item</li>
</ul>`;

const variables: { name: string; value: string }[] = [];
</script>

<template>
  <section class="space-y-12">
    <h1 class="font-paper-heading text-4xl">List</h1>

    <DocsSection
      title="Nested"
      :code="nested"
      demo-class="space-y-3 rounded-paper border-paper border-muted-border bg-surface p-6"
    >
      <ul class="list-paper">
        <li>First item</li>
        <li>
          Nested
          <ul>
            <li>Child A</li>
            <li>
              Child B
              <ul>
                <li>Grandchild</li>
                <li>
                  Deeper
                  <ul>
                    <li>Level 4</li>
                    <li>
                      Deeper still
                      <ul>
                        <li>Level 5</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Last item</li>
      </ul>
    </DocsSection>

    <DocsVariables :variables="variables" />
  </section>
</template>
