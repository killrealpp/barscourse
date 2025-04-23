<template>
    <div class="logo">
        <img class="logo__img" src="/logo.svg" alt="logo image">
    </div>
</template>

<script setup>
import { defineOptions } from 'vue';

defineOptions({
    name: 'logo'
})

</script>

<style lang="scss">
.logo {
    &__img {
        max-width: 122px;
        width: 100%;
    }
}
</style>