<template>
  <div class="wh-full overflow-y flex">
    <div class="w-220px mr-20px h-full">
      <n-card
        :title="t('message.common.UserCenter')"
        :bordered="false"
        size="small"
        class="shadow-sm rounded-16px h-full"
      >
        <Sider @handleUpdateMenu="handleUpdateMenu" />
      </n-card>
    </div>
    <div class="flex-1-hidden h-full">
      <n-card :bordered="false" size="small" class="shadow-sm rounded-16px h-full">
        <UserInfo v-if="activeKey === 'UserInfo'" />
        <AccountSecurity v-if="activeKey === 'AccountSecurity'" />
        <DownloadRecord v-if="activeKey === 'DownloadRecord'" />
      </n-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { t } from '@/locales';
import Sider from './components/Sider.vue';
import UserInfo from './components/UserInfo/index.vue';
import AccountSecurity from './components/AccountSecurity/index.vue';
import DownloadRecord from './components/DownloadRecord/index.vue';
const activeKey = ref('UserInfo');
// 切换子菜单
function handleUpdateMenu(key: string) {
  activeKey.value = key;
}
onMounted(() => {});
</script>

<style scoped></style>
