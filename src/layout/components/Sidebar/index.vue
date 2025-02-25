<template>
  <div class="sidebarContainer">
    <i class="searchIconBox el-icon-search" v-if="isCollapse"></i>
    <div class="searchBox" v-else>
      <el-input placeholder="请输入内容" size="small" v-model="input3">
      </el-input>
      <el-button size="small" icon="el-icon-search"></el-button>
    </div>
    <el-menu
      class="menuContainer"
      :default-active="activeMenu"
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
  display: flex;
  flex-direction: column;
  height: calc(100vh - 51px);
  background-color: #ffffff;
  padding: 0 5px;
}
.menuContainer {
  width: calc(100% - 10px);
  height: 100%;
  overflow: auto;
}
.searchBox {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100% - 10px);
  height: 40px;
  line-height: 40px;
}
.searchIconBox {
  font-size: 16px;
  width: calc(100% - 10px);
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>
