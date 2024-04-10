const AuthModule = {
  state: () => ({
    siteId: "",
    isErrorVisible: false,
    missLength: "id сайта должен содержать 24 символа",
    incorrectValue: "некорректное значение",
    serverError: "ошибка сервера",
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

  namespaced: true,
};

export default AuthModule;
