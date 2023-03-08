export const state = () => ({
  isAutenticate: false,
  auth: {
    name: "Magnolia",
  },
});

export const mutations = {
  SET_IS_AUTENTICATE(state, value) {
    state.isAutenticate = value;
  },
};
export const actions = {
  isAutenticate(ctx, value) {
    console.log("autenticado");
    ctx.commit("SET_IS_AUTENTICATE", value);
  },
  logout(ctx) {
    console.log("autenticado");
    ctx.commit("SET_IS_AUTENTICATE", false);
  },
};

export const getters = {
  getIsAutenticate(state) {
    return state.isAutenticate;
  },
};
