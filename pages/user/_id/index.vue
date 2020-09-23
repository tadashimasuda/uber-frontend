<template>
  <div class="container">
    <div id="user">
      <div id="user_img"></div>
      <p id="user_name">username</p>
      <div id="user_profile">
        <p>テキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
      <div id="chart">
        {{ records | total}}
        {{ records | recent5days }}
      </div>

      <div id="user_records">
        {{records}}
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
  //   middleware({ store, redirect }) {
  //     if (store.$auth.authenticated) {
  //       redirect("/login");
  //     }
  //   },
  data() {
    return {
      records: this.$store.getters["record/AllData"],
    };
  },
  //fecth -> vuex (commit) ->
  async fetch({ route, store, params }) {
    const id = route.params.id;
    await store.dispatch("record/getUserrecords", id);
    return;
  },
  filters: {
    total:function(records) {
      let total =0;
      for (let num = 0, len = records.length; num < len; num++) {
        total = total + records[num].reward;
      }
      return total;
    },
    recent5days:function(records){
      //recent5days data change object
      let record =''
      let recentRecords=[]

      for(let x=0;x<5;x++){
        recentRecords.push({
        reward:records[x].reward,
        created_at:records[x].created_at.substring(5,10)
      });
      }
      return recentRecords
    }
  },
};
</script>

<style scoped>
div#user {
  width: 1400px;
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
  width: 400px;
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
#chart {
  width: 1360px;
  height: auto;
  min-height: 300px;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid black;
}
ul.records {
  width: 1200px;
  height: auto;
  margin: 0 auto;
}
li.record {
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