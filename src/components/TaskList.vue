<template>
    <div :class="$style.taskListContainer">
        
        <h2 :class="$style.title">{{ $props.title }}</h2>

        <ul v-if="$props.tasks.length" :class="$style.taskList">
            <li v-for="task in $props.tasks" :key="task.id" :class="$style.taskListItem">
                <a @click="$emit('checkTask', task)" :class="[$style.taskListButton, $style.taskListButtonCheck]" title="Marcar como concluído" href="javascript:void(0);">
                    <icon :symbol="task.checked ? 'check-square' : 'square'" />
                </a>
                <span :class="[$style.taskListTitle, task.checked ? $style.taskListTitleChecked : null]">{{ task.title }}</span>
                <a @click="$emit('deleteTask', task)" :class="[$style.taskListButton, $style.taskListButtonDelete]" title="Excluir tarefa" href="javascript:void(0);">
                    <icon symbol="trash" />
                </a>
            </li>
        </ul>

        <p v-else :class="$style.emptyList">{{ $props.emptyListText }}</p>

    </div>
</template>

<script>

export default {

    name: 'TaskList',

    props: {

        title: {
            type: String,
            default: 'To Do'
        },
        emptyListText: {
            type: String,
            default: 'Nenhuma tarefa...'
        },
        tasks: Array

    },

}

</script>

<style lang="scss" module>

@import '@/style/variables.scss';

.task-list-container {

    margin-bottom: 1rem;

}

.title {

    color: var(--color-1);
    margin: 0;
    padding: 1rem 0 1rem 0;

}

.task-list {

    margin: 0;
    padding: 0;

    &__item {
        
        align-items: stretch;
        background-color: #fff;
        display: flex;
        list-style: none;
        margin: 0 0 1px 0;
        transition: all .1s linear;

        &:hover {

            background-color: lighten($color-1, 20%);

        }

        &:first-child {

            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;

        }

        &:last-child {

            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;

        }

    }

    &__title {

        flex-grow: 1;
        padding: 1rem 0;

        &--checked {

            text-decoration: line-through;

        }

    }

    &__button {

        align-items: center;
        display: flex;
        min-width: 3rem;
        overflow: hidden;
        padding: 1rem;
        position: relative;

        svg {

            transition: all .1s ease;

        }

        &:after {

            bottom: 0;
            content: '';
            border-color: transparent transparent var(--color-2) transparent;
            border-style: solid;
            border-width: 6px;
            height: 6px;
            left: 50%;
            margin-left: -6px;
            position: absolute;
            transform: translateY(6px);
            transition: all .1s ease;
            width: 6px;

        }

        &:hover {

            svg {

                transform: translateY(-3px);

            }

            &:after {

                transform: translateY(0);

            }

        }

        

    }

}

.empty-list {

    color: lighten($color-2, 50%);
    margin: 0;

}

</style>