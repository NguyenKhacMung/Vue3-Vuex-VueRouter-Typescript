import { mapActions } from 'vuex'
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import * as CONSTANTS from '@/constants'
import TodoItem from '@/components/TodoItem/todo-item.vue'
import AddTodo from '@/components/AddTodo/add-todo.vue'
import BaseItemDropdown from '@/components/BaseItemDropdown/base-item.vue'
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
  computed: {
    ...mapState(['todos']),
    // watchTodos(todos) {
    //   return todos
    // },
  },
  created() {
    this.getTodoByStatus(this.status)
  },
  methods: {
    ...mapActions(['getTodoByStatus']),
    selectItem(status: CONSTANTS.TYPE_STATUS): void {
      if (this.status !== status) {
        this.getTodoByStatus(status)
        this.status = status
      }
      console.log(status)
    },
  },
})
