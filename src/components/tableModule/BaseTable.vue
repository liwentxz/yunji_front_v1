<template>
  <el-table
    :data="tableData"
    :style="{ width: width }"
    :height="height"
    size="medium"
    :highlight-current-row="false"
    header-row-class-name="table-header-class"
    header-cell-class-name="table-header-cell-class"
  >
    <el-table-column
      v-for="column in columns"
      :key="column.code"
      :prop="column.code"
      :label="column.label"
      width="180"
      :sortable="column.sort == 1 ? true : false"
      align="center"
    >
      <template slot-scope="scope">
        <span>{{ scope.row[column.code] }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "BaseTable",
  components: {},
  props: {
    height: {
      type: Number,
    },
    width: {
      type: String,
    },
    columns: {
      type: Array,
    },
    tableData: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
::v-deep .table-header-class th {
  background-color: $table_header_background !important;
}
::v-deep .table-header-cell-class {
  padding: 5px 0;
  color: $bold_text;
}
</style>
