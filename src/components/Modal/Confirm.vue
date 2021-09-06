<template>
    <Modal
        :title="title"
        :show="show"
    >

        <p>{{ message }}</p>

        <template #footer>

            <Button
                type="success"
                icon="check"
                @click="confirm"
            >Sim</Button>
            
            <Button
                type="danger"
                icon="x"
                @click="cancel"
            >Não</Button>

        </template>

    </Modal>
</template>

<script>

import { useKeypress } from 'vue3-keypress';

import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button';

export default {

    name: 'Confirm',

    components: {
        Modal,
        Button
    },

    props: {

        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: 'Confirmação'
        },
        message: {
            type: String,
            default: 'Confirma?'
        }

    },

    created() {

        useKeypress({
            keyEvent: "keyup",
            keyBinds: [
                {
                    keyCode: "enter",
                    success: this.confirm,
                },
                {
                    keyCode: "esc",
                    success: this.cancel,
                }
            ]
        });

    },

    methods: {
        
        confirm() {

            if(!this.$props.show)
                return;

            this.$emit('confirm');

        },

        cancel() {

            if(!this.$props.show)
                return;

            this.$emit('cancel');

        }

    }

}

</script>

<style lang="scss" module>


</style>