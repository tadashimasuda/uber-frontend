<template>
<div>
  <div v-for="data in this.$store.getters['allData']" :key="data.id">data:{{data}}</div>
</div>
</template>
<script>
export default {
  async fetch({ app, store, route }) {
    await store.dispatch("getAll"); //全件取得
    return;
  },
};
</script>