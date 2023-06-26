import type {NuxtAxiosInstance} from '@nuxtjs/axios'

import {CategoryModel} from '~/utils/category-utils'
import {ProductModel} from '~/utils/product-utils'
import {generatePath} from '~/utils/path-utils'

const ApiPath = {
  CATEGORIES: `categories`,
  CATEGORY: `categories/:id`,
  PRODUCTS: `products`,
  PRODUCT: `products/:id`,
}

type GetCategoriesJSON = {
  count: number,
  limit: number,
  offset: number,
  total: number,
  items: CategoryModel[],
}

type GetCategoryJSON = CategoryModel

type GetProductsJSON = {
  count: number,
  limit: number,
  offset: number,
  total: number,
  items: ProductModel[],
}

type GetProductJSON = ProductModel

const importApiCategoriesFromResponse = (data: GetCategoriesJSON) => data.items
const importApiCategoryFromResponse = (data: GetCategoryJSON) => data
const importApiProductsFromResponse = (data: GetProductsJSON) => data.items
const importApiProductFromResponse = (data: GetProductJSON) => data

export class ApiProvider {
  async getCategories($axios: NuxtAxiosInstance): Promise<CategoryModel[]> {
    return $axios.$get(ApiPath.CATEGORIES)
      .then(importApiCategoriesFromResponse)
  }

  async getCategory($axios: NuxtAxiosInstance, categoryId: string | number): Promise<CategoryModel> {
    const categoryPath = generatePath(ApiPath.CATEGORY, {id: categoryId})
    return $axios.$get(categoryPath)
      .then(importApiCategoryFromResponse)
  }

  async getProducts($axios: NuxtAxiosInstance, categoryId?: string | number): Promise<ProductModel[]> {
    const params = {
      categories: categoryId,
    }
    return $axios.$get(ApiPath.PRODUCTS, {params})
      .then(importApiProductsFromResponse)
  }

  async getProduct($axios: NuxtAxiosInstance, productId: string | number): Promise<ProductModel> {
    const productPath = generatePath(ApiPath.PRODUCT, {id: productId})
    return $axios.$get(productPath)
      .then(importApiProductFromResponse)
  }
}

export const apiProvider = new ApiProvider()
