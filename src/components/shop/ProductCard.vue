<template>
    <div>
        <article class="bg-white rounded-lg overflow-hidden shadow-mid">
            <img 
                :src="product.image" 
                :alt="product.title"
                class="w-full"
            />
            <div class="p-4">
                <h2 class="font-bold text-lg mb-2 text-black">{{ product.title }}</h2>
                <p class="text-gray-700">{{ product.price }}€</p>
                <button
                    class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    @click="addToCart(product)"
                >
                    Ajouter
                </button>
            </div>
        </article>
    </div>
</template>

<script setup>
import { useShoppingCartStore } from '../../stores/shoppingCart';

const shoppingCart = useShoppingCartStore()

const { addToCart } = shoppingCart // it's a actions so we destructure directly from the store object

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>