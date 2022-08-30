import { defineComponent } from "vue";
import TodoApp from "@/components/Todos/todo-app.vue";
export default defineComponent({
  name: "TodoView",
  components: {
    TodoApp,
  },
  data() {
    return {
      cc: 54654,
    };
  },
  // created() {
  //   this.getTodos();
  //   // console.log("Created",  this.getTodos());
  // },
  // methods: {
  //   ...mapActions(["getTodos"]),
  // },
});
