<template>
  <div class="relative flex-center wh-full" :style="{ backgroundColor: bgColor }">
    <!-- <dark-mode-switch
      :dark="theme.darkMode"
      class="absolute left-48px top-24px z-3 text-20px"
      @update:dark="theme.setDarkMode"
    /> -->
    <div class="toggle-lang">
      <toggle-lang hover-bg="hover:bg-transparent" />
    </div>
    <div>
      <!-- <header v-if="activeModule.key !== 'welcome'" class="flex-y-center justify-between">
        <system-logo class="text-64px text-primary" />
        <n-gradient-text type="primary" :size="28">{{ title }}</n-gradient-text>
      </header> -->
      <n-card
        :bordered="false"
        size="large"
        class="z-4 !w-auto rounded-20px shadow-sm bg-unset overflow-hidden"
        content-style="padding:0"
      >
        <div class="flex">
          <div class="w-480px p-60px background-white">
            <main class="pt-24px">
              <h3 v-if="activeModule.label" class="text-18px text-primary font-medium">{{ activeModule.label }}</h3>
              <div class="pt-24px">
                <transition name="fade-slide" mode="out-in" appear>
                  <component :is="activeModule.component" />
                </transition>
              </div>
            </main>
          </div>
          <div class="w-360px p-30px background-white-half">
            <main class="pt-24px wh-full">
              <div class="pt-24px wh-full">
                <transition name="fade-slide" mode="out-in" appear>
                  <component :is="Welcome" />
                </transition>
              </div>
            </main>
          </div>
        </div>
      </n-card>
    </div>
    <login-bg :theme-color="bgThemeColor" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Component } from 'vue';
import { useThemeStore } from '@/store';
import { getColorPalette, mixColor } from '@/utils';
import { t } from '@/locales';
import ToggleLang from '@/layouts/common/global-header/components/toggle-lang.vue';
// import { useAppInfo } from '@/composables';
import { BindWechat, CodeLogin, LoginBg, PwdLogin, Register, ResetPwd, Welcome } from './components';

interface Props {
  /** 登录模块分类 */
  module: UnionKey.LoginModule;
}

const props = defineProps<Props>();

const theme = useThemeStore();
// const { title } = useAppInfo();

interface LoginModule {
  key: UnionKey.LoginModule;
  label: string;
  component: Component;
}

const modules = computed(() => {
  const module: LoginModule[] = [
    { key: 'pwd-login', label: t('message.login.mobile-login'), component: PwdLogin },
    { key: 'welcome', label: '', component: Welcome },
    { key: 'code-login', label: t('message.login.code-login'), component: CodeLogin },
    { key: 'register', label: t('message.login.register'), component: Register },
    { key: 'reset-pwd', label: t('message.login.reset-pwd'), component: ResetPwd },
    { key: 'bind-wechat', label: t('message.login.bind-wechat'), component: BindWechat }
  ];
  return module;
});
// const modules: LoginModule[] = [
//   { key: 'pwd-login', label: t('message.login.mobile-login'), component: PwdLogin },
//   { key: 'welcome', label: '', component: Welcome },
//   { key: 'code-login', label: t('message.login.code-login'), component: CodeLogin },
//   { key: 'register', label: t('message.login.register'), component: Register },
//   { key: 'reset-pwd', label: t('message.login.reset-pwd'), component: ResetPwd },
//   { key: 'bind-wechat', label: t('message.login.bind-wechat'), component: BindWechat }
// ];

const activeModule = computed(() => {
  const active: LoginModule = { ...modules.value[0] };
  const findItem = modules.value.find(item => item.key === props.module);
  if (findItem) {
    Object.assign(active, findItem);
  }
  return active;
});

const bgThemeColor = computed(() => (theme.darkMode ? getColorPalette(theme.themeColor, 7) : theme.themeColor));

const bgColor = computed(() => {
  const COLOR_WHITE = '#ffffff';
  const ratio = theme.darkMode ? 0.5 : 0.2;
  return mixColor(COLOR_WHITE, theme.themeColor, ratio);
});
</script>

<style scoped lang="scss">
.bg-unset {
  background-color: unset;
  .background-white {
    background-color: #fff;
  }
  .background-white-half {
    background-color: rgba(255, 255, 255, 0.4);
  }
}
.toggle-lang {
  position: absolute;
  z-index: 10;
  right: 40px;
  top: 20px;
}
</style>
