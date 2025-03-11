<template>
  <div class="panel-container">
    <div
      class="exhibition-box"
      v-for="menu in activeMenu.children"
      :key="menu.path"
    >
      <div class="exhibition-box-left"></div>
      <div class="exhibition-box-right">
        <div class="exhibition-box-right-header">{{ menu.menuName }}</div>
        <div class="exhibition-box-right-content">
          <div
            class="content-item"
            v-for="item in menu.children"
            :key="item.path"
            @click="menuItemSelected(item)"
          >
            <img class="item-img" :src="url"></img>
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
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
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

  .exhibition-box-left {
    width: 220px;
    height: 100%;
    background-color: aqua;
  }

  .exhibition-box-right {
    width: calc(100% - 200px);
    height: 100%;
    display: flex;
    flex-direction: column;

    .exhibition-box-right-header {
        height: 50px;
      font-size: 18px;
      display: flex;
        flex-direction: row;
        align-items: center;
    }

    .exhibition-box-right-content {
      display: flex;
      flex-direction: row;
      cursor: pointer;

      .content-item {
        height: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .item-img {
          width: 60px;
          height: 60px;
          border-radius: 10px;
        }

        .item-label {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
