import {reactiveLocalState} from '~/utils/local-state'

type State = {
  cartProductIds: number[],
}

export const state: State = {
  cartProductIds: reactiveLocalState(`akimutin-nuxt2-products-mlm-products`, sessionStorage, []),
}

export const getters = {
  getCartProductIds: (state: State) => state.cartProductIds,
}

export const mutations = {
  addToCart: (state: State, productId: number) => {
    state.cartProductIds.push(productId)
  },
  removeFromCart: (state: State, productId: number) => {
    const order = state.cartProductIds.indexOf(productId)
    if (order === -1) {
      return
    }
    state.cartProductIds.splice(order, 1)
  },
}
