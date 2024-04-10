import axios from "axios";

const AuthModule = {
  state: () => ({
    siteId: "",
    isErrorVisible: false,
    isInputValid: false,
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

    setInputValidity(state, bool) {
      state.isInputValid = bool;
    },

    setLoading(state, bool) {
      state.isLoading = bool;
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

    validateInput({ state, dispatch, commit }) {
      if (state.siteId.length === 24) {
        dispatch("clearError");
        commit("setInputValidity", true);
      } else {
        dispatch("setError", state.missLength);
        commit("setInputValidity", false);
      }
    },

    async sendData({ state, commit, dispatch }) {
      try {
        dispatch("validateInput");

        if (state.isInputValid) {
          commit("setLoading", true);

          const response = await axios.get(
            "https://track-api.leadhit.io/client/test_auth",
            {
              headers: {
                "Api-Key": process.env.VUE_APP_API_KEY,
                "Leadhit-Site-Id": state.siteId,
              },
            }
          );
          if (response.data.message === "ok") {
            localStorage.setItem("leadhit-site-id", state.siteId);
          }
        }
      } catch (err) {
        if (err.request.status === 401 || err.request.status === 422) {
          dispatch("setError", state.incorrectValue);
        } else {
          dispatch("setError", state.serverError);
        }
      } finally {
        commit("setLoading", false);
      }
    },
  },

  namespaced: true,
};

export default AuthModule;
