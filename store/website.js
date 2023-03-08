export const state = () => ({
  showSearch: true,
  showFilter: false,
  showMenu: false,
});

export const mutations = {
  SET_SHOWSEARCH(state, value) {
    state.showSearch = value;
  },
  SET_SHOW_MENU(state, value) {
    state.showMenu = value;
  },
  SET_SHOW_FILTER(state, value) {
    state.showFilter = value;
  },
};
export const actions = {
  showSearch({ commit }, value) {
    commit("SET_SHOWSEARCH", value);
  },
  showMenu({ commit }, value) {
    commit("SET_SHOW_MENU", value);
  },
  showFilter({ commit }, value) {
    commit("SET_SHOW_FILTER", value);
  },
};

export const getters = {
  getShowSearch(state) {
    return state.showSearch;
  },
  getShowMenu(state) {
    return state.showMenu;
  },
  getShowFilter(state) {
    return state.showFilter;
  },
};
