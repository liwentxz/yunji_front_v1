<template>
  <div>
    <div style="margin-top: -6px">
      <i
        v-if="isCollapse"
        style="
          font-size: 16px;
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: center;
        "
        class="el-icon-search"
      ></i>
      <el-input
        v-else
        placeholder="请输入内容"
        v-model="input3"
        class="input-with-select"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <el-menu class="menuContainer" :collapse="isCollapse" router>
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
  },
  methods: {},
  mounted() {},
};
</script>
