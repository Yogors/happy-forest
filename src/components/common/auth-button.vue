<template>
  <div>
    <NButton v-if="hasProxy" :size="props.size" :type="props.type" :loading="props.loading" @click="handleClick">
      <slot></slot>
    </NButton>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { localStg } from '@/utils';
defineOptions({ name: 'AuthButton' });
const hasProxy = ref<boolean>(false);
const emit = defineEmits(['click']);
interface Props {
  size?: 'small' | 'medium' | 'large';
  type?: 'default' | 'tertiary' | 'primary' | 'success' | 'info' | 'warning' | 'error';
  permissionKey?: string;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'small',
  type: 'default',
  permissionKey: '',
  loading: false
});
// 点击方法
function handleClick() {
  emit('click');
}
onMounted(() => {
  const buttonPermissions = localStg.get('buttonPermissions');

  hasProxy.value =
    buttonPermissions.findIndex((item: any) => {
      return item.permissions === props.permissionKey;
    }) !== -1;
});
</script>

<style scoped></style>
