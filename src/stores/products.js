import { defineStore } from "pinia";
import DB from "../services/DB";

export const useProductsStore = defineStore('products', {
    // state:
    state: () => ({
        products: []
    }),

    // getters:
    getters: {

    },


    // actions:
    actions: {
        async init (url) {
            DB.setApiURL(url)
            try {
                this.products = await DB.findAllProducts()
            } catch (e) {
                console.error(e)
            }
        }
    }
})