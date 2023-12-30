<template>
  <!-- <icon-local-logo-fill v-if="fill" />
  <icon-local-logo v-else /> -->
  <svg-icon icon="ri:file-ppt-2-fill" class="text-40px p-5px" />
</template>
<script lang="ts" setup>
defineOptions({ name: 'SystemLogo' });

interface Props {
  /** logo是否填充 */
  fill?: boolean;
}

withDefaults(defineProps<Props>(), {
  fill: false
});
</script>

<style scoped></style>
