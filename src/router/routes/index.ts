import { getLoginModuleRegExp } from '@/utils';

/** 根路由: / */
export const ROOT_ROUTE: AuthRoute.Route = {
  name: 'root',
  path: '/',
  redirect: import.meta.env.VITE_ROUTE_HOME_PATH,
  meta: {
    title: 'Root'
  }
};

/** 固定的路由 */
export const constantRoutes: AuthRoute.Route[] = [
  ROOT_ROUTE,
  {
    name: 'login',
    path: '/login',
    component: 'self',
    props: route => {
      const moduleType = (route.params.module as UnionKey.LoginModule) || 'pwd-login';
      return {
        module: moduleType
      };
    },
    meta: {
      title: '登录',
      i18nTitle: 'message.routes.login',
      dynamicPath: `/login/:module(${getLoginModuleRegExp()})?`,
      singleLayout: 'blank'
    }
  },
  {
    name: 'constant-page',
    path: '/constant-page',
    component: 'self',
    meta: {
      title: '固定页面',
      i18nTitle: 'message.routes.routeConstant',
      singleLayout: 'blank'
    }
  },
  {
    name: '403',
    path: '/403',
    component: 'self',
    meta: {
      title: '无权限',
      i18nTitle: 'message.routes.route403',
      singleLayout: 'blank'
    }
  },
  {
    name: '404',
    path: '/404',
    component: 'self',
    meta: {
      title: '未找到',
      i18nTitle: 'message.routes.notFound',
      singleLayout: 'blank'
    }
  },
  {
    name: '500',
    path: '/500',
    component: 'self',
    meta: {
      title: '服务器错误',
      i18nTitle: 'message.routes.route500',
      singleLayout: 'blank'
    }
  },
  // 匹配无效路径的路由
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: 'blank',
    meta: {
      title: '未找到',
      i18nTitle: 'message.routes.notFound',
      singleLayout: 'blank'
    }
  },
  {
    name: 'userCenter',
    path: '/userCenter',
    component: 'self',
    meta: {
      icon: 'system-uicons:user-male',
      title: '个人资料',
      i18nTitle: 'message.routes.userInfo',
      singleLayout: 'basic'
    }
  },
  {
    name: 'outlineView',
    path: '/outlineView',
    component: 'self',
    meta: {
      icon: 'system-uicons:user-male',
      title: '大纲查看',
      i18nTitle: 'message.routes.outlineView',
      singleLayout: 'blank'
    }
  },
  {
    name: 'home',
    path: '/home',
    component: 'self',
    meta: {
      title: '主界面',
      i18nTitle: 'message.routes.home',
      singleLayout: 'blank'
    }
  }
];
