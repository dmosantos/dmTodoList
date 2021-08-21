<template>
    <MainTemplate>

        <NewTaskForm
            @insertTask="insertTask"
        />

        <TaskList
            :tasks="tasks"
            @deleteTask="deleteTask"
        />

    </MainTemplate>
</template>

<script>

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

            tasks: []

        }
    },

    methods: {

        insertTask(taskTitle) {

            this.tasks.push({

                title: taskTitle

            });

        },

        deleteTask(index) {

            console.log(index);

            this.tasks.splice(index, 1);

        }

    }

}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Raleway:wght@100;300;400;700;900&display=swap');
@import '~normalize.css';
@import '@/style/main.scss';

</style>