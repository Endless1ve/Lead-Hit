<template>
  <form class="form">
    <LogoItem />
    <div class="inputGroup">
      <InputItem
        :placeholder="'Введите id сайта'"
        v-model.trim="siteId"
        @input="clearError" />
      <ErrorItem v-if="isErrorVisible">{{ errorText }}</ErrorItem>
    </div>
    <ButtonItem @click="sendData">Войти</ButtonItem>
  </form>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from "vuex";

  import LogoItem from "@/components/UI/LogoItem.vue";
  import InputItem from "@/components/UI/InputItem.vue";
  import ButtonItem from "@/components/UI/ButtonItem.vue";
  import ErrorItem from "@/components/UI/ErrorItem.vue";

  export default {
    components: {
      LogoItem,
      InputItem,
      ButtonItem,
      ErrorItem,
    },
    methods: {
      ...mapMutations({
        updateSiteId: "auth/updateSiteId",
      }),
      ...mapActions({
        clearError: "auth/clearError",
        sendData: "auth/sendData",
      }),
    },
    computed: {
      ...mapGetters({
        isErrorVisible: "auth/isErrorVisible",
        errorText: "auth/errorText",
      }),
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
