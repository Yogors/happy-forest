import { transformObjectToOption } from './_shared';

export const userRoleLabels: Record<Auth.RoleType, string> = {
  super: '超级管理员',
  admin: '管理员',
  user: '普通用户'
};
export const userRoleOptions = transformObjectToOption(userRoleLabels);

/** 用户性别 */

export const genderOptions = [
  {
    value: 0,
    label: '男',
    labelEn: 'Male'
  },
  {
    value: 1,
    label: '女',
    labelEn: 'Female'
  },
  {
    value: 2,
    label: '保密',
    labelEn: 'Secrecy'
  }
];

/** 用户状态 */

export const userStatusOptions = [
  {
    value: 0,
    label: '停用'
  },
  {
    value: 1,
    label: '正常'
  }
];

/** 菜单类型 */
export const menuTypeOptions = [
  {
    value: 0,
    label: '菜单'
  },
  {
    value: 1,
    label: '按钮'
  }
];
/** 菜单打开方式类型 */
export const menuOpenStyleOptions = [
  {
    value: 0,
    label: '内部'
  },
  {
    value: 1,
    label: '外部'
  }
];
/** 菜单默认类型 */
export const menuDefaultMenuOptions = [
  {
    value: 1,
    label: '是'
  },
  {
    value: 0,
    label: '否'
  }
];
/** 组织类型 */
export const DeptTypeOptions = [
  {
    value: 0,
    label: '公司'
  },
  {
    value: 1,
    label: '机构'
  },
  {
    value: 2,
    label: '市场'
  },
  {
    value: 3,
    label: '部门'
  }
];
/** 组织可添加类型 */
export const DeptTypeAddOptions = [
  {
    value: 0,
    label: '公司'
  },
  {
    value: 1,
    label: '机构'
  }
];

/** 区划类型 */
export const AreaOptions = [
  {
    value: 0,
    label: '省份'
  },
  {
    value: 1,
    label: '城市'
  },
  {
    value: 2,
    label: '区县'
  },
  {
    value: 3,
    label: '街道'
  }
];
/** 楼层类型 */
export const FloorOptions = [
  {
    value: -1,
    label: 'B1'
  },
  {
    value: 1,
    label: 'F1'
  },
  {
    value: 2,
    label: 'F2'
  },
  {
    value: 3,
    label: 'F3'
  },
  {
    value: 4,
    label: 'F5'
  },
  {
    value: 5,
    label: 'F5'
  }
];

/** 商品品类级别 */
export const CategoryLevelOptions = [
  {
    value: 0,
    label: '一级'
  },
  {
    value: 1,
    label: '二级'
  },
  {
    value: 2,
    label: '三级'
  },
  {
    value: 3,
    label: '四级'
  },
  {
    value: 4,
    label: '五级'
  }
];

/** 商品状态默认类型 */
export const goodStatusOptions = [
  {
    value: 0,
    label: '下架'
  },
  {
    value: 1,
    label: '上架'
  }
];
/** 审核状态 */
export const AUDIT_STATUS = [
  {
    value: 0,
    label: '待审核'
  },
  {
    value: 1,
    label: '通过'
  },
  {
    value: 2,
    label: '不通过'
  }
];
/** 摊位租金时间单位 */
export const TIME_UNIT = [
  {
    value: 'YEAR',
    label: '年'
  },
  {
    value: 'MONTH',
    label: '月'
  },
  {
    value: 'DAY',
    label: '日'
  }
];
