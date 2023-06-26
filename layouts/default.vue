<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <NuxtLink :to="LocalPath.INDEX" aria-label="Home">
        <v-icon>mdi-store</v-icon>
      </NuxtLink>

      <v-spacer/>

      <NuxtLink :to="LocalPath.CART" aria-label="Cart">
        <v-icon>mdi-cart</v-icon>
      </NuxtLink>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>

    <v-footer
      fixed
      app
    >
      <span>&copy; {{ copyrightYear }}</span>
    </v-footer>
  </v-app>
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
}
</script>
