<template>
  <div>
    <CategoryMain
      :category="category"
    />
    <ProductList
      :products="products"
    />
  </div>
</template>

<script>
import {apiProvider} from '~/utils/api-provider'

export default {
  async asyncData({route, $axios}) {
    const categoryId = route.params.id
    const [
      category,
      products,
    ] = await Promise.all([
      apiProvider.getCategory($axios, categoryId),
      apiProvider.getProducts($axios, categoryId),
    ])
    return {
      category,
      products,
    }
  },
  data() {
    return {
      category: undefined,
      products: [],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
