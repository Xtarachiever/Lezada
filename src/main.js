import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import VueSplide from '@splidejs/vue-splide';

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
  IoCloseSharp,
  MdArrowforwardios,
  MdArrowbackiosnew,
  MdAddRound,
  CoPlus,
  PxMinus
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
  IoCloseSharp,
  MdArrowforwardios,
  MdArrowbackiosnew,
  MdAddRound,
  CoPlus,
  PxMinus
)

app.use(router)
app.use( VueSplide );
app.component('v-icon', OhVueIcon)
app.mount('#app')
