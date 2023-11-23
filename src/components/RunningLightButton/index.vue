<template>
    <div class="running-light-btn">
        <button class="light-btn" id="line">
            <div class="light-btn-inner"><slot>button</slot></div>
        </button>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "sass:color";

$btn-bg-color: #ffffff;
.light-btn {
    --border-width: 1.5px;
    --border-radius: 8px;
    --background-spread: 50px;

    position: relative;
    z-index: 0;
    padding: var(--border-width);
    overflow: hidden;
    font-family: Helvetica;
    font-size: 1.3rem;
    font-weight: bold;
    color: #ffffff;
    letter-spacing: -0.02rem;
    cursor: pointer;

    /* background-color: transparent; */
    background-color: #00f0ff;
    border: 0;
    border-radius: var(--border-radius);
    outline: none;
    box-shadow:
        2.8px 2.8px 2.2px rgb(0 0 0 / 2%),
        6.7px 6.7px 5.3px rgb(0 0 0 / 2.8%);
}

/* 彩虹色跑马灯 */
.light-btn::after {
    position: absolute;
    inset: calc(var(--background-spread) * -1) calc(var(--background-spread) * -1) calc(var(--background-spread) * -1)
        calc(var(--background-spread) * -1);
    z-index: -1;
    content: "";
    background: conic-gradient(
        from 180deg at 50% 50%,
        #00d1ff 0deg,
        #ee27ff 106.88deg,
        #205eff 206.25deg,
        #00f0ff 286.87deg,
        #00d1ff 360deg
    );
    animation: 3s rotate linear infinite;
}

/* 单色跑马灯 */
.light-btn#line::after {
    background: conic-gradient(
        from 180deg at 50% 50%,
        rgb(0 209 255 / 0%) 0deg,
        rgb(0 209 255 / 0%) 153.75deg,
        #ed5126 345deg,
        rgb(0 209 255 / 0%) 360deg
    );
}
.light-btn > .light-btn-inner {
    @include flex-center;

    padding: 5px 30px;
    text-shadow: 0 4px 10px rgb(0 0 0 / 30%);
    background-color: $btn-bg-color;
    border-radius: calc(var(--border-radius) - var(--border-width) / 2);
    &:hover {
        background-color: color.adjust($btn-bg-color, $lightness: 10%);
    }
    &:active {
        background-color: color.adjust($btn-bg-color, $lightness: -10%);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
