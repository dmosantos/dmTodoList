<template>
    <MainTemplate>

        <NewTask
            @newTask="newTask"
        />

        <TaskList
            title="Para Fazer"
            empty-list-text="Nenhuma tarefa para fazer... Adicione novas tarefas preenchendo o campo acima."
            :tasks="todoTasks"
            @removeTask="removeTask"
            @checkTask="checkTask"
        />

        <TaskList
            title="Concluído"
            empty-list-text="Nenhuma tarefa finalizada..."
            :tasks="doneTasks"
            @removeTask="removeTask"
            @checkTask="checkTask"
            :collapsed="true"
        />

    </MainTemplate>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

import MainTemplate from '@/view/template/MainTemplate';
import NewTask from '@/components/NewTask/NewTask';
import TaskList from '@/components/TaskList/TaskList';

export default {
  
    name: 'App',

    components: {
        MainTemplate,
        NewTask,
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

</style>

<style lang="scss">

@import '@/style/main.scss';

</style>

<style>

.fade-enter-active,
.fade-leave-active {
    
    transition: opacity .2s ease, transform .2s ease;

}

.fade-enter-from,
.fade-leave-to {
    
    opacity: 0;
    transform: translateY(-.5rem);

}

</style>