<template>
  <VApp>
    <VAppBar
      fixed
      app
    >
      <NuxtLink :to="LocalPath.INDEX" aria-label="Home" class="HomeLink">
        <VIcon>mdi-store</VIcon>
        Магазин
      </NuxtLink>

      <VSpacer/>

      <NuxtLink :to="LocalPath.CART" aria-label="Cart" class="CartLink">
        <VIcon>mdi-cart</VIcon>
        <strong v-if="cartProductIdsLength">{{ cartProductIdsLength }}</strong>
      </NuxtLink>
    </VAppBar>

    <VMain>
      <VContainer>
        <Nuxt/>
      </VContainer>
    </VMain>

    <VFooter
      fixed
      app
    >
      <span>&copy; {{ copyrightYear }}</span>
    </VFooter>
  </VApp>
</template>

<script setup>
import {LocalPath} from '~/utils/path-utils'
</script>

<script>
import dayjs from 'dayjs'

export default {
  data() {
    return {
      copyrightYear: dayjs().year(),
      categories: [],
    }
  },
  computed: {
    cartProductIdsLength() {
      return this.$store.getters[`products/getCartProductIds`].length
    },
  },
}
</script>

<style lang="scss" scoped>
.HomeLink {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3px;

  font: inherit;
  color: inherit;
  text-decoration: none;
}

.CartLink {
  display: flex;
  justify-content: center;
  align-items: center;

  font: inherit;
  color: inherit;
  text-decoration: none;
}
</style>
