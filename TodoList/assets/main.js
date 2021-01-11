let taskList = {
    todoList: [],
    addToDo(item) {
        const filterList = this.todoList.filter(function (todoTask) {
            if (todoTask.id === item.id) {
                return true;
            } else {
                false;
            }
        })
        if (filterList.length === 0) {
            this.todoList.push(item)
        }

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
    changeTodoFilter(id, newText) {
        this.todoList.filter(function (todoTask) {
            if (todoTask.id === id) {
                return true;
            } else {
                return false;
            }
        })[0].text = newText;
    },

    changeTodoMap(id, newText) {
        this.todoList.map(function (todoTask) {
            if (todoTask.id === id) {
                todoTask.text = newText;
            }
        })
    },

    changeStatusTodoMap(id, newStatus) {
        this.todoList.map(function (todoTask) {
            if (todoTask.id === id && todoTask.status !== newStatus) {
                todoTask.status = newStatus;
            }
        })
    }
};

Object.seal(taskList)
console.log(Object.isSealed(taskList))

taskList.addToDo({ status: true, text: 'text_1', id: 1 });
taskList.addToDo({ status: false, text: 'text_2', id: 2 });
taskList.addToDo({ status: true, text: 'text_3', id: 3 });
taskList.addToDo({ status: false, text: 'text_4', id: 3 });

taskList.changeStatusTodoMap(2, true);

taskList.removeToDo(3);

taskList.changeTodoFilter(2, 'changeTextByFilter');

taskList.changeTodoMap(1, 'changeTextByMap');

console.log(taskList.todoList);