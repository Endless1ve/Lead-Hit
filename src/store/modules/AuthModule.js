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
  namespaced: true,
};

export default AuthModule;
