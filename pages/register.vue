<template>
  <div class="container">
    <div id="register_box">
      <h1>新規登録</h1>
      <form @submit.prevent="register">
        <div id="form_input">
          <!-- <input type="file" name="img" /> -->
          <label for="name">ユーザー名（必須）</label>
          <input v-model="form.name" id="name" type="text" name="name"  />
          <label for="email">メールアドレス(必須</label>
          <input v-model="form.email" id="email" type="email" name="Email"  />
          <label for="password">パスワード(必須)</label>
          <input v-model="form.password" id="password" type="password" name="password" />
          <label for="password_confirmation">確認用パスワード(必須)</label>
          <input
            v-model="form.password"
            id="password_confirmation"
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
h1 {
  text-align: center;
  font-weight: bold;
  margin-top: 10%;
  font-size: 30px;
}
div#register_box {
  width: 40%;
  margin: 0 auto;
  min-height: 500px;
  border: 1px solid rgba(0,0,0,0.2);
  box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
  margin-top: 15%;
  margin-bottom: 15%;
}
form {
  height: auto;
  width: 70%;
  margin: 0 auto;
  margin-top: 10%;
}
input,button {
  border: 1px solid #707070;
  height: 50px;
  width: 100%;
  display: block;
  margin-bottom: 10%;
}
button{
  font-size: 20px;
}
@media screen and (max-width: 460px){
  div#register_box  {
    min-height: 70%;
    width: 90%;
  }
  form {
    width: 90%;
  }
  input,button {
  height: 40px;
}
}
@media screen and (max-width: 800px){
  div#register_box  {
    min-height: 70%;
    width: 90%;
  }
}
</style>