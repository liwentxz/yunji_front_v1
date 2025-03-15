<template>
  <div class="panel-container">
    <div class="purchase-part">
      <div class="purchase-part-header">
        <div>青菜</div>
      </div>
      <div class="purchase-part-content">
        <CardPanel
          v-for="item in commodityList"
          :key="item.id"
          class="purchase-card"
        >
          <template v-slot:header>
            <div class="card-header-box">
              <div class="card-header-text">
                {{ item.title }}
              </div>
              <div class="card-header-icon">
                <iconpark-icon
                  name="viewlist"
                  size="20"
                  @click="openComDetail()"
                ></iconpark-icon>
                <iconpark-icon
                  name="shopping"
                  size="20"
                  @click="open()"
                ></iconpark-icon>
                <iconpark-icon
                  name="buy"
                  size="20"
                  @click="openBuy(item)"
                ></iconpark-icon>
              </div>
            </div>
          </template>
          <div class="purchase-img-box">
            <img :src="item.img" />
          </div>
          <template v-slot:footer>
            <div class="purchase-info-box">
              <div class="price-box">￥{{ item.price + "/" + item.unit }}</div>
              <div class="amount-box">
                <iconpark-icon name="reduceone" size="18"></iconpark-icon>
                <input style="width: 20px" size="mini" v-model="item.amount" />
                <iconpark-icon name="addone" size="18"></iconpark-icon>
              </div>
            </div>
          </template>
        </CardPanel>
      </div>
    </div>
    <ComDetail ref="comDetailRef" :dialogInfo="curDialogInfo"></ComDetail>
  </div>
</template>

<script>
import CardPanel from "@/components/CardPanel.vue";
import ComDetail from "../components/ComDetail.vue";
import vegetableList from "@/api/vegetableList.js";
export default {
  name: "",
  components: { CardPanel, ComDetail },
  data() {
    return {
      curDialogInfo: {},
      curOrderDetail: {},
      activeMenu: {},
      input: 0,
      commodityList: vegetableList,
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
    open() {
      this.$message({
        message: "已加入购物车",
        type: "success",
        center: true,
      });
    },
    openBuy(val) {
      this.curDialogInfo = {
        title: "购买",
        type: "buy",
      };
      this.curOrderDetail = val;
      this.$refs.comDetailRef.dialogVisible = true;
    },
    openComDetail() {
      this.curDialogInfo = {
        title: "商品详情",
        type: "commodity",
      };
      this.$refs.comDetailRef.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.purchase-part {
  width: 96%;
  display: flex;
  flex-direction: column;
  margin: auto;
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .purchase-part-header {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 16px;
    background-color: #fff;
    padding: 0 20px;
  }

  .purchase-part-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #f8f8f8;
    flex-wrap: wrap;

    .purchase-card {
      flex: 0 0 calc(12.5% - 12px);
    }

    iconpark-icon {
      color: #828282;
      cursor: pointer;
      &:hover {
        color: $active_text;
      }
    }
  }

  .purchase-img-box {
    display: flex;
    align-content: center;
    justify-content: center;

    img {
      width: 125px;
      height: 125px;
    }
  }
  .purchase-info-box {
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #cecece;

    .price-box {
      font-size: 16px;
      margin-left: 10px;
      color: red;
    }

    .amount-box {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
}
</style>
