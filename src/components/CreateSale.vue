<template>
    <div class="container mx-auto px-4 rounded" id="createSale">
      <div class="flex flex-wrap">
        <div class="w-full mx-auto md:w-1/2 p-3 border-thin bg-white">

    <div class="bg-img famicom shadow-md">
      <h2 class="text-3xl text-center py-4">Créer une vente</h2>
    </div>
    <div class=" flex items-center p-4">
      <input class="w-full rounded-lg border border-gray-400 p-2 " type="text" v-model="title" placeholder="Titre de la vente" />
    </div>
    <div class="flex items-center p-4">
      <textarea class="w-full rounded-lg border border-gray-400 p-2" cols="10" rows="3" v-model="description" placeholder="description de la vente" />
    </div>
    <div class="flex items-center p-4">
      <input placeholder="description du lot..." class="w-full rounded-lg border border-gray-400 p-2" type="text" v-model="itemDescription"/>
    </div>
    <div class="flex items-center p-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="addItem">Ajouter un lot</button>
    </div>
    <div v-if="items.length > 0">
      <table>
        <tr>
          <th>Id</th>
          <th>Contenu</th>
        </tr>
        <tr v-for="(item,index) in items"  :key="index">
          <td class="p-2">
            {{item.id}}
          </td>
          <td class="p-2">
            {{item.description}}
          </td>
          <td class="p-2">
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="removeItem(item.id)">Supprimer le lot</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="flex items-center p-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="createSale">Créer la vente et ses lots</button>
    </div>
  </div>
      </div>

    </div>

</template>

<script>
export default {
  name: "CreateSale",
  data( ){
    return{

      title: "",
      description: "",
      itemDescription: "",
      item: { },
      items: [

      ]
    }
  },
  methods:{
    addItem(  ){

      if(this.validateInput( )){
        this.items.push({id: Date.now()+Math.random(), sale_id: null, description: this.itemDescription});

      }else{
        alert('Remplissez le champ lot...');
      }

      this.resetItemform( );

    },
    removeItem( id ){

      this.items = this.items.filter(item => item.id !== id);

    },
    async createSale( ){

      if(this.validateForm( )){

        let saleId = Date.now()+Math.random();
        this.items.map(item => item.sale_id = saleId);

        await this.$emit('create-sale', {
          id: saleId,
          title: this.title,
          description: this.description,
          items : this.items
        })

        this.items = [];
        this.title = "";
        this.description = "";
        alert('Vente et lot crées');
      }else{
        alert('Remplissez les champs titre, description et ajoutez au moins un lot')
      }

    },
    validateInput( ){
      return  (this.itemDescription.trim().length > 0) ? true : false;
    },
    validateForm( ){

      let result = (this.title.trim().length > 0
          && this.description.trim().length > 0 && this.items.length > 0) ? true : false;
      return result;
    },
    resetItemform( ){
      this.itemDescription = "";
    }
  }
}
</script>

<style scoped>

</style>