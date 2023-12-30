import { ref, computed } from 'vue';
import { isNullOrWhitespace } from '@/utils';

const ACTIONS = {
  view: '查看',
  edit: '编辑',
  add: '新增'
} as any;
interface NoteCard {
  name: string;
  initForm: any;
  doCreate: any;
  doDelete: any;
  doUpdate: any;
  refresh: any;
}
const useCRUD = ({ name, initForm = {}, doCreate, doDelete, doUpdate, refresh }: NoteCard) => {
  const modalVisible = ref(false);
  const modalAction = ref<'add' | 'edit' | 'view'>('view');
  const modalTitle = computed(() => ACTIONS[modalAction.value] + name);
  const modalLoading = ref(false);
  const modalFormRef = ref<any>();
  const modalForm = ref({ ...initForm });

  /** 新增 */
  function handleAdd(row: any) {
    modalAction.value = 'add';
    modalVisible.value = true;

    if (row) {
      modalForm.value = { ...row };
    } else {
      modalForm.value = { ...initForm };
    }
  }

  /** 修改 */
  function handleEdit(row: any) {
    modalAction.value = 'edit';
    modalVisible.value = true;
    modalForm.value = { ...row };
  }
  /** 先请求详情再修改 */
  async function handleEditByApi(id: string, requestApi: any, extraParams?: any) {
    modalAction.value = 'edit';
    const { data } = await requestApi(id);
    modalVisible.value = true;
    if (extraParams) {
      modalForm.value = { ...data, ...extraParams };
    } else {
      modalForm.value = { ...data };
    }
  }
  /** 查看 */
  function handleView(row: any) {
    modalAction.value = 'view';
    modalVisible.value = true;
    modalForm.value = { ...row };
  }

  /** 保存 */
  function handleSave() {
    if (!['edit', 'add'].includes(modalAction.value)) {
      modalVisible.value = false;
      return;
    }
    if (modalFormRef.value) {
      modalFormRef.value.formRef.validate(async (err: any) => {
        if (err) return;
        const actions = {
          add: {
            api: () => doCreate(modalFormRef.value.formRef.model),
            cb: () => window.$message?.success('新增成功')
          },
          edit: {
            api: () => doUpdate(modalFormRef.value.formRef.model),
            cb: () => window.$message?.success('编辑成功')
          }
        } as any;
        const action = actions[modalAction.value];

        try {
          modalLoading.value = true;
          const data = await action.api();

          if (!data.error) {
            action.cb();
            modalVisible.value = false;
            // eslint-disable-next-line no-unused-expressions
            data && refresh(data, modalAction.value);
          }
          modalLoading.value = false;
        } catch (error) {
          modalLoading.value = false;
        }
      });
    }
  }

  /** 删除 */
  async function handleDelete(id: string[] | string) {
    if (isNullOrWhitespace(id)) return;
    try {
      modalLoading.value = true;
      const data = await doDelete(id);
      if (!data.error) {
        window.$message?.success('删除成功');
        refresh(data, 'delete');
      }

      modalLoading.value = false;
    } catch (error) {
      modalLoading.value = false;
    }
  }

  return {
    modalVisible,
    modalAction,
    modalTitle,
    modalLoading,
    handleAdd,
    handleDelete,
    handleEdit,
    handleEditByApi,
    handleView,
    handleSave,
    modalForm,
    modalFormRef
  };
};
export default useCRUD;
