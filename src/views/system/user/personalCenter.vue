<template>
  <div class="portalContainer">
    <CardPanel style="width: 400px">
      <template v-slot:header>
        <div class="headerBox">
          <i class="headerIcon el-icon-collection-tag"></i>
          <div class="headerText">个人信息</div>
        </div>
      </template>
      <div></div>
      <template v-slot:footer> </template>
    </CardPanel>
  </div>
</template>

<script>
import FoundationBarChart from "@/components/chartAnalysis/barChart/foundationBarChart.vue";
import StackLineChart from "@/components/chartAnalysis/lineChart/stackLineChart.vue";
import CardPanel from "@/components/cardPanel/index.vue";
export default {
  name: "",
  components: { FoundationBarChart, StackLineChart, CardPanel },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.portalContainer {
  width: auto;
  padding: 3px;

  .headerBox {
    width: 100%;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #cecece;

    .headerIcon {
      width: 36px;
      height: 36px;
      font-size: 20px;
      text-align: center;
      line-height: 36px;
      color: #53a8fd;
    }
    .headerText {
      width: 100px;
      height: 36px;
      font-size: 16px;
      line-height: 36px;
    }
  }
}
</style>
