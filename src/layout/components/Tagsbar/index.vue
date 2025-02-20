<template>
  <div class="headerTagBox">
    <div class="collapse-btn" @click="collapseSidebar()">
      <i v-if="isCollapse" class="el-icon-s-unfold"></i>
      <i v-else class="el-icon-s-fold"></i>
    </div>
    <el-tag
      class="tagBox"
      :key="tag.menuId"
      v-for="tag in tagList"
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
import { mapGetters, mapState } from "vuex";
export default {
  name: "Tagsbar",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
    tagList() {
      return this.$store.state.tags.tagList;
    },
  },
  methods: {
    collapseSidebar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    handleTagClose(tag) {
      this.$store.dispatch("tags/delTagList", tag);
    },
    selectedTabHandle(tag) {},
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
    height: 30px;
    line-height: 30px;
    font-size: 26px;
    color: #5a5a5a;
    padding-left: 6px;
    text-align: center;
  }

  .tagBox {
    cursor: pointer;
  }
}
</style>
