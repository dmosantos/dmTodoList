<template>
    <MainTemplate>

        <NewTaskForm
            @insertTask="newTask"
        />

        <TaskList
            title="Para Fazer"
            empty-list-text="Nenhuma tarefa para fazer... Adicione novas tarefas preenchendo o campo acima."
            :tasks="todoTasks"
            @deleteTask="removeTask"
            @checkTask="checkTask"
        />

        <TaskList
            title="Concluído"
            empty-list-text="Nenhuma tarefa finalizada..."
            :tasks="doneTasks"
            @deleteTask="removeTask"
            @checkTask="checkTask"
        />

    </MainTemplate>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

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

        }
    },

    computed: {

        ...mapGetters([
            'todoTasks',
            'doneTasks'
        ])

    },

    mounted() {

        this.$store.commit('initialiseStore');

    },

    methods: {

        ...mapActions([
            'newTask',
            'removeTask',
            'checkTask'
        ])

    }

}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Raleway:wght@100;300;400;700;900&display=swap');
@import '~normalize.css';
@import '@/style/main.scss';

</style>