import { createStore } from 'vuex'

const store = createStore({
  state: {
    cart: JSON.parse(localStorage.getItem('cart')) || []
  },
  mutations: {
    ADD_TO_CART(state, game) {
      const existing = state.cart.find(item => item.id === game.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.cart.push({ ...game, quantity: 1 })
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    REMOVE_FROM_CART(state, gameId) {
      state.cart = state.cart.filter(item => item.id !== gameId)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    CLEAR_CART(state) {
      state.cart = []
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  getters: {
    cartItems: (state) => state.cart,
    cartCount: (state) => state.cart.reduce((total, item) => total + item.quantity, 0),
    cartTotalPrice: (state) => state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }
})

export default store
