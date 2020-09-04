<template>
<div>
    <nuxt-link to="/PostRecord">投稿画面へ</nuxt-link>
  <div v-for="data in this.$store.getters['allData']" :key="data.id">
      data:{{data}}\n
      <nuxt-link :to="`/record/${data.id}/`">詳細画面</nuxt-link>
  </div>
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