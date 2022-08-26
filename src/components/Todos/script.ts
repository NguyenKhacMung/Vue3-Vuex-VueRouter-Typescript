import { createNamespacedHelpers } from 'vuex'
import { defineComponent } from 'vue'
import * as CONSTANTS from '@/constants'
import TodoItem from '@/components/TodoItem/todo-item.vue'
import AddTodo from '@/components/AddTodo/add-todo.vue'
import BaseItemDropdown from '@/components/BaseItemDropdown/base-item.vue'
import { userStore } from '@/store'
import { TodosActionTypes } from '@/store/modules/todo/action-types'
const { mapState, mapActions } = createNamespacedHelpers('todosModule')

export default defineComponent({
  name: 'TodoApp',
  components: {
    TodoItem,
    AddTodo,
    BaseItemDropdown,
  },
  data() {
    return {
      CONSTANTS: CONSTANTS,
      status: CONSTANTS.TYPE_STATUS.INPROGESS,
      calendar: require('@/assets/Calendar-con.svg'),
      listItemDropdown: [
        {
          name: CONSTANTS.NAME_STATUS.COMPLETED,
          status: CONSTANTS.TYPE_STATUS.COMPLETED,
        },
        {
          name: CONSTANTS.NAME_STATUS.INPROGESS,
          status: CONSTANTS.TYPE_STATUS.INPROGESS,
        },
        {
          name: CONSTANTS.NAME_STATUS.REMOVED,
          status: CONSTANTS.TYPE_STATUS.REMOVED,
        },
      ],
    }
  },
  setup() {
    const store = userStore()
    console.log('store', store)
    // async function fetchAllTodos() {
    //   try {
    //     const res = await store.dispatch('todosModule/GET_ALL_TODOS' as any)
    //     console.log('res', res)
    //   } catch (error) {
    //     console.log('error', error)
    //   }
    // }
    // fetchAllTodos()
    return {
      // fetchAllTodos,
      store,
    }
  },
  created() {
    this.getTodosByStatus(this.status)
  },
  computed: {
    ...mapState(['todos']),
  },
  methods: {
    ...mapActions({
      getTodosByStatus: TodosActionTypes.GET_TODO_BY_STATUS,
    }),
    selectItem(status: CONSTANTS.TYPE_STATUS): void {
      if (this.status !== status) {
        this.getTodosByStatus(status)
        this.status = status
      }
      console.log(status)
    },
  },
})
