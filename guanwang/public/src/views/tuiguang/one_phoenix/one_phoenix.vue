<template>
    <div class="one_phoenix">
        <div class="bodys" style="max-width: 650px;margin: 0 auto">
            <img src="./img/test.jpg" class="i">
            <img src="./img/test7.jpg" class="i">
            <a name="qianggou"></a>
            <div class="clr"></div>
            <div id="order" style="margin: 0 auto;background-color:#FFFFFF">
                <div class="warp">
                    <form id="form" name="form" onsubmit="" target="_blank" method="post">
                        <input name="orderid" id="orderid" value="no.201741212220958" type="hidden">
                        <div class="title" style="background-color: #FFED75;font-size: 30px;">信息填写</div>
                        <div style="padding-left:10px;max-width:640px;margin:0px auto;padding-bottom:10px;">
                        </div>
                        <div class="bdbox">
                            <label class="bdxx">选择产品</label>
                            <div class="dxbox red">
                                <input id="xzlx" value="1" type="hidden">
                                <input name="product" id="a1" onclick="pricea()" checked="checked" type="radio"><label
                                    for="a1">xxxx&nbsp;&nbsp;398元</label><br>
                            </div>
                        </div>
                        <!--附加属性b-->
                        <hr>
                        <!--附加属性e-->
                        <div class="bdbox">
                            <label class="bdxx">数量</label>
                            <div class="text3box">
                                <input name="mun" value="1" style="height: 30px;width:100%" type="text">

                            </div>
                        </div>
                        <div class="bdbox">
                            <label class="bdxx">您的姓名</label>
                            <div class="textbox">
                                <input name="name" style="height: 30px;width:100%;" type="text">
                            </div>
                        </div>
                        <div class="bdbox">
                            <label class="bdxx">手机号码</label>
                            <div class="textbox">
                                <input name="mob" style="height: 30px;width:100%;" type="text">
                            </div>
                        </div>

                        <div class="bdbox">
                            <label class="bdxx">详细地址</label>
                            <div class="textbox">
                                <input name="address" style="height: 30px;width:100%" type="text">
                            </div>
                        </div>

                        <div class="bdbox" style="background-color: #FFFFFF;padding-top: 10px">
                            <label class="bdxx" style="margin-left: 10px;">支付金额：<h1
                                    style="margin-left: 10px;color: #FF0004;margin:0">￥398</h1></label>
                            <div class="text3box">

                            </div>
                        </div>
                        <!--提交按钮-->
                        <div  @click="shi" id="confirm" style="text-align:center; display:block;border-color:#6fd637;color: #ffffff;font-size: 18px;font-weight: 200;
			margin: 0 auto;width: 100%;margin-top: 40px;height:50px;background-color:#6fd637;">
                            <strong>提交订单</strong>
                        </div>
                        <br>
                    </form>
                </div>

            </div>
            <footer>
                <p></p>
                <center style="color: grey;">版权所有：河南聚合祥实业有限公司 <br></center>
                <p></p>
                <p></p>
                <center><a href="http://www.miitbeian.gov.cn/" style="font-size:15px;color: grey;"
                           target="_blank">蒙ICP备15002738号-1
                </a><br></center>
                <p></p>
            </footer>
            <div style="width:100%; height:50px;"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "one_phoenix",
        data() {
            return {

            }
        },
        mounted: function () {
        },
        methods: {
            shi() {
                alert("提交成功")
            }
        },
    }
</script>

<style scoped>
</style>