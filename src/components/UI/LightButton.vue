<template>
    <button class="btn__light">
        <slot></slot>
    </button>
</template>

<script setup>
import { defineOptions } from 'vue';

defineOptions({
    name: 'light-button'
})

</script>

<style lang="scss">
.btn__light {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 5px;
    background-color: #fff;
    color: #191F32;
    font-weight: 400;
    font-size: 17px;
    border: 2px solid #191F32;
    transition: all 0.3s ease;

    &:hover {
        background-color: #191F32;
        color: #fff;
        border: 2px solid #191F32;
    }
}
</style>