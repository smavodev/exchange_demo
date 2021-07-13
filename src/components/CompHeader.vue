<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-gray-600 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <CompIcon class="mr-2" />
          <router-link v-bind:to="{ name: 'home' }">
            <!-- to="/" -->
            <span class="font-semibold text-xl tracking-tight">Exchange</span>
          </router-link>
        </div>
        <div
          class="
            hidden
            sm:block
            w-full
            block
            flex-grow
            lg:flex lg:items-center lg:w-auto
          "
        >
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import CompIcon from "@/components/CompIcon";

export default {
  name: "CompHeader",

  components: { CompIcon },
};
</script>
