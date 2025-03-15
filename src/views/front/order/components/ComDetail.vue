<template>
  <DialogPanel
    :visible.sync="dialogVisible"
    :dialogWidth="800"
    @open="modalOpened"
    @close="closeDialog"
  >
    <template #title>
      <div>{{ dialogInfo.title }}</div>
    </template>
    <template #default>
      <div class="buy-box">
        <div class="buy-box-left">
          <div class="buy-box-left-btnTools">
            <el-button size="small" style="background-color: #1677ff">
              <div class="buy-box-left-btn">
                <iconpark-icon name="alipay" size="22" color="#ffffff">
                </iconpark-icon>
                <div>支付宝</div>
              </div></el-button
            >
            <el-button size="small" style="background-color: #2bae3f">
              <div class="buy-box-left-btn">
                <iconpark-icon
                  name="wechat"
                  size="22"
                  color="#ffffff"
                ></iconpark-icon>
                <div>微信支付</div>
              </div>
            </el-button>
          </div>
        </div>
        <div class="buy-box-right">
          <img src="@/assets/images/order/code.png" alt="" />
          <span>请扫描上面的二维码进行支付</span>
        </div>
      </div>
    </template>
  </DialogPanel>
</template>
<script>
import DialogPanel from "@/components/DialogPanel.vue";
export default {
  name: "OrderDetail",
  components: { DialogPanel },
  props: {
    orderDetail: {
      type: Object,
      default: () => {},
    },
    dialogInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    modalOpened() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.buy-box {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;

  .buy-box-left {
    width: 50%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #3a3a3a;
    .buy-box-left-btnTools {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .buy-box-left-btn {
      width: 100px;
      display: flex;
      flex-direction: row;
      align-items: center;

      div {
        color: #ffffff;
        font-size: 16px;
      }
    }
  }
  .buy-box-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 200px;
      height: 200px;
    }
    span {
      color: #3a3a3a;
    }
  }
}
</style>
