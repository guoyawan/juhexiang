<template>
    <div class="specking">
        <navs></navs>
        <div class="video-box">
            <h3>和田玉鉴定师讲解 “老种，嫩种、老场、新场” 各自代表意思</h3>
            <p><span>来源：原创文章</span> <i>编辑：张伟灿</i></p>
            <div><video poster="@/assets/video1.jpg" src="http://gslb.miaopai.com/stream/J6jx8R5IL370ATczLJNsrSw7uiuBMeYp-52mpA__.mp4" controls="controls">
                您的浏览器不支持 video 标签。
            </video></div>
        </div>
        <peers></peers>
        <tabbar></tabbar>
    </div>
</template>

<script>
     import peers from '@/components/peers.vue';

    export default {
        name: "specking",
        components: {
            peers,
        },
    }
</script>

<style scoped>
.video-box {
    padding: 2vh 5vw;
    background: #ececec;
}
    .video-box video{
        width: 100%;
    }
.video-box h3{
   font-size: 16px;
    line-height: 25px;
    text-align: center;
    margin-bottom: 10px;
}
    .video-box p{
        text-align: left;
        color: #939393;
        font-size: 13px;
    }
    .video-box i{
        font-style: normal;
        float: right;
    }
</style>