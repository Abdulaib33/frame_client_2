<script setup>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import Cart from './components/shop/Cart.vue';
import ProductList from './components/shop/ProductList.vue';


</script>

<template>
  <!-- Header -->
   <AppHeader />

   <!-- Main -->
    <main class="container mx-auto py-8 px-4 flex flex-wrap">
      <section class="w-full md:w-2/3 px-4 mb-8">
        <ProductList
          apiURL="https://692fc3d9778bbf9e006e6a45.mockapi.io/"
        />
      </section>

      <aside class="w-full md:w-1/3 px-4">
        <Cart />
      </aside>
    </main>

    <!-- Footer -->
    <AppFooter />
</template>

<style scoped>

</style>
