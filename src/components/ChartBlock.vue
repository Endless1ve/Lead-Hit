<template>
  <div class="chart">
    <h3 class="title">Аналитика</h3>
    <ChartItem />
  </div>
</template>

<script>
  import ChartItem from "@/components/ChartItem.vue";

  export default {
    components: {
      ChartItem,
    },
  };
</script>

<style lang="scss" scoped>
  .chart {
    align-items: center;
    @include flex-column;
  }

  .title {
    font-size: 24px;
  }
</style>
