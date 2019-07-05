<template>
    <div class="gong">
        <div class="content">
            <img src="./img/0.jpg" alt="">
            <p>和田玉市场水深，商场专柜里动辄几万几十万的玉石，让普通的爱玉人好是无奈，但真正的一手货源、厂家直销，价格有多实惠你是想象不到的。
            </p>
            <img src="./img/1.jpg" alt="">
            <p>璨玞堂是一家集选材、设计、雕刻、销售于一体的玉石互联网+平台。创始人张伟灿为了解决“怕买假，怕买贵”的用户焦虑，采用“一手货源，互联网直供”的经营思路，砍掉一切中间商，更砍去了至少60%以上的虚高价格，真正让利消费者。你在商城柜台看到的标价十万的玉石，也许在璨玞堂只需要1万！</p>
            <h2 class="top-title" style="line-height: 40px;margin-bottom: 0;"><b style="color: #000;">为什么璨玞堂的和田玉比专柜</b></h2>
            <h2 class="top-title" style="line-height: 40px;margin-top: 0;padding: 0">物美价更低</h2>
            <img src="./img/2.jpg" alt="">
            <br>
            <div class="T_con">
                <div class="T-border">
                    <p class="center-T">从原料选取到产品成型 </p>
                    <p class="center-T">老灿严格把控质量 </p>
                    <p class="center-T">苏工，海派名家雕琢 </p>
                </div>
            </div>
            <br>
            <img id="copy3" @click="copy3" src="./img/5.gif" alt="">
            <p class="zi">没有中间商，源头商家一线直销</p>
            <p class="red zi">一点都不贵。</p>
            <br>
            <div class="T_con">
                <div class="T-border">
                    <p class="center-T">同等品质比价格 </p>
                    <p class="center-T">同等价位比品质 </p>
                    <p class="center-T"><b>璨玞堂</b>  爱玉人的淘宝地 </p>
                </div>
            </div>
            <br>
                <img src="./img/2.gif" alt="">
            <br>
            <img src="./img/6.png" alt="">
            <img src="./img/1.gif" alt="">
            <img src="./img/team.jpg" alt="">
            <p class="fouse">关注我们公众号:<b id="weixin1">canfutang</b></p>
            <p class="fouse"><b>质优价廉的美玉，等你结缘</b></p>
            <br>
            <img src="./img/3.gif" alt="">
            <van-swipe :autoplay="3000" indicator-color="white" class="si">
                <van-swipe-item><img class="Percentage" src="./img/s1.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img class="Percentage" src="./img/s2.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img class="Percentage" src="./img/s3.jpg" alt=""></van-swipe-item>
            </van-swipe>
            <br>
            <p class="center">精心设计、能工巧匠妙手打磨，</p>
            <p class="center">佩戴于身，由形传韵，</p>
            <p class="center">举手投足之间，尽显高雅奢华。</p>
            <p class="center">送爱人，送亲友，送领导，有范儿又有面儿。</p>
            <br>
            <b class="suit">支持私人订制，量身选择适合款式</b>
            <br>
            <img id="copy5" @click="copy5" src="./img/56.gif" alt="">
            <img style="margin-bottom: 65px;" src="./img/9.jpg" alt="">
        </div>

        <!--wx右侧悬浮-->
        <div class="wx-right" id="copy4" @click="copy4">
            <img src="./img/wx.gif" alt="">
        </div>

        <!--底部悬浮条开始-->
        <div class="DiBTi">
            <div class="DiBTi-BCT" style="background:#f2f2de;">
                <div class="info_1">
                    <img src="./img/bottom.png" alt="logo">
                </div>
                <div>
                    <div class="BCT-BXO" style="color: #000;">
                        <span class="BXO-Sp" style="color: #000;">公众号：<span class="SP-SPan"
                                                                            id="weixin4">canfutang</span></span>
                    </div>
                    <div class="BCT-BXO-PC">
                        <img class="js-render-qrcode" width="80" style="display:block; float: left;margin-left: 50px">
                    </div>
                </div>
                <div class="DiBTi-BTT" id="wxdj2">
                    <a class="BTT-A btn copy" id="copyUrl" @click="copyUrl" style="color: #fff;"><span
                            style="padding: 2px 3px;background:#31b0d5;">点击了解更多</span></a>
                </div>
            </div>
        </div>

        <!--点击弹窗-->
        <div class="PopupBigBox" :style="style1" @click="mei"></div>
        <div class="PopupBox" :style="style1">
            <div class="P-title">
                你已成功复制璨玞堂公众号：canfutang
            </div>
            <p>请打开微信搜索添加</p>
            <div style="width: 90%;margin: 0 auto">
                <img class="Percentage" src="./img/gong.gif" alt="">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "toutiao",
        data() {
            return {
                style1: {display: 'none'},
                // style2: {display: 'none'}
            }
        },
        methods: {
            copy3: function () {
                this.copy('weixin1');
                this.style1.display = 'block';
            },
            copy4: function () {
                this.copy('weixin1');
                this.style1.display = 'block';
            },
            copy5: function () {
                this.copy('weixin1');
                this.style1.display = 'block';
            },
            copyUrl: function () {
                this.copy('weixin4');
                this.style1.display = 'block';
            },
            mei: function () {
                this.style1.display = 'none';
            },
            copy(con) {
                const range = document.createRange();
                range.selectNode(document.getElementById(con));
                const selection = window.getSelection();
                if (selection.rangeCount > 0) selection.removeAllRanges();
                selection.addRange(range);
                document.execCommand('copy');
            },
            // look() {
            //     let vm=this;
            //     setTimeout(function () {
            //         vm.style2.display = 'block';
            //     }, 5000)
            // }
        },
        created: function () {
            // this.look();
        },
    }
