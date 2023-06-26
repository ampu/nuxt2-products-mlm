import type {NuxtAxiosInstance} from '@nuxtjs/axios'
import {CategoryModel} from '~/utils/category-utils'
import {ProductModel} from '~/utils/product-utils'

const ApiPath = {
  CATEGORIES: `categories`,
  PRODUCTS: `products`,
  PRODUCT: `products/{productId}`,
}

type GetCategoriesJSON = {
  count: number,
  limit: number,
  offset: number,
  total: number,
  items: CategoryModel[],
}

type GetProductsJSON = {
  count: number,
  limit: number,
  offset: number,
  total: number,
  items: ProductModel[],
}

const importApiCategoriesFromResponse = (data: GetCategoriesJSON) => data.items
const importApiProductsFromResponse = (data: GetProductsJSON) => data.items

const generatePath = (path: string, params: Record<string, unknown>) => {
  return path.replace(/:(\w+)/, (_, key) => params[key] ?? key)
}

export class ApiProvider {
  async getCategories($axios: NuxtAxiosInstance): Promise<CategoryModel[]> {
    return $axios.$get(ApiPath.CATEGORIES)
      .then(importApiCategoriesFromResponse)
  }

  async getProducts($axios: NuxtAxiosInstance): Promise<ProductModel[]> {
    return $axios.$get(ApiPath.PRODUCTS)
      .then(importApiProductsFromResponse)
  }

  async getProduct($axios: NuxtAxiosInstance, productId: string | number): Promise<ProductModel[]> {
    return $axios.$get(generatePath(ApiPath.PRODUCT, {productId}))
      .then(importApiProductsFromResponse)
  }
}

export const apiProvider = new ApiProvider()
