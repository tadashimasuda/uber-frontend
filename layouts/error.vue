<template>
    <div class="container">
        <div id="error">
            <h1>エラーが発生しました。</h1>
            <nuxt-link to ="/">Topへ戻る</nuxt-link>
        </div>
    </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  components: {
    AppHeader,
  },
};
</script>

<style scoped>

</style>