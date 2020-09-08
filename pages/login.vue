<template>
  <div>
    <p>{{$store.state.auth.authUser}}</p>
    <form v-if="!$store.state.auth.authUser" @submit.prevent="login">
      <p v-if="formError" class="error">{{ formError }}</p>
      <p>
        <i>
          To login, use
          <b>demo</b> as Email and
          <b>demo</b> as password.
        </i>
      </p>
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