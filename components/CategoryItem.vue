<template>
  <VCard
    class="CategoryItem"
    elevation="0"
  >
    <NuxtLink
      class="CategoryItem__link"
      :to="categoryPath"
    >
      <VImg
        class="CategoryItem__image"
        :src="category.thumbnailUrl"
        cover
      >
        <VCardTitle class="CategoryItem__title text-h4 font-weight-bold">
          {{ category.name }}
        </VCardTitle>
      </VImg>
    </NuxtLink>
  </VCard>
</template>

<script>
import {generatePath, LocalPath} from '~/utils/path-utils'

export default {
  props: {
    category: {type: Object, required: true},
  },
  computed: {
    categoryPath() {
      return generatePath(LocalPath.CATEGORY, {id: this.category.id})
    },
  },
}
</script>

<style lang="scss" scoped>
.CategoryItem {
  text-align: center;

  &:hover {
    .CategoryItem__image {
      transform: scale(1.1);
    }

    .CategoryItem__title {
      transform: translateY(-8px);
    }
  }
}

.CategoryItem__link {
  display: flex;
  overflow: hidden;
  font: inherit;
  word-break: keep-all;
  text-decoration: none;
  color: inherit;
}

.CategoryItem__image {
  position: relative;
  align-items: flex-end;

  transition: transform 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%)
  }
}

.CategoryItem__title {
  position: relative;
  z-index: 1;
  justify-content: center;

  text-shadow: rgba(0, 0, 0, 0.25) 2px 2px 2px;
  color: white;
  transition: transform 0.3s;
}
</style>
