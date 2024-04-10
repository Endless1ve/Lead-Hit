<template>
  <div class="auth">
    <FormItem />
  </div>
</template>

<script>
  import FormItem from "@/components/FormItem.vue";

  export default {
    components: {
      FormItem,
    },
  };
</script>

<style lang="scss" scoped>
  .auth {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    @include flex-column;
  }
</style>
