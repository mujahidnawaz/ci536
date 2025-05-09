<template>
  <div class="container my-4">
    <div v-if="loading" class="alert alert-info">
      <font-awesome-icon :icon="['fas', 'spinner']" spin class="me-2" />
      Loading game details...
    </div>
    <div v-else-if="error" class="alert alert-danger">
      <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="me-2" />
      {{ error }}
    </div>
    <div v-else>
      <div class="card shadow mb-4">
        <div class="card-body">
          <h1 class="card-title text-primary">
            <font-awesome-icon :icon="['fas', 'joystick']" class="me-2" />
            {{ game.title }}
          </h1>
          <p class="card-text">{{ game.description }}</p>
          <p class="card-text">
            <strong>Price:</strong> ${{ game.price.toFixed(2) }}
          </p>
          <p class="card-text">
            <strong>Rating:</strong>
            <font-awesome-icon :icon="['fas', 'star']" class="text-warning me-1" />
            {{ game.rating }}
          </p>

          <button @click="addToCart" class="btn btn-success mt-2">
            <font-awesome-icon :icon="['fas', 'shopping-cart']" class="me-1" />
            Add to Cart
          </button>
        </div>
      </div>

      <div class="reviews-section mb-4">
        <h2 class="mb-3">
          <font-awesome-icon :icon="['fas', 'comments']" class="me-2" />
          Reviews
        </h2>
        <div v-if="reviews.length === 0" class="alert alert-secondary">
          <font-awesome-icon :icon="['fas', 'info-circle']" class="me-2" />
          No reviews yet.
        </div>
        <ul v-else class="list-group">
          <li v-for="review in reviews" :key="review.id" class="list-group-item">
            <span class="badge bg-primary me-2">{{ review.reviewer }}</span>
            <font-awesome-icon :icon="['fas', 'star']" class="text-warning me-1" />
            {{ review.rating }} — {{ review.comment }}
          </li>
        </ul>
      </div>

      <router-link to="/" class="btn btn-outline-primary">
        <font-awesome-icon :icon="['fas', 'arrow-left']" class="me-1" />
        Back to Games
      </router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'GameDetailView',
  data() {
    return {
      game: null,
      reviews: [],
      loading: true,
      error: null
    }
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    return { store, router }
  },
  mounted() {
    this.fetchGame()
    this.fetchReviews()
  },
  methods: {
    async fetchGame() {
      const id = Number(this.$route.params.id)
      try {
        const res = await fetch(`http://localhost:3000/games/${id}`)
        if (!res.ok) throw new Error('Failed to fetch game details')
        this.game = await res.json()
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
    async fetchReviews() {
      const gameId = this.$route.params.id
      try {
        const res = await fetch(`http://localhost:3000/reviews?gameId=${gameId}`)
        if (!res.ok) throw new Error('Failed to fetch reviews')
        this.reviews = await res.json()
      } catch (err) {
        console.error(err)
      }
    },
    addToCart() {
      this.store.commit('ADD_TO_CART', this.game)
      alert(`Added "${this.game.title}" to cart!`)
      this.router.push('/cart')
    }
  }
}
</script>

<style scoped>
.text-primary {
  color: #0190B2 !important;
}
.card-title {
  display: flex;
  align-items: center;
}
.list-group-item {
  display: flex;
  align-items: center;
}
</style>
