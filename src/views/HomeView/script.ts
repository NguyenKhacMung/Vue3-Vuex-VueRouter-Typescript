import { defineComponent } from "vue";
import { mapActions } from "vuex";
import TodoApp from "@/components/Todos/todo-app.vue";
export default defineComponent({
  name: "HomeView",
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
