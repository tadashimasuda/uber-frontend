<template>
  <div class="container">
    <div id="comment_box">
      {{ogpData}}
      <img :src="'https://uberbackend.s3-ap-northeast-1.amazonaws.com/'+ ogpData.url" alt="">
      <div class="message" v-if="ogpData.message">
        <h2 id="commment_title" >投稿者のコメント</h2>
        <p>{{ ogpData.message }}</p>
      </div>
      <button>お疲れ様を送る</button>
    </div>
  </div>
</template>

<style scoped>
div#comment_box {
  width: 500px;
  margin: 0 auto;
  text-align: center;
  margin-top: 60px;
}
h2,p{
  margin-top: 20px;
  font-size: 25px;
  font-weight: bold;
}
button{
  width: 300px;
  height:80px;
  border-radius: 50px;
  text-align: center;
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: red;
}
</style>

<script>
export default {
  // head() {
  //   return {
  //     title: "OGPサービス",
  //     meta: [
  //       {
  //         hid: "description",
  //         name: "description",
  //         content: "OGPメッセージサービスの説明が入ります",
  //       },
  //       { hid: "og:type", property: "og:type", content: "article" },
  //       {
  //         hid: "og:title",
  //         property: "og:title",
  //         content: "OGPメッセージのタイトル",
  //       },
  //       {
  //         hid: "og:description",
  //         property: "og:description",
  //         content: "OGPメッセージサービスの説明が入ります",
  //       },
  //       { hid: "og:url", property: "og:url", content: "{詳細ページのURL}" },
  //       { hid: "og:image", property: "og:image", content: this.ogpData.url },
  //       {
  //         hid: "twitter:card",
  //         name: "twitter:card",
  //         content: "summary_large_image",
  //       },
  //       {
  //         hid: "twitter:image",
  //         name: "twitter:image",
  //         content: this.ogpData.url,
  //       },
  //       {
  //         hid: "twitter:image:src",
  //         name: "twitter:image:src",
  //         content: `${this.ogpData.url}`,
  //       },
  //     ],
  //   };
  // },
  computed: {
    ogpData() {
      return this.$store.getters["record/ogpData"];
    },
  },
  async fetch({ app, store, route }) {
    const id = route.params.id;
    await store.dispatch("record/getOPG", id);
    return;
  },
};
</script>