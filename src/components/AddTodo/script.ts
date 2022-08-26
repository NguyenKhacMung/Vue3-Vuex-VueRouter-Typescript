import { createNamespacedHelpers } from 'vuex'
import * as CONSTANTS from '@/constants'
import { defineComponent } from 'vue'
const { mapState, mapActions } = createNamespacedHelpers('todosModule')
import { TodosActionTypes } from '@/store/modules/todo/action-types'
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
    ...mapActions({
      addTodo: TodosActionTypes.ADD_TODO,
    }),
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
