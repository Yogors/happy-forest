<template>
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
    <n-form-item path="mobile">
      <n-input v-model:value="model.mobile" :placeholder="t('message.common.phoneNumber')" />
    </n-form-item>
    <n-form-item path="smsCode">
      <div class="flex-y-center w-full">
        <n-input v-model:value="model.smsCode" :placeholder="t('message.common.captchaCode')" />
        <div class="w-18px"></div>
        <n-button size="large" :disabled="isCounting" :loading="smsLoading" @click="handleSmsCode">
          {{ label }}
        </n-button>
      </div>
    </n-form-item>
    <n-form-item path="password">
      <n-input
        v-model:value="model.password"
        type="password"
        show-password-on="click"
        :placeholder="t('message.common.password')"
      />
    </n-form-item>
    <n-form-item path="confirmPassword">
      <n-input
        v-model:value="model.confirmPassword"
        type="password"
        show-password-on="click"
        :placeholder="t('message.common.confirmPassword')"
      />
    </n-form-item>
    <n-space :vertical="true" :size="18">
      <login-agreement v-model:value="agreement" />
      <n-button type="primary" size="large" :block="true" :round="true" @click="handleSubmit">
        {{ t('message.common.confirm') }}
      </n-button>
      <n-button size="large" :block="true" :round="true" @click="toLoginModule('pwd-login')">
        {{ t('message.common.back') }}
      </n-button>
    </n-space>
  </n-form>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue';
import type { FormInst, FormRules } from 'naive-ui';
import { useRouterPush } from '@/composables';
import { useSmsCode } from '@/hooks';
import { formRules, getConfirmPwdRule } from '@/utils';
import { request } from '@/service/request';
import { t } from '@/locales';
const { toLoginModule } = useRouterPush();
const { label, isCounting, loading: smsLoading, getSmsCode } = useSmsCode();
const formRef = ref<HTMLElement & FormInst>();

const model = reactive({
  mobile: '',
  smsCode: '',
  password: '',
  confirmPassword: ''
});

const rules: FormRules = {
  mobile: formRules.phone,
  smsCode: formRules.code,
  password: formRules.pwd,
  confirmPassword: getConfirmPwdRule(toRefs(model).password)
};

const agreement = ref(false);

function handleSmsCode() {
  registerSmsCode();
}
async function registerSmsCode() {
  getSmsCode(model.mobile);
}
// 用户注册
const userRegister = async () => {
  const { data } = await request.post<any>(`/slide-bot/register/byMobile`, model);
  if (data) {
    window.$message?.success(t('message.common.tips.registerSuccess'));
    toLoginModule('pwd-login');
    // 后续修改为直接登录进入首页
  }
};
async function handleSubmit() {
  if (agreement.value) {
    await formRef.value?.validate();
    userRegister();
  } else {
    window.$message?.info(t('message.login.registerTips.agreementTips'));
  }
}
</script>

<style scoped></style>
