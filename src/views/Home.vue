<template>
  <div class="flex justify-center">
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <template v-if="!isLoading">
      <CompAssetsTable v-bind:assets="assets" />
    </template>
  </div>
</template>

<script>
import api from "@/api.js";
import CompAssetsTable from "@/components/CompAssetsTable.vue";

export default {
  name: "Home",

  components: { CompAssetsTable },

  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },

  created() {
    this.isLoading = true;

    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
