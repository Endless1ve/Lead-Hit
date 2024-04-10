<template>
  <div class="auth">
    <FormItem />
    <PreloaderBlock v-if="isLoading" />
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  import FormItem from "@/components/FormItem.vue";
  import PreloaderBlock from "@/components/UI/PreloaderBlock.vue";

  export default {
    components: {
      FormItem,
      PreloaderBlock,
    },
    computed: {
      ...mapGetters({
        isLoading: "auth/isLoading",
      }),
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
