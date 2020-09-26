<template>
  <div class="container">
    <div id="info">
      <h1>Uber配達員日記とは？</h1>
      <img src="@/assets/image/top_img.png" />
      <p>
        配達員による活動報告や情報共有ができるサイトです！
        <br />Twitter投稿もできるのでご気軽に！
      </p>
    </div>
    <div id="login_box">
      <div class="btn" id="twitter">Twitterでログイン</div>
      <nuxt-link to="/login">
        <div class="btn" id="default">ログイン</div>
      </nuxt-link>
    </div>
    <div id="today_post_box">
      <h2>本日の配達</h2>
      <nuxt-link id="post_btn" to="/PostRecord">
        <div id="post" class="btn">投稿する</div>
      </nuxt-link>
      <div id="records_box">
        <ul id="records" class="clearfix">
          <li id="record" v-for="record in topRecord" :key="record.id">
            <div class="record_img">
              <nuxt-link :to="`/record/${record.file_path}`">
                <img :src="'https://uberbackend.s3-ap-northeast-1.amazonaws.com/'+record.file_path" alt/>
              </nuxt-link>
            </div>
            <div id="post_user">
              <img src alt />
              <p>Unkown</p>
            </div>
          </li>
        </ul>
        <!-- <nuxt-link>もっと見る...</nuxt-link> -->
        <a href="#">もっと見る...</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      records: this.$store.getters["record/AllData"],
    };
  },
  async fetch({ app, store, route }) {
    await store.dispatch("record/getAll"); //全件取得
    return;
  },
  computed: {
    // recordSearch: function () {
    //   var records = [];
    //   for (var i in this.records) {
    //     var record = this.records[i];
    //     if (record.area.indexOf(this.keyword) !== -1) {
    //       records.push(record);
    //     }
    //   }
    //   return records;
    // },
    topRecord: function () {
      return this.records.slice(0, 8);
    },
  },
};
</script>

<style scoped>
div#info {
  width: 100%;
  height: auto;
  background: #fff;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
}
div#info h1{
  margin-top: 20px;
}
div#info img {
  height: 256px;
  width: 318px;
  margin-top: 20px;
  margin-bottom: 50px;
}
div#login_box {
  height: auto;
  width: 100%;
  margin-bottom: 20px;
}
div.btn {
  height: 60px;
  line-height: 60px;
  width: 300px;
  margin: 0 auto;
  text-align: center;
  border-radius: 2em;
  color: #fff;
  font-size: 25px;
}
div#twitter {
  background-color: #07b3ff;
  margin-bottom: 20px;
}
div#default {
  background-color: #888888;
}
div#post {
  background-color: red;
  margin-bottom: 20px;
}
div#today_post_box {
  height: auto;
}
div#today_post_box h2 {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
}
div#records_box {
  height: auto;
  width: 100%;
  border: 1px solid black;
}
ul#records {
  height: auto;
  width: 100%;
  margin: 0 auto;
  border: 1px solid black;
}
li#record{
  width: 45%;
  height: auto;
  margin-left: 3.33%;
  margin-bottom: 20px;
  border: 1px solid black;
  float: left;
}
li#record img {
  width: 100%;
  height: 270px;
}
div#post_user {
  height: 100px;
  width: 100%;
}
div#post_user img {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  float: left;
  margin-left: 20px;
}
div#post_user p {
  float: left;
  margin-top: 10px;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
@media screen and (max-width: 460px) {
  div#info h1 {
    margin-top: 15px;
    font-size: 20px;
  }
  div#info img {
    height: 111px;
    width: 138px;
    margin-top: 20px;
  }
  div#info p {
    font-size: 15px;
  }
  ul#records {
    margin-top: 20px;
  }
  li#record {
    width: 90%;
    height: auto;
    margin: 0 20px 40px 20px;
    display: inline-block;
    border: 1px solid black;
    float: none;
  }
  div.record_img {
    height: 80%;
  }
  div#post_user {
    height: 20%;
    width: 100%;
  }
  div#post_user img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    float: left;
    margin-left: 20px;
  }
  div#post_user p {
    float: left;
    margin-top: 10px;
  }
}
</style>