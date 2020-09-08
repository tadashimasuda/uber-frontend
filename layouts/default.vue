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
  max-width: 1600px;
  min-height: 500px;
  height: auto;
}
</style>
