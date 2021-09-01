<template>
    <input
        :class="$style.newTaskTitleInput"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        placeholder="Nome da nova tarefa..."
        maxlength="500"
        required
        autofocus
    />
</template>

<script>

export default {

    name: 'Input',

    props: {

        modelValue: String

    },
    
}

</script>

<style lang="scss" module>

.new-task-title-input {

    background-color: #fff;
    border-radius: var(--border-radius);
    border: 0 none;
    flex-grow: 1;
    padding: 1rem;

    &:focus {

        outline: none;

    }

}

@media (max-width: 600px) {

    .new-task-title-input {

        border-radius: 0;
        
    }

}

</style>