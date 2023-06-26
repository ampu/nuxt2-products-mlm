<template>
  <VContainer fluid>
    <VRow
      :justify="center ? `center` : `start`"
    >
      <VCol
        v-for="product in products"
        :key="product.id"
        cols="3"
      >
        <ProductItem
          :cart="cart"
          :product="product"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
export default {
  props: {
    center: {type: Boolean, default: false},
    cart: {type: Boolean, default: false},
    products: {type: Array, required: true},
  },
  emits: [
    `addToCart`,
  ],
}
</script>

<style lang="scss" scoped>
</style>
