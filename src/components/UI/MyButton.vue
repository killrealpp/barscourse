<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script setup>
import { defineOptions } from 'vue';

defineOptions({
    name: 'my-button'
})

</script>

<style lang="scss">
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 5px;
    background-color: #191F32;
    color: #fff;
    font-weight: 400;
    font-size: 17px;
    &:hover {
        background-color: #000000;
    }
    &:active {
        background-color: #677393;
    }
    &:focus-visible {
        outline: 2px solid #677393;
    }
}
</style>