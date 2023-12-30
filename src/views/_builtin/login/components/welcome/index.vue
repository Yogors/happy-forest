<template>
  <div class="wh-full">
    <n-space :size="28" class="mb-40px tips flex align-center">
      <div>
        <p class="lh-28px">
          {{ t('message.welcome.tip') }}
        </p>
      </div>
    </n-space>
    <n-space justify="center">
      <img src="@/assets/images/robot.webp" alt="" class="w-180px rounded-8px" />
    </n-space>
  </div>
</template>
<script setup lang="ts">
import { t } from '@/locales';
</script>
<style scoped lang="scss">
.tips {
  p {
    font-weight: 400;
    color: var(--n-item-text-color);
    i {
      font-style: normal;
      color: #2783fc;
      &.hi {
        color: var(--n-item-text-color);
        font-size: 22px;
      }
    }
  }
}
</style>
