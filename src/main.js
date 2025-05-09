import './assets/main.css'
import store from './store'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific icons
import { faHome, faShoppingCart, faInfoCircle, faGamepad, faPlus, faTrash, faComment, faStar, faSpinner, faExclamationTriangle, faComments, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(faHome, faShoppingCart, faInfoCircle, faGamepad, faPlus, faTrash, faComment, faStar, faSpinner, faExclamationTriangle, faComments, faArrowLeft)


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
.use(store)
app.mount('#app')
