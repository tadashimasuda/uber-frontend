<template>
  <div id="login_form">
    <h2>ログイン状態:{{ $auth.loggedIn }}</h2>
    <p>{{ $auth.user }}</p>
    <form @submit.prevent="login">
      <p>
        Email:
        <input v-model="form.email" type="email" name="Email" />
      </p>
      <p>
        Password:
        <input v-model="form.password" type="password" name="password" />
      </p>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  // middleware({ store, redirect }) {
  //   if (store.$auth.loggedIn) {
  //     redirect("/");
  //   }
  // },
  data() {
    return {
      form: {
        email: "hoge@gmail.com",
        password: "hogehoge",
      },
    };
  },
  methods: {
    login() {
      this.$auth.loginWith("local", {data: this.form});
    //   this.$auth.loginWith('local', {data: {data: this.form}}).then((response) => {
    //       console.log(response); 
    //     },
    //     (error) => {
    //       return error
    //     })
    },
  },
};
</script>

<style>
div#login_form {
  width: 800px;
  height: 250px;
  margin: 0 auto;
  margin-top: 300px;
  border: 1px solid black;
  text-align: center;
}
form p {
  margin-top: 30px;
}
</style>