<template>
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
    <n-form-item path="mobile">
      <n-input v-model:value="model.mobile" :placeholder="t('message.login.pwd-login-tips.mobileTips')" />
    </n-form-item>
    <n-form-item path="password">
      <n-input
        v-model:value="model.password"
        type="password"
        show-password-on="click"
        :placeholder="t('message.login.pwd-login-tips.passwordTips')"
      />
    </n-form-item>
    <n-form-item path="captcha">
      <n-grid cols="4" item-responsive>
        <n-grid-item span="3">
          <n-input
            v-model:value="model.captcha"
            show-password-on="click"
            :placeholder="t('message.login.pwd-login-tips.captchaTips')"
          />
        </n-grid-item>
        <n-grid-item span="1" class="cursor-pointer" @click="getCode">
          <img :src="codeUrl" alt="" style="width: 100%; height: 100%" />
        </n-grid-item>
      </n-grid>
    </n-form-item>
    <n-space :vertical="true" :size="24">
      <div class="flex-y-center justify-between">
        <n-checkbox v-model:checked="rememberMe">{{ t('message.login.pwd-login-tips.rememberMeTips') }}</n-checkbox>
        <!-- <n-button :text="true" @click="toLoginModule('reset-pwd')">
          {{ t('message.login.pwd-login-tips.resetPwdTips') }}
        </n-button> -->
      </div>
      <n-button
        type="primary"
        size="large"
        :block="true"
        :round="true"
        :loading="auth.loginLoading"
        @click="handleSubmit"
      >
        {{ t('message.common.confirm') }}
      </n-button>
      <div class="flex-y-center justify-between">
        <!-- <n-button class="flex-1" :block="true" @click="toLoginModule('code-login')">手机验证码登录</n-button>
        <div class="w-12px"></div> -->
        <n-button class="flex-1" :block="true" @click="toLoginModule('register')">
          {{ t('message.login.register') }}
        </n-button>
      </div>
    </n-space>
    <!-- <other-account @login="handleLoginOtherAccount" /> -->
  </n-form>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import type { FormInst, FormRules } from 'naive-ui';
import { fetchCaptchaImageApi } from '@/service';
import { useAuthStore } from '@/store';
import { useRouterPush } from '@/composables';
import { createRequiredFormRule } from '@/utils';
import { getUUID } from '@/utils/crypto';
import { t } from '@/locales';
// import { OtherAccount } from './components';

const auth = useAuthStore();
const { login } = useAuthStore();
const { toLoginModule } = useRouterPush();

const formRef = ref<HTMLElement & FormInst>();
const codeUrl = ref();
const model = reactive({
  mobile: '17688889999',
  password: '450123',
  captcha: '450123',
  uuid: ''
});

const rules: FormRules = {
  password: createRequiredFormRule(t('message.login.pwd-login-tips.passwordTips')),
  mobile: createRequiredFormRule(t('message.login.pwd-login-tips.mobileTips')),
  captcha: createRequiredFormRule(t('message.login.pwd-login-tips.captchaTips'))
};
const rememberMe = ref(false);

// buffer转换
const arrayBufferToBase64 = (buffer: any) => {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

// 获取验证码
const getCode = async () => {
  model.uuid = getUUID();
  const { data } = await fetchCaptchaImageApi(model.uuid);
  codeUrl.value = `data:image/jpg;base64,${arrayBufferToBase64(data)}`;
};
// 登录失败回调
const errorFun = () => {
  getCode();
};
// 用户登录
const userLogin = async () => {
  login(model, errorFun);
};
const handleSubmit = async () => {
  await formRef.value?.validate();
  userLogin();
};

onMounted(() => {
  getCode();
});
// function handleLoginOtherAccount(param: { username: string; password: string }) {
//   const { username, password } = param;
//   login(username, password);
// }
</script>

<style scoped></style>
