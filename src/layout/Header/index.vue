<template>
    <div class="header">
        <div class="header-container">
            <a class="header-title" src="">
                <div class="logo">
                    <!-- <img src="/logo.png" alt="" /> -->
                </div>
                <div class="text">火锅计时器</div>
            </a>
            <div class="header-content">
                <div class="content-left"></div>
                <div class="content-right">
                    <nav class="nav-list"></nav>
                    <div class="theme">
                        <!-- <SwitchTheme /> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
    width: 100vw;
    height: $nav-height;

    @include use-theme {
        color: get-theme-val(text-1);
        background-color: get-theme-val(bg);
    }
    .header-container {
        box-sizing: border-box;
        display: flex;
        width: 100%;

        @include use-theme {
            border-bottom: 1px solid get-theme-val(divider-light);
        }

        @include respond-to(phone) {
            padding: 0 24px;
        }

        @include respond-to(pad) {
            padding: 0 24px;
        }

        @include respond-to(notebook) {
            padding: 0 32px;
        }

        @include respond-to(desktop) {
            padding: 0 32px;
        }

        @include respond-to(tv) {
            padding: 0 32px;
        }
        .header-title {
            height: $nav-height;
            font-size: 16px;
            font-weight: 500;

            @include flex-center(initial, center);
            .logo {
                width: 30px;
                height: 30px;
                margin-right: 5px;
                background-image: url("/logo.png");
                background-size: contain;
            }
            .text {
                font-size: 18px;
                font-weight: 600;
                letter-spacing: 2px;
            }
        }
        .header-content {
            flex: 1;

            @include flex-center(space-between, center);
            .content-left {
            }
            .content-right {
                @include flex-center(space-evenly, center);
                .nav-list {
                }
                .theme {
                    height: $nav-height;

                    @include flex-center;
                }
            }
        }
    }
}
</style>
