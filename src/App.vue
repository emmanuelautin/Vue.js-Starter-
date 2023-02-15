<template>
  <div id="app" class="bg-gray-100s">
    <header>
      <h1 class="text-4xl text-center py-4 text-white">{{ appTitle }}</h1>
      <nav id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="search" >Rechercher</router-link>
      </nav>
    </header>
    <router-view :sales="sales" :items="items" :sale-with-items="saleWithItems" :key="1" ></router-view>
    <router-view name="additional" @create-sale="createSale" :key="2"></router-view>
    <konami-code></konami-code>
    <footer>
      <p>{{ footerText }}</p>
    </footer>
  </div>
</template>

<script>
import {apiService} from "@/ApiService";
import KonamiCode from "@/components/KonamiCode";

export default {
  name: 'App',
  components: {
    KonamiCode,
  },
  data() {
    return {
      sales: [],
      items: [],
      saleWithItems: [],
      appTitle: "Padawan Trial Master Démo",
      footerText: 'Padawan Trial Master'
    };
  },
  created( ) {

    this.init( );

  },
  mounted() {

  },
  methods: {
    init( ){

      apiService.getSales( ).then(data =>{
        this.sales = data

        apiService.getItems( ).then(data =>{
          this.items = data;
          this.saleWithItems = this.sumSalesWithItems();
        });

      });
    },
    sumSalesWithItems() {

      const salesWithItems = this.sales.map(sale => {
        const saleItems = this.items.filter(item => item.sale_id === sale.id);
        return {...sale, items: saleItems};
      });

      return salesWithItems;
    },
    createSale(sale) {

      let saleItems = sale.items;
      delete sale.items;

      apiService.saveToDb(sale).then((data)=>{

        console.log('SAVETODB', data);

        apiService.saveItemsToDB( saleItems )
            .then(responses => {

              console.log('RESPONSES', responses);

              return responses;
            })
            .then(data => {

              this.init( );
              return data;

            }).catch(error=>{
              console.error(error);
        });
      });

    }
  }
}
</script>

<style>
@import './assets/css/tailwind.css';

</style>
