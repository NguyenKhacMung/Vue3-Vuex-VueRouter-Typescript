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
        email: '',
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
        .then((res) => {
          console.log('res', res)
        })
        .catch((error) => {
          console.log('error', error)
        })
    },
  },
})
