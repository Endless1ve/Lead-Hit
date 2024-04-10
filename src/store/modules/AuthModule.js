const AuthModule = {
  state: () => ({
    siteId: "",
    isErrorVisible: false,
    missLength: "id сайта должен содержать 24 символа",
    incorrectValue: "Некорректное значение",
    serverError: "Ошибка сервера",
    errorText: "",
    isLoading: false,
  }),

  getters: {
    siteId(state) {
      return state.siteId;
    },

    isErrorVisible(state) {
      return state.isErrorVisible;
    },

    errorText(state) {
      return state.errorText;
    },

    isLoading(state) {
      return state.isLoading;
    },
  },

  mutations: {
    updateSiteId(state, value) {
      state.siteId = value;
    },

    toggleError(state, bool) {
      state.isErrorVisible = bool;
    },

    setErrorText(state, value) {
      state.errorText = value;
    },
  },

  actions: {
    setError({ commit }, errorText) {
      commit("toggleError", true);
      commit("setErrorText", errorText);
    },

    clearError({ commit }) {
      commit("toggleError", false);
      commit("setErrorText", "");
    },

    validateInput({ state, dispatch }) {
      if (state.siteId.length === 24) {
        dispatch("clearError");
      } else {
        dispatch("setError", state.missLength);
      }
    },
  },

  namespaced: true,
};

export default AuthModule;
