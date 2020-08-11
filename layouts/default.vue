<template>
  <div>
    <header>
      <div id="header_menu_icon">
        <i class="fa-bars fa-2x"></i>
      </div>
      <h1 id="header_title">
        <a href="#">
          Uber
          <span>Driver</span>
        </a>
        <div id="header_login">
          <a href="#">Login</a>
        </div>
      </h1>
    </header>
    <Nuxt />
  </div>
</template>

<style>
/* html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
header{
    min-height: 65px;
    width: 100%; 
    background-color: rgb(0,0,0);
}
div#header_menu_icon{
    float: left;
    color: white;
    display: none;
    margin-left: 15px;
    margin-top: 15px;
}
h1#header_title{
    text-align: center;
    line-height: 65px;
}
h1#header_title a{
    color: white;
    font-weight: bold;
    font-size: 20px;
}
h1#header_title a span{
    color:#35AA3E
}
div#header_login{
    height: 65px;
    width: 66px;
    display: inline-block;
    float: right;
    margin-right: 20px;
}
div#header_login a{
    color:white;
}

/* main */
main{
    min-height: 800px;
    height: auto;
}
div#main_wrapper{
    max-width: 850px;
    width: 100%;
    margin: 0 auto;
}
div#top_img{
    background-color: gray;
    height: 300px;
    width: 100%;
}
div#serch_box{
    margin-top: 20px;
    width: 100%;
    height: 80px;
    background: #fff;
}
div#serch_box h2{
    display: none;
}
div#serch_box select#city,
select#station,input#serch_box,input#submit,
p#or{
    float: left;
    margin-top: 20px;
    margin-left: 25px;
    height: 40px;
}
select#city,select#station{
    width: 130px;
    border-radius: 3px;
    border: 1px solid #707070;
}
p#or{
    margin-top: 0;
    line-height: 80px;
}
input#serch_box{
    width: 250px;
}
input#submit{
    width: 150px;
    border-radius: 4px;
    background: rgba(226, 30, 30);
    border: 1px solid #707070;
    color: white;
    font-size: 15px;

}
</style>
