<template>
  <v-card>
    <v-card-title>
      <v-img :src="product.thumbnailUrl"/>
      {{ product.name }}
    </v-card-title>
    <v-card-actions>
      <v-spacer/>
      <v-btn
        @click="addToCart"
      >
        Купить
      </v-btn>
      <v-spacer/>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {type: Object, required: true},
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
