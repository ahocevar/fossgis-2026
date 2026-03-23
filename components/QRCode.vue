<script setup lang="ts">
import { renderSVG } from 'uqr'
import { computed } from 'vue'

const props = defineProps<{ value: string }>()

const svg = computed(() => renderSVG(props.value))
</script>

<template>
  <div v-html="svg" />
</template>
