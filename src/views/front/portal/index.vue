<template>
  <div class="yunji_portal">
    <div class="portal_top">
      <div style="width: 10rem">云际科技</div>
      <div class="toolBox">
        <div style="width: 20%; height: 100%"></div>
        <div style="width: 80%; height: 100%"></div>
      </div>
    </div>
    <div style="width: 100%">
      <splitpanes>
        <pane :size="menuPaneSize" min-size="4">
          <div style="width: 100%; display: flex; flex-direction: column">
            <el-menu
              :collapse="isCollapse"
              :default-active="curActiveIndex"
              :collapse-transition="true"
              menu-trigger="click"
              :unique-opened="true"
            >
              <!-- :router="true" -->
              <menuItem :menuNameShow="isCollapse" :menuListData="menuList">
              </menuItem>
            </el-menu>
          </div>
        </pane>

        <pane :size="100 - menuPaneSize" min-size="60">
          <div class="headerTagBox">
            <div class="collapse-btn" @click="collapseNav()">
              <i v-if="isCollapse" class="el-icon-s-unfold"></i>
              <i v-else class="el-icon-s-fold"></i>
            </div>
            <el-tag
              class="tagBox"
              :key="tag.menuId"
              v-for="tag in mainTabs"
              closable
              :disable-transitions="false"
              @close="handleTagClose(tag)"
              @click="selectedTabHandle(tag)"
            >
              {{ tag.name }}
            </el-tag>
          </div>
          <div class="mainContainer">
            <keep-alive>
              <component :is="currentComponent"></component>
            </keep-alive>
          </div>
        </pane>
      </splitpanes>
    </div>
  </div>
</template>

<script>
import menuItem from "@/components/yunji_menu_tree/index.vue";
import Component1 from "@/components/product/index.vue";
export default {
  name: "",
  components: { menuItem },
  data() {
    return {
      menuPaneSize: 15,
      menuList: [],
      isCollapse: false,
      curActiveIndex: "",
      openMenus: [],
      currentComponent: null,
    };
  },
  computed: {
    mainTabs: {
      get() {
        return this.$store.state.tab.mainTabs;
      },
      set(val) {
        this.$store.commit("updateMainTabs", val);
      },
    },
    mainTabsActiveName: {
      get() {
        return this.$store.state.tab.mainTabsActiveName;
      },
      set(val) {
        this.$store.commit("updateMainTabsActiveName", val);
      },
    },
  },
  created() {},
  mounted() {
    this.getMenu();
  },
  methods: {
    initMenuList() {},
    collapseNav() {
      if (this.isCollapse == true) {
        this.isCollapse = false;
        this.menuPaneSize = 15;
      } else {
        this.isCollapse = true;
        this.menuPaneSize = 4;
      }
    },

    findObjIndex(val) {
      let curIndex = 0;
      this.mainTabs.map((item, index) => {
        if (item.name == val) {
          curIndex = index;
        }
      });
      return curIndex;
    },

    handleTagClose(tag) {
      if (this.mainTabs.length > 1) {
        // 当前选中tag被删除
        const curIndex = this.findObjIndex(tag.name);
        if (tag.name == this.mainTabsActiveName) {
          const newCurTab =
            this.mainTabs[curIndex + 1] || this.mainTabs[curIndex - 1];
          this.mainTabsActiveName = newCurTab.name;
          this.curActiveIndex = newCurTab.menuId;
        }
      } else {
        this.curActiveIndex = "";
      }
      this.mainTabs = this.mainTabs.filter((item) => item.name !== tag.name);
    },
    selectedTabHandle(tag) {
      this.mainTabsActiveName = tag.name;
      this.curActiveIndex = "";
      const curTab = this.mainTabs.filter((item) => item.name == tag.name)[0];
      this.curActiveIndex = curTab.menuId;
    },

    getMenu() {
      this.$http.get("/api/menus").then((res) => {
        this.menuList = res.data;
      });
    },
  },
};
</script>

<style>
.yunji_portal {
  width: 100vw;
  background-color: rgb(245, 245, 245);

  .portal_top {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    background-color: rgb(12, 173, 243);

    .toolBox {
      width: 15rem;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: auto;
      background-color: bisque;
    }
  }
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

.headerTagBox {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;

  .collapse-btn {
    height: 100%;
    line-height: 100%;
    font-size: 26px;
    color: #5a5a5a;
    padding: 6px;
  }

  .tagBox {
    cursor: pointer;
  }
}
.mainContainer {
  width: 100%;
  height: 600px;
  background-color: rgb(202, 202, 202);
}
</style>
