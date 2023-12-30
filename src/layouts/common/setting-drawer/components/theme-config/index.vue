<template>
  <n-divider title-placement="center">{{ t('message.themeConfig.themeConfig.title') }}</n-divider>
  <textarea id="themeConfigCopyTarget" v-model="dataClipboardText" class="absolute opacity-0" />
  <n-space vertical>
    <div ref="copyRef" data-clipboard-target="#themeConfigCopyTarget">
      <n-button type="primary" :block="true">{{ t('message.themeConfig.themeConfig.copyTheme') }}</n-button>
    </div>
    <n-button type="warning" :block="true" @click="handleResetConfig">
      {{ t('message.themeConfig.themeConfig.resetTheme') }}
    </n-button>
  </n-space>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import Clipboard from 'clipboard';
import { useThemeStore } from '@/store';
import { t } from '@/locales';

defineOptions({ name: 'ThemeConfig' });

const theme = useThemeStore();

const copyRef = ref<HTMLElement>();

const dataClipboardText = ref(getClipboardText());

function getClipboardText() {
  return JSON.stringify(theme.$state);
}

function handleResetConfig() {
  theme.resetThemeStore();
  window.$message?.success(t('message.themeConfig.tips.resetTip'));
}

function clipboardEventListener() {
  if (!copyRef.value) return;
  const copy = new Clipboard(copyRef.value);
  copy.on('success', () => {
    window.$dialog?.success({
      title: t('message.common.tips.operationSuccessful'),
      content: `${t('message.themeConfig.tips.copyTip')} src/settings/theme.json！`,
      positiveText: t('message.common.confirm')
    });
  });
}

const stopHandle = watch(
  () => theme.$state,
  () => {
    dataClipboardText.value = getClipboardText();
  },
  { deep: true }
);

onMounted(() => {
  clipboardEventListener();
});
onUnmounted(() => {
  stopHandle();
});
</script>

<style scoped></style>
