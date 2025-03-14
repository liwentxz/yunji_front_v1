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
                  name="shopping"
                  size="20"
                  color="#828282"
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
                <iconpark-icon
                  name="reduceone"
                  size="18"
                  color="#828282"
                ></iconpark-icon>
                <input style="width: 20px" size="mini" v-model="item.amount" />
                <iconpark-icon
                  name="addone"
                  size="18"
                  color="#828282"
                ></iconpark-icon>
              </div>
            </div>
          </template>
        </CardPanel>
      </div>
    </div>
  </div>
</template>

<script>
import CardPanel from "@/components/CardPanel.vue";
export default {
  name: "",
  components: { CardPanel },
  data() {
    return {
      activeMenu: {},
      input: 0,
      commodityList: [
        {
          id: 1,
          title: "螺丝椒",
          img: require("@/assets/images/order/luosijiao.png"),
          price: 8,
          unit: "kg",
          amount: 0,
        },
        {
          id: 2,
          title: "螺丝椒",
          img: require("@/assets/images/order/luosijiao.png"),
          price: 8,
          unit: "kg",
          amount: 0,
        },
        {
          id: 3,
          title: "螺丝椒",
          img: require("@/assets/images/order/luosijiao.png"),
          price: 8,
          unit: "kg",
          amount: 0,
        },
        {
          id: 4,
          title: "螺丝椒",
          img: require("@/assets/images/order/luosijiao.png"),
          price: 8,
          unit: "kg",
          amount: 0,
        },
        {
          id: 5,
          title: "螺丝椒",
          img: require("@/assets/images/order/luosijiao.png"),
          price: 8,
          unit: "kg",
          amount: 0,
        },
        {
          id: 6,
          title: "螺丝椒",
          img: require("@/assets/images/order/luosijiao.png"),
          price: 8,
          unit: "kg",
          amount: 0,
        },
        {
          id: 7,
          title: "螺丝椒",
          img: require("@/assets/images/order/luosijiao.png"),
          price: 8,
          unit: "kg",
          amount: 0,
        },
        {
          id: 8,
          title: "螺丝椒",
          img: require("@/assets/images/order/luosijiao.png"),
          price: 8,
          unit: "kg",
          amount: 0,
        },

        {
          id: 9,
          title: "螺丝椒",
          img: require("@/assets/images/order/luosijiao.png"),
          price: 8,
          unit: "kg",
          amount: 0,
        },
        {
          id: 10,
          title: "螺丝椒",
          img: require("@/assets/images/order/luosijiao.png"),
          price: 8,
          unit: "kg",
          amount: 0,
        },
      ],
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
      cursor: pointer;
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
