<template>
  <div class="panel-container">
    <div
      class="exhibition-box"
      v-for="menu in activeMenu.children"
      :key="menu.path"
    >
      <div class="exhibition-box-left"></div>
      <div class="exhibition-box-right">
        <div class="exhibition-box-right-header">
          <iconpark-icon
            :name="menu.icon"
            size="22"
            color="#409eff"
          ></iconpark-icon>
          <div class="header-title">{{ menu.menuName }}</div>
        </div>
        <div class="exhibition-box-right-content">
          <div
            class="content-item"
            v-for="item in menu.children"
            :key="item.path"
            @click="menuItemSelected(item)"
          >
            <img class="item-img" :src="item.icon" />
            <div
              style="
                width: 60px;
                height: 1px;
                background-color: #52e1fa;
                margin: auto;
              "
            ></div>
            <div class="item-label">{{ item.menuName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      activeMenu: {},
    };
  },
  computed: {
    menuList() {
      return this.$store.state.menus.menuList;
    },
  },
  created() {},
  mounted() {
    const route = this.$route;
    const { path } = route;
    this.menuList.forEach((item) => {
      if (item.path == path) {
        this.activeMenu = item;
      }
    });
  },
  methods: {
    menuItemSelected(menu) {
      this.$router.push(menu.path);
    },
  },
};
</script>

<style lang="scss" scoped>
.exhibition-box {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;

  .exhibition-box-left {
    width: 200px;
    height: 100%;
    border-radius: 5%;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .exhibition-box-right {
    width: calc(100% - 200px);
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin-left: 16px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .exhibition-box-right-header {
      height: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 10px;
      border-bottom: 1px solid #cecece;

      .header-title {
        font-size: 16px;
      }
    }

    .exhibition-box-right-content {
      display: flex;
      flex-direction: row;
      margin-top: 15px;

      .content-item {
        height: 100%;
        margin: 0 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        border-radius: 20px;
        border: 1px solid #52e1fa;
        box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.102);

        &:hover {
          background-color: $active_background;
        }

        .item-img {
          width: 100px;
          height: 100px;
          border-radius: 20px;
        }

        .item-label {
          height: 20px;
          line-height: 20px;
          margin: 5px 0;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
