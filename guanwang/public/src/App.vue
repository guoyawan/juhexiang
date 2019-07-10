<template>
  <div id="app">
      <router-view/>
  </div>
</template>
<script>
    import {Dialog} from 'vant';
    export default {
        name:"home",
        data() {
            return {
            }
        },
        methods: {

    },
        mounted: function () {
            var clientWidth=`${document.documentElement.clientWidth}`;
            if(clientWidth>=750){
                // window.location.href="http://hty.bestminghao.com/";
            }
        }
    }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  img{
    width: 100%;
  }
#app {
  font-family:'微软雅黑', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  font-size: 16px;
  line-height: 2;
}
</style>
