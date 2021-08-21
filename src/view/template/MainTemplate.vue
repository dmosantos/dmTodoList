<template>
    <div :class="$style.mainTemplate">

        <AppHeader />
        
        <AppMain>
            <slot />
        </AppMain>
        
        <AppFooter />

    </div>
</template>

<script>

import AppHeader from './section/AppHeader';
import AppMain from './section/AppMain';
import AppFooter from './section/AppFooter';

export default {

    name: 'MainTemplate',

    components: {
        AppHeader,
        AppMain,
        AppFooter
    }

}

</script>

<style lang="scss" module>

.main-template {

    margin: 1rem auto;
    max-width: 600px;

}

</style>