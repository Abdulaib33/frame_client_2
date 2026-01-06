import { defineStore } from "pinia";

export const useShoppingCartStore = defineStore('shoppingCart', {
    // states:
    state: () => ({
        cart: [],
        shipping: 5,
        vatRate: 0.21
    }),

    // getters:
    getters: {
        totalHTVA (state) {
            return state.cart.reduce(
                    (total, item) => total + item.price * item.qty, 
                0);
        },

        tva (){
            return this.totalHTVA * this.vatRate
        },

        totalGeneral () {
            return this.totalHTVA + this.tva + this.shipping
        }
    },

    // actions:
    actions: {
        // setShipping(value) {
        //     this.shipping = value
        // }, WE DONT REALLY NEED THIS, because the shipping is only used once here and the component, and it's used on v-model


        addToCart(product) {
            const existing = this.cart.find((i) => i.id === product.id)

            if (existing) {
                existing.qty++
            } else {
                this.cart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    qty: 1
                })
            }
        },

        removeFromCart(id) {
            const index = this.cart.findIndex((i) => i.id === id)
            if (index !== -1) this.cart.splice(index, 1)
        },

        updateQty(id, qty) {
            const item = this.cart.find((i) => i.id === id)
            if (!item) return;

            if (qty <= 0) {
                this.removeFromCart(id)
            } else {
                item.qty = qty
            }
        }
    },
    persist: true
})