import { nextTick } from 'vue';
import { defineStore } from 'pinia';
// import { router } from '@/router';
import { fetchLogin, fetchUserInfo } from '@/service';
import { useRouterPush } from '@/composables';
import { localStg } from '@/utils';
import { t } from '@/locales';
import { useTabStore } from '../tab';
import { useRouteStore } from '../route';
import { getToken, getUserInfo, clearAuthStorage } from './helpers';
interface AuthState {
  /** 用户信息 */
  userInfo: Auth.UserInfo;
  /** 用户token */
  token: string;
  /** 登录的加载状态 */
  loginLoading: boolean;
}

export const useAuthStore = defineStore('auth-store', {
  state: (): AuthState => ({
    userInfo: getUserInfo(),
    token: getToken(),
    loginLoading: false
  }),
  getters: {
    /** 是否登录 */
    isLogin(state) {
      return Boolean(state.token);
    }
  },
  actions: {
    /** 重置auth状态 */
    resetAuthStore() {
      const { toLogin } = useRouterPush(false);
      const { resetTabStore } = useTabStore();
      const { resetRouteStore } = useRouteStore();
      // const route = unref(router.currentRoute);
      clearAuthStorage();
      this.$reset();
      localStg.set('token', '');
      toLogin();
      nextTick(() => {
        resetTabStore();
        resetRouteStore();
      });
    },
    /**
     * 处理登录后成功或失败的逻辑
     * @param backendToken - 返回的token
     */
    async handleActionAfterLogin(backendToken: string) {
      const route = useRouteStore();
      const { toLoginRedirect } = useRouterPush(false);

      const loginSuccess = await this.loginByToken(backendToken);

      if (loginSuccess) {
        await route.initEvent();
        // 跳转登录后的地址
        toLoginRedirect();
        // 登录成功弹出欢迎提示
        if (route.isInitAuthRoute) {
          window.$notification?.success({
            title: t('message.system.loginSuccess'),
            content: `${t('message.system.welcomeBack')}，${this.userInfo.username}!`,
            duration: 3000
          });
        }

        return;
      }

      // 不成功则重置状态
      this.resetAuthStore();
    },
    /**
     * 根据token进行登录
     * @param backendToken - 返回的token
     */
    async loginByToken(backendToken: string) {
      let successFlag = false;

      localStg.set('token', backendToken);

      // 获取用户信息
      const { data } = await fetchUserInfo();
      if (data) {
        // 成功后把用户信息存储到缓存中
        localStg.set('userInfo', data);

        // 更新状态
        this.userInfo = data;
        this.token = backendToken;

        successFlag = true;
      }

      return successFlag;
    },
    /**
     * 登录
     * @param userName - 用户名
     * @param password - 密码
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    async login(params: Auth.LoginPwdModel, errorFun: Function) {
      this.loginLoading = true;
      const { data } = await fetchLogin(params);
      if (data) {
        await this.handleActionAfterLogin(data);
      } else {
        // eslint-disable-next-line no-unused-expressions
        errorFun && errorFun();
      }
      this.loginLoading = false;
    }
  }
});
