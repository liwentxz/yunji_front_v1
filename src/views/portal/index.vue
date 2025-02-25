<template>
  <div class="portalContainer">
    <FoundationBarChart></FoundationBarChart>
    <CardPanel>
      <!-- <template v-slot:header>
      <h3>自定义头部内容</h3>
    </template>
    <p>这是自定义的卡片内容。</p>
    <template v-slot:footer>
      <el-button type="primary">自定义底部按钮</el-button>
    </template> -->
    </CardPanel>
  </div>
</template>

<script>
import FoundationBarChart from "@/components/chartAnalysis/barChart/foundationBarChart.vue";
import CardPanel from "@/components/cardPanel/index.vue";
export default {
  name: "",
  components: { FoundationBarChart, CardPanel },
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
  padding: 10px;
}
</style>
