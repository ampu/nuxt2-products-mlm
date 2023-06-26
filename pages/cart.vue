<template>
  <VCard
    class="Cart"
    elevation="0"
  >
    <VCardTitle>Корзина</VCardTitle>

    <VCardText>
      <VBreadcrumbs class="px-0" large>
        <VBreadcrumbsItem :to="LocalPath.INDEX">
          Главная
        </VBreadcrumbsItem>

        <VBreadcrumbsDivider>
          <VIcon>mdi-chevron-right</VIcon>
        </VBreadcrumbsDivider>

        <VBreadcrumbsItem :to="LocalPath.CART">
          Корзина
        </VBreadcrumbsItem>
      </VBreadcrumbs>
    </VCardText>

    <template v-if="!ordering">
      <VCardText v-if="empty" class="text-h6">
        В вашей корзине пока нет товаров...
      </VCardText>

      <ProductList
        v-if="!empty"
        cart
        :products="cartProducts"
      />

      <VCardActions v-if="!empty" class="mt-10">
        <VSpacer/>
        <VBtn
          color="primary"
          elevation="0"
          outlined
          @click="order"
        >
          Оформить заказ
        </VBtn>
        <VSpacer/>
      </VCardActions>
    </template>

    <VAlert
      v-if="ordering"
      type="success"
      dismissible
      @input="ordering = false"
    >
      Подздравляем с покупкой!
    </VAlert>
  </VCard>
</template>

<script setup>
import {LocalPath} from '~/utils/path-utils'
</script>

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
      ordering: false,
    }
  },
  computed: {
    cartProducts() {
      return this.$store.getters[`products/getCartProductIds`]
        .map(productId => this.idToProduct[productId])
        .filter(Boolean)
    },
    empty() {
      return this.cartProducts.length === 0
    },
  },
  methods: {
    order() {
      this.$store.commit(`products/clearCart`)
      this.ordering = true
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
