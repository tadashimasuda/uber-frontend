<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <ul>
        <li class="form_input">
          <ValidationProvider
            name="name"
            rules="required|alpha"
            v-slot="{ errors }"
          >
            <input
              type="text"
              v-model="form.name"
              placeholder="ユーザー名(必須)"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </li>
        <li class="form_input">
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
        </li>
        <li class="form_input">
          <ValidationProvider
            name="file"
            rules="ext:jpg"
            v-slot="{ errors }"
          >
            <input
              type="file"
              @change="updateImage"
              name="file"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </li>
        <li class="form_input">
            <ValidationProvider name="password" rules="required|max:12|min:6" v-slot = "{ errors }">
                <input
              v-model="form.password"
              type="password"
              name="password"
              placeholder="password"
              ref="password"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </li>
        <li class="form_input">
            <ValidationProvider name="password_confirmation" rules="required|max:12|min:6|confirmed:password" v-slot = "{ errors }">
                <input
              v-model="form.password_confirmation"
              type="password"
              name="password"
              placeholder="password"
            />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </li>
        <li class="submit">
          <input type="submit" value="編集する" />
        </li>
      </ul>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  data() {
    return {
      form: {
        //$auth.user.Id
        user_id : 14,
        name: "hogetaro",
        email: "hoge@gmail.com",
        file: "",
        password:"hogehoge",
        password_confirmation:"hogehoge"
      },
    };
  },
  methods: {
    updateImage(e) {
      let upload_file = e.target.files[0];
      const reader = new FileReader();
      console.log(this.form.file)
      reader.readAsDataURL(upload_file);
      console.log(reader.result)
      reader.onloadend = (file) =>{
          this.form.file = reader.result;
      }
    },
    async onSubmit() {
      try {
        console.log(this.form)
        await this.$axios
          .$put("/api/auth/edit", this.form)
          .then((response) => {
            console.log(response)
            this.$router.push("/");
          });
      } catch (error) {
        console.log(error);
      }
    },    
  },
};
</script>

<style scoped>
ul {
  width: 60%;
  margin: 0 auto;
}
li.form_input {
  width: 100%;
  margin: 0 auto;
  height: auto;
  border: 1px solid black;
  margin-top: 20px;
}
li.form_input input {
  width: 100%;
  height: 50px;
}
li.button {
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
}
li.text {
  width: 100%;
  margin: 0 auto;
}
</style>