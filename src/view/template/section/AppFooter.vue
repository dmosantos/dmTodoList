<template>
    <p :class="$style.appFooter">

        by Diego Marques &bull; <a href="https://diegomarques.com.br" title="Acesse: diegomarques.com.br" target="_blank">diegomarques.com.br</a>

    </p>
</template>

<script>

export default {

    name: 'AppFooter'

}

</script>

<style lang="scss" module>

@import '@/style/_variables.scss';

.app-footer {

    border-top: 1px solid lighten($color-2, 8%);
    color: var(--text-color-2);
    font-size: .85rem;
    margin: 0;
    padding: 1rem 0;
    text-align: center;

    a {

        color: $color-1;

        &:hover {

            color: lighten($color-1, 15%);

        }

    }

}

</style>