<template>
  <div class="analytics">
    <ChartBlock />
  </div>
</template>

<script>
  import ChartBlock from "@/components/ChartBlock.vue";

  export default {
    components: {
      ChartBlock,
    },
  };
</script>

<style lang="scss" scoped>
  .analytics {
    padding: 20px;
  }
</style>
