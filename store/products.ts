import {reactiveLocalState} from '~/utils/local-state'

type State = {
  cartProductIds: { value: number[] },
}

export const state: State = {
  cartProductIds: reactiveLocalState(`akimutin-nuxt2-products-mlm-products`, sessionStorage, {value: []}),
}

export const getters = {
  getCartProductIds: (state: State) => state.cartProductIds.value,
}

export const mutations = {
  addToCart: (state: State, productId: number) => {
    state.cartProductIds.value.push(productId)
  },
  removeFromCart: (state: State, productId: number) => {
    const order = state.cartProductIds.value.indexOf(productId)
    if (order === -1) {
      return
    }
    state.cartProductIds.value.splice(order, 1)
  },
  clearCart: (state: State) => {
    state.cartProductIds.value = []
  },
}
