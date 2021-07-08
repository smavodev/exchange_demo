<template>
    <CompAssetsTable v-bind:assets='assets'/>
</template>

<script>
import api from '@/api.js';
import CompAssetsTable from "@/components/CompAssetsTable.vue";

export default {
    name: 'Home',
    components: {
        CompAssetsTable,
    },

    data () {
        return {
            assets: []
        }
    },

    created () {
        api.getAssets()
        .then(assets => (this.assets = assets))
    }
};
</script>