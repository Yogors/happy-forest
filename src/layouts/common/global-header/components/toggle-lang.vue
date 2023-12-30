<template>
  <hover-container class="w-40px h-full">
    <n-dropdown :options="options" trigger="hover" :value="language" @select="handleSelect">
      <icon-cil:language class="text-18px outline-transparent" />
    </n-dropdown>
  </hover-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { localStg } from '@/utils';

const { locale } = useI18n();

const language = ref<I18nType.langType>(localStg.get('lang') || 'en');
const options = [
  {
    label: 'English',
    key: 'en'
  },
  {
    label: '中文',
    key: 'zh-CN'
  }
];
const handleSelect = (key: string) => {
  language.value = key as I18nType.langType;
  locale.value = key;
  localStg.set('lang', key as I18nType.langType);
  // window.location.reload();
};
</script>
<style scoped></style>
