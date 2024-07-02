const { createApp } = Vue

  createApp({
    data() {
      return {
        todoList : [],
        apiUrl: './api/get_all_list.php',
        newTaskName: '',
      }
    },

    methods: {
        getTodoList(){
            axios.get(this.apiUrl)
              .then((response) => {
                console.log(response.data.tasks);
                this.todoList = response.data.tasks;
              })
              .catch(function (error) {
                console.log(error);
              })
              .finally(function () {
                // always executed
              });  
            
        },
        addTask(taskToAdd){
            newTodoOgj = {
                name: taskToAdd,
                completed: false
            }
            this.todoList.push(newTodoOgj);
            this.newTaskName='';
        }
    },

    created(){
        this.getTodoList();
    }
  }).mount('#app')