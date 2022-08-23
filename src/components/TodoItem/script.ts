import { mapActions } from 'vuex'
import { defineComponent, PropType, defineProps } from 'vue'
import { Todo } from '@/store/interfaces'
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
    ...mapActions(['updateTodo']),
    onChange(id: string, status: CONSTANTS.TYPE_STATUS) {
      console.log('onChange', id, status)
      this.updateTodo({ id, status })
    },
  },
})
