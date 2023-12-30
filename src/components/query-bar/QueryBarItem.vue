<template>
  <div class="flex items-center">
    <label v-if="!isNullOrWhitespace(label)" w-80 flex-shrink-0 :style="{ width: labelWidth + 'px' }">
      {{ label }}
    </label>
    <div :style="{ width: contentWidth + 'px' }" flex-shrink-0>
      <slot />
    </div>
  </div>
</template>

<script setup lang="tsx">
import { isNullOrWhitespace } from '@/utils/common';

defineProps({
  label: {
    type: String,
    default: ''
  },
  labelWidth: {
    type: Number,
    default: 80
  },
  contentWidth: {
    type: Number,
    default: 220
  }
});
</script>
