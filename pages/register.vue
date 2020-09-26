<template>
  <div class="container">
    <div id="register_box">
        <div v-if="error">エラーが発生しました。もう一度最初から入力してください。</div>
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
      error: false,
    };
  },
  methods: {
    async register() {
      try {
        await this.$axios
          .$post("/api/auth/register", this.form)
          .then((response) => {
            this.$router.push("/login");
          });
      } catch (error) {
        this.error = true;
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