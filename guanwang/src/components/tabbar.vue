<template>
    <div class="tabbar">
        <router-view/>

        <van-tabbar route v-model="active" class="tabbar-box">
            <van-tabbar-item
                    replace
                    to="/"
                    icon="home-o"
            >
                首页
            </van-tabbar-item>
            <van-tabbar-item
                    replace
                    to="/cates"
            >
                <span>分类</span>
                <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon.active : icon.normal"
                >
            </van-tabbar-item>
            <van-tabbar-item
                    replace
                    to="/peer"
            >
                <span>行业揭秘</span>
                <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon1.active : icon1.normal"
                >
            </van-tabbar-item>
            <van-tabbar-item @click="city"
                             replace
            >
                <span>商城</span>
                <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon2.active : icon2.normal"
                >
            </van-tabbar-item>
            <van-tabbar-item @click="pear1"
                             info="3"
                             replace
                             icon="search"
            >
                <span>联系我们</span>
                <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon3.active : icon3.normal"
                >
            </van-tabbar-item>
        </van-tabbar>

        <!--弹窗-->
        <div class="door" :style="style2"></div>
        <div class="pear" :style="style2">
            <span id="close" @click="lost1">×</span>
            <p class="pear-title">C/C/T/V/国/家/优/选/品/牌</p>
            <p class="pear-five">五分钟内回复</p>
            <strong class="pear-inquiry">-快速询价-</strong>
            <div class="pear-photo">
                <img src="@/assets/1.jpg" alt="">
            </div>
            <strong class="pear-special">您的专属和田玉顾问</strong>
            <p class="please-add">请添加璨玞堂微信</p>
            <p class="wx-number"><strong>微信号：<span id="wx1" class="js-render-kefu inner">繁忙，请重试</span></strong></p>
            <span class="btn" type="primary" id="copy" @click="copy1">点击复制</span>
        </div>
    </div>
</template>

<script>
    import {  Dialog } from 'vant';
    export default {
        name: "tabbar",
        data() {
            return {
                active: 0,
                icon: {
                    normal: require('@/assets/cate.png'),
                    active: require('@/assets/cate1.png'),
                }, icon1: {
                    normal: require('@/assets/peer.png'),
                    active: require('@/assets/peer1.png'),
                }, icon2: {
                    normal: require('@/assets/store.png'),
                    active: require('@/assets/store1.png'),
                }, icon3: {
                    normal: require('@/assets/wx.png'),
                    active: require('@/assets/wx1.png'),
                },
                style2: {display: 'none'}
            }
        },
        methods: {
            city: function () {
                window.location.href = "https://j.youzan.com/ejejTi"
            },
            pear1: function () {
                this.style2.display = 'block'
            },
            lost1: function () {
                this.style2.display = 'none'
            },
            copy1: function () {
                this.copy('wx1');
                Dialog.alert({
                    message: '复制成功'
                })
            },
            copy(con) {
                const range = document.createRange();
                range.selectNode(document.getElementById(con));
                const selection = window.getSelection();
                if (selection.rangeCount > 0) selection.removeAllRanges();
                selection.addRange(range);
                document.execCommand('copy');
            }

        },
        mounted: function () {
            var position = document.getElementsByTagName("head")[0];
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = location.protocol + "//wx.lyy1.cn/cache/kefu/6005.js";
            position.appendChild(script);
        }
    }
</script>

<style scoped>
    .van-tabbar-item__icon img {
        width: 20px;
        height: 20px;
    }
    .van-tabbar-item {
        font-size: 14px;
    }
    .van-tabbar-item__icon {
        font-size: 20px;
    }
    .tabbar{
        height: 50px;
        /*z-index: -1;*/
    }
    /*弹窗*/
    .pear {
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 3;
        transform: translate(-50%, -50%);
        width: 75%;
        background: #fff;
        border-radius: 10px;
        padding: 5% 2%;
        text-align: center;
    }

    #close {
        display: inline-block;
        font-size: 40px;
        float: right;
        margin-top: -3%;
        margin-right: 0;
        line-height: 1;
    }

    .door {
        background: rgba(0, 0, 0, .5);
        height: 100%;
        width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: fixed;
        z-index: 2;
    }
    .pear-title {
        color: #91c3a7;
        line-height: 1.8;
    }

    .pear-five {
        font-size: 25px;
        color: #43b57a;
        line-height: 1.5;
    }

    .pear-inquiry {
        font-size: 16px;
        font-family: Monaco;
        line-height: 1.8;
    }

    .pear-photo {
        width: 40%;
        margin: 0 auto;
    }

    .pear-photo img {
        width: 100%;
        border-radius: 50%;
        border: #389655 solid 3px;
        margin: 10% 0 1% 0;
    }

    .pear-special {
        margin-bottom: 10%;
        display: block;
        line-height: 1.8;
    }

    .please-add {
        font-size: 18px;
        line-height: 1.8;
    }

    .wx-number {
        color: #43b57a;
        font-size: 22px;
        display: block;
        line-height: 2;
    }

    .btn {
        width: 60%;
        border-radius: 20px;
        font-size: 20px;
        background: forestgreen;
        color: #fff;
        display: inline-block;
        margin-top: 5px;
    }
</style>