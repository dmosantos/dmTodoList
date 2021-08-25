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
    background-color: $color-4;
    border: 0 none;
    border-radius: 0 $border-radius $border-radius 0;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size: 1.7rem;
    padding: 0 1rem;

    &:hover {

        background-color: lighten($color-4, 10%);

    }

    &__icon {

        fill: #fff!important;

    }

}

</style>