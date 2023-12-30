<template>
  <hover-container class="w-40px" :inverted="theme.header.inverted" :tooltip-content="t('message.common.themeMode')">
    <dark-mode-switch :dark="theme.darkMode" class="wh-full" @update:dark="theme.setDarkMode" />
  </hover-container>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store';
import { t } from '@/locales';
defineOptions({ name: 'ThemeMode' });

const theme = useThemeStore();
</script>

<style scoped></style>
