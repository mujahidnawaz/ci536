<template>
    <div class="container my-4">
        <div class="card shadow">
            <div class="card-body">
                <h1 class="card-title text-primary">
                    <font-awesome-icon :icon="['fas', 'shopping-cart']" class="me-2" />
                    Your Cart
                </h1>

                <div v-if="cartItems.length === 0" class="alert alert-info">
                    <font-awesome-icon :icon="['fas', 'info-circle']" class="me-2" />
                    Your cart is empty.
                </div>
                <div v-else>
                    <ul class="list-group mb-3">
                        <li v-for="item in cartItems" :key="item.id"
                            class="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <strong>{{ item.title }}</strong>
                                <div class="text-muted">
                                    ${{ item.price.toFixed(2) }} × {{ item.quantity }}
                                </div>
                            </div>
                            <button @click="removeFromCart(item.id)" class="btn btn-sm btn-danger">
                                <font-awesome-icon :icon="['fas', 'trash']" class="me-1" />
                                Remove
                            </button>
                        </li>
                    </ul>

                    <p class="h5">
                        <strong>Total:</strong>
                        <span class="badge bg-success">${{ cartTotalPrice.toFixed(2) }}</span>
                    </p>

                    <button @click="clearCart" class="btn btn-outline-danger mt-3">
                        <font-awesome-icon :icon="['fas', 'times-circle']" class="me-1" />
                        Empty Cart
                    </button>
                </div>

                <router-link to="/" class="btn btn-link mt-3">
                    <font-awesome-icon :icon="['fas', 'arrow-left']" class="me-1" />
                    Back to Games
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    name: 'CartView',
    setup() {
        const store = useStore()
        const cartItems = computed(() => store.getters.cartItems)
        const cartTotalPrice = computed(() => store.getters.cartTotalPrice)

        const removeFromCart = (id) => {
            store.commit('REMOVE_FROM_CART', id)
        }

        const clearCart = () => {
            store.commit('CLEAR_CART')
        }

        return { cartItems, cartTotalPrice, removeFromCart, clearCart }
    }
}
</script>

<style scoped>
.text-primary {
    color: #0190B2 !important;
}
</style>