import { createNamespacedHelpers } from 'vuex'
import { TodosActionTypes } from '@/store/modules/todo/action-types'
import { defineComponent, PropType } from 'vue'
import { Todo } from '@/store/modules/todo/state'
const { mapState, mapActions } = createNamespacedHelpers('todosModule')
import * as CONSTANTS from '@/constants'

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  data() {
    return {
      CONSTANTS: CONSTANTS,
      img: require('@/assets/remove.svg'),
      plusIcon: require('@/assets/plus.svg'),
    }
  },
  methods: {
    ...mapActions({
      updateTodo: TodosActionTypes.UPDATE_TODO,
    }),
    onChange(id: string, status: CONSTANTS.TYPE_STATUS) {
      console.log('onChange', id, status)
      this.updateTodo({ id, status })
    },
  },
})
