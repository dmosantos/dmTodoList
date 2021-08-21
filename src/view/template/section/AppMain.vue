<template>
    <main :class="$style.appMain">

        <slot />

    </main>
</template>

<script>

export default {

    name: 'AppMain'

}

</script>

<style lang="scss" module>

.app-main {

    margin-bottom: 2rem;

}

</style>