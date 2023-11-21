<template>
    <div class="running-light-btn">
        <button class="light-btn" id="line">
            <span class="light-btn-inner"><slot>button</slot></span>
        </button>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "sass:color";
$btn-bg-color: #ffffff;

.light-btn {
    --border-width: 2px;
    --border-radius: 8px;
    --background-spread: 50px;

    font-family: Helvetica;
    font-weight: bold;
    font-size: 1.3rem;
    letter-spacing: -0.02rem;
    position: relative;
    color: #fff;
    border: 0;
    border-radius: var(--border-radius);
    background-color: transparent;
    overflow: hidden;
    padding: var(--border-width);
    cursor: pointer;
    box-shadow:
        2.8px 2.8px 2.2px rgb(0 0 0 / 2%),
        6.7px 6.7px 5.3px rgb(0 0 0 / 2.8%);
}

/* 彩虹色跑马灯 */
.light-btn::after {
    content: "";
    position: absolute;
    background: conic-gradient(
        from 180deg at 50% 50%,
        #00d1ff 0deg,
        #ee27ff 106.88deg,
        #205eff 206.25deg,
        #00f0ff 286.87deg,
        #00d1ff 360deg
    );
    top: calc(var(--background-spread) * -1);
    right: calc(var(--background-spread) * -1);
    bottom: calc(var(--background-spread) * -1);
    left: calc(var(--background-spread) * -1);
    z-index: -1;
    animation: 3s rotate linear infinite;
}

/* 单色跑马灯 */
.light-btn#line::after {
    background: conic-gradient(
        from 180deg at 50% 50%,
        rgba(0, 209, 255, 0) 0deg,
        rgba(0, 209, 255, 0) 153.75deg,
        #ed5126 345deg,
        rgba(0, 209, 255, 0) 360deg
    );
}

.light-btn > .light-btn-inner {
    display: block;
    background-color: $btn-bg-color;
    padding: 2px 30px;
    border-radius: calc(var(--border-radius) - var(--border-width) / 2);
    text-shadow: 0 4px 10px rgb(0 0 0 / 30%);
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
