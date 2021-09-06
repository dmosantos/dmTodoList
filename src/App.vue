<template>
    <MainTemplate>

        <NewTask
            @newTask="newTask"
        />

        <TaskList
            title="Para Fazer"
            empty-list-text="Nenhuma tarefa para fazer... Adicione novas tarefas preenchendo o campo acima."
            :tasks="todoTasks"
            @saveTask="saveTask"
            @deleteTask="confirmDeleteTask"
            @checkTask="checkTask"
        />

        <TaskList
            title="Concluído"
            empty-list-text="Nenhuma tarefa finalizada..."
            :tasks="doneTasks"
            @saveTask="saveTask"
            @deleteTask="confirmDeleteTask"
            @checkTask="checkTask"
            :collapsed="true"
        />

        <Confirm
            :show="action == enumTaskAction.delete && taskSelected != null"
            title="Excluir a tarefa?"
            :message="taskSelected?.title"
            @confirm="confirmedDeleteTask"
            @cancel="cancelAction"
        />

    </MainTemplate>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import { uuid } from 'vue-uuid';

import MainTemplate from '@/view/template/MainTemplate';
import NewTask from '@/components/NewTask/NewTask';
import TaskList from '@/components/TaskList/TaskList';
import Confirm from '@/components/Modal/Confirm';

import enumTaskAction from '@/model/enumTaskAction';

export default {
  
    name: 'App',

    components: {
        MainTemplate,
        NewTask,
        TaskList,
        Confirm
    },

    data() {
        return {

            enumTaskAction: enumTaskAction,
            taskSelected: null,
            action: enumTaskAction.none

        }
    },

    computed: {

        ...mapGetters([
            'todoTasks',
            'doneTasks',
            'showDeleteConfirm'
        ])

    },

    mounted() {

        this.$store.commit('initialiseStore');

    },

    methods: {

        ...mapActions([
            'saveTask',
            'deleteTask'
        ]),

        newTask(taskTitle) {

            const task = {
                id: uuid.v4(),
                title: taskTitle,
                checked: false
            }

            this.saveTask(task);

        },

        checkTask(task) {

            task.checked = !task.checked;

            this.saveTask(task);

        },

        confirmDeleteTask(task) {

            this.action = enumTaskAction.delete;
            this.taskSelected = task;

        },

        confirmedDeleteTask() {

            this.deleteTask(this.taskSelected);
            this.cancelAction();

        },

        cancelAction() {

            this.action = enumTaskAction.none;
            this.taskSelected = null;

        }

    }

}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Raleway:wght@100;300;400;700;900&family=Exo:wght@400;700;900&display=swap');
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