<template>
  <div>
    <template v-if="menuItem.children.length == 0">
      <el-menu-item :index="menuItem.path">
        <i :class="menuItem.icon"></i>
        <span slot="title">{{ menuItem.menuName }}</span>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="menuItem.path" popper-append-to-body>
      <template slot="title">
        <i :class="menuItem.icon"></i>
        {{ menuItem.menuName }}
      </template>
      <menu-item
        v-for="(child, index) in menuItem.children"
        :key="child.path"
        :menu-item="child"
      />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  components: {},
  props: {
    menuItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
