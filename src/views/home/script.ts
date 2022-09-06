import { AuthMutationTypes } from './../../store/modules/auth/mutation-types'
import { createNamespacedHelpers } from 'vuex'
import { defineComponent } from 'vue'
const { mapActions, mapMutations } = createNamespacedHelpers('authModule')
import { AuthActionTypes } from '@/store/modules/auth/action-types'
import TodoApp from '@/components/Todos/todo-app.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    TodoApp,
  },
  data() {
    return {}
  },
  // created() {},
  methods: {
    ...mapActions({
      logOut: AuthActionTypes.LOG_OUT,
    }),
    ...mapMutations({}),
  },
})
