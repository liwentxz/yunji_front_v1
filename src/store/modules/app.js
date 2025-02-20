const state = {
  sidebar: {
    opened: sessionStorage.getItem("sidebarStatus") == 0 ? false : true,
    withoutAnimation: false,
    size: 15,
  },
};

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    if (state.sidebar.opened) {
      state.sidebar.size = 15;
      sessionStorage.setItem("sidebarStatus", 1);
    } else {
      state.sidebar.size = 3.5;
      sessionStorage.setItem("sidebarStatus", 0);
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    sessionStorage.setItem("sidebarStatus", 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
};

const actions = {
  toggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit("CLOSE_SIDEBAR", withoutAnimation);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
