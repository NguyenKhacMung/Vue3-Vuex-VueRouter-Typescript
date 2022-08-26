import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far, fab)
dom.watch()
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(BootstrapVue3)
  .use(store)
  .use(router)
  .mount('#app')
