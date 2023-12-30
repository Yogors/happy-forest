<template>
  <div bg="#fafafc" class="flex items-start justify-between p-15px bc-ccc dark:bg-black">
    <n-space class="wrap" :size="[35, 15]">
      <slot />
    </n-space>

    <div class="flex-shrink-0">
      <n-button class="w-60px" type="primary" @click="emit('search')">搜索</n-button>
      <n-button class="secondary w-60px ml-16px" @click="emit('reset')">重置</n-button>
    </div>
  </div>
</template>

<script setup lang="tsx">
const emit = defineEmits(['search', 'reset']);
</script>
