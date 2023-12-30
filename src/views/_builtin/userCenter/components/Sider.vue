<template>
  <n-scrollbar class="flex-1-hidden">
    <n-menu
      :value="activeKey"
      :collapsed-icon-size="18"
      :options="menus"
      :expanded-keys="expandedKeys"
      :indent="18"
      @update:value="handleUpdateMenu"
      @update:expanded-keys="handleUpdateExpandedKeys"
    />
  </n-scrollbar>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useIconRender } from '@/composables';
import { t } from '@/locales';
const { iconRender } = useIconRender();
defineOptions({ name: 'VerticalMenu' });
const emit = defineEmits(['handleUpdateMenu']);

const menus = computed(() => {
  return [
    {
      icon: iconRender({ icon: 'system-uicons:user-male' }),
      key: 'UserInfo',
      label: t('message.UserCenter.route.personalInformation')
    },
    {
      icon: iconRender({ icon: 'system-uicons:lock' }),
      key: 'AccountSecurity',
      label: t('message.UserCenter.route.accountSecurity')
    },
    {
      icon: iconRender({ icon: 'system-uicons:cloud-download-alt' }),
      key: 'DownloadRecord',
      label: t('message.UserCenter.route.downloadRecord')
    }
  ];
});
const activeKey = ref('UserInfo');
// const activeKey = computed(() => (route.meta?.activeMenu ? route.meta.activeMenu : route.name) as string);
const expandedKeys = ref<string[]>([]);

function handleUpdateMenu(_key: string) {
  activeKey.value = _key;
  emit('handleUpdateMenu', _key);
}

function handleUpdateExpandedKeys(keys: string[]) {
  expandedKeys.value = keys;
}
</script>

<style scoped></style>
