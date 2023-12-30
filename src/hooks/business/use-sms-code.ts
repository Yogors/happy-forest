import { computed } from 'vue';
import { REGEXP_PHONE } from '@/config';
import { fetchSmsCode } from '@/service';
import { t } from '@/locales';
import { useLoading } from '../common';
import useCountDown from './use-count-down';

export default function useSmsCode() {
  const { loading, startLoading, endLoading } = useLoading();
  const { counts, start, isCounting } = useCountDown(60);

  const initLabel = t('message.login.registerTips.getVerificationCode');
  const countingLabel = (second: number) => `${second}${t('message.login.registerTips.Seconds')}`;
  const label = computed(() => {
    let text = initLabel;
    if (loading.value) {
      text = '';
    }
    if (isCounting.value) {
      text = countingLabel(counts.value);
    }
    return text;
  });

  /** 判断手机号码格式是否正确 */
  function isPhoneValid(phone: string) {
    let valid = true;
    if (phone.trim() === '') {
      window.$message?.error(t('message.login.registerTips.emptyPhone'));
      valid = false;
    } else if (!REGEXP_PHONE.test(phone)) {
      window.$message?.error(t('message.login.registerTips.emptyPhone'));
      valid = false;
    }
    return valid;
  }

  /**
   * 获取短信验证码
   * @param phone - 手机号
   */
  async function getSmsCode(phone: string) {
    const valid = isPhoneValid(phone);
    if (!valid || loading.value) return;

    startLoading();
    const { error } = await fetchSmsCode(phone);

    if (!error) {
      window.$message?.success(t('message.login.registerTips.successPhone'));
      start();
    }
    endLoading();
  }

  return {
    label,
    start,
    isCounting,
    getSmsCode,
    loading
  };
}
