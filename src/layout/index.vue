<template>
  <div id="layout" class="yunji_layout">
    <Headerbar />
    <splitpanes>
      <pane :size="menuPaneSize" min-size="5">
        <Sidebar />
      </pane>
      <pane :size="100 - menuPaneSize" min-size="60">
        <Tagsbar />
        <app-main />
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import { AppMain, Sidebar, Headerbar, Tagsbar } from "./components";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Layout",
  components: {
    Sidebar,
    AppMain,
    Headerbar,
    Tagsbar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebar"]),
    menuPaneSize() {
      return this.sidebar.size;
    },
  },
};
</script>
<style lang="scss" scoped>
.yunji_layout {
  width: 100vw;
  background-color: #fafafa;
}
.yunji_layout :deep(.splitpanes__splitter) {
  width: 2px;
  background: linear-gradient(to right, #ebebeb, #f7f7f7);
}
</style>
