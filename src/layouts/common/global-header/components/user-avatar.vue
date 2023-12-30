<template>
  <n-dropdown :options="options" @select="handleDropdown">
    <hover-container class="px-12px" :inverted="theme.header.inverted">
      <icon-local-avatar class="text-32px" />
      <span class="pl-8px text-16px font-medium">{{ auth.userInfo.username }}</span>
    </hover-container>
  </n-dropdown>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore, useThemeStore } from '@/store';
import { useIconRender } from '@/composables';
import { t } from '@/locales';
defineOptions({ name: 'UserAvatar' });
const router = useRouter();
const auth = useAuthStore();
const theme = useThemeStore();
const { iconRender } = useIconRender();

const options = computed(() => {
  return [
    {
      label: t('message.common.UserCenter'),
      key: 'user-center',
      icon: iconRender({ icon: 'carbon:user-avatar' })
    },
    {
      type: 'divider',
      key: 'divider'
    },
    {
      label: t('message.common.logout'),
      key: 'logout',
      icon: iconRender({ icon: 'carbon:logout' })
    }
  ];
});

type DropdownKey = 'user-center' | 'logout';

function handleDropdown(optionKey: string) {
  const key = optionKey as DropdownKey;
  if (key === 'logout') {
    window.$dialog?.info({
      title: t('message.common.tip'),
      content: t('message.common.tips.quitTips'),
      positiveText: t('message.common.confirm'),
      negativeText: t('message.common.cancel'),
      onPositiveClick: () => {
        auth.resetAuthStore();
      }
    });
  } else if (key === 'user-center') {
    router.push('/userCenter');
  }
}
</script>

<style scoped></style>
