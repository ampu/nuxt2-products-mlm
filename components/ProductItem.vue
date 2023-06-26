<template>
  <VCard
    class="ProductItem"
    elevation="0"
  >
    <NuxtLink class="ProductItem__link" :to="productPath">
      <div class="ProductItem__image">
        <VImg
          :src="product.thumbnailUrl"
          cover
        />
      </div>

      <VCardTitle class="ProductItem__title">{{ product.name }}</VCardTitle>

      <VCardText class="ProductItem__text">{{ product.price.toFixed(2) }}₽</VCardText>
      <VCardActions>
        <VSpacer/>

        <NuxtLink
          v-if="!cart && isInCart"
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
          v-if="!cart && !isInCart"
          elevation="0"
          outlined
          @click.prevent="addToCart"
        >
          Купить
        </VBtn>

        <VBtn
          v-if="cart"
          elevation="0"
          outlined
          @click.prevent="removeFromCart"
        >
          Удалить
        </VBtn>

        <VSpacer/>
      </VCardActions>
    </NuxtLink>
  </VCard>
</template>

<script setup>
import {LocalPath} from '~/utils/path-utils'
</script>

<script>
import {generatePath} from '~/utils/path-utils'

export default {
  props: {
    cart: {type: Boolean, default: false},
    product: {type: Object, required: true},
  },
  computed: {
    productPath() {
      return generatePath(LocalPath.PRODUCT, {id: this.product.id})
    },
    isInCart() {
      return this.$store.getters[`products/getCartProductIds`].some((productId) => this.product.id === productId)
    },
  },
  methods: {
    addToCart() {
      this.$store.commit(`products/addToCart`, this.product.id)
    },
    removeFromCart() {
      this.$store.commit(`products/removeFromCart`, this.product.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.ProductItem {
  height: 100%;
  text-align: center;

  &:hover {
    .ProductItem__image {
      .v-image {
        transform: scale(1.1);
      }
    }
  }
}

.ProductItem__link {
  height: 100%;
  display: flex;
  flex-flow: column;

  font: inherit;
  text-decoration: none;
  color: inherit;
}

.ProductItem__title {
  justify-content: center;
  white-space: break-spaces;
  word-break: normal;
}

.ProductItem__text {
  margin-top: auto;
}

.ProductItem__image {
  overflow: hidden;

  .v-image {
    transition: transform 0.3s;
  }
}
</style>
