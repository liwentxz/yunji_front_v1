<template>
  <div class="card-box">
    <el-card>
      <!-- <div slot="header"></div> -->
      <slot name="header"></slot>
      <div class="cardContent">
        <slot></slot>
      </div>
      <slot name="footer"></slot>
    </el-card>
  </div>
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

<style lang="scss" scoped>
.card-box :deep(.el-card__body) {
  padding: 0;
}
</style>
