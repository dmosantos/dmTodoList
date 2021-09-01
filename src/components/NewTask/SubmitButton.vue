<template>
    <button :class="$style.newTaskSubmitButton" title="Adicionar tarefa...">

        <icon symbol="plus" :class="$style.newTaskSubmitButtonIcon" />

    </button>
</template>

<script>

export default {

    name: 'NewTaskSubmitButton'

}

</script>

<style lang="scss" module>

@import '@/style/variables.scss';

.new-task-submit-button {

    align-items: center;
    background-color: var(--theme-color);
    border: 0 none;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size: 1.7rem;
    padding: 0 1rem;

    &:hover {

        background-color: var(--theme-color-hover);

    }

    &__icon {

        fill: var(--bg-color);

    }

}

@media (max-width: 600px) {

    .new-task-submit-button {

        border-radius: 0;

    }
    
}

</style>