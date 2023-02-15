import axios from "axios";

const apiService = {

    UriAPISales:  "http://localhost:3020/sales",
    UriApiItems: "http://localhost:3020/items",

    async getSales( ) {

        const response = await axios.get(this.UriAPISales);
        const data = await response.data;

        console.log(data);
        return data;
    },
    async getItems( ){

        const response = await axios.get(this.UriApiItems);
        const data = await response.data;
        console.log(data);
        return data;

    },
   async saveToDb( sale ) {

       const response = await axios.post(this.UriAPISales, sale);
       const data = await response.data;
       return data;
   },

     async saveItemsToDB( items ) {

         const promises = items.map(item => axios.post(this.UriApiItems, item));
         return Promise.all(promises);

     }

}


export {apiService}