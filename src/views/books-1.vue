<template>
    <main class="main">
        <Breadcrumbs/>
        <div class="books">
            <div class="container">
                <div class="books__inner">
                    <logo></logo>
                </div>
            </div>
        </div>
        <Navbar/>
    </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
</script>

<style lang="scss">

</style>