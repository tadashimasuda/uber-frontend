<template>
  <div class="container">  
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
        user_id :this.$auth.user.id,
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