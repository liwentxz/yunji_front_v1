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
  padding: 3px;
  overflow: auto;
}
</style>
