<template>
  <form class="form">
    <LogoItem />
    <div class="inputGroup">
      <InputItem :placeholder="'Введите id сайта'" v-model.trim="siteId" />
    </div>
    <ButtonItem>Войти</ButtonItem>
  </form>
</template>

<script>
  import { mapMutations } from "vuex";

  import LogoItem from "@/components/UI/LogoItem.vue";
  import InputItem from "@/components/UI/InputItem.vue";
  import ButtonItem from "@/components/UI/ButtonItem.vue";

  export default {
    components: {
      LogoItem,
      InputItem,
      ButtonItem,
    },
    methods: {
      ...mapMutations({
        updateSiteId: "auth/updateSiteId",
      }),
    },
    computed: {
      siteId: {
        get() {
          return this.$store.state.auth.siteId;
        },

        set(value) {
          this.updateSiteId(value);
        },
      },
    },
  };
</script>

<style lang="scss" scoped>
  .form {
    align-items: center;
    gap: $form-gap;
    width: 100%;
    max-width: 400px;
    border: $form-border-size $form-border-color solid;
    border-radius: $border-radius;
    padding: 20px;
    @include flex-column;
  }

  .inputGroup {
    gap: 5px;
    width: 100%;
    @include flex-column;
  }
</style>
