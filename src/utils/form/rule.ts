import type { Ref } from 'vue';
import type { FormItemRule } from 'naive-ui';
import { REGEXP_CODE_SIX, REGEXP_EMAIL, REGEXP_PHONE, REGEXP_PWD } from '@/config';
import { t } from '@/locales';
/** 创建自定义错误信息的必填表单规则 */
export const createRequiredFormRule = (message = '不能为空'): FormItemRule => ({ required: true, message });

export const requiredFormRule = createRequiredFormRule();

/** 表单规则 */
interface CustomFormRules {
  /** 手机号码 */
  phone: FormItemRule[];
  /** 密码 */
  pwd: FormItemRule[];
  /** 验证码 */
  code: FormItemRule[];
  /** 邮箱 */
  email: FormItemRule[];
  // 非空
  empty: FormItemRule[];
}

/** 表单规则 */
export const formRules: CustomFormRules = {
  phone: [
    createRequiredFormRule(t('message.login.registerTips.emptyPhone')),
    { pattern: REGEXP_PHONE, message: t('message.login.registerTips.errorPhone'), trigger: 'input' }
  ],
  pwd: [
    createRequiredFormRule(t('message.login.pwd-login-tips.passwordTips')),
    { pattern: REGEXP_PWD, message: t('message.login.registerTips.passwordError'), trigger: 'input' }
  ],
  code: [
    createRequiredFormRule(t('message.login.pwd-login-tips.captchaTips')),
    { pattern: REGEXP_CODE_SIX, message: t('message.login.registerTips.formatError'), trigger: 'input' }
  ],
  email: [
    createRequiredFormRule(t('message.login.registerTips.emailTips')),
    { pattern: REGEXP_EMAIL, message: t('message.login.registerTips.formatError'), trigger: 'blur' }
  ],
  empty: [{ required: true, message: '参数不能为空' }]
};

/** 是否为空字符串 */
function isBlankString(str: string) {
  return str.trim() === '';
}

/** 获取确认密码的表单规则 */
export function getConfirmPwdRule(pwd: Ref<string>) {
  const confirmPwdRule: FormItemRule[] = [
    { required: true, message: t('message.login.registerTips.confirmPwdTips') },
    {
      validator: (rule, value) => {
        if (!isBlankString(value) && value !== pwd.value) {
          return Promise.reject(rule.message);
        }
        return Promise.resolve();
      },
      message: t('message.login.registerTips.notMatchPwdTips'),
      trigger: 'input'
    }
  ];
  return confirmPwdRule;
}

/** 获取图片验证码的表单规则 */
export function getImgCodeRule(imgCode: Ref<string>) {
  const imgCodeRule: FormItemRule[] = [
    { required: true, message: '请输入验证码' },
    {
      validator: (rule, value) => {
        if (!isBlankString(value) && value !== imgCode.value) {
          return Promise.reject(rule.message);
        }
        return Promise.resolve();
      },
      message: '验证码不正确',
      trigger: 'blur'
    }
  ];
  return imgCodeRule;
}
