import { mockRequest, request } from '../request';

/**
 * 获取验证码
 * @param phone - 手机号
 * @returns - 返回boolean值表示是否发送成功
 */
export function fetchSmsCode(phone: string) {
  return request.post<boolean>(`/slide-bot/register/registerSmsCode?mobile=${phone}`);
}
/**
 * 获取数字验证码
 * @param uuid
 */
export function fetchCaptchaImageApi(uuid: string) {
  return request.get<string>(`/sys/captcha?uuid=${uuid}`, { responseType: 'arraybuffer' });
}
/**
 * 登录
 * @param username - 用户名
 * @param password - 密码
 * @param captcha - 验证码
 */
export function fetchLogin(_params: Auth.LoginPwdModel) {
  return {
    data: 'token-test'
  };
  // const { mobile, password, captcha, uuid } = params;
  // request.post<string>('/slide-bot/login/byMobilePsd', { mobile, password, captcha, uuid });
}

/** 获取用户信息 */
export function fetchUserInfo() {
  return {
    data: {
      id: '1',
      username: 'Judy'
    }
  };
  // return request.get<ApiAuth.UserInfo>('/sys/user/info');
}

/**
 * 获取用户路由数据
 * @param userId - 用户id
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 */
export function fetchUserRoutes(id: string) {
  return mockRequest.post<ApiRoute.Route>('/getUserRoutes', { id });
}

/**
 * 刷新token
 * @param refreshToken
 */
export function fetchUpdateToken(refreshToken: string) {
  return mockRequest.post<ApiAuth.Token>('/updateToken', { refreshToken });
}
