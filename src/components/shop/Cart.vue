<template>
    <div>
        <div class="bg-white rounded-lg shadow">
            <ul class="divide-y divide-gray-200 p-6">
                <CartItem 
                    v-for="p in cart"
                    :key="p.id"
                    :item="p"
                />
            </ul>
        </div>

        <div class="bg-gray-50 p-6 text-black">
            <div class="flex justify-between font-bold text-xl">
                <span>Total HTVA:</span>
                <span>{{ totalHTVA.toFixed(2) }}€</span>
            </div>
        </div>

        <div class="flex justify-between mb-1" v-if="cart.length > 0">
            <span><strong>TVA (21%):</strong></span>
            <span>{{ tva.toFixed(2) }}€</span>
        </div>

        <div class="flex justify-between items-center my-6" v-if="cart.length > 0">
            <span><strong>Livraison:</strong></span>
            <select
                class="py-1 px-2 rounded border border-gray-300 ml-2"
                v-model.number="shipping"
            >
                <option value="5" class="text-black">Standard - 5€</option>
                <option value="15" class="text-black">Express - 15€</option>
            </select>
        </div>

        <div class="flex justify-between font-bold text-xl" v-if="cart.length > 0">
            <span><strong>Total Général:</strong></span>
            <span>{{ totalGeneral.toFixed(2) }}€</span>
        </div>

        <MyButton v-if="cart.length > 0"
            class="w-full"
        >
            Procéder au paiement
        </MyButton>

    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useShoppingCartStore } from '../../stores/shoppingCart';
import CartItem from './CartItem.vue';
import MyButton from '../../ui/MyButton.vue';

const shoppingCart = useShoppingCartStore()

const { setShipping } = shoppingCart
const {cart, totalHTVA, tva, totalGeneral, shipping} = storeToRefs(shoppingCart)
</script> 