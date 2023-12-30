import { localStg } from '@/utils';
import { isNull } from './index';
/**
 * 获取数组中找出对应的属性的某个参数值
 * @param data - 数组
 * @param keyImport - 需要查找的key
 * @param keyExport - 需要导出的值
 * @param value - 查找的参数对应的值
 */
// eslint-disable-next-line max-params
export function getKeyValueByValueFromArray(
  data: Array<any>,
  keyImport: string,
  keyExport: string,
  value: string | number
) {
  const item = data.find(obj => {
    return obj[keyImport] === value;
  });

  if (item) {
    return item && item[keyExport];
  }
  return '';
}
/**
 * 单个修改null为字符串
 * @param value - 需要修改的值
 */
// eslint-disable-next-line max-params
export function changeNullToEmpty(value: any) {
  if (isNull(value)) {
    return '';
  }
  return value;
}

/**
 * 批量修改null为字符串
 * @param value - 需要修改的值
 */
// eslint-disable-next-line max-params
export function batchChangeNullToEmpty(object: any) {
  for (const key in object) {
    if (Object.hasOwn(object, key)) {
      const element = object[key];
      if (isNull(element)) {
        object[key] = '';
      }
    }
  }
  return object;
}
/**
 * 通过字典类型获取字典数据
 * @param dictType - 字典类型
 */
export function getDictByCode(dictType: string) {
  const dicts = localStg.get('dictList');
  const dict = dicts.find((item: any) => item.dictType === dictType);
  if (dict) {
    return dict.dataList;
  }
  return [];
}
/**
 * 通过字典值获取字典标签
 * @param code - 字典类型
 * @param value - 字典值
 */
export function getNameByDictCode(code: string, value: string | number) {
  const dict = getDictByCode(code);
  const name = getLabelByKey(dict, value, 'dictValue', 'dictLabel');
  return name;
}
/**
 * 通过值获取标签名
 * @param data - 数据来源
 * @param value - 当前值
 * @param key - 当前值对应的属性名
 * @param outKey - 需要输出属性值对应的属性名
 */
// eslint-disable-next-line max-params
export function getLabelByKey(data: any, value: string | number, key: string, outKey: string) {
  const item = data.find((dict: any) => dict[key] === value);
  return item && item[outKey];
}

/**
 * 字典数组值转Number类型
 * @param data - 数组
 */
export function dictArrayValueToNumber(data: Array<any>) {
  for (const ele of data) {
    ele.dictValue = Number(ele.dictValue);
  }
  return data;
}
