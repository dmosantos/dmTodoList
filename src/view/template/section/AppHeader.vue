<template>
    <header :class="$style.appHeader">

        <!-- App Logo -->
        <div :class="$style.appLogo">
            <span :class="$style.appLogoSignature">dm</span>
            <span :class="$style.appLogoName">ToDoList</span>
        </div>

    </header>
</template>

<script>

export default {

    name: 'AppHeader'

}

</script>

<style lang="scss" module>

.app-header {

    padding: 1rem 0 0 0;

}

.app-logo {

    color: var(--theme-color);
    letter-spacing: -.1em;
    margin-bottom: 2rem;
    text-align: center;

    &__signature {

        font-size: 2rem;
        font-weight: 400;

    }

    &__name {

        font-family: 'Lobster', cursive;
        font-size: 3rem;

    }

}

</style>