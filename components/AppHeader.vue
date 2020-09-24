<template>
  <header>
      <nuxt-link to="/">
        <h1 id="header_title">
          Uber
          <span>配達員日記</span>
        </h1>
      </nuxt-link>
    <a id="header_menu_icon" href="#">
      <font-awesome-icon icon="bars" />
    </a>
  </header>
</template>

<script>
export default {
  data() {
    return {
      token: "",
    };
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
    async getUser() {
      await this.$store.dispatch("auth/getUser");
    },
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }
  },
};
</script>
<style>
header {
  height: 180px;
  width: 100%;
  background-color: #35aa3e;
}
h1#header_title {
  line-height: 180px;
  font-size: 50px;
  color: white;
  font-weight: bold;
  display: inline-block;
}
h1#header_title span {
  color: black;
}
a#header_menu_icon {
  color: black;
  display: inline-block;
}
@media screen and (max-width: 460px) {
  header {
    height: 80px;
  }
  h1#header_title {
    line-height: 80px;
    font-size: 23px;
  }
}
</style>