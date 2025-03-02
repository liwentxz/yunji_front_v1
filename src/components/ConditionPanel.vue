<template>
  <div class="condition-container">
    <el-form
      ref="filterForm"
      :inline="true"
      :model="filterForm"
      size="small"
      label-position="right"
      :disabled="false"
    >
      <MainPanelHeader>
        <MainPanelTitle></MainPanelTitle>
        <el-form-item style="margin-left: auto">
          <AllButtons @resetForm="handelResetForm"></AllButtons>
        </el-form-item>
      </MainPanelHeader>

      <el-row :gutter="15" v-for="(row, rowIndex) in formData" :key="rowIndex">
        <el-col :span="6" v-for="(col, colIndex) in row" :key="colIndex">
          <el-form-item :prop="col.code">
            <template #label>
              <div class="form-item-label-box">
                {{ col.label + ":" }}
              </div>
            </template>
            <el-input
              v-model="filterForm[col.code]"
              :placeholder="col.placeholder"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import formList from "@/api/formData";
import { listTo2D } from "@/utils/convert.js";
import MainPanelTitle from "./MainPanelTitle.vue";
import MainPanelHeader from "./MainPanelHeader.vue";
import AllButtons from "./AllButtons.vue";
export default {
  name: "ConditionPanel",
  components: { MainPanelTitle, MainPanelHeader, AllButtons },
  data() {
    return {
      formData: [],
      filterForm: this.initFilterForm(),
    };
  },
  created() {
    this.initFormData();
  },
  mounted() {},
  methods: {
    initFormData() {
      this.formData = listTo2D(formList, 2, 4);
    },
    initFilterForm() {
      let result = {};
      formList.forEach((item) => {
        result[item.code] = item.value;
      });
      return result;
    },
    handelResetForm() {
      this.resetForm("filterForm");
    },
    onSubmit() {},
  },
};
</script>
<style lang="scss" scoped>
::v-deep .el-form-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 5px;
}

.form-item-label-box {
  color: $bold_text;
  font-weight: bold;
}
</style>
