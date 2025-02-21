<template>
  <div class="sidebarContainer">
    <div class="searchBox">
      <i class="searchIconBox el-icon-search" v-if="isCollapse"></i>
      <el-input
        v-if="!isCollapse"
        placeholder="请输入内容"
        size="small"
        v-model="input3"
      >
      </el-input>
      <el-button
        v-if="!isCollapse"
        size="small"
        icon="el-icon-search"
      ></el-button>
    </div>

    <el-menu
      :default-active="activeMenu"
      class="menuContainer"
      :collapse="isCollapse"
      :unique-opened="true"
    >
      <menu-item v-for="menu in menuList" :key="menu.path" :menu-item="menu" />
    </el-menu>
  </div>
</template>

<script>
// 引入递归组件
import MenuItem from "./menu_item.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Sidebar",
  components: {
    MenuItem,
  },
  data() {
    return {
      input3: "",
    };
  },
  computed: {
    ...mapGetters(["sidebar"]),
    menuList() {
      return this.$store.state.menus.menuList;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
    activeMenu() {
      const route = this.$route;
      const { path } = route;
      return path;
    },
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.sidebarContainer {
  width: 100%;
  height: calc(100vh - 51px);
  background-color: #ffffff;
}
.searchBox {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.searchIconBox {
  font-size: 16px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>
