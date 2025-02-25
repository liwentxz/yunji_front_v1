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
  width: calc(100% - 6px);
  height: calc(100vh - 97px);
  background-color: #fcfcfc;
  border-radius: 10px;
  margin: 3px;
  overflow: auto;
}
</style>
