<template>
    <div class="loading">
        <div class="container">
            <div class="loading__content">
                <span class="loading__content-loader"></span>
                <h2>Загрузка...</h2>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss">

.loading {
    padding: 271px 0 218px;
}
.loading__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    &-loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite;
        &::before {
            content: "";
            box-sizing: border-box;
            position: absolute;
            inset: 0px;
            border-radius: 50%;
            border: 5px solid #000000;
            animation: prixClipFix 2s linear infinite;
            }
    }
}

@keyframes rotate {
        100%   {transform: rotate(360deg)}
}
</style>