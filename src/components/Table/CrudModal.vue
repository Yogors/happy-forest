<template>
  <n-modal
    v-model:show="show"
    :style="{ width }"
    preset="card"
    :title="title"
    size="huge"
    :bordered="false"
    class="crud-modal"
  >
    <slot />
    <template v-if="showFooter" #footer>
      <footer class="w-full flex pt-16px justify-end" :size="24">
        <slot name="footer">
          <n-button class="w-72px" @click="show = false">取消</n-button>
          <n-button class="w-72px ml-20px" :loading="loading" type="primary" @click="emit('onSave')">保存</n-button>
        </slot>
      </footer>
    </template>
  </n-modal>
</template>

<script setup lang="tsx">
import { computed } from 'vue';
const props = defineProps({
  width: {
    type: String,
    default: '800px'
  },
  title: {
    type: String,
    default: ''
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  visible: {
    type: Boolean,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:visible', 'onSave']);
const show = computed({
  get() {
    return props.visible;
  },
  set(v) {
    emit('update:visible', v);
  }
});
</script>
<style lang="scss">
.crud-modal {
  .n-card__content {
    max-height: 600px;
    overflow-y: auto;
  }
}
</style>
