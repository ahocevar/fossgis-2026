<script setup lang="ts">
defineProps<{
  name: string
  login: string
  avatar?: string
  description?: string
  current: number
  past: number
  goal?: number
  tiers: { amount: number; label: string }[]
}>()
</script>

<template>
  <div class="border border-gray-600 rounded-xl p-5 bg-gray-800/50 max-w-sm">
    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <img
        v-if="avatar"
        :src="avatar"
        :alt="name"
        class="w-12 h-12 rounded-full"
      />
      <div
        v-else
        class="w-12 h-12 rounded-lg bg-gray-600 flex items-center justify-center text-xl"
      >
        {{ name.charAt(0) }}
      </div>
      <div>
        <div class="font-semibold text-white">{{ name }}</div>
        <div class="text-xs text-gray-400">@{{ login }}</div>
      </div>
    </div>

    <!-- Description -->
    <p v-if="description" class="text-xs text-gray-400 mb-4 leading-relaxed">
      {{ description }}
    </p>

    <!-- Sponsors count -->
    <div class="flex gap-6 mb-4 text-sm">
      <div>
        <span class="text-white font-bold text-lg">{{ current }}</span>
        <span class="text-gray-400 ml-1">Sponsoren</span>
      </div>
      <div class="text-gray-500">
        {{ past }} ehemalige
      </div>
    </div>

    <!-- Goal progress bar -->
    <div v-if="goal" class="mb-4">
      <div class="flex justify-between text-xs text-gray-400 mb-1">
        <span>{{ Math.round(current / goal * 100) }}% des Ziels</span>
        <span>{{ goal }} monatliche Sponsoren</span>
      </div>
      <div class="w-full bg-gray-700 rounded-full h-2">
        <div
          class="bg-pink-500 h-2 rounded-full transition-all"
          :style="{ width: Math.min(100, current / goal * 100) + '%' }"
        />
      </div>
    </div>

    <!-- Tiers -->
    <div class="space-y-2">
      <div
        v-for="tier in tiers"
        :key="tier.amount"
        class="flex items-center gap-2 text-xs"
      >
        <span class="text-white font-mono font-semibold">${{ tier.amount }}</span>
        <span class="text-gray-500">/Monat</span>
        <span class="text-gray-400 ml-auto">{{ tier.label }}</span>
      </div>
    </div>

    <!-- Link -->
    <a
      :href="`https://github.com/sponsors/${login}`"
      target="_blank"
      class="block mt-4 text-center text-xs text-pink-400 hover:text-pink-300 no-underline"
    >
      github.com/sponsors/{{ login }}
    </a>
  </div>
</template>
