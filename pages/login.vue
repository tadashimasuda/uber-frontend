<template>
  <div class="container">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/loginForm.vue";

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