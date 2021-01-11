let taskList = {
    todoList: [],
    addToDo(text) {
        const toDo = {
            status: false,
            text,
            id: Date.now()
        }
            this.todoList.push(toDo)
        

    },
    removeToDo(id) {
        this.todoList = this.todoList.filter(function (todoTask) {
            if (todoTask.id === id) {
                return false;
            } else {
                return true;
            }
        })
    },

    changeTextTodoMap(id, newText) {
        this.todoList = this.todoList.map(function (todoTask) {
            if (todoTask.id === id) {
               return {
                   ...todoTask,
                   text: newText
               }
            } else {
                return todoTask;
            }
        })
    },

    changeStatusTodoMap(id, newStatus) {
        this.todoList = this.todoList.map(function (todoTask) {
            if (todoTask.id === id && todoTask.status !== newStatus) {
                return {
                    ...todoTask,
                    status: newStatus
                } 
            } else {
                return todoTask;
            }
        })
    }
};

Object.seal(taskList)
console.log(Object.isSealed(taskList))