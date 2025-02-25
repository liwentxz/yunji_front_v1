<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text"
        >操作按钮</el-button
      >
    </div>
    <!-- <slot name="header">默认头部</slot>
    <div class="card-content">
      <slot>默认内容</slot>
    </div>
    <slot name="footer">默认底部</slot> -->
  </el-card>
</template>

<script>
export default {
  name: "CardPanel",
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
