<template>
    <div class="blocks">
        <div class="container">
            <div class="blocks__inner">
                <div class="blocks-item">
                    <img class="blocks-item__img" src="/block1.webp" alt="block1">
                    <div class="blocks-item__texts">
                        <h6 class="blocks-item__title">Блок 1</h6>
                        <p class="blocks-item__text">Тайм-менеджмент</p>
                    </div>
                </div>
                <div class="blocks-item">
                    <img class="blocks-item__img" src="/block2.webp" alt="block2">
                    <div class="blocks-item__texts">
                        <h6 class="blocks-item__title">Блок 2</h6>
                        <p class="blocks-item__text">Лидерство</p>
                    </div>
                </div>
                <div class="blocks-item">
                    <img class="blocks-item__img" src="/block3.webp" alt="block3">
                    <div class="blocks-item__texts">
                        <h6 class="blocks-item__title">Блок 3</h6>
                        <p class="blocks-item__text">Тайм-менеджмент</p>
                    </div>
                </div>
                <div class="blocks-item">
                    <img class="blocks-item__img" src="/block4.webp" alt="block4">
                    <div class="blocks-item__texts">
                        <h6 class="blocks-item__title">Блок 4</h6>
                        <p class="blocks-item__text">Тайм-менеджмент</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.blocks{
    background-color: #fff;
    margin-bottom: auto;
    &__inner{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 13px;
    }

    &-item{
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover{
            transform: translateY(-2px);
        }

        &:focus{
            transform: translateY(-2px);
        }

        &__img{
            width: 100%;
        }

        &__texts{
            padding-top: 8px;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 5px;
            position: absolute;
            top: 0;
        }

        &__title, .blocks-item__text{
            text-align: center;
            font-weight: 500;
            font-size: 14px;
            color: #191F32;
        }
    }
}
</style>