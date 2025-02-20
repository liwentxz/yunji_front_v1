<template>
  <div class="layout_top">
    <div style="width: 10rem"></div>
    <div class="toolBox">
      <div style="width: 20%; height: 100%"></div>
      <div style="width: 80%; height: 100%"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Headerbar",
  components: {},
  data() {
    return {};
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
  color: #fff;
  background-color: #0cadf3;

  .toolBox {
    width: 15rem;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    background-color: #95e8fd;
  }
}
</style>
