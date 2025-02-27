<template>
  <div class="sidebarContainer">
    <div class="searchIconBox" v-if="isCollapse"></div>
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
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background-color: #ffffff;
  padding: 0 5px;
}
.menuContainer {
  width: 100%;
  height: 100%;
  overflow: auto;
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
