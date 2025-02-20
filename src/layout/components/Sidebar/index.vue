<template>
  <el-menu
    class="menuContainer"
    :collapse="isCollapse"
    router
    @select="handleSelect"
  >
    <menu-item v-for="menu in menuList" :key="menu.path" :menu-item="menu" />
  </el-menu>
</template>

<script>
// 引入递归组件
import MenuItem from "./menu_item.vue";

export default {
  name: "Sidebar",
  components: {
    MenuItem,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    menuList() {
      return this.$store.state.menus.menuList;
    },
  },
  methods: {
    handleSelect(key, keyPath) {},
  },
  mounted() {},
};
</script>
