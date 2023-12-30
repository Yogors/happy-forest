<template>
  <n-divider title-placement="center">{{ t('message.themeConfig.InterfaceDisplay.title') }}</n-divider>
  <n-space vertical size="large">
    <setting-menu :label="t('message.themeConfig.InterfaceDisplay.breadCrumbs')">
      <n-switch :value="theme.header.crumb.visible" @update:value="theme.setHeaderCrumbVisible" />
    </setting-menu>
    <setting-menu :label="t('message.themeConfig.InterfaceDisplay.breadCrumbsIcons')">
      <n-switch :value="theme.header.crumb.showIcon" @update:value="theme.setHeaderCrumbIconVisible" />
    </setting-menu>
    <setting-menu :label="t('message.themeConfig.InterfaceDisplay.multipleTabs')">
      <n-switch :value="theme.tab.visible" @update:value="theme.setTabVisible" />
    </setting-menu>
    <setting-menu :label="t('message.themeConfig.InterfaceDisplay.multipleTabsStyle')">
      <n-select
        class="w-120px"
        size="small"
        :value="theme.tab.mode"
        :options="theme.tab.modeList"
        :label-field="localStg.get('lang') === 'en' ? 'labelEn' : 'label'"
        @update:value="theme.setTabMode"
      />
    </setting-menu>
    <setting-menu :label="t('message.themeConfig.InterfaceDisplay.pageSwitchAnimate')">
      <n-switch :value="theme.page.animate" @update:value="theme.setPageIsAnimate" />
    </setting-menu>
    <setting-menu :label="t('message.themeConfig.InterfaceDisplay.pageSwitchAnimateType')">
      <n-select
        class="w-120px"
        size="small"
        :value="theme.page.animateMode"
        :options="theme.page.animateModeList"
        :label-field="localStg.get('lang') === 'en' ? 'labelEn' : 'label'"
        @update:value="theme.setPageAnimateMode"
      />
    </setting-menu>
  </n-space>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store';
import { localStg } from '@/utils';
import { t } from '@/locales';
import SettingMenu from '../setting-menu/index.vue';
defineOptions({ name: 'PageView' });

const theme = useThemeStore();
</script>

<style scoped></style>
