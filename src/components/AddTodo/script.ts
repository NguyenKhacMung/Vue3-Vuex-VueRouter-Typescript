import * as CONSTANTS from '@/constants'
import { mapActions } from 'vuex'
import { defineComponent } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export default defineComponent({
  name: 'AddTodo',
  components: {},
  data() {
    return {
      plusIcon: require('@/assets/plus.svg'),
    }
  },
  computed: {},
  methods: {
    ...mapActions(['addTodo']),
    onKeyUp(e: Event) {
      e.preventDefault()
      const textValue = (<HTMLInputElement>e.target).value.trim()
      const newTodo = {
        id: uuidv4(),
        title: textValue,
        status: CONSTANTS.TYPE_STATUS.INPROGESS,
      }
      this.addTodo(newTodo)
      ;(<HTMLInputElement>e.target).value = ''
    },
  },
})
