<template>
  <tr class="py-10 border-b border-gray-200 hover:bg-gray-100">
    <td data-label="Id" class="border p-1">
      {{ sale.id }}
    </td>
    <td data-label="Titre" class="border p-1">
      <div class="text-sm text-blue-600 dark:text-gray-200">{{ sale.title}}</div>
    </td>
    <td data-label="Description" class="border p-1 ">
      <div class="font-medium dark:text-white">{{ sale.description }}</div>
    </td>
    <td data-label="Lots" class="border p-1">
      <ul class="list-disc list-inside	">
        <li v-for="item in sale.items" :key="item.id">
          {{ item.description }}
        </li>
      </ul>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ItemSale",
  props:{
    sale : {}
  }
}
</script>

<style scoped>

ul{
  list-style: none;
}
ul li::before {
  content: "\2022";
  color: #be0a26;
  font-weight: bold;
  display: inline-block;
  width: 2em;
  margin-left: -1em;
}
</style>