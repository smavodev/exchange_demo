<template>
  <main id="app">
    <CompHeaders />
    <br />
    <router-view class="container px-5 sm:px-10 py-10 justify-center" />
  </main>
</template>

<script>
import CompHeaders from "@/components/CompHeader.vue"; // . | @

export default {
  name: "App",
  components: {
    CompHeaders,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px;*/
}
</style>
