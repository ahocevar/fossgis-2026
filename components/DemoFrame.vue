<script setup lang="ts">
defineProps<{
  src: string;
  title?: string;
}>();
</script>

<template>
  <iframe
    :src="src"
    :title="title || 'Demo'"
    class="w-full rounded-lg border border-gray-700"
    style="height: calc(100% - 2rem)"
    loading="lazy"
    allow="geolocation"
  />
</template>
