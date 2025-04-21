import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import 'vue3-toastify/dist/index.css';
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
  BiFilter,
  BiHeart,
  MdCloseSharp,
  BiArrowLeftSquare,
  BiArrowRightSquare,
  IoHeartDislikeOutline,
  MdLocalfiredepartmentOutlined
} from 'oh-vue-icons/icons'
import { createPinia } from 'pinia'
const app = createApp(App)

const pinia = createPinia()
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
  BiFilter,
  BiHeart,
  MdCloseSharp,
  BiArrowLeftSquare,
  BiArrowRightSquare,
  IoHeartDislikeOutline,
  MdLocalfiredepartmentOutlined
)

app.use(router)
app.use( VueSplide );
app.use(pinia)
app.mixin({
  methods: {
    truncateText(str, truncateLength) {
      if(str){
        if (str.length > truncateLength) {
          return str.slice(0, truncateLength) + '...'
        } else {
          return str
        }
      }
    },
  },
})
app.component('v-icon', OhVueIcon)
app.mount('#app')
