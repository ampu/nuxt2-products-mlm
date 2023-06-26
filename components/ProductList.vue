<template>
  <div class="ProductList">
    <ProductItem
      v-for="product of products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
export default {
  props: {
    products: {type: Array, required: true},
  },
  emits: [
    `addToCart`,
  ],
}
</script>

<style lang="scss" scoped>
</style>
