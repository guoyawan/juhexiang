<template>
    <div class="wx">
        <div class="boxP8 wx-box">
            <p>添加璨玞堂微信</p>
            <b>微信号: <span class="js-render-kefu red" id="wx1"></span></b>
            <p>(长按复制)</p>
            <strong class="font">天然和田玉 一手货源 顺丰保价 不满意可退货</strong>
            <div>
                <span @click="copy1" class="copy">点击一键复制微信号</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {  Dialog } from 'vant';
    export default {
        name: "wx",
        methods: {
            copy(con) {
                const range = document.createRange();
                range.selectNode(document.getElementById(con));
                const selection = window.getSelection();
                if (selection.rangeCount > 0) selection.removeAllRanges();
                selection.addRange(range);
                document.execCommand('copy');
            },
            success() {
                Dialog.alert({
                    message: '复制成功'
                })
            },
            copy1: function () {
                this.copy('wx1');
                this.success();
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
    .boxP8{
        width: 80%;
        margin: 0 auto;
    }
    .wx-box{
        text-align: center;
        color: #000;
        border: 1px solid green;
        font-size: 18px;
        background: #fff;
        padding: 20px 0;
        margin-bottom: 25px;
    }
    .red{
        color: red;
    }
    .font{
        font-size: 14px;
        padding: 0 5px;
    }
    .copy   {
        display: inline-block;
        color: #fff;
        background: forestgreen;
        border-radius: 20px;
        padding: 2px 20px;
        margin-top: 10px;
    }
</style>