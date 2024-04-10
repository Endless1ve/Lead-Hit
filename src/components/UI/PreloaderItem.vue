<template>
  <span class="loader"></span>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid rgba($accent-color, $alpha: 0.5);
    border-bottom-color: $accent-color;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
