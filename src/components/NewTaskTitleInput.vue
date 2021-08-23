<template>
    <input
        :class="$style.newTaskTitleInput"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        placeholder="Adicionar tarefa..."
        required
        autofocus
    />
</template>

<script>

export default {

    name: 'NewTaskTitleInput',

    props: {

        modelValue: String

    },
    
}

</script>

<style lang="scss" module>

@import '@/style/variables.scss';

.new-task-title-input {

    background-color: #fff;
    border-radius: $border-radius 0 0 $border-radius;
    border: 0 none;
    flex-grow: 1;
    padding: 1rem;

    &:focus {

        outline: none;

    }

}

</style>