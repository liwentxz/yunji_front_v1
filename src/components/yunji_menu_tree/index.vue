<template>
  <div class="menuContainer">
    <div v-for="(item, index) in menuListData" :key="index">
      <el-submenu
        v-if="item.children.length > 0"
        :key="index"
        :index="item.menuId"
      >
        <template #title>
          <i style="vertical-align: middle" class="el-icon-folder"></i>
          <span v-if="!menuNameShow">{{ item.menuName }}</span>
        </template>
        <menuItem :menuListData="item.children"> </menuItem>
      </el-submenu>
      <el-menu-item
        v-else
        :key="index + 1"
        :index="item.menuId"
        @click="menuItemSelected(item)"
      >
        <i style="vertical-align: middle" class="el-icon-tickets"></i>
        <span v-if="!menuNameShow">{{ item.menuName }}</span>
      </el-menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuItem",
  props: {
    menuListData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    menuNameShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    mainTabs: {
      get() {
        return this.$store.state.tab.mainTabs;
      },
      set(val) {
        this.$store.commit("updateMainTabs", val);
      },
    },
    mainTabsActiveName: {
      get() {
        return this.$store.state.tab.mainTabsActiveName;
      },
      set(val) {
        this.$store.commit("updateMainTabsActiveName", val);
      },
    },
  },
  created() {},
  methods: {
    menuItemSelected(menu) {
      if (this.mainTabs.find((item) => item.menuId == menu.menuId)) {
        console.log("标签" + '"' + menu.menuName + '"' + "已存在");
      } else {
        var tab = {
          menuId: menu.menuId,
          icon: "",
          name: menu.menuName,
          menuUrl: menu.menuUrl,
        };
        this.mainTabs.push(tab);
      }
      //设置多页签活跃面板
      this.mainTabsActiveName = menu.menuName;
      // this.$store.commit('updateMainTabsActiveName', menuObj.menuName)
    },
  },
};
</script>
<style scoped>
.menuContainer :deep(.el-menu-item) {
  font-size: 14px;
}
</style>
