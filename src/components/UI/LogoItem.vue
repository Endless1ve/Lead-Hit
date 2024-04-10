<template>
  <h1 class="logo">
    <span class="logo-accent">Lead</span>
    Hit
  </h1>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .logo {
    color: $main-dark-color;
    font-weight: 800;
    white-space: nowrap;
    @include flex-row;
  }
  .logo-accent {
    color: $accent-color;
    font-weight: 500;
    white-space: nowrap;
  }
</style>
