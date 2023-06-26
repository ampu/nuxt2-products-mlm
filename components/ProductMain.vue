<template>
  <VContainer class="ProductMain">
    <VRow no-gutters>
      <VCol cols="6">
        <VImg
          class="ProductMain__image mr-5"
          :src="product.originalImageUrl"
          cover
        />
      </VCol>

      <VCol cols="6">
        <VCard
          elevation="0"
        >
          <VCardTitle>
            {{ product.name }}
          </VCardTitle>

          <VCardText>
            <VBreadcrumbs class="px-0" large>
              <VBreadcrumbsItem :to="LocalPath.INDEX">
                Главная
              </VBreadcrumbsItem>

              <VBreadcrumbsDivider>
                <VIcon>mdi-chevron-right</VIcon>
              </VBreadcrumbsDivider>

              <VBreadcrumbsItem :to="productPath">
                {{ product.name }}
              </VBreadcrumbsItem>
            </VBreadcrumbs>
          </VCardText>

          <VCardText>
            Цена:
            <strong>{{ product.price.toFixed(2) }}</strong>
            ₽
          </VCardText>

          <VCardText>
            <div v-html="product.description"/>
          </VCardText>

          <VCardActions class="px-4">
            <NuxtLink
              v-if="isInCart"
              :to="LocalPath.CART"
            >
              <VBtn
                elevation="0"
                outlined
              >
                В корзину
              </VBtn>
            </NuxtLink>

            <VBtn
              v-if="!isInCart"
              elevation="0"
              outlined
              @click.prevent="addToCart"
            >
              Купить
            </VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import {LocalPath} from '~/utils/path-utils'
</script>

<script>
import {generatePath} from '~/utils/path-utils'

export default {
  props: {
    product: {type: Object, required: true},
  },
  computed: {
    productPath() {
      const productId = this.product.id
      return generatePath(LocalPath.PRODUCT, {id: productId})
    },
    isInCart() {
      return this.$store.getters[`products/getCartProductIds`].some((productId) => this.product.id === productId)
    },
  },
  methods: {
    addToCart() {
      this.$store.commit(`products/addToCart`, this.product.id)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
