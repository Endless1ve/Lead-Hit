import { createStore } from "vuex";

import ChartModule from "./modules/chartModule";

export default createStore({
  modules: {
    chart: ChartModule,
  },
});
