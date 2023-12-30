import { adapter } from '@/utils';
import { request } from '../request';
import { adapterOfFetchUserList } from './management.adapter';

/** 获取用户列表 */
export const fetchUserPage = async (params: any) => {
  const { data } = await request.get<ApiUserManagement.User[]>('/sys/user/page', { data: params });
  return adapter(adapterOfFetchUserList, data as any);
};

/** 获取菜单列表 */
export const fetchMenuList = async (site?: number) => {
  const { data } = await request.get<MenuManagement.Menu[]>('/sys/menu/list', { data: { site } });
  return data || [];
};
/** 获取各端菜单列表 */
export const fetchListByTypeSite = async (site: number | string) => {
  const { data } = await request.get<MenuManagement.Menu[]>('/sys/menu/listByTypeSite', { data: { site } });
  return data || [];
};

/** 获取当前用户菜单按钮权限列表 */
export const fetchCurrentUserPermissionsList = async () => {
  const { data } = await request.get<MenuManagement.Menu[]>('/sys/menu/currentUserPermissions');
  return data || [];
};

/** 获取字典列表 */
export const fetchDictTypePage = async (params: any) => {
  const { data } = await request.get<ApiUserManagement.User[]>('/sys/dict/type/page', { data: params });
  return adapter(adapterOfFetchUserList, data as any);
};
