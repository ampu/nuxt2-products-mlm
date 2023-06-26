<template>
  <div>
    <CategoryList :categories="categories"/>
    <ProductList center :products="products"/>
  </div>
</template>

<script>
import {apiProvider} from '~/utils/api-provider'

export default {
  async asyncData({$axios}) {
    const [
      categories,
      products,
    ] = await Promise.all([
      apiProvider.getCategories($axios),
      apiProvider.getProducts($axios),
    ])
    return {
      categories,
      products,
    }
  },
  data() {
    return {
      categories: [],
      products: [],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
