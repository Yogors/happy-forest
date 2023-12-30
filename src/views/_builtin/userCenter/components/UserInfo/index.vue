<template>
  <div class="h-full h-full overflow-y">
    <n-card title="" :bordered="false" class="rounded-16px shadow-sm h-full h-full overflow-y">
      <n-form ref="formRef" label-placement="left" :label-width="120" :model="formModel" :rules="rules">
        <n-grid :cols="24" :x-gap="18">
          <n-form-item-grid-item :span="24" :label="t('message.userCenter.username')" path="username">
            <n-input v-model:value="formModel.username" :placeholder="t('message.common.tips.formInput')" />
          </n-form-item-grid-item>
          <n-form-item-grid-item :span="24" :label="t('message.userCenter.id')" path="id">
            <n-input v-model:value="formModel.id" disabled />
          </n-form-item-grid-item>
          <n-form-item-grid-item :span="24" :label="t('message.common.phoneNumber')" path="mobile">
            <n-input v-model:value="formModel.mobile" disabled />
          </n-form-item-grid-item>
          <n-form-item-grid-item :span="24" :label="t('message.userCenter.gender')" path="gender">
            <n-select
              v-model:value="formModel.gender"
              type="text"
              :placeholder="t('message.common.tips.formSelect')"
              :label-field="localStg.get('lang') === 'zh-CN' ? 'label' : 'labelEn'"
              :options="genderOptions"
            />
          </n-form-item-grid-item>
          <n-form-item-grid-item :span="24" :label="t('message.userCenter.email')" path="email">
            <n-input v-model:value="formModel.email" :placeholder="t('message.common.tips.formInput')" />
          </n-form-item-grid-item>
          <n-form-item-grid-item :span="24" :label="t('message.userCenter.headUrl')" path="headUrl">
            <n-upload
              action="/sdb/oss/ali/upload"
              :default-file-list="fileList"
              list-type="image-card"
              :max="1"
              accept="image/*"
              @finish="handleFinish"
            >
              {{ t('message.common.tips.clickToUpload') }}
            </n-upload>
          </n-form-item-grid-item>
        </n-grid>
      </n-form>
      <footer class="w-full flex pt-16px justify-center" :size="24">
        <n-button size="medium" type="primary" :loading="loading" @click="onSave">
          <span class="text-14px">{{ t('message.common.save') }}</span>
        </n-button>
      </footer>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import type { UploadFileInfo, FormInst, FormItemRule } from 'naive-ui';
import { genderOptions } from '@/constants';
import { useAuthStore } from '@/store';
import { createRequiredFormRule, formRules, localStg } from '@/utils';
import { request } from '@/service/request';
import { t } from '@/locales';
const auth = useAuthStore();
export interface Props {
  /** 弹窗可见性 */
  visible: boolean;
  /** 编辑的表格行数据 */
  editData?: UserManagement.User | null;
  type?: 'add' | 'edit' | 'view';
}
const props = withDefaults(defineProps<Props>(), {
  type: 'add',
  editData: null,
  visible: false
});
const loading = ref(false);
export type ModalType = NonNullable<Props['type']>;
const fileList = ref<UploadFileInfo[]>([]);
defineOptions({ name: 'TableActionModal' });

const formRef = ref<HTMLElement & FormInst>();

type FormModel = Pick<UserManagement.User, 'username' | 'gender' | 'email' | 'headUrl' | 'mobile' | 'id' | 'password'>;
const formModel = reactive<FormModel>(createDefaultFormModel());
const rules: Record<keyof any, FormItemRule | FormItemRule[]> = {
  username: createRequiredFormRule(t('message.login.pwd-login-tips.accountTips')),
  gender: createRequiredFormRule(t('message.common.tips.formSelect')),
  email: formRules.email
};
function createDefaultFormModel(): FormModel {
  return {
    gender: 0,
    username: '',
    email: '',
    headUrl: '',
    mobile: '',
    id: '',
    password: ''
  };
}

function handleUpdateFormModel(model: Partial<FormModel>) {
  Object.assign(formModel, model);
}

function handleUpdateFormModelByModalType() {
  const handlers: Record<ModalType, () => void> = {
    add: () => {
      const defaultFormModel = createDefaultFormModel();
      if (props.editData) {
        handleUpdateFormModel(props.editData);
      } else {
        handleUpdateFormModel(defaultFormModel);
      }
    },
    edit: () => {
      if (props.editData) {
        handleUpdateFormModel(props.editData);
      }
    },
    view: () => {}
  };

  handlers[props.type]();
}

async function getUserInfo() {
  const result = await await request.get<UserManagement.User>(`/sys/user/${auth.userInfo.id}`);
  const { error } = result;
  const data = result.data as UserManagement.User;
  if (!error && data) {
    for (const key in data) {
      if (Object.hasOwn(data, key)) {
        const element = data[key];
        formModel[key] = element;
      }
    }
    if (data.headUrl) {
      fileList.value.push({
        id: 'url',
        name: 'URL',
        url: data.headUrl,
        status: 'finished'
      });
    }
  }
}
async function onSave() {
  formRef.value?.validate(async (err: any) => {
    if (err) return;
    delete formModel.password;
    const { error } = await request.put<ApiAuth.UserInfo>('/sys/user', formModel);
    if (!error) {
      window.$message?.success(t('message.common.tips.editSuccess'));
    }
  });
}
// 文件上传成功回调
function handleFinish({ file, event }: { file: UploadFileInfo; event?: ProgressEvent }) {
  const { response } = event?.target as XMLHttpRequest;
  const url = JSON.parse(response).data;
  formModel.headUrl = url;
  return file;
}

onMounted(() => {
  getUserInfo();
  handleUpdateFormModelByModalType();
});
defineExpose({
  formRef
});
</script>

<style scoped></style>
