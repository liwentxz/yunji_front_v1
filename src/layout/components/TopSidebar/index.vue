<template>
  <div class="topbarContainer">
    <el-menu
      class="topMenuContainer"
      :default-active="activeMenu"
      :unique-opened="true"
      mode="horizontal"
    >
      <menu-item v-for="menu in menuList" :key="menu.path" :menu-item="menu" />
    </el-menu>
  </div>
</template>

<script>
// 引入递归组件
import { MenuItem } from "../../components";
import { mapGetters } from "vuex";

export default {
  name: "TopSidebar",
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
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.topbarContainer {
  background-color: #ffffff;
  padding: 0 5px;
}
.topMenuContainer {
  display: flex;
  flex-direction: row;
}
</style>
