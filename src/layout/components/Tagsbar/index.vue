<template>
  <div class="headerTagBox">
    <div class="collapse-btn" @click="collapseNav()">
      <i v-if="isCollapse" class="el-icon-s-unfold"></i>
      <i v-else class="el-icon-s-fold"></i>
    </div>
    <el-tag
      class="tagBox"
      :key="tag.menuId"
      v-for="tag in mainTabs"
      closable
      :disable-transitions="false"
      @close="handleTagClose(tag)"
      @click="selectedTabHandle(tag)"
    >
      {{ tag.name }}
    </el-tag>
  </div>
</template>
<script>
export default {
  name: "Tagsbar",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.headerTagBox {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;

  .collapse-btn {
    height: 100%;
    line-height: 100%;
    font-size: 26px;
    color: #5a5a5a;
    padding: 6px;
  }

  .tagBox {
    cursor: pointer;
  }
}
</style>
