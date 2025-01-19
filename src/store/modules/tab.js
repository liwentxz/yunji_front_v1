export default {
  state: {
    //所有标签页
    mainTabs: [],
    // 当前标签页名
    mainTabsActiveName: "",
  },
  mutations: {
    updateMainTabs(state, tabs) {
      state.mainTabs = tabs;
    },
    updateMainTabsActiveName(state, menuName) {
      state.mainTabsActiveName = menuName;
    },
  },
};
