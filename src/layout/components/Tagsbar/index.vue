<template>
  <div class="headerTagBox">
    <div class="collapse-btn" @click="collapseSidebar()">
      <i v-if="isCollapse" class="el-icon-s-unfold"></i>
      <i v-else class="el-icon-s-fold"></i>
    </div>

    <el-tag
      class="tagBox"
      v-for="tag in tagList"
      :key="tag.path"
      :closable="tag.name != '首页'"
      :color="isActive(tag) ? '#ecf5ff' : ''"
      effect="plain"
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
    isActive(item) {
      return item.path === this.$route.path;
    },
    collapseSidebar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    handleTagClose(item) {
      this.$store.dispatch("tags/delTagList", item);
      if (this.isActive(item)) {
        this.toLastView(this.tagList, item);
      }
    },
    toLastView(tagList, item) {
      const latestTag = tagList.slice(-1)[0];
      if (latestTag) {
        this.$router.push(latestTag.path);
      }
    },
    selectedTabHandle(item) {
      this.$router.push(item.path);
    },
  },
};
</script>
<style lang="scss" scoped>
.headerTagBox {
  width: calc(100% - 6px);
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  margin: 0 3px;

  .collapse-btn {
    height: 30px;
    line-height: 30px;
    font-size: 26px;
    color: #5a5a5a;
    padding-left: 6px;
    text-align: center;
  }

  .tagBox {
    margin-left: 8px;
    cursor: pointer;
  }
}
</style>
