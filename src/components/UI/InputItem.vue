<template>
  <input class="input" type="text" :placeholder="placeholder" />
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .input {
    width: 100%;
    border: $form-input-border-size $form-input-border-color solid;
    border-radius: $border-radius;
    padding: 10px 10px;
    outline: none;
    font-size: 15px;
  }
</style>
