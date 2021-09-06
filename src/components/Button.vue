<template>
    <button :class="[$style.button, $style[modifier]]">

        <Icon v-if="icon" :class="$style.buttonIcon" :symbol="icon" />

        <span :class="$style.buttonLabel">
            <slot />
        </span>

    </button>
</template>

<script>

import enumButtonType from '@/model/enumButtonType';

export default {

    name: 'Button',

    props: {

        type: {
            type: String,
            default: enumButtonType.primary
        },

        icon: String,

    },

    computed: {

        modifier() {

            return `button${this.$props.type[0].toUpperCase()}${this.$props.type.substring(1)}`;

        }

    }

}

</script>

<style lang="scss" module>

.button {

    align-items: center;
    background-color: var(--theme-color);
    border: 0 none;
    border-radius: var(--border-radius);
    cursor: pointer;
    display: flex;
    font-weight: 800;
    display: inline-block;
    margin-right: .5rem;
    text-transform: uppercase;
    padding: .7rem 1rem;

    &:hover {

        opacity: .8;

    }

    &__icon {

        margin: 0 .3rem 0 -.3rem;

    }

    &--secondary {

        background-color: var(--color-6);
        color: var(--light-color);

    }

    &--success {

        background-color: var(--success-color);
        color: #fff;
        
        .button__icon {

            fill: #fff;

        }

    }

    &--danger {

        background-color: var(--danger-color);
        color: #fff;

        .button__icon {

            fill: #fff;

        }

    }

}

</style>