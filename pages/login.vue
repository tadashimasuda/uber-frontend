<template>
  <div id="login_form" >
    <form v-if="!$store.state.auth.authUser" @submit.prevent="login">
      <p v-if="formError" class="error">{{ formError }}</p>
      <p>
        Email:
        <input v-model="formEmail" type="text" name="Email" />
      </p>
      <p>
        Password:
        <input v-model="formPassword" type="password" name="password" />
      </p>
      <button type="submit">Login</button>
    </form>
    <button @click="logout" v-if="$store.state.auth.authUser">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formError: null,
      formEmail: "aaaa3@gmail.com",
      formPassword: "",
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch("auth/login", {
        email: this.formEmail,
        password: this.formPassword,
      });
      this.formEmail = "";
      this.formPassword = "";
      this.formError = null;
    },
    async logout() {
        await this.$store.dispatch("auth/logout");
        this.$router.push('/login');
    },
  },
};
</script>

<style>
div#login_form{
  width: 800px;
  height: 250px;
  margin:0 auto;
  margin-top: 300px;
  border:1px solid black;
  text-align: center;
}
form p{
  margin-top: 30px;
}
</style>