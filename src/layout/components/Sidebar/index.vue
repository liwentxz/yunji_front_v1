<template>
  <el-menu
    default-active="1"
    class="menuContainer"
    :collapse="isCollapse"
    router
    @select="handleSelect"
  >
    <menu-item
      v-for="(menu, index) in menuData"
      :key="menu.path"
      :menu-item="menu"
    />
  </el-menu>
</template>

<script>
// 引入递归组件
import MenuItem from "./menu_item.vue";

export default {
  name: "Sidebar",
  components: {
    MenuItem,
  },
  data() {
    return {
      isCollapse: false,
      menuData: [
        {
          index: "1",
          title: "一级菜单 1",
          icon: "el-icon-location",
          path: "1",
          children: [
            {
              index: "1-1",
              title: "二级菜单 1-1",
              path: "2",
              // 可以继续嵌套 children 属性来创建更多层级的菜单
            },
            {
              index: "1-2",
              title: "二级菜单 1-2",
              path: "3",
              children: [
                {
                  index: "1-2-1",
                  title: "三级菜单 1-2-1",
                  path: "materials/steel",
                },
                // ... 更多菜单项
              ],
            },
            // ... 更多二级菜单项
          ],
        },
        {
          index: "2",
          title: "一级菜单 2",
          icon: "el-icon-menu",
          path: "4",
          // 没有 children 属性，表示这是一个没有子菜单的菜单项
        },
        // ... 更多一级菜单项
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log("------------------zhixng", key, keyPath);
      // 可以在这里处理菜单点击事件，比如统计点击次数等
    },
  },
};
</script>
