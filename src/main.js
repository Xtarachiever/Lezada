import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
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
  PxMinus,
  IoPhonePortraitSharp,
  MdEmailRound,
  RiHeart3Line,
  BiPlayCircle,
  RiDoubleQuotesR,
  FaMapMarkerAlt,
  FaPhoneAlt,
  BiClockFill,
  BiGrid3X3GapFill,
  BiListUl,
  BiFilter
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
  PxMinus,
  IoPhonePortraitSharp,
  MdEmailRound,
  RiHeart3Line,
  BiPlayCircle,
  RiDoubleQuotesR,
  FaMapMarkerAlt,
  FaPhoneAlt,
  BiClockFill,
  BiGrid3X3GapFill,
  BiListUl,
  BiFilter
)

app.use(router)
app.use( VueSplide );
app.mixin({
  methods: {
    truncateText(str, truncateLength) {
      if (str.length > truncateLength) {
        return str.slice(0, truncateLength) + '...'
      } else {
        return str
      }
    },
  },
})
app.component('v-icon', OhVueIcon)
app.mount('#app')
