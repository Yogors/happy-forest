/** 菜单相关模块 */
declare namespace MenuManagement {
  interface Menu {
    id: string;
    pid: string;
    children: Menu[];
    name: string;
    url: null | string;
    menuType: number | string;
    openStyle: number | null;
    icon: string;
    permissions: string;
    sort: number;
    createDate: string;
    parentName: null;
    defaultMenu: number;
    rootId?: string;
    site?: string | number;
  }
  interface MenuData {
    code: number;
    msg: string;
    data: Menu[];
  }
}
