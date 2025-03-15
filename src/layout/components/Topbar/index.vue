<template>
  <div class="topbar-container">
    <div
      class="topbar-item-box"
      v-for="menu in menuList"
      :key="menu.path"
      :style="{
        color: activeMenu == menu.path ? '#ffffff' : '',
        backgroundColor: activeMenu == menu.path ? '#409eff' : '',
      }"
      @click="menuItemSelected(menu)"
    >
      {{ menu.menuName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Topbar",
  components: {},
  data() {
    return {};
  },
  computed: {
    menuList() {
      return this.$store.state.menus.menuList;
    },
    activeMenu() {
      const route = this.$route;
      const { path } = route;
      return path;
    },
  },
  mounted() {},
  methods: {
    menuItemSelected(menu) {
      this.$router.push(menu.path);
    },
  },
};
</script>
<style lang="scss" scoped>
.topbar-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  padding: 0 5px;
}
.topbar-item-box {
  height: 50px;
  line-height: 50px;
  white-space: nowrap;
  padding: 0 10px;
  font-size: 16px;
  color: $text_color;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: $active_text;
  }
}
</style>
