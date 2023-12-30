<template>
  <QueryBar v-if="$slots.queryBar" mb-30 @search="handleSearch" @reset="handleReset">
    <slot name="queryBar" />
  </QueryBar>
  <slot name="ControlsLine"></slot>
  <n-data-table
    :remote="remote"
    :loading="loading"
    :scroll-x="scrollX"
    :columns="columns"
    :data="tableData"
    :row-key="row => row[rowKey]"
    :pagination="isPagination ? pagination : false"
    :cascade="false"
    allow-checking-not-loaded
    @update:page="onPageChange"
    @update:pageSize="onPageSizeChange"
    @update:checked-row-keys="onChecked"
    @load="onLoad"
  />
</template>

<script setup lang="tsx">
import { ref, reactive, nextTick } from 'vue';
interface IProps {
  remote: boolean;
  tableType: string;
  isPagination: boolean;
  scrollX: number;
  rowKey: string;
  columns: any;
  queryItems: any;
  extraParams: any;
  getData: any;
}
const props = withDefaults(defineProps<IProps>(), {
  remote: true,
  isPagination: true,
  tableType: 'basicTable',
  scrollX: 1200,
  rowKey: 'id',
  columns: () => {
    return [];
  },
  queryItems: () => {},
  extraParams: () => {},
  getData: () => {}
});

const emit = defineEmits(['update:queryItems', 'onChecked', 'onDataChange', 'load']);
const loading = ref(false);
const initQuery = { ...props.queryItems };
const tableData = ref([]);
const pagination = reactive({
  page: 1,
  pageSize: 10,
  pageCount: 0,
  showSizePicker: true,
  pageSizes: [10, 20, 30, 40]
});
async function onLoad(row: any) {
  emit('load', row, (data: any) => {
    row.children = data;
  });
}
async function handleQuery() {
  try {
    loading.value = true;
    let paginationParams = {};
    // 如果非分页模式或者使用前端分页,则无需传分页参数
    if (props.isPagination && props.remote) {
      paginationParams = { page: pagination.page, limit: pagination.pageSize };
    }
    if (props.tableType === 'treeTable') {
      const data = await props.getData({
        ...props.queryItems,
        ...props.extraParams
      });
      tableData.value = data || [];
    } else {
      const { data } = await props.getData({
        ...props.queryItems,
        ...props.extraParams,
        ...paginationParams
      });
      const { list, total } = data;
      tableData.value = list || [];
      pagination.pageCount = Math.ceil(total / pagination.pageSize);
    }
  } catch (error) {
    tableData.value = [];
    if (pagination.pageCount) {
      pagination.pageCount = 0;
    }
  } finally {
    emit('onDataChange', tableData.value);
    loading.value = false;
  }
}
function handleSearch() {
  pagination.page = 1;
  handleQuery();
}
async function handleReset() {
  const queryItems = { ...props.queryItems };
  for (const key in queryItems) {
    if (Object.hasOwn(queryItems, key)) {
      queryItems[key] = '';
    }
  }

  emit('update:queryItems', { ...queryItems, ...initQuery });
  await nextTick();
  pagination.page = 1;
  handleQuery();
}
function onPageChange(currentPage: number) {
  pagination.page = currentPage;
  if (props.remote) {
    handleQuery();
  }
}
function onPageSizeChange(pageSize: number) {
  pagination.page = 1;
  pagination.pageSize = pageSize;
  if (props.remote) {
    handleQuery();
  }
}
function onChecked(rowKeys: any) {
  if (props.columns.some((item: any) => item.type === 'selection')) {
    emit('onChecked', rowKeys);
  }
}
function handleExport(_columns = props.columns, _data = tableData.value) {}
function handleUpdateData(data: any) {
  tableData.value = data;
  emit('onDataChange', tableData.value);
}
defineExpose({
  handleSearch,
  handleReset,
  handleExport,
  handleUpdateData
});
</script>
