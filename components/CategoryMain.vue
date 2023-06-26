<template>
  <VCard
    class="CategoryMain"
    elevation="0"
  >
    <VCardTitle>
      {{ category.name }}
    </VCardTitle>

    <VCardText>
      <VBreadcrumbs class="px-0" large>
        <VBreadcrumbsItem :to="LocalPath.INDEX">
          Главная
        </VBreadcrumbsItem>

        <VBreadcrumbsDivider>
          <VIcon>mdi-chevron-right</VIcon>
        </VBreadcrumbsDivider>

        <VBreadcrumbsItem :to="categoryPath">
          {{ category.name }}
        </VBreadcrumbsItem>
      </VBreadcrumbs>
    </VCardText>
  </VCard>
</template>

<script setup>
import {LocalPath} from '~/utils/path-utils'
</script>

<script>
import {generatePath} from '~/utils/path-utils'

export default {
  props: {
    category: {type: Object, required: true},
  },
  computed: {
    categoryPath() {
      return generatePath(LocalPath.CATEGORY, {id: this.category.id})
    },
    breadcrumbs() {
      return [
        {
          title: `Главная`,
          href: LocalPath.INDEX,
        },
        {
          title: this.category.name,
          href: this.categoryPath,
          disabled: true,
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
