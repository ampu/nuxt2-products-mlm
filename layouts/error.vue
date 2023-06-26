<template>
  <VApp dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>

    <h1 v-if="error.statusCode !== 404">
      {{ otherError }}
    </h1>

    <NuxtLink :to="LocalPath.INDEX">
      Главная
    </NuxtLink>
  </VApp>
</template>

<script setup>
import {LocalPath} from '~/utils/path-utils'
</script>

<script>
export default {
  name: `EmptyLayout`,
  layout: `empty`,
  props: {
    error: {type: Object, default: null},
  },
  data() {
    return {
      pageNotFound: `404 Not Found`,
      otherError: `An error occurred`,
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    title() {
      return this.error.statusCode === 404
        ? this.pageNotFound
        : this.otherError
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 20px;
}
</style>
