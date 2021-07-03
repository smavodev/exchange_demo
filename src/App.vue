<template>
  <main id="app">
   <CompHeaders/>
   <CompAssetsTable/>
  </main>
</template>

<script>
import CompHeaders from "@/components/CompHeader.vue"; // . | @
import CompAssetsTable from "@/components/CompAssetsTable.vue";

export default {
  name: "App",
  components: {
    CompHeaders, CompAssetsTable,
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
