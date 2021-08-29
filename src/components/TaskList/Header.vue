<template>
    <header :class="[$style.header, isCollapsed ? $style.headerCollapsed : null]">

        <h2
            :class="$style.headerTitle"
            @click="collapseToggle"
        >
            {{ title }}
            <small :class="$style.headerCounter">( {{ counter }} )</small>
        </h2>
            
        <a
            :class="$style.headerIcon"
            title="Recolher"
            @click="collapseToggle"
            href="javascript:void(0);"
        >
            
            <Icon :symbol="isCollapsed ? 'chevron-up' : 'chevron-down'" />

        </a>

    </header>
</template>

<script>

export default {

    name: 'Header',

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

            isCollapsed: this.$props.collapsed

        }
    },

    methods: {

        collapseToggle() {

            this.isCollapsed = !this.isCollapsed;

            this.$emit('update:collapsed', this.isCollapsed);

        }

    }

}

</script>

<style lang="scss" module>

@import '@/style/_variables.scss';

.header {

    align-items: stretch;
    display: flex;

    &--collapsed {

        border-bottom: 1px solid lighten($color-2, 8%);

    }

    &__title {

        color: var(--color-1);
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
        display: flex;
        cursor: pointer;
        padding: .2rem 0;

        svg {
        
            fill: var(--color-1);

        }

    }

}

@media (max-width: 600px) {

    .header {

        padding: 0 1rem;

    }

}

</style>