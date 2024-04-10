<template>
  <div class="chartBlock">
    <h4 class="title">Аналитика по визитам</h4>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    methods: {
      ...mapActions({
        createChar: "chart/createChar",
      }),
    },
    mounted() {
      this.createChar(this.$refs.chart);
    },
  };
</script>

<style lang="scss" scoped>
  .chartBlock {
    width: 100%;
    margin: 30px 0 0;
  }

  .title {
    text-align: center;
  }

  .chart {
    width: 100%;
    height: 500px;
  }
</style>
