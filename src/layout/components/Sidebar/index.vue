<template>
  <div class="sidebarContainer">
    <el-menu
      class="menuContainer"
      :default-active="activeMenu"
      :collapse="isCollapse"
      :unique-opened="true"
    >
      <menu-item v-for="menu in menuList" :key="menu.path" :menu-item="menu" />
    </el-menu>
    <div class="tag-left-box">
      <div class="collapse-btn" @click="collapseSidebar()">
        <iconpark-icon
          v-if="isCollapse"
          name="menufoldone"
          size="26"
        ></iconpark-icon>
        <iconpark-icon v-else name="menuunfoldone" size="26"></iconpark-icon>
      </div>
    </div>
  </div>
</template>

<script>
// 引入递归组件
import { MenuItem } from "../../components";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Sidebar",
  components: {
    MenuItem,
  },
  data() {
    return {
      input: "",
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
  methods: {
    collapseSidebar() {
      this.$store.dispatch("app/toggleSideBar");
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.sidebarContainer {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  background-color: #ffffff;
  padding: 0 5px;
}
.menuContainer {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.collapse-btn {
  height: 30px;
  line-height: 30px;
  font-size: 26px;
  color: #5a5a5a;
  text-align: center;
}
</style>
