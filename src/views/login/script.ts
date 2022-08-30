import { AuthActionTypes } from './../../store/modules/auth/action-types'
import { createNamespacedHelpers } from 'vuex'
import { defineComponent } from 'vue'
const { mapActions } = createNamespacedHelpers('authModule')
export default defineComponent({
  name: 'LoginView',
  components: {},
  data() {
    return {
      form: {
        username: '',
        password: '',
        checked: false,
      },
    }
  },
  methods: {
    ...mapActions({
      postLogin: AuthActionTypes.LOGIN,
    }),
    onSubmit(event: SubmitEvent) {
      // console.log('onSubmit', event)
      this.postLogin(this.form)
    },
  },
})