<template>
  <input
    class="input"
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateInput" />
</template>

<script>
  export default {
    props: {
      modelValue: {
        type: [String, Number],
      },
      placeholder: {
        type: String,
        required: true,
      },
    },
    methods: {
      updateInput(evt) {
        this.$emit("update:modelValue", evt.target.value);
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
