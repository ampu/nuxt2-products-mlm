<template>
  <v-card>
    <v-card-title>
      <v-img :src="category.thumbnailUrl"/>
      {{ category.name }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    category: {type: Object, required: true},
  },
}
</script>

<style lang="scss" scoped>
</style>
