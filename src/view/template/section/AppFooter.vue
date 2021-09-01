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

.app-footer {

    border-top: 1px solid var(--color-2);
    font-size: .85rem;
    margin: 0;
    padding: 1rem 0;
    text-align: center;

    a {

        color: var(--theme-color);

        &:hover {

            color: var(--theme-color-hover);

        }

    }

}

</style>