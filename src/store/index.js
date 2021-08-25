import { createStore } from 'vuex'
import { uuid } from 'vue-uuid';

export default createStore({
    
    state: {

        tasks: [
            // { id: 1, title: 'In ac elit est.', checked: false },
            // { id: 2, title: 'Praesent vulputate vestibulum mauris sed luctus.', checked: false },
            // { id: 3, title: 'Praesent porttitor dui id porttitor pulvinar.', checked: true },
            // { id: 4, title: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', checked: true },
            // { id: 5, title: 'Proin faucibus velit at ligula vestibulum luctus.', checked: true },
            // { id: 6, title: 'In hac habitasse platea dictumst.', checked: false },
            // { id: 7, title: 'Nullam vestibulum lorem eget feugiat interdum.', checked: false },
            // { id: 8, title: 'Nullam venenatis tellus sit amet sem auctor, at tristique risus sagittis.', checked: false },
            // { id: 9, title: 'Aenean sed eros risus.', checked: true },
            // { id: 10, title: 'Vestibulum varius sed enim at dictum.', checked: false },
            // { id: 11, title: 'Nunc lorem erat, posuere sit amet leo sed, convallis iaculis tellus.', checked: false },
            // { id: 12, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', checked: false },
        ]

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

        checkTask(context, task) {

            task.checked = !task.checked;

            context.commit('updateTask', task);

        }

    },

    modules: {
    }

})
