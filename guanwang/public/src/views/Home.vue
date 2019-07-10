<template>
    <div class="home">
        <navs></navs>
        <van-swipe :autoplay="3000" indicator-color="white" class="swipe" style="line-height: 0;margin-bottom: 2%">
            <van-swipe-item v-for="item in ban"><a :href="item.pageurl"><img :src="item.imgurl" alt=""></a></van-swipe-item>
        </van-swipe>
        <div class="cates">
            <div @click="hands" class="cates-list">
                <img src="@/assets/cate1.jpg" alt="正在加载">
                <span>手镯</span>
            </div>
            <div @click="down" class="cates-list">
                <img src="@/assets/cate2.jpg" alt="正在加载">
                <span>吊坠</span>
            </div>
            <div @click="play" class="cates-list">
                <img src="@/assets/cate3.jpg" alt="正在加载">
                <span>把件</span>
            </div>
            <div @click="cords" class="cates-list">
                <img src="@/assets/cate4.jpg" alt="正在加载">
                <span>玉牌</span>
            </div>
            <div class="cates-list">
                <img @click="nect" src="@/assets/cate5.jpg" alt="正在加载">
                <span>项链</span>
            </div>
        </div>
        <div class="hot">
            <div class="hot-list">
                <h2 class="hot-title">热门推荐</h2>
                <img src="@/assets/hot1.jpg" alt="正在加载">
                <img src="@/assets/hot2.jpg" alt="正在加载">
                <img src="@/assets/hot3.jpg" alt="正在加载">
                <img src="@/assets/hot4.jpg" alt="正在加载">
            </div>
        </div>
        <div class="goods">
            <h2 class="hot-title">精选商品</h2>
            <div class="goods-box">
                <div class="goods-lists" v-for="item in items" @click="pear" >
                        <img class="percent" :src="item.url" alt="">
                        <p class="goods-description">{{item.description}}</p>
                        <p class="goods-price"><em>市场价: </em> <span> {{item.price}}</span></p>
                        <p class="goods-inquiry"><b>结缘价: </b> <strong class="inquiry"> 点击询价</strong></p>
                </div>
            </div>

        </div>
        <!--弹窗-->
        <div class="door" :style="style1"></div>
        <div class="pear" :style="style1" ref="pear">
            <span id="close" @click="lost">×</span>
            <p class="pear-title">C/C/T/V/国/家/优/选/品/牌</p>
            <p class="pear-five">五分钟内回复</p>
            <strong class="pear-inquiry">-快速询价-</strong>
            <div class="pear-photo">
                <img src="@/assets/1.jpg" alt="">
            </div>
            <strong class="pear-special">您的专属和田玉顾问</strong>
            <p class="please-add">请添加璨玞堂微信</p>
            <p class="wx-number"><strong>微信号：<span id="wx" class="js-render-kefu inner">繁忙，请重试</span></strong></p>
            <span class="btn" id="copy" @click="copy">点击复制</span>
        </div>
        <right></right>
        <tabbar></tabbar>
    </div>
</template>

