<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
        v-for="(a, idx) in assets"
        :key="`asset-${idx}`"
      >
        <img
          class="w-6 h-6"
          :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`"
          :alt="a.name"
          style="max-height: 65px"
        />
        <td>
          <b> #{{ a.rank }} </b>
        </td>
        <td>
          <router-link
            class="hover:underline text-green-500"
            v-bind:to="{ name: 'coin-detail', params: { id: a.id } }"
          >
            {{ a.name }}
          </router-link>
          <small class="ml-l text-gray-600">{{ a.symbol }}</small>
        </td>
        <td>{{ a.priceUsd | dollar }}</td>
        <td>{{ a.marketCapUsd | dollar }}</td>
        <td
          v-bind:class="
            a.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ a.changePercent24Hr | porcentaje }}
        </td>
        <td class="hidden sm:block">
          <CompButton @custom-click="goToCoin(a.id)"> <span>Detalle</span> </CompButton>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

import CompButton from "@/components/CompButton";

export default {
  name: "CompAssetsTable",
  components: { CompButton },
  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    goToCoin (id){
      this.$router.push({name: 'coin-detail', params : {id}})
    }
  }
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
