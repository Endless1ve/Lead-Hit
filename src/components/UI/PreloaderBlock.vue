<template>
  <div class="preloaderBlock">
    <p class="preloaderText">Пожалуйста, подождите</p>
    <PreloaderItem />
  </div>
</template>

<script>
  import PreloaderItem from "@/components/UI/PreloaderItem.vue";

  export default {
    components: {
      PreloaderItem,
    },
  };
</script>

<style lang="scss" scoped>
  .preloaderBlock {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba($main-light-color, $alpha: 0.8);
    align-items: center;
    justify-content: center;
    gap: 10px;
    @include flex-column;
  }

  .preloaderText {
    font-weight: 500;
  }
</style>
