<template>
  <div class="container">
    <div id="login_form">
      <h2>ログイン状態:{{ $auth.loggedIn }}</h2>
      <form @submit.prevent="login">
        <div id="form_input">
          <input v-model="form.email" type="email" name="Email" placeholder="メールアドレス" />
          <input v-model="form.password" type="password" name="password" placeholder="パスワード" />
        </div>
        <div id="submit_box">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
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
      this.$auth.loginWith("local", { data: this.form });
    },
  },
};
</script>

<style>
div#login_form {
  width: 800px;
  margin: 0 auto;
  height: auto;
  margin-top: 300px;
  text-align: center;
}
form input {
  height: 60px;
  width:100%;
  margin-bottom: 20px;
}
button{
  width:100%;
  height: 60px;
  background-color: red;
  border-radius: 2em;
  color: white;
  font-size: 30px;
}
@media screen and (max-width: 460px) {
div#login_form{
  width: 100%;
}
}
</style>