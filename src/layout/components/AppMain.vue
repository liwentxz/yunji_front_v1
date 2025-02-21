<template>
  <div class="mainContainer">
    <keep-alive :include="cachedViews">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "AppMain",
  components: {},
  computed: {
    cachedViews() {
      return [];
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.mainContainer {
  width: 100%;
  height: calc(100vh - 91px);
  background-color: #f5f5f5;
}
</style>
