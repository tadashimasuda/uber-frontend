<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <div id="form_input">
        <ValidationProvider
          name="email"
          rules="required|email"
          v-slot="{ errors }"
        >
          <input
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
          <input
            v-model="form.password"
            type="password"
            name="password"
            placeholder="password"
            ref="password"
          />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <input type="submit" value="ログイン" />
      </div>
    </form>
  </ValidationObserver>
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