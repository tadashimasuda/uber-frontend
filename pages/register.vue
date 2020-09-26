<template>
  <div class="container">
    <div id="register_box">
      <form @submit.prevent="register">
        <div id="form_input">
          <!-- <input type="file" name="img" /> -->
          <input v-model="form.name" type="text" name="name" placeholder="ユーザー名(必須)" />
          <input v-model="form.email" type="email" name="Email" placeholder="メールアドレス(必須)" />
          <input v-model="form.password" type="password" name="password" placeholder="パスワード(必須)" />
          <input
            v-model="form.password"
            type="password"
            name="password_confirmation"
            placeholder="確認用パスワード(必須)"
          />
        </div>
        <div id="submit_box">
          <button type="submit">新規登録</button>
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
        name: "name",
        email: "hoge@gmail.com",
        password: "hogehoge",
        password_confirmation: "hogehoge",
      },
    };
  },
  methods: {
    async register() {
      // await this.$axios.$post("/api/auth/register", this.form).then(response=>{
      //      console.log(response);
      //  }).catch(error=>{
      //      console.log(error);
      //  });
      try {
        await this.$axios
          .$post("/api/auth/register", this.form)
          .then((response) => {
            console.log(response);
            this.$router.push("/login");
          });
      } catch (error) {
            console.log('err');
            console.log(error.response);
            console.error()
      }
    },
  },
};
</script>
<style scoped>
div#register_box {
  width: 50%;
  margin: 0 auto;
  margin-top: 100px;
}
div#register_box input {
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
}
div#submit_box {
  text-align: center;
}
div#submit_box button {
  width: 40%;
  height: 50px;
  border-radius: 2em;
  font-size: 20px;
  background-color: red;
  color: white;
}
</style>