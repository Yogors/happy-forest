<template>
  <n-divider title-placement="center">{{ t('message.themeConfig.InterfaceFunction.title') }}</n-divider>
  <n-space vertical size="large">
    <setting-menu :label="t('message.themeConfig.InterfaceFunction.scrollMode')">
      <n-select
        class="w-120px"
        size="small"
        :value="theme.scrollMode"
        :options="theme.scrollModeList"
        :label-field="localStg.get('lang') === 'en' ? 'labelEn' : 'label'"
        @update:value="theme.setScrollMode"
      />
    </setting-menu>
    <setting-menu :label="t('message.themeConfig.InterfaceFunction.FixedHeader')">
      <n-switch :value="theme.fixedHeaderAndTab" @update:value="theme.setIsFixedHeaderAndTab" />
    </setting-menu>
    <setting-menu :label="t('message.themeConfig.InterfaceFunction.TopMenuLocation')">
      <n-select
        class="w-120px"
        size="small"
        :value="theme.menu.horizontalPosition"
        :options="theme.menu.horizontalPositionList"
        :label-field="localStg.get('lang') === 'en' ? 'labelEn' : 'label'"
        @update:value="theme.setHorizontalMenuPosition"
      />
    </setting-menu>
    <setting-menu :label="t('message.themeConfig.InterfaceFunction.headHeight')">
      <n-input-number
        class="w-120px"
        size="small"
        :value="theme.header.height"
        :step="1"
        @update:value="theme.setHeaderHeight"
      />
    </setting-menu>
    <setting-menu :label="t('message.themeConfig.InterfaceFunction.tabHeight')">
      <n-input-number
        class="w-120px"
        size="small"
        :value="theme.tab.height"
        :step="1"
        @update:value="theme.setTabHeight"
      />
    </setting-menu>
    <setting-menu :label="t('message.themeConfig.InterfaceFunction.tabCache')">
      <n-switch :value="theme.tab.isCache" @update:value="theme.setTabIsCache" />
    </setting-menu>
    <setting-menu :label="t('message.themeConfig.InterfaceFunction.sidebarWidth')">
      <n-input-number
        class="w-120px"
        size="small"
        :value="theme.sider.width"
        :step="10"
        @update:value="theme.setSiderWidth"
      />
    </setting-menu>
    <setting-menu :label="t('message.themeConfig.InterfaceFunction.sidebarMixedWidth')">
      <n-input-number
        class="w-120px"
        size="small"
        :value="theme.sider.mixWidth"
        :step="5"
        @update:value="theme.setMixSiderWidth"
      />
    </setting-menu>
    <setting-menu :label="t('message.themeConfig.InterfaceFunction.showFooter')">
      <n-switch :value="theme.footer.visible" @update:value="theme.setFooterVisible" />
    </setting-menu>
    <setting-menu :label="t('message.themeConfig.InterfaceFunction.fixedFooter')">
      <n-switch :value="theme.footer.fixed" @update:value="theme.setFooterIsFixed" />
    </setting-menu>
    <setting-menu :label="t('message.themeConfig.InterfaceFunction.bottomRight')">
      <n-switch :value="theme.footer.right" @update:value="theme.setFooterIsRight" />
    </setting-menu>
  </n-space>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store';
import { localStg } from '@/utils';
import { t } from '@/locales';
import SettingMenu from '../setting-menu/index.vue';
defineOptions({ name: 'PageFunc' });
const theme = useThemeStore();
</script>

<style scoped></style>
