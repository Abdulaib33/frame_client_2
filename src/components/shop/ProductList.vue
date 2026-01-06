<template>
    <div>
        <h1 class="text-3xl font-bold mb-4">Nouveaux produits</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProductCard 
                v-for="p in products"
                :key="p.id"
                :product="p"
            />
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductsStore } from '../../stores/products';
import ProductCard from './ProductCard.vue';
import { storeToRefs } from 'pinia';

const productStore = useProductsStore()
const { init } = productStore // only for actions we destructure on the store object

const { products } = storeToRefs(productStore) // only for state & getters we destructure with storeToRefs()

onMounted(() => {
    init(props.apiURL)
})

const props = defineProps({
    apiURL: {
        type: String,
        required: true
    }
})
</script>