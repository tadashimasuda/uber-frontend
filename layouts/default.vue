<template>
  <div>
    <AppHeader/>
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  components: {
    AppHeader
  }
}
</script>

<style>
div.container {
  max-width: 1200px;
  min-height: 500px;
  height: auto;
  /* border: 1px solid #707070; */
}
</style>
