<template>
    <form :class="$style.newTaskForm" @submit.prevent="newTask">

        <Input :class="$style.newTaskFormInput" v-model="taskTitle" />

        <SubmitButton />

    </form>
</template>

<script>

import Input from '@/components/Form/Input';
import SubmitButton from './SubmitButton';

export default {

    name: 'NewTaskForm',

    components: {
        Input,
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

    &__input {

        border-radius: var(--border-radius) 0 0 var(--border-radius);

    }

}

</style>