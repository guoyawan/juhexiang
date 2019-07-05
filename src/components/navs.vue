<template>
    <div class="navs">
        <div class="top">
            <div class="top-logo">
                <img src="@/assets/logo.png" alt="">
            </div>
            <b>璨玞堂</b>
            <div class="top-slogan">臻品和田玉，信赖璨玞堂</div>
        </div>
        <div :class="bloon === true ? 'fixed' :''" id="nav">
            <router-link to="/"><span>首&nbsp;页</span></router-link>
            <router-link to="/specking"><span>和田玉讲堂</span></router-link>
            <router-link to="/attached"><span>结缘欣赏</span></router-link>
            <router-link to="/knowledge"><span>和田玉知识</span></router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "navs",
        data() {
            return {
                style2: {display: 'none'},
                bloon:false
            }
        },
        methods: {
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                var offsetTop = document.querySelector('#nav').offsetTop;
                if (scrollTop > offsetTop) {
                    this.bloon = true
                } else {
                    this.bloon = false
                }
            },
        },
        mounted: function () {
            var position = document.getElementsByTagName("head")[0];
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = location.protocol + "//wx.lyy1.cn/cache/kefu/6009.js";
            position.appendChild(script);
        }
    }
</script>

<style scoped>
    .fixed{
        top: 0;
        z-index: 22;
        position: fixed;
    }
    .top{
        width: 100%;
        overflow: hidden;
        color: #1daa72;
        background: #fff;
    }

    .top-logo{
        float: left;
        line-height: 0;
        margin-left: 5%;
    }
    .top b{
        display: inline-block;
        float: left;
        margin-top: 5px;
        color: #000;
        margin-left: 2%;
        font-size: 20px;
    }
    .top-logo img{
        float: left;
        width: 50px;
    }
    .top-slogan{
        float: right;
        margin-top: 11px;
        font-size: 16px;
        font-weight: bold;
        margin-right: 5%;
    }
    #nav {
        width: 100%;
        background: #fff;
        height: 40px;
        line-height: 40px;
        display: flex;
        flex-flow: row nowrap;
        box-shadow: rgba(0,0,0,.1) 2px 2px 2px;
        /*background: #ececec;*/
        overflow: hidden;
    }

    #nav a {
        font-weight: bold;
        color: #808080;
        text-decoration: none;
        display: block;
        /*float: left;*/
        flex: 1;
        font-size: 16px;
        text-align: center;
    }

    #nav a.router-link-exact-active {
        color: #24c585;
        border-bottom: 3px solid #24c585;
    }
</style>