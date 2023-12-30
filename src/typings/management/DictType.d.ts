/** 角色相关模块 */
declare namespace DictTypeManagement {
  interface DictType {
    id: string;
    dictType: string;
    dictName: string;
    remark: string;
    sort: number;
    createDate: string;
    updateDate: string;
    dictData: any[];
  }
}
