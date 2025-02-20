import menuData from "@/api/data";

function changeMenuDataToTree(list) {
  const map = new Map();
  list.forEach((item) => {
    item.children = []; // 初始化 children
    map.set(item.menuId, item);
  });

  // 2. 构建树形结构
  const menuTree = [];
  list.forEach((item) => {
    const parentId = item.parentId;
    if (parentId === null || parentId === undefined || !map.has(parentId)) {
      menuTree.push(item); // 根节点
    } else {
      const parent = map.get(parentId);
      parent.children.push(item); // 子节点挂载
    }
  });

  return menuTree;
}

const state = {
  menuList: [],
};

const mutations = {
  GET_MENU_LIST: (state, list) => {
    state.menuList = list;
  },
};

const actions = {
  getMenuListAsync({ commit }) {
    setTimeout(() => {
      const menuTree = changeMenuDataToTree(menuData);
      commit("GET_MENU_LIST", menuTree);
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
