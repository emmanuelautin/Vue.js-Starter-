<template>
    <div class="container">
    <div class="w-full mx-auto md:w-1/2 p-3 border-thin bg-white mb-5">
    <div class="bg-img search shadow-md	">
      <h2 class="text-3xl text-center py-4">Recherche une vente, un lot...</h2>
    </div>
    <div class="mb-4 flex items-center p-4">
      <input class="w-full rounded-lg border border-gray-400 p-2" type="text" v-model="searchTerm" placeholder="Rechercher..." @input="searchData"/>
    </div>
    <div class="search-result" v-if="searchTerm">
      <table>
        <thead>
        <tr>
          <th colspan="3">Résultats de votre recherche</th>
        </tr>
        </thead>
        <tr class="hide-mobile">
          <th scope="col">
            id
          </th>
          <th scope="col">
            Type
          </th>
          <th scope="col">
            Description
          </th>

        </tr>
        <tr v-for="result in filteredDataSales" :key="result.unique_id">
          <td data-label="Id">{{ result.id }}</td>
          <td data-label="Type">
            {{ result.type}}
          </td>
          <td data-label="Description">
            <span class="bold" v-if="result.title != null">
              {{result.title}}
            </span>
            {{ result.description }}
          </td>
        </tr>
      </table>
    </div>
  </div>
    </div>
</template>

<script>
import {apiService} from "@/ApiService";
export default {
  name: "SearchSale",
  props: {
    sales: Array,
    items: Array
  },
  data(){
    return {
      searchTerm: "",
      data: [],

    }
  },
  computed: {
    filteredDataSales( ){

      if (!this.searchTerm.length) {
        return [];
      }
      const searchTerm = this.searchTerm.toLowerCase();

      let resultSales = this.data.sales.filter(item => item.title.toLowerCase().includes(searchTerm)
          || item.description.toLowerCase().includes(this.searchTerm));

      let resultItems = this.data.items.filter(item => item.description.toLowerCase().includes(searchTerm));

      resultSales.map(item =>{
        item.type = "Vente"; item.unique_id = Date.now()+Math.random();
      })
      resultItems.map(item =>{
        item.type = "Lot";
        item.unique_id = Date.now()+Math.random()}
      );

      return [...resultSales, ...resultItems];

    }
  },
  methods:{
    searchData( ){
      this.data.sales = this.sales;
      this.data.items =this.items;
    },
  }
}
</script>

<style scoped>


* {
  box-sizing: border-box;
}

table {
  border-spacing: 0px;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  margin-bottom: 15px;
  background-color: transparent; /* Change the background-color of table here */
  text-align: left; /* Change the text-alignment of table here */
}

th {
  font-weight: bold;
  border: 1px solid #cccccc; /* Change the border-color of heading here */
  padding: 8px;
}

td {
  border: 1px solid #cccccc; /* Change the border-color of cells here */
  padding: 8px;
}
.bold{
  font-weight: 600;
}
</style>