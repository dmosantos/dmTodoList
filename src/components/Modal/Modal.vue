<template>
    <div v-if="show" :class="$style.modal">

        <div :class="$style.container">
        
            <section :class="$style.dialog">

                <header :class="$style.header">

                    <Icon v-if="icon" :class="$style.headerIcon" :symbol="icon" />

                    <h3 :class="$style.headerTitle">{{ title }}</h3>

                    <button @click="close" :class="$style.headerButton">

                        <Icon symbol="x" />

                    </button>

                </header>
                
                <div :class="$style.content">
                    
                    <slot />

                </div>


                <footer v-if="$slots.footer" :class="$style.footer">

                    <slot name="footer" />
                    
                </footer>

            </section>

        </div>

        <div :class="$style.overlay"></div>

    </div>
</template>

<script>

export default {

    name: 'Modal',

    props: {

        show: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: 'Atenção:'
        }

    },

    methods: {

        close() {

            this.$emit('close');

        }

    }

}

</script>

<style lang="scss" module>

.modal {

    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 9999;

}

.container,
.overlay {

    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

}

.container {

    overflow: auto;
    padding: 2rem .5rem;
    z-index: 2;

}

.dialog {

    margin: 0 auto;
    max-width: 400px;

}

.header {

    align-items: flex-start;
    background-color: var(--theme-color);
    border-radius: $border-radius $border-radius 0 0;
    color: var(--bg-color);
    display: flex;
    padding: 1.3rem 1rem;

    &__icon {

        fill: var(--bg-color);
        margin: 0 .5rem 0 -.25rem;
        min-width: 1em;

    }

    &__title {

        flex-grow: 1;
        font-size: 1.1rem;
        font-weight: 900;
        line-height: 1rem;
        margin: 0;
        text-transform: uppercase;

    }

    &__button {

        align-items: center;
        background-color: transparent;
        border: 0 none;
        border-radius: $border-radius;
        cursor: pointer;
        display: flex;
        justify-content: center;
        padding: 0;
        margin: -.25rem -.5rem -.25rem .5rem;
        max-height: 1.5em;
        min-height: 1.5em;
        max-width: 1.5em;
        min-width: 1.5em;

        &:hover {

            background-color: #fff;

        }

        svg {

            fill: var(--bg-color);

        }

    }

}

.content {

    background-color: #fff;
    padding: 1rem;

}

.footer {

    background-color: var(--light-color);
    border-radius: 0 0 $border-radius $border-radius;
    padding: 1rem;

}

.overlay {
    
    background-color: rgba(0, 0, 0, .5);
    z-index: 1;

}

</style>