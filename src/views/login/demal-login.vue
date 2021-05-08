<template>
  <div class="login">
    <div class="login-container">
      <i class="fas fa-map-signs login-logo"></i>
      <form action="" @submit.prevent="login" class="login-form">
        <div class="login-subtitle">ADMIN</div>
        <h2 class="login-title">Войти в аккаунт</h2>
        <demalInput class="login-input" placeholder="Введите почту" />
        <demalInput
          class="login-input"
          type="password"
          placeholder="Введите пароль"
        />
        <demalButton
          class="login-button"
          :isLoading="isLoading"
          @click="handleClick"
          >Войти</demalButton
        >
      </form>
    </div>
  </div>
</template>

<script>
import demalInput from "@/components/common/demal-input";
import demalButton from "@/components/common/demal-button";

export default {
  components: {
    demalInput,
    demalButton,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    handleClick() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.$router.push("/");
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap");

.login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: $black;

  &-container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 640px;
  }

  &-logo {
    color: $white;
    margin-bottom: 40px;
    font-size: 250px;
    opacity: 0.8;
  }

  &-title {
    color: $white;
    margin-bottom: 20px;
    opacity: 0.8;
    font-family: "PT Sans Caption", sans-serif !important;
  }

  &-subtitle {
    font-size: 9px;
    color: $white;
    opacity: 0.5;
    margin-bottom: 10px;
  }

  &-form {
    width: 350px;
    box-sizing: border-box;
    padding: 30px 20px;
    border-radius: 4px;
  }

  &-input {
    margin-top: 20px;
  }

  &-button {
    margin-top: 20px;
  }
}
</style>
