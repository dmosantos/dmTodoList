import { createStore } from 'vuex';

export default createStore({
    
    state: {

        tasks: [],

    },
    
    mutations: {

        initialiseStore(state) {

            state.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        },

        insertTask(state, task) {

            state.tasks.unshift(task);

            localStorage.setItem('tasks', JSON.stringify(state.tasks));

        },

        updateTask(state, task, index) {

            task.title = task.title?.trim();
            state.tasks[index] = task;

            localStorage.setItem('tasks', JSON.stringify(state.tasks));

        },

        deleteTask(state, task) {

            state.tasks.splice(state.tasks.indexOf(task), 1);

            localStorage.setItem('tasks', JSON.stringify(state.tasks));

        }

    },

    getters: {

        allTasks(state) {

            return state.tasks;

        },
        
        todoTasks(state) {

            return state.tasks.filter(task => !task.checked);

        },

        doneTasks(state) {

            return state.tasks.filter(task => task.checked);

        }

    },
    
    actions: {

        saveTask(context, task) {

            const index = context.getters.allTasks.indexOf(task);

            if(index >= 0)
                context.commit('updateTask', task, index);
            else
                context.commit('insertTask', task);


        },

        deleteTask(context, task) {

            context.commit('deleteTask', task);

        }

    },

    modules: {
    }

})