<script>
    import {Dialog} from 'vant';

    export default {
        name: "home",
        data() {
            return {
                ban: [
                    {
                        pageurl:"/#/wroth",
                        imgurl: require("@/assets/home1.jpg"),
                    },
                    {
                        pageurl:"/#/cates",
                        imgurl: require("@/assets/home2.jpg"),
                    },
                    {
                        pageurl:"/#/old_message",
                        imgurl: require("@/assets/home3.jpg"),
                    },
                    {
                        pageurl:"/#/new_message",
                        imgurl: require("@/assets/home4.jpg"),
                    }
                ],
                items: [
                    {
                        description: "和田玉糖白手镯，过度自然，质地油润，细腻亮泽。衣衫之外，皓腕之上，着一只手镯，典雅端庄，不可方物。",
                        url: require("@/assets/goods1.jpg"),
                        price: "￥18000",
                    }, {
                        description: "和田玉碧玉手镯，玉质细腻油润，做工细致精美，色泽漂亮细腻润滑。器形端庄秀雅，光滑圆润的玉镯象征着人生路上如意顺畅，平安幸福美满。",
                        url: require("@/assets/goods2.jpg"),
                        price: "￥50000",
                    }, {
                        description: "和田玉糖白手镯，颜色分明，过度自然，质地油润，细腻亮泽。衣衫之外，皓腕之上，着一只手镯，典雅端庄，不可方物。",
                        url: require("@/assets/goods3.jpg"),
                        price: "￥20000",
                    }, {
                        description: "和田玉貔貅把件，细致精美，线条流畅，生动自然，灵动非凡，貔貅能吞万物而不泄，为聚宝招财之神兽。",
                        url: require("@/assets/goods4.jpg"),
                        price: "￥32000",
                    }, {
                        description: "碧玉葫芦 葫芦谐音“福禄”是吉祥的象征。和田极品碧玉",
                        url: require("@/assets/goods5.jpg"),
                        price: "￥12000",
                    }, {
                        description: "和田玉糖白玉貔貅，红糖白肉，玉质细腻油润，做工细致精美，精雕瑞兽，形态饱满圆润，圆眼双瞪，獠牙毕露，体型优美流畅。",
                        url: require("@/assets/goods6.jpg"),
                        price: "￥14000",
                    }, {
                        description: "和田玉碧玉菠菜绿貔貅把件，玉质细腻油润，做工细致精美，线条流畅，生动自然，灵动非凡，貔貅能吞万物而不泄，为聚宝招财之神兽。",
                        url: require("@/assets/goods7.jpg"),
                        price: "￥74000",
                    }, {
                        description: "新疆和田玉籽料原石，原籽无修，洒金皮玉质温润细腻，油润十足，手推出油，适合把玩",
                        url: require("@/assets/goods8.jpg"),
                        price: "￥12000",
                    }, {
                        description: "和田玉笑佛，佛开口就笑，大肚容天下，手拿如意，佛送如意，吉祥富贵",
                        url: require("@/assets/goods9.jpg"),
                        price: "￥10000",
                    }, {
                        description: "和田碧玉佛公挂件，冰透水润，色泽均匀，工艺精湛，",
                        url: require("@/assets/goods10.jpg"),
                        price: "￥12000",
                    }, {
                        description: "和田碧玉挂件，底色纯净，玉质细腻，密度过灯，寓意福在眼前，福寿万代",
                        url: require("@/assets/goods11.jpg"),
                        price: "￥11000",
                    }, {
                        description: "糖白和田玉文殊菩萨，玉质细腻油润，做工精细，文殊菩萨手持金刚宝剑，斩断烦恼，坐骑为一狮子，表示智慧威武。",
                        url: require("@/assets/goods12.jpg"),
                        price: "￥11000",
                    }
                ],
                style1: {display: 'none'}
            }

        },
        methods: {
            pear: function (event) {
                this.style1.display = 'block';

            },
            lost: function (event) {
                this.style1.display = 'none';

            },
            hands: function () {
                window.location.href = "https://shop43303880.youzan.com/v2/showcase/tag?alias=959jj7an&banner_id=f.80011226~image_nav.3~1~istlwCYy&index=0&reft=1561083063306&spm=f.80011226"
            },
            down: function () {
                window.location.href = "https://shop43303880.youzan.com/v2/showcase/tag?alias=1en2yvvbe&banner_id=f.80011226~image_nav.3~4~Q3NBjmAC&index=3&reft=1561083315701&spm=f.80011226"
            },
            cords: function () {
                window.location.href = "https://shop43303880.youzan.com/v2/showcase/tag?alias=vajefdfd1&banner_id=f.80011226~image_nav.3~2~vMbaBSld&index=1&reft=1561083376851&spm=f.80011226"
            },
            nect: function () {
                window.location.href = "https://shop43303880.youzan.com/v2/showcase/tag?alias=gdb6exlu&banner_id=f.80011226~image_nav.3~3~kNVJW9An&index=2&reft=1561083451323&spm=f.80011226"
            },
            play: function () {
                window.location.href = "https://shop43303880.youzan.com/v2/showcase/tag?alias=b8hpd1pu&reft=1561083472975&spm=f.80011226"
            },
            copy: function () {
                const range = document.createRange();
                range.selectNode(document.getElementById('wx'));
                const selection = window.getSelection();
                if (selection.rangeCount > 0) selection.removeAllRanges();
                selection.addRange(range);
                document.execCommand('copy');
                // alert('复制成功')
                Dialog.alert({
                    message: '复制成功'
                }).then(() => {
                    // on close
                });
            },
        },
        mounted: function () {
            // default params:
            // weixin class name: js-render-kefu
            // qrcode class name: js-render-qrcode
            var position = document.getElementsByTagName("head")[0];
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = location.protocol + "//wx.lyy1.cn/cache/kefu/6005.js";
            position.appendChild(script);
        }
    }
</script>

<style scoped>
    .home{
        text-align: center;
    }
    ul, li {
        list-style-type: none;
    }

    em {
        font-style: normal;
    }

    .home {
        background: #f0f0f0;
    }

    .percent {
        width: 100%;
    }

    .swipe {
        width: 100%;
    }

    img {
        margin: 0;
        padding: 0;
        border: 0;
        list-style-type: none;
    }

    .swipe img {
        width: 100%;
    }

    .cates img {
        width: 100%;
        border-radius: 50%;
    }

    .cates {
        height: auto;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        background: #fff;
    }

    .cates-list {
        flex: 1;
        padding: 4%;
    }

    .cates-list span {
        display: block;
        text-align: center;
        font-size: 16px;
    }

    .hot-title {
        border-left: 4px solid #0aba07;
        padding-left: 10px;
        text-align: left;
        font-size: 17px;
        line-height: 30px;
    }

    .hot {
        background: #fff;
        margin-top: 8px;
    }

    .hot-list {
        font-size: 0;
    }

    .hot img {
        width: 100%;
        margin-bottom: 1px;
    }

    .goods {
        padding: 2%;
        background: #fff;
        margin-top: 8px;
    }

    .goods-box {
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        display: -webkit-flex;
        display: flex;
    }

    .goods-description {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 15px;
        padding-left: 2%;
        text-align: left;
        line-height: 25px;
    }

    .goods-lists {
        margin-top: 2%;
        width: 45%;
        margin-left: 3%;
        border-radius: 5px;
        box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.1);
        padding: 1%;
    }

    .goods-price {
        text-align: left;
        padding-left: 3%;
        color: #989898;
        line-height: 25px;
        font-size: 14px;
    }

    .goods-price span {
        margin-left: 18px;
        text-decoration: line-through;
    }

    .goods-inquiry {
        text-align: left;
        padding-left: 3%;
        line-height: 30px;
    }

    .goods-inquiry strong {
        display: inline-block;
        line-height: 25px;
        padding: 0 10px;
        background: red;
        color: #ffffff;
        font-size: 15px;
        border-radius: 15px;
    }

    /*弹窗*/
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
    }

    #close {
        display: inline-block;
        font-size: 40px;
        float: right;
        margin-top: -3%;
        margin-right: 0;
        line-height: 1;
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


