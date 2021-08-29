<template>
    <form :class="$style.newTaskForm" @submit.prevent="newTask">

        <TitleInput v-model="taskTitle" />

        <SubmitButton />

    </form>
</template>

<script>

import TitleInput from './TitleInput';
import SubmitButton from './SubmitButton';

export default {

    name: 'NewTaskForm',

    components: {
        TitleInput,
        SubmitButton
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