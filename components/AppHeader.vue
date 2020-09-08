<template>
  <header>
    <div id="header_menu_icon">
      <font-awesome-icon icon="bars" />
    </div>
    <nuxt-link to="/">
      <h1 id="header_title">
        Uber
        <span>配達員日記</span>
      </h1>
    </nuxt-link>
    <div id="header_login">
      <nuxt-link to="#">Login</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
    
}
</script>
<style>
header {
  min-height: 120px;
  width: 100%;
  background-color: rgb(0, 0, 0);
}
div#header_menu_icon {
  float: left;
  color: white;
  display: none;
  margin-left: 15px;
  margin-top: 15px;
}
h1#header_title {
  text-align: center;
  line-height: 120px;
}
h1#header_title  {
  color: #35aa3e;
  font-weight: bold;
  font-size: 30px;
}
h1#header_title  span {
  color: white;
}
div#header_login {
  height: 65px;
  width: 66px;
  display: none;
  float: right;
  margin-right: 20px;
}
div#header_login  {
  color: white;
}

/* main */
main {
  min-height: 800px;
  height: auto;
}
div#main_wrapper {
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
}
div#top_img {
  background-color: gray;
  height: 300px;
  width: 100%;
}
div#serch_box {
  margin-top: 20px;
  width: 100%;
  height: 80px;
  background: #fff;
}
div#serch_box h2 {
  display: none;
}
div#serch_box select#city,
select#station,
input#serch_box,
input#submit,
p#or {
  float: left;
  margin-top: 20px;
  margin-left: 25px;
  height: 40px;
}
select#city,
select#station {
  width: 130px;
  border-radius: 3px;
  border: 1px solid #707070;
}
p#or {
  margin-top: 0;
  line-height: 80px;
}
input#serch_box {
  width: 250px;
}
input#submit {
  width: 150px;
  border-radius: 4px;
  background: rgba(226, 30, 30);
  border: 1px solid #707070;
  color: white;
  font-size: 15px;
}
@media screen and (max-width: 460px) {
  div#header_menu_icon {
    display: block;
  }
  div#header_login {
    margin-right: 0px;
  }
  div#header_login a {
    font-size: 15px;
  }

  div#serch_box select#city,
  select#station,
  input#serch_box,
  input#submit,
  p#or {
    float: none;
    width: 310px;
    height: 41px;
    margin-left: 50px;
    text-align: center;
  }
  div#serch_box h2#serch_title {
    display: inline-block;
    margin: 15px 0 0 10px;
    font-size: 20px;
  }
  div#serch_box {
    height: auto;
  }
  /* form */
  div#popup {
    width: 100%;
  }
  div#form_box {
    width: 100%;
  }
}
</style>