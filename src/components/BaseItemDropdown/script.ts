import { defineComponent, PropType } from 'vue'
interface Item {
  name: string
}
export default defineComponent({
  name: 'BaseItemDropdown',
  components: {},
  props: {
    item: {
      required: true,
      type: Object as PropType<Item>,
    },
  },
  computed: {},
  methods: {},
})
