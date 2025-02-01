import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'

import {
  PrBars,
  MdKeyboardarrowdownRound,
  IoSearch,
  FaUserAlt,
  HiHeart,
  MdShoppingcartRound,
  CoTwitter,
  FaFacebookF,
  FaInstagram,
  PrYoutube,
  CoArrowRight,
} from 'oh-vue-icons/icons'
const app = createApp(App)

addIcons(
  PrBars,
  MdKeyboardarrowdownRound,
  IoSearch,
  FaUserAlt,
  HiHeart,
  MdShoppingcartRound,
  CoTwitter,
  FaFacebookF,
  FaInstagram,
  PrYoutube,
  CoArrowRight,
)

app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')
