<template>
  <div id="layout" class="yunji_layout">
    <Headerbar />
    <splitpanes>
      <pane :size="menuPaneSize" min-size="5">
        <Sidebar />
      </pane>
      <pane :size="100 - menuPaneSize" min-size="60">
        <app-main />
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import { AppMain, Sidebar, Headerbar } from "./components";

export default {
  name: "Layout",
  components: {
    Sidebar,
    AppMain,
    Headerbar,
  },
  data() {
    return {
      menuPaneSize: 15,
    };
  },
};
</script>
<style lang="scss" scoped>
.yunji_layout {
  width: 100vw;
  background-color: rgb(245, 245, 245);
}

.el-menu {
  .el-sub-menu {
    .el-sub-menu__title {
      font-size: 16px;
    }
  }

  .el-menu-item {
    font-size: 16px;
  }

  .el-icon {
    font-size: 16px;
  }
}
</style>
