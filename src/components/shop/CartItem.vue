<template>
    <div>
        <li class="flex justify-between items-center py-3 text-black">
            <div>
                <img 
                    :src="item.image" 
                    :alt="item.title"
                    class="h-12 w-12 rounded-full mr-4"
                />
                <div>
                    <span class="font-semibold">{{ item.title }}</span>
                    <span class="block text-sm">{{ item.price }}€</span>
                </div>
            </div>

            <div>
                <input 
                    type="number"
                    class="w-16 text-center border-rounded"
                    :value="item.qty"
                    min="0"
                    @input="updateQty(item.id, +$event.target.value)"
                />

                <button
                    class="ml-2 text-red-500"
                    @click="removeFromCart(item.id)"
                >
                    <i class="fa fa-times" aria-hidden="true"></i>
                </button>
            </div>
        </li>
    </div>
</template>

<script setup>
import { useShoppingCartStore } from '../../stores/shoppingCart';

const shoppingCart = useShoppingCartStore()

const {removeFromCart, updateQty} = shoppingCart

const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>