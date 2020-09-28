<template>
  <div class="container">  
    <!-- <form @submit.prevent="edit">
      <ul>
        <li class="form_input">
          <input v-model="form.name" type="text" name="name" placeholder="ユーザー名(必須)" />
        </li>
        <li class="form_input">
          <input v-model="form.email" type="email" name="Email" placeholder="メールアドレス(必須)" />
        </li>
        <li class="form_input"> 
          <input type="file" name="file_path" id="file_path" />
        </li >
        <li class="button">
            <button type="submit">編集する</button>
        </li>
      </ul>
    </form> -->
    <EditForm />
  </div>
</template>

<script>
import EditForm from "@/components/editForm.vue";
export default {
  data() {
    return {
      form: {
        //$auth.user.name?
        name: "",
        email: "",
        file_path: "",
      },
    };
  },
  method:{
    async edit() {
        try {
            await this.$axios.$post('/api/auth/edit',this.form).then(response=>{
                this.$router.push("/");
            }
            )
        } catch (error) {
            console.log(error);
        }
    }
}
};
</script>

<style scoped>
ul{
    width: 60%;
    margin: 0 auto;
}
li.form_input{
    width: 100%;
    margin: 0 auto;
    height: auto;
    border: 1px solid black;
    margin-top: 20px;
}
li.form_input input{
    width: 100%;
    height: 50px;
}
li.button{
    width: 50%;
    margin: 0 auto;
    margin-top: 30px;
}
li.text {
    width: 100%;
    margin: 0 auto;
}
</style>