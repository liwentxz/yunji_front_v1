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
      <el-row :gutter="15" v-for="(row, rowIndex) in formData" :key="rowIndex">
        <el-col :span="6" v-for="(col, colIndex) in row" :key="colIndex">
          <el-form-item class="form-item-box">
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
      <el-row>
        <el-button @click="handelResetForm()">重置</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import formList from "@/api/formData";
import { listTo2D } from "@/utils/convert.js";
export default {
  name: "ConditionPanel",
  components: {},
  data() {
    return {
      formData: [],
      filterForm: {
        name: "",
      },
    };
  },
  created() {
    this.initFilterForm();
  },
  mounted() {},
  methods: {
    initFilterForm() {
      formList.forEach((item) => {
        this.filterForm[item.code] = item.value;
      });
      this.formData = listTo2D(formList, 2, 4);
    },
    handelResetForm() {
      this.resetForm("filterForm");
    },
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .form-item-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-item-label-box {
  font-weight: bold;
}
</style>
