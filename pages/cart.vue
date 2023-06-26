<template>
  <div>
    Cart
    <ProductList
      :products="cartProducts"
    />
  </div>
</template>

<script>
import {apiProvider} from '~/utils/api-provider'

export default {
  async asyncData({$axios}) {
    const products = await apiProvider.getProducts($axios)
    return {
      idToProduct: Object.fromEntries(products.map(product => [product.id, product])),
    }
  },
  data() {
    return {
      idToProduct: {},
    }
  },
  computed: {
    cartProducts() {
      return this.$store.getters[`products/getCartProductIds`]
        .map(productId => this.idToProduct[productId])
        .filter(Boolean)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
