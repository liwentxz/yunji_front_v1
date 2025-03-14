<template>
  <div class="tag-box">
    <el-tag
      class="tag-item"
      v-for="tag in tagList"
      :key="tag.path"
      :closable="tag.name != '首页'"
      :style="{ color: isActive(tag) ? '#409eff' : '#000000' }"
      :color="isActive(tag) ? '#ecf5ff' : ''"
      effect="plain"
      :disable-transitions="false"
      @close="handleTagClose(tag)"
      @click="selectedTabHandle(tag)"
    >
      {{ tag.name }}
    </el-tag>

    <div class="tag-right-box">
      <el-dropdown @command="handleCommand">
        <span style="cursor: pointer">
          <iconpark-icon name="moreapp" size="20"></iconpark-icon>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="closeOthers"
            >关闭其他标签</el-dropdown-item
          >
          <el-dropdown-item command="closeAll">关闭全部标签</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Tagsbar",
  components: {},
  data() {
    return {
      activeTag: {},
    };
  },
  computed: {
    ...mapGetters(["sidebar"]),
    menuList() {
      return this.$store.state.menus.menuList;
    },
    tagList() {
      return this.$store.state.tags.tagList;
    },
  },
  mounted() {
    this.initTags();
  },
  methods: {
    isActive(item) {
      this.activeTag = item;
      return item.path === this.$route.path;
    },
    filterTags(menus) {
      menus.forEach((item) => {
        if (item.path == this.$route.path) {
          this.activeTag = item;
        }
        if (item.children) {
          this.filterTags(item.children);
        }
      });
    },
    initTags() {
      this.filterTags(this.menuList);
      this.$store.dispatch("tags/addTagList", this.activeTag);
    },
    handleTagClose(item) {
      this.$store.dispatch("tags/delTagList", item);
      if (this.isActive(item)) {
        this.toLastView(this.tagList);
      }
    },
    toLastView(tagList) {
      const latestTag = tagList.slice(-1)[0];
      if (latestTag) {
        this.$router.push(latestTag.path);
      }
    },
    selectedTabHandle(item) {
      this.$router.push(item.path);
    },

    handleCommand(command) {
      if (command == "closeOthers") {
        this.$store.dispatch("tags/delOthersTagList", this.activeTag);
      }
      if (command == "closeAll") {
        this.$store.dispatch("tags/delAllTagList", this.activeTag);
        this.toLastView(this.tagList);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.tag-box {
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 0 8px;
  border-bottom: 2px solid #e6e6e6;

  .tag-item {
    font-size: $default_font_size;
    margin-left: 8px;
    cursor: pointer;
  }
}

.tag-right-box {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  padding-right: 10px;
}
</style>
