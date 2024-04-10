<template>
  <button class="button"><slot></slot></button>
</template>

<style lang="scss" scoped>
  .button {
    width: 100%;
    border: none;
    border-radius: $border-radius;
    padding: 10px 0;
    color: $main-light-color;
    font-size: 15px;
    background-color: $accent-color;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
</style>
