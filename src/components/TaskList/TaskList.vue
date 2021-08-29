<template>
    <section :class="$style.taskListContainer">
        
        <Header
            :title="title"
            :counter="tasks.length"
            v-model:collapsed="isCollapsed"
        />
        
        <transition name="task-list">

            <div v-show="!isCollapsed">
            
                <ul v-if="tasks.length" :class="$style.taskList">
                    
                    <li
                        v-for="(task, i) in getTasks"
                        :key="task.id"
                        :ref="el => { if (el) lis[i] = el }"
                        :class="[$style.taskListItem, editing == task.id ? $style.taskListItemEditing : null]"
                    >
                        
                        <span :class="$style.taskListButtons">
                        
                            <a @click="$emit('checkTask', task)" :class="[$style.taskListButton, $style.taskListButtonCheck]" title="Marcar como concluído" href="javascript:void(0);">
                                <icon :symbol="task.checked ? 'check-square' : 'square'" />
                            </a>

                        </span>
                        
                        <span
                            v-if="editing != task.id"
                            @click="edit(task, i)"
                            :class="[$style.taskListTitle, task.checked ? $style.taskListTitleChecked : null]"
                        >{{ task.title }}</span>

                        <textarea
                            v-else
                            ref="input"
                            v-model="task.title"
                            type="text"
                            maxlength="500"
                            :class="[$style.taskListTitle, $style.taskListTitleEditing]"
                            :style="{ height: editInputHeight + 'px' }"
                            @blur="save(task)"
                            @keyup.enter="save(task)"
                        ></textarea>

                        <span :class="[$style.taskListButtons, $style.taskListButtonsToggle]">
                        
                            <a v-if="!task.checked" @click="edit(task, i)" :class="[$style.taskListButton, $style.taskListButtonDelete]" title="Editar tarefa" href="javascript:void(0);">
                                <icon symbol="pencil-square" />
                            </a>
                            
                            <a @click="$emit('removeTask', task)" :class="[$style.taskListButton, $style.taskListButtonDelete]" title="Excluir tarefa" href="javascript:void(0);">
                                <icon symbol="trash" />
                            </a>

                        </span>
                    
                    </li>
                
                </ul>

                <p v-else :class="$style.emptyList">{{ emptyListText }}</p>

            </div>
        
        </transition>

    </section>
</template>

<script>

import { ref, onBeforeUpdate } from 'vue';
import Header from './Header.vue';
import Icon from '../Icon.vue';

export default {

    components: {
        Header,
        Icon
    },

    name: 'TaskList',

    setup() {
        
        const lis = ref([]);

        onBeforeUpdate(() => { lis.value = []; });

        return { lis }

    },

    props: {

        title: {
            type: String,
            default: 'To Do'
        },
        emptyListText: {
            type: String,
            default: 'Nenhuma tarefa...'
        },
        tasks: Array,
        collapsed: {
            type: Boolean,
            default: false
        }

    },

    data() {
        return {

            editing: null,
            editInputHeight: null,
            isCollapsed: this.$props.collapsed

        }
    },

    computed: {

        getTasks() {

            return this.tasks;

        }

    },

    methods: {

        edit(task, i) {

            if(task.checked)
                return;

            this.editing = task.id;

            this.editInputHeight = this.lis[i].clientHeight;

            this.$nextTick(() => {

                this.$refs.input.focus();

            });

        },

        save(task) {

            this.editing = null;

            this.$store.dispatch('saveTask', task);

        }

    }

}

</script>

<style lang="scss" module>

@import '@/style/_variables.scss';

.task-list-container {

    margin-bottom: 1rem;

}

.task-list {

    margin: 0;
    padding: 0;

    &__item {
        
        align-items: flex-start;
        background-color: #fff;
        display: flex;
        list-style: none;
        margin: 0 0 1px 0;
        position: relative;
        transition: background-color .1s linear;

        &:hover {

            // background-color: lighten($color-1, 20%);

            .task-list__buttons--toggle {

                display: flex;

            }

        }

        &:first-child {

            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;

        }

        &:last-child {

            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;

        }

        &--editing:after {

            background-color: var(--color-1);
            bottom: 0;
            content: '';
            height: 4px;
            left: 0;
            position: absolute;
            width: 100%;
            z-index: 5;

        }

    }

    &__title {

        cursor: text;
        flex-grow: 1;
        padding: 1rem 1rem 1rem 0;

        &--checked {

            cursor: default;
            text-decoration: line-through;

        }

        &--editing {

            background: none;
            border: 0 none;
            color: #000;
            font-weight: 300;

            &:focus {

                outline: none;

            }

        }

    }
    
    &__buttons {

        display: flex;
        padding: 0 .4rem;
        position: relative;
        z-index: 10;

        &--toggle {

            background-color: rgba(255, 255, 255, .8);
            border-color: rgba(0, 0, 0, .1);
            border-style: solid;
            border-width: 0 0 1px 1px;
            border-radius: 0 0 0 5px;
            display: none;
            position: absolute;
            right: 0;
            top: 0;

            .task-list__button {

                padding: .7rem .6rem

            }

        }

    }

    &__button {

        align-items: center;
        display: flex;
        min-width: 2rem;
        overflow: hidden;
        padding: 1.0625rem .5rem;
        position: relative;

        svg {

            fill: var(--text-color-3);
            transition: all .1s ease;

        }

        &:after {

            content: '';
            border-color: var(--color-2) transparent transparent transparent;
            border-style: solid;
            border-width: 6px;
            height: 6px;
            left: 50%;
            margin-left: -6px;
            position: absolute;
            transform: translateY(-6px);
            transition: all .1s ease;
            top: 0;
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

@media (max-width: 600px) {

    .task-list__item {
            
        &:first-child {

            border-top-left-radius: 0;
            border-top-right-radius: 0;

        }

        &:last-child {

            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;

        }

    }

}

</style>

<style>

.task-list-enter-active,
.task-list-leave-active {
    transition: opacity .2s ease;
}

.task-list-enter-from,
.task-list-leave-to {
    opacity: 0;
}

</style>