<script setup lang="ts">
defineProps<{
  variables: { name: string; value: string }[];
}>();
</script>

<template>
  <div class="space-y-4">
    <h2 class="font-paper-heading text-2xl">Variables</h2>
    <div v-if="variables.length" class="overflow-x-auto">
      <table class="table-paper w-full text-left text-sm">
        <thead>
          <tr>
            <th>Variable</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in variables" :key="item.name">
            <td><code>{{ item.name }}</code></td>
            <td><code>{{ item.value }}</code></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else class="text-muted-600 dark:text-muted-400">No dedicated component tokens.</p>
  </div>
</template>
