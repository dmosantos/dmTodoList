<template>
    <div>
    
        <header :class="[$style.header, isCollapsed ? $style.headerCollapsed : null]">

            <h2
                :class="$style.headerTitle"
                @click="collapseToggle"
            >
                {{ title }}
                <small :class="$style.headerCounter">( {{ counter }} )</small>
            </h2>

            <transition name="fade">

                <a
                    v-if="!isCollapsed"
                    :class="[$style.headerIcon, isOpenedSearch ? $style.headerIconActive : null]"
                    title="Pesquisar"
                    @click="searchToggle"
                    href="javascript:void(0);"
                >
                    
                    <Icon symbol="search" />

                </a>

            </transition>
                
            <a
                :class="[$style.headerIcon, !isCollapsed ? $style.headerIconCollapseActive : null]"
                title="Recolher"
                @click="collapseToggle"
                href="javascript:void(0);"
            >
                
                <Icon symbol="chevron-up" />

            </a>


        </header>

        <transition name="fade">

            <form v-if="isOpenedSearch" :class="$style.search">

                <Input
                    v-model="search"
                    ref="search"
                    :class="$style.searchInput"
                    placeholder="Pesquisar..."
                />

                <a
                    v-if="search"
                    :class="[$style.headerIcon, $style.searchClearButton]"
                    title="Limpar"
                    @click="searchClear"
                    href="javascript:void(0);"
                >
                    
                    <Icon symbol="x" />

                </a>

            </form>

        </transition>

    </div>
</template>

<script>

import Input from '@/components/Form/Input';

export default {

    name: 'Header',

    components: {
        Input
    },

    props: {

        title: {
            type: String,
            default: 'To Do'
        },
        counter: {
            type: Number,
            default: 0
        },
        collapsed: {
            type: Boolean,
            default: false
        }

    },

    data() {
        return {

            isCollapsed: this.$props.collapsed,

            search: null,
            isOpenedSearch: false

        }
    },

    watch: {

        search(value) {

            this.$emit('update:search', value);

        }

    },

    methods: {

        collapseToggle() {

            this.isCollapsed = !this.isCollapsed;
            
            this.isOpenedSearch = this.isCollapsed
                ? false
                : this.search ? true : false;

            if(this.isOpenedSearch)
                this.searchFocus();

            this.$emit('update:collapsed', this.isCollapsed);

        },

        searchToggle() {

            this.isOpenedSearch = !this.isOpenedSearch;


            if(!this.isOpenedSearch)
                this.search = null;

            else
                this.searchFocus();

        },

        searchClear() {

            this.search = null;

            this.searchFocus();

        },

        searchFocus() {

            this.$nextTick(() => {

                this.$refs.search.$el.focus();

            });

        }

    }

}

</script>

<style lang="scss" module>

.header {

    align-items: center;
    display: flex;

    &--collapsed {

        border-bottom: 1px solid lighten($color-2, 8%);
        margin-bottom: -1px;

    }

    &__title {

        color: var(--theme-color);
        cursor: pointer;
        flex-grow: 1;
        margin: 0;
        padding: 1rem 0;

    }

    &__counter {

        font-size: .7em;
        font-weight: 100;

    }

    &__icon {

        align-items: center;
        border-radius: var(--border-radius);
        display: flex;
        cursor: pointer;
        margin: 0 -.5rem 0 1rem;
        padding: .5rem;

        svg {
            
            fill: var(--theme-color);
            transition: transform .2s ease;

        }

        &--active {

            background-color: var(--theme-color);

            svg {

                fill: var(--bg-color);

            }

        }

        &--collapse-active {

            svg {

                transform: rotate(180deg);

            }

        }

    }

}

.search {

    align-items: center;
    display: flex;
    margin-bottom: 1rem;

    &__input {

        position: relative;
        z-index: 1;

    }

    &__clear-button {

        margin: 0 0 0 -2rem;
        position: relative;
        z-index: 5;

        svg {

            fill: var(--secundary-color);

        }

    }

}

@media (max-width: 600px) {

    .header {

        padding: 0 1rem;

    }

}

</style>