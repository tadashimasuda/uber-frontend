<template>
    <div id="form_input">
      <h1>ログイン</h1>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <ValidationProvider
            name="email"
            rules="required|email"
            v-slot="{ errors }"
          >
            <label for="email">メールアドレス</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              name="Email"
              placeholder="メールアドレス(必須)"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider
            name="password"
            rules="required|max:12|min:6"
            v-slot="{ errors }"
          >
            <label for="password">パスワード</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              name="password"
              placeholder="password"
              ref="password"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
          <input type="submit" id="submit" value="ログイン" />
        </form>
      </ValidationObserver>
      <div id="register">
        <nuxt-link to="/register">新規登録する</nuxt-link>
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
    async onSubmit() {
      try {
        this.$auth.loginWith("local", { data: this.form });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
div#form_input {
  width: 40%;
  margin: 0 auto;
  min-height: 500px;
  border: 1px solid rgba(0,0,0,0.2);
  margin-top: 15%;
  margin-bottom: 15%;
  box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
}
h1 {
  text-align: center;
  font-weight: bold;
  margin-top: 10%;
  font-size: 30px;
}
form {
  height: auto;
  width: 70%;
  margin: 0 auto;
  margin-top: 10%;
}
#email,
#password,
#submit {
  border: 1px solid #707070;
  height: 50px;
  width: 100%;
  display: block;
  margin-bottom: 10%;
}
#submit {
  margin-top: 20%;
  background-color: #25b93b;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
}
#register{
  text-align: center;
  margin-bottom: 10px;
}
label {
  display: block;
}
@media screen and (max-width: 460px){
  div#form_input {
    min-height: 70%;
  }
  form{
    width: 90%;
  }
  #email,
#password,
#submit {
  height: 40px;
}
}
@media screen and (max-width: 800px){
  div#form_input{
    width: 90%;
  }
}
</style>