<template>
  <div>
    Product
    <ProductMain
      :product="product"
    />
  </div>
</template>

<script>
import {apiProvider} from '~/utils/api-provider'

export default {
  async asyncData({$route, $axios}) {
    const product = await apiProvider.getProduct($axios, $route.params.id)
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
