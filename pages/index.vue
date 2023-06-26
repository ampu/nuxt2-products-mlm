<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <CategoryList :categories="categories" />
      <ProductList :products="products" />
    </v-col>
  </v-row>
</template>

<script>
import {apiProvider} from '~/utils/api-provider'

export default {
  async asyncData({$axios}) {
    const categories = await apiProvider.getCategories($axios)
    const products = await apiProvider.getProducts($axios)
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
