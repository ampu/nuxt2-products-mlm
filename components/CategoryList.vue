<template>
  <VContainer fluid>
    <VRow
      dense
      no-gutters
      justify="center"
    >
      <VCol
        v-for="category in categories"
        :key="category.name"
        cols="3"
      >
        <CategoryItem
          :category="category"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
export default {
  props: {
    categories: {type: Array, required: true},
  },
}
</script>

<style lang="scss" scoped>
</style>
