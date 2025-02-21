<template>
  <div class="layout_top">
    <div class="toolBox">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <div class="userInfoBox">
            <el-image
              class="userAvatarBox"
              style="width: 40px; height: 40px"
              :src="url"
            ></el-image>
            <div class="userNameBox">李稳</div>
          </div>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personage">个人中心</el-dropdown-item>
          <el-dropdown-item command="account">账号设置</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Headerbar",
  components: {},
  data() {
    return {
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
  methods: {
    handleCommand(command) {
      if (command == "personage") {
        // this.$setFontSize(14);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.layout_top {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #cfcfcf;

  .toolBox {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;

    .userInfoBox {
      min-width: 100px;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    }

    .userAvatarBox {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .userNameBox {
      margin: 0 10px;
      color: #000;
      font-size: 14px;
    }
  }
}
</style>
