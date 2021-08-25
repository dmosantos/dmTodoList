<template>
    <form :class="$style.newTaskForm" @submit.prevent="newTask">

        <NewTaskTitleInput v-model="taskTitle" />

        <NewTaskSubmitButton />

    </form>
</template>

<script>

import NewTaskTitleInput from './NewTaskTitleInput';
import NewTaskSubmitButton from './NewTaskSubmitButton';

export default {

    name: 'NewTaskForm',

    components: {
        NewTaskTitleInput,
        NewTaskSubmitButton
    },

    data() {
        return {

            taskTitle: null

        }
    },

    methods: {

        newTask() {

            this.$emit('new-task', this.taskTitle);

            this.taskTitle = null;

        }

    }

}

</script>

<style lang="scss" module>

.new-task-form {

    display: flex;
    margin-bottom: 1rem;

}

</style>