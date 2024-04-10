<template>
  <div class="error"><slot></slot></div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .error {
    font-size: 15px;
    color: $error-color;
  }
</style>
