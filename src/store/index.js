import { createStore } from 'vuex'
import { uuid } from 'vue-uuid'

export default createStore({
    
    state: {

        tasks: []

    },
    
    mutations: {

        initialiseStore(state) {

            state.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        },

        insertTask(state, task) {

            state.tasks.unshift(task);

            localStorage.setItem('tasks', JSON.stringify(state.tasks));

        },

        updateTask(state, task) {

            state.tasks[state.tasks.indexOf(task)] = task;

            localStorage.setItem('tasks', JSON.stringify(state.tasks));

        },

        deleteTask(state, task) {

            state.tasks.splice(state.tasks.indexOf(task), 1);

            localStorage.setItem('tasks', JSON.stringify(state.tasks));

        }

    },

    getters: {

        todoTasks(state) {

            return state.tasks.filter(task => !task.checked);

        },

        doneTasks(state) {

            return state.tasks.filter(task => task.checked);

        }

    },
    
    actions: {

        newTask(context, taskTitle) {

            const task = {
                id: uuid.v4(),
                title: taskTitle,
                checked: false
            }

            context.commit('insertTask', task);

        },

        removeTask(context, task) {

            if(confirm(`Deseja realmente excluir a tarefa?\n\n"${task.title}"`))
                context.commit('deleteTask', task);

        },

        saveTask(context, task) {

            context.commit('updateTask', task);

        },

        checkTask(context, task) {

            task.checked = !task.checked;

            context.commit('updateTask', task);

        }

    },

    modules: {
    }

})