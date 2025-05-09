<template>
    <div class="container my-4">
      <h1 class="mb-4 text-primary">
        <font-awesome-icon :icon="['fas', 'gamepad']" class="me-2" />
        Game Marketplace
      </h1>
  
      <div class="d-flex mb-3">
        <input 
          v-model="searchQuery"
          type="text"
          class="form-control me-2"
          placeholder="Search by title, description, or rating..."
        />
        <button @click="addGame" class="btn btn-success">
          <font-awesome-icon :icon="['fas', 'plus']" class="me-1" />
          Add New Game
        </button>
      </div>
  
      <div v-if="loading" class="alert alert-info">
        <font-awesome-icon :icon="['fas', 'spinner']" spin class="me-2" />
        Loading games...
      </div>
      <div v-else-if="error" class="alert alert-danger">
        <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="me-2" />
        {{ error }}
      </div>
      <div v-else class="row">
        <div v-for="game in filteredGames" :key="game.id" class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title text-primary">
                <font-awesome-icon :icon="['fas', 'joystick']" class="me-2" />
                {{ game.title }}
              </h5>
              <p class="card-text">{{ game.description }}</p>
              <p class="card-text">
                <strong>Price:</strong> ${{ game.price.toFixed(2) }}
              </p>
              <p class="card-text">
                <strong>Rating:</strong>
                <font-awesome-icon :icon="['fas', 'star']" class="text-warning me-1" />
                {{ game.rating }}
              </p>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <router-link :to="`/game/${game.id}`" class="btn btn-sm btn-outline-primary">
                <font-awesome-icon :icon="['fas', 'info-circle']" class="me-1" />
                Details
              </router-link>
              <button @click="deleteGame(game.id)" class="btn btn-sm btn-outline-danger">
                <font-awesome-icon :icon="['fas', 'trash']" class="me-1" />
                Delete
              </button>
              <button @click="addReview(game.id)" class="btn btn-sm btn-outline-success">
                <font-awesome-icon :icon="['fas', 'comment']" class="me-1" />
                Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
    data() {
      return {
        games: [],
        loading: true,
        error: null,
        searchQuery: ''
      }
    },
    computed: {
      filteredGames() {
        const query = this.searchQuery.toLowerCase()
        return this.games.filter(game =>
          game.title.toLowerCase().includes(query) ||
          game.description.toLowerCase().includes(query) ||
          game.rating.toString().includes(query)
        )
      }
    },
    mounted() {
      this.fetchGames()
    },
    methods: {
      async fetchGames() {
        this.loading = true
        try {
          const res = await fetch('http://localhost:3000/games')
          if (!res.ok) throw new Error('Failed to fetch games')
          this.games = await res.json()
        } catch (err) {
          this.error = err.message
        } finally {
          this.loading = false
        }
      },
      async addGame() {
        const title = prompt('Enter game title:')
        const description = prompt('Enter game description:')
        const price = parseFloat(prompt('Enter game price:'))
        const rating = parseFloat(prompt('Enter game rating (1-5):'))
  
        if (!title || isNaN(price) || isNaN(rating)) {
          alert('Invalid input. Please try again.')
          return
        }
  
        const newGame = { title, description, price, rating }
  
        try {
          const res = await fetch('http://localhost:3000/games', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newGame)
          })
          if (!res.ok) throw new Error('Failed to add game')
          this.fetchGames()
          alert('Game added successfully!')
        } catch (err) {
          alert(err.message)
        }
      },
      async deleteGame(id) {
        if (!confirm('Are you sure you want to delete this game?')) return
  
        try {
          const res = await fetch(`http://localhost:3000/games/${id}`, {
            method: 'DELETE'
          })
          if (!res.ok) throw new Error('Failed to delete game')
          this.fetchGames()
          alert('Game deleted successfully!')
        } catch (err) {
          alert(err.message)
        }
      },
      async addReview(gameId) {
        const reviewer = prompt('Your name:')
        const comment = prompt('Your review:')
        const rating = parseFloat(prompt('Your rating (1-5):'))
  
        if (!reviewer || !comment || isNaN(rating)) {
          alert('Invalid input. Please try again.')
          return
        }
  
        const newReview = { gameId, reviewer, comment, rating }
  
        try {
          const res = await fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReview)
          })
          if (!res.ok) throw new Error('Failed to add review')
          alert('Review added successfully!')
        } catch (err) {
          alert(err.message)
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .text-primary {
    color: #0190B2 !important;
  }
  
  .btn-outline-primary {
    border-color: #0190B2;
    color: #0190B2;
  }
  
  .btn-outline-primary:hover {
    background-color: #0190B2;
    color: white;
  }
  
  .card-title {
    display: flex;
    align-items: center;
  }
  
  .card-footer .btn {
    font-size: 0.85rem;
  }
  </style>
  