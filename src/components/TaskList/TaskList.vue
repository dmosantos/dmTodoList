<template>
    <section :class="$style.taskListContainer">
        
        <Header
            :title="title"
            :counter="tasks.length"
            v-model:collapsed="isCollapsed"
            v-model:search="search"
        />

        <transition name="fade">

            <div v-show="!isCollapsed">
            
                <ul v-if="getTasks.length" :class="$style.taskList">
                    
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
                            @click="editTask(task, i)"
                            :class="[$style.taskListTitle, task.checked ? $style.taskListTitleChecked : null]"
                            v-html="!search ? task.title : task.title.replace(search, `<strong>${search}</strong>`)"
                        ></span>

                        <textarea
                            v-else
                            ref="input"
                            v-model="task.title"
                            type="text"
                            maxlength="500"
                            :class="[$style.taskListTitle, $style.taskListTitleEditing]"
                            :style="{ height: editInputHeight + 'px' }"
                            @blur="saveTask(task)"
                            @keydown.enter.prevent="saveTask(task)"
                            required
                        ></textarea>

                        <span :class="[$style.taskListButtons, $style.taskListButtonsToggle]">
                        
                            <a v-if="!task.checked" @click="editTask(task, i)" :class="[$style.taskListButton, $style.taskListButtonDelete]" title="Editar tarefa" href="javascript:void(0);">
                                <icon symbol="pencil-square" />
                            </a>
                            
                            <a @click="deleteTask(task)" :class="[$style.taskListButton, $style.taskListButtonDelete]" title="Excluir tarefa" href="javascript:void(0);">
                                <icon symbol="trash" />
                            </a>

                        </span>
                    
                    </li>
                
                </ul>

                <p v-else-if="search" :class="$style.emptyList">Nenhuma tarefa localizada ao buscar <strong>"{{ search }}"</strong>.</p>
                
                <p v-else :class="$style.emptyList">{{ emptyListText }}</p>

            </div>
        
        </transition>
    
    </section>
</template>

<script>

import { ref, onBeforeUpdate } from 'vue';
import Header from './Header';

export default {

    components: {
        Header
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
            
            isCollapsed: this.$props.collapsed,
            
            search: null

        }
    },

    computed: {

        getTasks() {

            return this.search
                ? this.tasks.filter(task => task.title.includes(this.search))
                : this.tasks;

        }

    },

    methods: {

        editTask(task, i) {

            if(task.checked)
                return;

            this.editing = task.id;

            this.editInputHeight = this.lis[i]?.clientHeight || this.editInputHeight;

            this.$nextTick(() => {

                this.$refs.input.focus();

            });

        },

        saveTask(task) {

            if(!task.title) {
                this.editTask(task);
                return;
            }

            this.editing = null;

            this.$emit('saveTask', task);

        },

        deleteTask(task) {

            this.$emit('deleteTask', task);

        }

    }

}

</script>

<style lang="scss" module>

.task-list-container {

    margin-bottom: 1rem;
    color: var(--secundary-text-color);

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

            .task-list__buttons--toggle {

                display: flex;

            }

        }

        &:first-child {

            border-top-left-radius: var(--border-radius);
            border-top-right-radius: var(--border-radius);

        }

        &:last-child {

            border-bottom-left-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);

        }

        &--editing:after {

            background-color: var(--theme-color);
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

            transition: all .1s ease;

        }

        &:after {

            content: '';
            border-color: var(--bg-color) transparent transparent transparent;
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