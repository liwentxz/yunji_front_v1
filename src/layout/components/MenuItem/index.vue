<template>
  <div class="menu-item-box" :style="{ width: 100 + 'px' }">
    <template v-if="menuItem.children.length == 0">
      <el-menu-item :index="menuItem.path" @click="menuItemSelected(menuItem)">
        <template slot="title">
          {{ menuItem.menuName }}
        </template>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="menuItem.path" popper-append-to-body>
      <template slot="title">
        {{ menuItem.menuName }}
      </template>
      <menu-item
        v-for="child in menuItem.children"
        :key="child.path"
        :menu-item="child"
      />
    </el-submenu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MenuItem",
  components: {},
  props: {
    menuItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mainTabsActiveName: "",
    };
  },
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  mounted() {
    if (this.menuItem.menuName == "首页") {
      this.$store.dispatch("tags/addTagList", this.menuItem);
    }
  },
  methods: {
    menuItemSelected(menu) {
      this.$store.dispatch("tags/addTagList", menu);
      this.mainTabsActiveName = menu.menuName;
      this.$router.push(menu.path);
    },
  },
};
</script>
<style lang="scss" scoped>
.menu-item-box {
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ::v-deep(.el-menu-item) {
    height: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  ::v-deep(.el-submenu) {
    height: inherit;
  }
  ::v-deep(.el-submenu__title) {
    height: inherit;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  ::v-deep(.el-submenu__icon-arrow) {
    display: none !important;
  }

  .el-menu-item .el-icon-arrow-down {
    display: none !important;
  }
}
</style>
