<template>
    <div class="knowledge">
        <navs></navs>
        <div class="know-top">
            <img src="@/assets/k_ban.jpg" alt="随便配一张好看的不用配文案">
            <p><span>想了解和田玉吗？想知道璨玞堂的发展史吗？</span></p>
        </div>
        <div class="special" v-for="item in special">
            <a :href="item.url">
                <div class="special-img"><img :src="item.specialurl" alt=""></div>
                <div class="special-con">
                    <h4>{{item.title}}</h4>
                    <p>{{item.description}}</p>
                    <div><strong>{{item.about}}</strong><b>阅读量<span>{{item.reading}}</span></b></div>
                </div>
            </a>
        </div>
        <right></right>
        <tabbar></tabbar>
    </div>
</template>

<script>
    export default {
        name: "knowledge",
        data() {
            return {
                special: [
                    {
                        specialurl: require("@/assets/k9.jpg"),
                        title: "这个玉商太任性，你加微信我就送！送，送，送，送，送，送，送！",
                        description: "自古中国人喜玉，和玉，石之美者；玞者，美玉也！君子如玉，温润而泽；佳人似玉，碧玉玲珑！",
                        about: "和田玉专题",
                        reading: Math.ceil(Math.random()*300000),
                        url:"/#/wroth"
                    },
                    {
                        specialurl: require("@/assets/k5.jpg"),
                        title: "为什么和田玉被称为“传家宝”？花千万买玉的人都在想什么？",
                        description: "古时，人们以诗传情，以玉定情，为我们留下了许多爱情诗篇，“投我以木瓜，报之以琼琚。匪报也，永以为好也！投我以木桃，报之以琼瑶。匪报也，永以为好也！”读着这些爱情的诗句，幻想着他们的爱情故事，也成全了我们对爱情的向往。",
                        about: "和田玉专题",
                        reading: Math.ceil(Math.random()*60000),
                        url:"/#/old_message"
                    },
                    {
                        specialurl: require("@/assets/k8.jpg"),
                        title: "牢记，买和田玉不花冤枉钱！源头直供才这个价！",
                        description: "自古中国人喜玉，和田玉质地温润、文化浓重；体如凝脂，温润细腻。千百年来，于中国文化悠久的历史长河中，默默惊艳着岁月。",
                        about: "和田玉专题",
                        reading: Math.ceil(Math.random()*300000),
                        url:"/#/three_message"
                    },
                    {
                        specialurl: require("@/assets/k3.jpg"),
                        title: "来和行家一起探寻更多和田玉的秘密",
                        description: " 俗话说“外行看热闹，内行看门道”，对于不了解和田玉的朋友来说，入手和田玉最害怕两点：一是买到假货，二是怕买亏了。人养玉一时，玉养人一世，老灿作为爱玉之人，经手了上万块玉石，今天就以行业经验分享给大家选和田玉最重要的两点：如何鉴别真假、怎么判断优劣？",
                        about: "和田玉专题",
                        reading: Math.ceil(Math.random()*100000),
                        url:"/#/new_message"
                    },
                    {
                        specialurl: require("@/assets/k4.jpg"),
                        title: "教你如何挑选和田玉才不交学费",
                        description: "往往市场上80%的和田玉爱好者都吃过同样的亏，掉过同样的坑。曾经天真以为自己买到了市面上抢手的籽料，挖到了宝藏，捡到了大漏，结果给行家一鉴定，却说是俄仿籽、烧皮子...",
                        about: "和田玉专题",
                        reading: Math.ceil(Math.random()*100000),
                        url:"/#/first"
                    },
                    {
                        specialurl: require("@/assets/k6.jpg"),
                        title: "谈谈你最关心的和田玉鉴别和价格问题",
                        description: "  最近有许多朋友问老灿，家里有块传下来的玉帮忙看下是不是和田玉、看它值多少钱，或者是我在旅游的地方买了一个玉吊坠，帮忙看下值多少钱、有没有买亏，老灿呢很感谢朋友对我的信任，也都很好的解答了他们的疑问，但不是每个人身边都有懂和田玉的朋友，所以老灿就把朋友们最关心的关于和田玉鉴定和价格分享出来给需要的网友们。",
                        about: "和田玉专题",
                        reading: Math.ceil(Math.random()*20000),
                        url:"/#/special"
                    },
                    {
                        specialurl: require("@/assets/k7.jpg"),
                        title: "教你用简单方法判断和田玉手镯的真假",
                        description: "手镯一直是女性朋友喜爱的首饰，玉有灵性，玉镯最能代表女性自身的气质，相信每个爱美女性都想拥有一支属于自己的和田玉手镯，如果你已经买了玉手镯想知道真假或者你准备购买玉手镯但不知道怎样选择，就让老灿来帮你看下怎么判断玉手镯的真假：",
                        about: "和田玉专题",
                        reading: Math.ceil(Math.random()*60000),
                        url:"/#/project"
                    },
                    {
                        specialurl: require("@/assets/k1.jpg"),
                        title: "老灿教你如何鉴别和挑选碧玉",
                        description: "碧玉是和田玉的一个分支，因其颜色碧绿而得名。碧玉不仅拥有翡翠的绿，还有和田玉的细腻质感，所以一直受人们的喜爱，但每种碧玉的产地，颜色、玉质、价值、都不一样，这对于想了解碧玉的新手来说往往不知从何学起。今天，老灿就和大家分享一下如何鉴别和挑选碧玉。",
                        about: "和田玉专题",
                        reading:  Math.ceil(Math.random()*100000),
                        url:"/#/green",
                    },
                    {
                        specialurl: require("@/assets/k2.jpg"),
                        title: "你想知道的羊脂玉知识都在这里啦",
                        description: "老灿从事和田玉行业十多年，经常有人问：我收了一块玉特别白，是羊脂玉吗？我买了一个羊脂玉的吊坠花了几千元是真的吗？或者是我想花几千元买个羊脂玉手镯你能帮我选一个吗？关于这种问题有很多，这让老灿发现大家对于羊脂玉的认知非常少，而想了解羊脂玉的朋友又很多，所以老灿就把这些关于羊脂玉常见的问题进行了总结解答并分享给网友们。",
                        about: "和田玉专题",
                        reading: Math.ceil(Math.random()*100000),
                        url:"/#/suet",
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .know-top {
        position: relative;
        text-align: center;
        line-height: 0;
        overflow: hidden;
    }

    .know-top p {
        position: absolute;
        bottom: 0;
        width: 100%;
        color: #fff;
        background: rgba(0, 0, 0, .4);
        line-height: 40px;
        font-size: 16px;
    }
    .special a{
        display: flex;
    }
    .special{
        padding: 2vw;
        border-bottom: 1px solid #ececec;
        overflow: hidden;
    }
    .special-img{
        padding: 5px 0;
        float: left;
        height: 109px;
    }
    .special-img img{
        width: 120px;
        border-radius: 10px;
        height: 100px;
    }
    .special-con{
        float: left;
        margin-left: 2%;
    }
    .special-con h4{
        color: #000;
        font-size: 16px;
        line-height: 18px;
        text-align: left;
        text-overflow: ellipsis;
        margin: 7px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        white-space: pre-line;
        word-break: break-all;
        overflow: hidden;
    }
    .special-con p{
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 16px;
        height: 32px;
        color: #939393;
        font-size: 14px;
        margin-bottom: 6px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        white-space: pre-line;
        word-break: break-all;
    }
    .special-con div{
        text-align: left;
        line-height: 20px;
        color: #939393;
        font-size: 13px;
    }
    .special-con div b{
        float: right;
    }

</style>