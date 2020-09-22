<template>
    <div class="container">
        <!-- username pic records profile -->
        <div id="user">
            <div id="user_img">
            </div>
            <p id="user_name">username</p>
            <div id="user_profile">
                <p>テキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div id="user_records">
                <ul class="clearfix records">
                    <li class="record"></li>
                    <li class="record"></li>
                    <li class="record"></li>
                    <li class="record"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if (store.$auth.authenticated) {
      redirect("/login");
    }
  },
};
</script>

<style scoped>
div#user{
    width:1400px;
    height:auto;
    border: 1px solid black;
    margin: 0 auto;
    margin-top: 100px;
}
div#user_img{
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin:0 auto; 
    border: 1px solid black;
    margin-top: 20px;
}
p#user_name{
    margin-top: 20px;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
}
div#user_profile{
    border: 1px solid black;
    width: 400px;
    height: 150px;
    overflow: scroll;
    margin: 0 auto;
    margin-top: 20px;
}
div#user_profile p{
    width: 100%;
    height: 100%;
}
div#user_records{
    width: 1360px;
    height:auto;
    min-height: 300px;
    margin: 0 auto;
    margin-top: 20px;
    border: 1px solid black;
}
ul.records{
    width:1200px;
    height:auto;
    margin: 0 auto;
}
li.record{
    width: 600px;
    height: 300px;
    border: 1px solid black;
    float: left;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
</style>