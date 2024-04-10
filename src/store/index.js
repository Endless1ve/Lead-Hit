import { createStore } from "vuex";

import AuthModule from "./modules/AuthModule";
import ChartModule from "./modules/chartModule";

export default createStore({
  modules: {
    auth: AuthModule,
    chart: ChartModule,
  },
});
