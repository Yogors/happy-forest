const dashboard: AuthRoute.Route = {
  name: 'home',
  path: '/home',
  component: 'self',
  meta: {
    title: '工作台',
    requiresAuth: true,
    icon: 'icon-park-outline:workbench',
    i18nTitle: 'routes.dashboard.workbench'
  }
};

export default dashboard;
