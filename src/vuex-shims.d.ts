import { Store } from 'vuex'
import { IRootStore } from './store/interfaces'

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<IRootStore>
  }
}