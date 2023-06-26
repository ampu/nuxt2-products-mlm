<template>
  <ProductMain
    :product="product"
  />
</template>

<script>
import {apiProvider} from '~/utils/api-provider'

export default {
  async asyncData({route, $axios}) {
    const productId = route.params.id
    const product = await apiProvider.getProduct($axios, productId)
    return {
      product,
    }
  },
  data() {
    return {
      product: undefined,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
