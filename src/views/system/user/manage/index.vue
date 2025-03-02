<template>
  <div class="panel-container">
    <splitpanes>
      <pane :size="15" min-size="5">
        <div
          style="
            height: 100%;
            box-sizing: border-box;
            padding: 0 6px;
            overflow: auto;
          "
        >
          <SelectTree></SelectTree>
        </div>
      </pane>
      <pane :size="85" min-size="60">
        <div style="box-sizing: border-box; padding: 0 6px">
          <ConditionPanel></ConditionPanel>
          <BaseTable :height="tableHeight"></BaseTable>
        </div>
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import CardPanel from "@/components/CardPanel.vue";
import ConditionPanel from "@/components/ConditionPanel.vue";
import SelectTree from "@/components/treeModule/SelectTree.vue";
import BaseTable from "@/components/tableModule/BaseTable.vue";
export default {
  name: "",
  components: { CardPanel, ConditionPanel, SelectTree, BaseTable },
  data() {
    return {
      tableHeight: 200,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.panel-container {
  height: 100%;
  background-color: #ffffff;
}
</style>
