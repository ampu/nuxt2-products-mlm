<template>
  <div class="CategoryList">
    <CategoryItem
      v-for="category of categories"
      :key="category.id"
      :category="category"
    />
  </div>
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
