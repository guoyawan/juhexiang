<template>
    <div class="attached">
        <navs></navs>
        <div class="example" v-for="item in example" >
            <div class="example-photo"><img :src="item.urlphoto" alt=""></div>
            <div class="example-con">
                <p class="example-name">{{item.name}}</p>
                <p class="example-msg">{{item.msg}}</p>
                <ul>
                    <li v-for="son in item.urllist">
                        <img :src="son" alt="">
                    </li>
                </ul>
                <div><span>{{item.date[0]}}</span> <b>{{item.zan}}</b><img src="@/assets/z1.png" alt=""></div>
            </div>
        </div>
        <right></right>
        <tabbar></tabbar>
    </div>
</template>

<script>
    export default {
        name: "attached",
        data() {
            return {
                example: [
                    {
                        urllist: [
                            require("@/assets/attached_4.jpg"),
                            require("@/assets/attached_44.jpg"),
                            require("@/assets/attached_444.jpg")
                        ],
                        name:"逛街可不是犯错",
                        urlphoto:require("@/assets/ph6.jpg"),
                        zan:Math.floor(Math.random()*10+1)*23,
                        date:new Date(new Date().getTime() - 60*60*1000).toLocaleString().split(" "),
                        msg:"没得说，贼好看"

                    },
                    {
                        urllist: [
                            require("@/assets/attached11.jpg"),
                            require("@/assets/attached1.jpg"),
                        ],
                        name:"高人一等",
                        urlphoto:require("@/assets/ph1.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*56,
                        date:new Date(new Date().getTime() - 2*60*60*1000).toLocaleString().split(" "),
                        msg:"很好看的镯子，喜欢"
                    },
                    {
                        urllist: [
                            require("@/assets/attached2.jpg"),
                            require("@/assets/attached22.jpg")
                        ],
                        name:"今天还来",
                        urlphoto:require("@/assets/ph2.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*36,
                        date:new Date(new Date().getTime() - 6*60*60*1000).toLocaleString().split(" "),
                        msg:"不说了，上图"
                    },
                    {
                        urllist: [
                            require("@/assets/attached3.jpg"),
                            require("@/assets/attached33.jpg"),
                            require("@/assets/attached333.jpg")
                        ],
                        name:"世界末日都是骗人的",
                        urlphoto:require("@/assets/ph3.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*52,
                        date:new Date(new Date().getTime() - 7*60*60*1000).toLocaleString().split(" "),
                        msg:"很喜欢就对了，喜欢可以买了"

                    },
                    {
                        urllist: [
                            require("@/assets/attached4.jpg")
                        ],
                        name:"cjaskljfalk",
                        urlphoto:require("@/assets/ph4.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*54,
                        date:new Date(new Date().getTime() - 18*60*60*1000).toLocaleString().split(" ")
                    },{
                        urllist: [
                            require("@/assets/attached5.jpg"),
                            require("@/assets/attached55.jpg"),
                            require("@/assets/attached555.jpg")
                        ],
                        name:"爱上大海",
                        urlphoto:require("@/assets/ph5.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*26,
                        date:new Date(new Date().getTime() - 24*60*60*1000).toLocaleString().split(" "),
                        msg:"看了好久才敢下手，没让我失望，赞一个，老师人挺好的，被我拉着问了一堆"

                    },{
                        urllist: [
                            require("@/assets/attached6.jpg"),
                            require("@/assets/attached66.jpg")
                        ],
                        name:"明天更好",
                        urlphoto:require("@/assets/ph7.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*52,
                        date:new Date(new Date().getTime() - 40*60*60*1000).toLocaleString().split(" "),

                    },{
                        urllist: [
                            require("@/assets/attached7.jpg"),
                            require("@/assets/attached77.jpg"),
                            require("@/assets/attached777.jpg")
                        ],
                        name:"蓝色的果子",
                        urlphoto:require("@/assets/ph8.jpg"),
                        zan:Math.floor(Math.random()*10+1)*25,
                        date:new Date(new Date().getTime() - 50*60*60*1000).toLocaleString().split(" "),
                        msg:"超级喜欢这个镯子"

                    },{
                        urllist: [
                            require("@/assets/attached8.jpg"),
                            require("@/assets/attached88.jpg"),
                            require("@/assets/attached888.jpg")
                        ],
                        name:"还好吗",
                        urlphoto:require("@/assets/ph9.jpg"),
                        zan:Math.floor(Math.random()*10+1)*22,
                        date:new Date(new Date().getTime() - 60*60*60*1000).toLocaleString().split(" ")

                    },{
                        urllist: [
                            require("@/assets/attached9.jpg"),
                            require("@/assets/attached99.jpg"),
                            require("@/assets/attached999.jpg")
                        ],
                        name:"保护伞",
                        urlphoto:require("@/assets/ph10.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*23,
                        date:new Date(new Date().getTime() - 70*60*60*1000).toLocaleString().split(" "),
                        msg:"犹豫了很久才买的，还不错。"

                    },{
                        urllist: [
                            require("@/assets/attached10.jpg"),
                            require("@/assets/attached110.jpg")
                        ],
                        name:"奥斯卡岛",
                        urlphoto:require("@/assets/ph11.jpg"),
                        zan:Math.floor(Math.random()*10+1)*25,
                        date:new Date(new Date().getTime() - 80*60*60*1000).toLocaleString().split(" "),
                        msg:"好看好看好看，喜欢喜欢喜欢"

                    },{
                        urllist: [
                            require("@/assets/attached_1.jpg"),
                            require("@/assets/attached_11.jpg"),
                            require("@/assets/attached_111.jpg")
                        ],
                        name:"阿基德里",
                        urlphoto:require("@/assets/ph12.jpg"),
                        zan:Math.floor(Math.random()*10+1)*30,
                        date:new Date(new Date().getTime() - 90*60*60*1000).toLocaleString().split(" ")

                    },{
                        urllist: [
                            require("@/assets/attached_2.jpg"),
                            require("@/assets/attached_22.jpg")
                        ],
                        name:"absjklahja",
                        urlphoto:require("@/assets/ph13.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*32,
                        date:new Date(new Date().getTime() - 100*60*60*1000).toLocaleString().split(" "),
                        msg:"可以的"

                    },{
                        urllist: [
                            require("@/assets/attached_3.jpg"),
                            require("@/assets/attached_33.jpg")
                        ],
                        name:"兰玉吉",
                        urlphoto:require("@/assets/ph14.jpg"),
                        zan:Math.floor(Math.random()*10+1)*78,
                        date:new Date(new Date().getTime() - 114*60*60*1000).toLocaleString().split(" "),
                        msg:"老师推荐的挺好的，满意"

                    },{
                        urllist: [
                            require("@/assets/attached_5.jpg"),
                            require("@/assets/attached_55.jpg"),
                            require("@/assets/attached_555.jpg")
                        ],
                        name:"彳摩纳哥天",
                        urlphoto:require("@/assets/ph15.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*123,
                        date:new Date(new Date().getTime() - 116*60*60*1000).toLocaleString().split(" "),
                        msg:"一直都很喜欢镯子，可是一直不懂玉，听人家说假货很多，不敢下手。买到喜欢的镯子，多谢老师啦！"

                    },{
                        urllist: [
                            require("@/assets/attached_6.jpg"),
                            require("@/assets/attached_66.jpg"),
                            require("@/assets/attached_666.jpg")
                        ],
                        name:"还年轻，还漂亮",
                        urlphoto:require("@/assets/ph16.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*123,
                        date:new Date(new Date().getTime() - 120*60*60*1000).toLocaleString().split(" "),
                        msg:"老公说好看，竟然没嫌我乱花钱，之前买的首饰啥的从来不夸我还唠叨我乱花钱，这次可以说是很满意了。"

                    },{
                        urllist: [
                            require("@/assets/attached_7.jpg"),
                            require("@/assets/attached_77.jpg"),
                            require("@/assets/attached_777.jpg")
                        ],
                        name:"不离不弃",
                        urlphoto:require("@/assets/ph17.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*123,
                        date:new Date(new Date().getTime() - 132*60*60*1000).toLocaleString().split(" ")

                    },{
                        urllist: [
                            require("@/assets/attached_8.jpg"),
                            require("@/assets/attached_88.jpg")
                        ],
                        name:"张扬的活着",
                        urlphoto:require("@/assets/ph18.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*123,
                        date:new Date(new Date().getTime() - 134*60*60*1000).toLocaleString().split(" "),
                        msg:"戴起来很好看，但是拍不好，就不献丑了"

                    },{
                        urllist: [
                            require("@/assets/attached_9.jpg"),
                            require("@/assets/attached_99.jpg")
                        ],
                        name:"清单人生",
                        urlphoto:require("@/assets/ph5.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*123,
                        date:new Date(new Date().getTime() - 135*60*60*1000).toLocaleString().split(" ")

                    },{
                        urllist: [
                            require("@/assets/attached_t1.jpg"),
                            require("@/assets/attached_t11.jpg"),
                            require("@/assets/attached_t111.jpg")
                        ],
                        name:"学会偷影子",
                        urlphoto:require("@/assets/ph19.jpg"),
                        zan:Math.floor(Math.random()*10+1)*123,
                        date:new Date(new Date().getTime() - 140*60*60*1000).toLocaleString().split(" ")

                    },{
                        urllist: [
                            require("@/assets/attached_t2.jpg"),
                            require("@/assets/attached_t22.jpg"),
                            require("@/assets/attached_t222.jpg")
                        ],
                        name:"为你千千万万遍",
                        urlphoto:require("@/assets/ph20.jpg"),
                        zan:Math.floor(Math.random()*10+1)*69,
                        date:new Date(new Date().getTime() - 146*60*60*1000).toLocaleString().split(" "),
                        msg:"不错，可以滴"

                    },{
                        urllist: [
                            require("@/assets/attached_t3.jpg"),
                            require("@/assets/attached_t33.jpg"),
                            require("@/assets/attached_t333.jpg")
                        ],
                        name:"盛开的花",
                        urlphoto:require("@/assets/ph21.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*67,
                        date:new Date(new Date().getTime() - 150*60*60*1000).toLocaleString().split(" "),
                        msg:"包装挺好的，老师挺耐心的，主要还是产品不错，好看。"

                    },{
                        urllist: [
                            require("@/assets/attached_t4.jpg"),
                            require("@/assets/attached_t44.jpg"),
                            require("@/assets/attached_t444.jpg")
                        ],
                        name:"圣诞节",
                        urlphoto:require("@/assets/ph22.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*89,
                        date:new Date(new Date().getTime() - 154*60*60*1000).toLocaleString().split(" "),
                        msg:"挺精致。"

                    },{
                        urllist: [
                            require("@/assets/attached_t5.jpg"),
                            require("@/assets/attached_t55.jpg"),
                            require("@/assets/attached_t555.jpg")
                        ],
                        name:"不骄傲，不造作",
                        urlphoto:require("@/assets/ph23.jpeg"),
                        zan:Math.floor(Math.random()*10+1)*115,
                        date:new Date(new Date().getTime() - 180*60*60*1000).toLocaleString().split(" "),
                        msg:"放客厅里老好看了，很高大上，来家里的客人都会问我呢。"

                    }
                ]
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
.example{
    padding: 3vw;
    border-bottom: #ececec solid 1px;
    overflow: hidden;
}
    .example-photo{
        width: 10%;
        float: left;
    }
    .example-photo img{
        border-radius: 50%;
    }
    .example-con{
        text-align: left;
        margin-left: 3%;
        width: 87%;
        float: left;
    }
    ul,li{
       list-style-type: none;
    }
    .example-con ul{
        display: flex;
        flex-flow: row wrap;
        width: 100%;
    }
    .example-con ul li{
        flex-basis: 31%;
        margin-left: 1%;
    }
.example-con ul li img{
    border-radius: 15px;
}
    .example-name{
        color: #4bba75;
        /*font-weight: bold;*/
        font-size: 16px;
        line-height: 40px;
    }
    .example-msg{
        color: #939393;
        line-height: 20px;
        margin-bottom: 10px;
    }
    .example-con div{
        line-height: 30px;
        color: grey;
    }
    .example-con div b{
        float: right;
    }
    .example-con div img{
        float: right;
        width: 15px;
        margin-top: 7px;
        margin-right: 5px;
    }
</style>