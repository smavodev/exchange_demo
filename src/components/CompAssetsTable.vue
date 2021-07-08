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
        v-for="(asset, idx) in assets"
        :key="`asset-${idx}`"
      >
        <img
          :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`"
          :alt="asset.name"
          style="max-height: 65px"
        >
        <td>
          <b>
            #{{ asset.rank }}
          </b>
        </td>
        <td>{{ asset.name }}</td>
        <td>{{ currencyFormater(asset.priceUsd) }}</td>
        <td>{{ numberFormat(asset.marketCapUsd) }}</td>
        <td>{{ numberFormat(asset.changePercent24Hr) }}</td>
        <td class="hidden sm:block"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'PxAssetsTable',
  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    currencyFormater(val) {
      return Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' }).format(val);
    },
    numberFormat(val) {
      if (val) {
        return parseFloat(val).toLocaleString();
      }
      return val;
    },
  },
};
</script>

<style scoped>
.up::before {
  content: '👆';
}

.down::before {
  content: '👇';
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
