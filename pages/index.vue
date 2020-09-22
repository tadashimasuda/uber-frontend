<template>
  <div class="container">
    <div id="info">
      <img src="@/assets/image/top_img.png" />
      <p>
        配達員による活動報告や情報共有ができるサイトです！
        <br />Twitter投稿もできるのでご気軽に！
      </p>
      <h2 v-if="$store.state.user">ようこそ{{$store.state.user}}</h2>
    </div>
    <div id="index_post_btn">
      <nuxt-link id="index_post_btn_link" to="/PostRecord">投稿する</nuxt-link>
    </div>
    <div id="records_box">
      <!-- <ul id="records" class="clearfix">
        <li id="record" v-for="record in recordSearch" :key="record.id">
          <nuxt-link :to="`/record/${record.file_path}`">
            <img :src="'https://uber-backend.s3-ap-northeast-1.amazonaws.com/'+record.file_path" alt />
          </nuxt-link>
          <div id="post_user">
            <img src alt />
            <p>Unkown</p>
          </div>
        </li>
      </ul> -->
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
    recordSearch: function () {
      var records = [];
      for (var i in this.records) {
        var record = this.records[i];
        if (record.area.indexOf(this.keyword) !== -1) {
          records.push(record);
        }
      }
      return records;
    },
  },
};
</script>

<style scoped>
div#info {
  width: 100%;
  height: 600px;
  background: #fff;
  text-align: center;
  /* border: 1px solid black; */
  font-size: 30px;
  font-weight: bold;
}
div#info img {
  height: 256px;
  width: 318px;
  margin-top: 100px;
  margin-bottom: 50px;
}
h2 {
  text-align: center;
  font-weight: bold;
  font-size: 30px;
}
#index_post_btn {
  text-align: center;
  margin-bottom: 80px;
}
#index_post_btn_link {
  padding: 30px 90px;
  background-color: #e22222;
  color: white;
  font-size: 30px;
  font-weight: bold;
  border-radius: 30px;
  border: 1px solid #707070;
}
ul#records {
  height: auto;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
li#record {
  width: 600px;
  height: auto;
  margin: 0 20px 40px 20px;
  display: inline-block;
  border: 1px solid black;
}
li#record img {
  width: 100%;
  height: 270px;
  background-color: black;
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
</style>