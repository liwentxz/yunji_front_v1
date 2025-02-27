<template>
  <div class="dialog-box">
    <el-dialog
      :visible.sync="curDialogVisible"
      :width="dialogWidth + 'px'"
      @open="handleDialogOpen"
      @close="handleDialogClose"
    >
      <template #title>
        <slot name="title"></slot>
      </template>
      <slot></slot>
      <template #footer>
        <slot name="footer"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "DialogPanel",
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    dialogWidth: {
      type: Number,
      default: 800,
    },
  },
  data() {
    return {
      curDialogVisible: this.visible,
    };
  },
  watch: {
    visible(newVal) {
      this.curDialogVisible = newVal;
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleDialogOpen() {
      this.$emit("open");
    },
    handleDialogClose() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog-box :deep(.el-dialog__body) {
  padding: 20px;
}
.dialog-box :deep(.el-dialog__header) {
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  border-bottom: 1px solid #cdcdcd;
  padding: 10px 20px;
}
.dialog-box :deep(.el-dialog__headerbtn) {
  top: 10px;
  font-size: 20px;
}
</style>
