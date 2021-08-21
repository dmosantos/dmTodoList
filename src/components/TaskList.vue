<template>
    <div :class="$style.taskList">

        <ul>
            <li v-for="(task, index) in $props.tasks" :key="index">
                {{ task.title }}
                <a href="javascript:void(0);" @click="$emit('deleteTask', index)">Excluir</a>
            </li>
        </ul>

    </div>
</template>

<script>

export default {

    name: 'TaskList',

    props: {

        tasks: Array

    },

}

</script>

<style lang="scss" module>

@import '@/style/variables.scss';

.taskList {

    background-color: #fff;
    border-radius: $border-radius;
    padding: 2rem;

}

</style>