</script>

<style scoped>
    .center-T{
        font-weight: bold;
        color: #d8cab4 ;
        text-align: center;
        font-size: 20px;
        line-height: 35px;
    }
    .fouse{
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        line-height: 30px;
        color: #c63b04;
    }
    .T_con{
        background: #211f1b;
        padding: 10px 10px;
    }
    .T-border{
        border: #d8cab4 solid 3px;
    }
    .si{
        line-height: 0;
    }

    @media screen and (max-width: 750px) {
        .BCT-BXO-PC {
            display: none;
        }
    }

    @media screen and (min-width: 751px) {
        #copyUrl {
            display: none;
        }

        .BCT-BXO {
            display: none;
        }

        .DiBTi-BTT {
            display: none;
        }
    }

    .red strong {
        background: yellow;
    }

    .content {
        max-width: 640px;
        margin: 0 auto;
        background: #dbcdb3;
        padding: 10px;
    }

    .red {
        color: red;
    }

    .top-title {
        color: #c63b04;
        text-align: center;
        padding-top: 10px;
        font-size: 24px;
        margin-bottom: 10px;
    }

    .zhi b {
        font-weight: bolder;
        font-size: 24px;
        margin-top: 10px;
        line-height: 50px;
    }

    .zhi p {
        font-size: 22px;
        line-height: 40px;
        font-weight: bold;
    }

    .zi {
        line-height: 30px;
        font-size: 22px;
        font-family: STLiti;
        font-weight: bolder;
        text-align: center;
    }

    .center {
        text-align: center;
        line-height: 25px;
        font-size: 16px;
        font-weight: bold;
    }

    .suit {
        font-size: 21px;
        text-align: center;
        display: block;
        line-height: 30px;
    }

    .suit strong {
        color: green;
    }


    /*底部悬浮条*/
    .DiBTi {
        width: 100%;
        position: fixed;
        bottom: 0;
        /*display: none;*/
        height: 65px;
    }

    .DiBTi-BCT {
        max-width: 660px;
        margin: 0 auto;
        text-align: center;
        background: rgba(0, 0, 0, .8);
    }

    .BCT-BXO {
        /*width: 50%;*/
        line-height: 80px;
        float: left;
        text-align: center;
    }

    .BXO-Sp {
        display: inline-block;
        font-size: 18px;
        color: #000;
        font-weight: 600;
    }

    .SP-SPan {
        color: red;
        font-weight: 600;
        background-color: yellow;
        padding: 2px;
        border-radius: 3px;
    }

    .DiBTi-BTT {
        /*width: 30%;*/
        float: right;
        text-align: center;
        margin-right: 3px;
    }

    .BTT-A {
        display: inline-block;
        width: 100%;
        font-size: 18px;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        line-height: 65px;
    }

    .info_1 {
        width: 20%;
        height: 50px;
        line-height: 50px;
        float: left;
    }

    .info_1 img {
        width: 80px;
        margin-right: 0;
        border-radius: 50%;
        margin-top: -25px;
        line-height: 80px;
    }

    @media screen and (max-width: 750px) {
        .BTT-A {
            height: 65px;
        }

        .DiBTi-BTT {
            height: 65px;
        }

        .DiBTi-BCT {
            height: 65px;
            line-height: 65px;

        }

        .BCT-BXO {
            height: 65px;
            line-height: 65px
        }
    }

    @media screen and (min-width: 751px) {
        .BTT-A {
            height: 80px;
        }

        .DiBTi {
            display: none;
        }

        .DiBTi-BCT {
            height: 80px;
            line-height: 80px;
        }

        .BCT-BXO {
            height: 80px;
            line-height: 80px;
        }
    }

    @media only screen and (min-width: 750px) {
        .info_1 img {
            width: 100px;
            margin-top: -30px;
        }
    }


    /*点击弹出*/

    .PopupBigBox {
        display: none;
        width: 100%;
        height: 100%;
        z-index: 998;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
    }

    .PopupBox {
        display: none;
        padding: 5px 10px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 85%;
        background: #fff;
        z-index: 999;
    }

    .PopupBox p {
        text-align: center;
    }

    .P-title {
        height: 60px;
        color: #fff;
        padding: 5px 0;
        background: green;
        font-size: 24px;
        font-weight: bolder;
        line-height: 30px;
    }


    /*右侧悬浮*/
    .wx-right {
        position: fixed;
        width: 15%;
        right: 0;
        bottom: 25%;
    }
</style>