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
  height: 600px;
  background-color: rgb(202, 202, 202);
}
</style>
