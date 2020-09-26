<template>
  <div class="container">
    <div id="user_box">
      <div id="user_info">
        <div id="user_img"></div>
        <p id="user_name">username</p>
        <div id="user_profile">
          <p>テキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
      </div>
      <div id="chart_box">
        <div id="total">
          <p>今までの合計金額:{{ records | total}}円</p>
        </div>
        <div id="chart">
          <BarChart :recent5days="records|recent5days" />
        </div>
      </div>
      <div id="user_records">
        <ul class="clearfix records">
          <li class="record" v-for="record in records" :key="record.id">
          <nuxt-link :to="`/record/${record.file_path}`">
            <img :src="'https://uber-backend.s3-ap-northeast-1.amazonaws.com/'+record.file_path" alt="" />
          </nuxt-link>
        </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart.vue";
export default {
  //   middleware({ store, redirect }) {
  //     if (store.$auth.authenticated) {
  //       redirect("/login");
  //     }
  //   },
  components: {
    BarChart,
  },
  data() {
    return {
      records: this.$store.getters["record/AllData"],
    };
  },
  async fetch({ route, store, params }) {
    const id = route.params.id;
    await store.dispatch("record/getUserrecords", id);
    return;
  },
  filters: {
    total: function (records) {
      let total = 0;
      for (let num = 0, len = records.length; num < len; num++) {
        total = total + records[num].reward;
      }
      return total;
    },
    recent5days: function (records) {
      //recent5days data change object
      let record = "";
      let recentRecords = [];

      for (let x = 0; x < 5; x++) {
        recentRecords.push({
          reward: records[x].reward,
          created_at: records[x].created_at.substring(5, 10),
        });
      }
      return recentRecords;
    },
  },
};
</script>

<style scoped>
div#user_box {
  width: 100%;
  height: auto;
  min-height: 500px;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 100px;
}
div#user_img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin: 0 auto;
  border: 1px solid black;
  margin-top: 20px;
}
p#user_name {
  margin-top: 20px;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}
div#user_profile {
  border: 1px solid black;
  width: 80%;
  height: 150px;
  overflow: scroll;
  margin: 0 auto;
  margin-top: 20px;
}
div#user_profile p {
  width: 100%;
  height: 100%;
}
div#user_records,
#chart_box {
  width: 100%;
  height: auto;
  min-height: 300px;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid black;
}
div#chart{
  width: 100%;
}
div#total {
  margin: 15px 0;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
ul.records {
  width: 100%;
  height: auto;
  margin:0 auto;
}
li.record {
  width: 45%;
  height: auto;
  border: 1px solid black;
  float: left;
  margin-left: 3.33%;
  margin-bottom: 20px;
}
li.record img {
  width: 100%;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
@media screen and (max-width: 460px) {
  li.record {
    width: 90%;
    margin:0 auto;
    float: none;
    margin-bottom: 10px;
  }
}
</style>