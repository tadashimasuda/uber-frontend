<template>
  <div>
    <nuxt-link to="/PostRecord">投稿画面へ</nuxt-link>
    <div id="app">
      <input type="text" v-model="keyword">
      <table>
        <tr v-for="record in recordSearch" :key="record.id">
          <td v-text="record"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      records: this.$store.getters["AllData"],
    };
  },
  async fetch({ app, store, route }) {
    await store.dispatch("getAll"); //全件取得
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