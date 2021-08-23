<template>
    <MainTemplate>

        <NewTaskForm
            @insertTask="insertTask"
        />

        <TaskList
            title="Para Fazer"
            empty-list-text="Nenhuma tarefa para fazer... Adicione novas tarefas preenchendo o campo acima."
            :tasks="todoTasks"
            @deleteTask="deleteTask"
            @checkTask="checkTask"
        />

        <TaskList
            title="Concluído"
            empty-list-text="Nenhuma tarefa finalizada..."
            :tasks="doneTasks"
            @deleteTask="deleteTask"
            @checkTask="checkTask"
        />

    </MainTemplate>
</template>

<script>

import { uuid } from 'vue-uuid'; 

import MainTemplate from '@/view/template/MainTemplate';
import NewTaskForm from '@/components/NewTaskForm';
import TaskList from '@/components/TaskList';

export default {
  
    name: 'App',

    components: {
        MainTemplate,
        NewTaskForm,
        TaskList
    },

    data() {
        return {

            tasks: [
                // { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', checked: false },
                // { title: 'In ac elit est.', checked: false },
                // { title: 'Praesent vulputate vestibulum mauris sed luctus.', checked: false },
                // { title: 'Praesent porttitor dui id porttitor pulvinar.', checked: true },
                // { title: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', checked: true },
                // { title: 'Proin faucibus velit at ligula vestibulum luctus.', checked: true },
                // { title: 'In hac habitasse platea dictumst.', checked: false },
                // { title: 'Nullam vestibulum lorem eget feugiat interdum.', checked: false },
                // { title: 'Nullam venenatis tellus sit amet sem auctor, at tristique risus sagittis.', checked: false },
                // { title: 'Aenean sed eros risus.', checked: true },
                // { title: 'Vestibulum varius sed enim at dictum.', checked: false },
                // { title: 'Nunc lorem erat, posuere sit amet leo sed, convallis iaculis tellus.', checked: false },
            ].map(task => {
                return {
                    ...task,
                    id: uuid.v4()
                }
            })

        }
    },

    computed: {

        todoTasks() {

            return this.tasks.filter(task => !task.checked);

        },

        doneTasks() {

            return this.tasks.filter(task => task.checked);

        }

    },

    methods: {

        insertTask(taskTitle) {

            this.tasks.push({

                id: uuid.v4(),
                title: taskTitle,
                checked: false

            });

        },

        deleteTask(task) {

            if(confirm(`Deseja realmente excluir a tarefa?\n\n"${task.title}"`))
            this.tasks.splice(this.tasks.indexOf(task), 1);

        },

        checkTask(task) {

            task.checked = !task.checked;

        }

    }

}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Raleway:wght@100;300;400;700;900&display=swap');
@import '~normalize.css';
@import '@/style/main.scss';

</style>