<template>
    <div v-if="saleWithItems" class="container mx-auto px-4 rounded">
      <div class="bg-img shadow-md">
        <h2 class="text-3xl text-center py-4">{{ title }}</h2>
      </div>
      <div class="col">
        <table class="bg-white my-6 shadow-md	w-full border border-collapse table-auto">
          <thead>
          <tr class="hide-mobile text-base font-bold text-left bg-gray-50">
            <th scope="col" class="px-4 py-3 border-b-2 border-blue-500">Id</th>
            <th scope="col" class="px-4 py-3 border-b-2 border-blue-500">Titre</th>
            <th scope="col" class="px-4 py-3 border-b-2 border-blue-500">Description</th>
            <th scope="col" class="px-4 py-3 text-center border-b-2 border-blue-500 sm:text-left">Lots</th>
          </tr>
          </thead>
          <tbody>
          <item-sale v-for="sale in saleWithItems" :key="sale.id" :sale="sale"></item-sale>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import ItemSale from './ItemSale.vue';

export default {
  components: {
    ItemSale
  },
  data(){
    return {
      title:"Liste des ventes"
    }
  },
  props: {
    saleWithItems: {
      type: Array,
      required: true
    },
    render: {
      type: Boolean,

    }
  }
}
</script>s