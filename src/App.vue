<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
#app{
  position: fixed;
  bottom: 0px;
  top:0px;
  left:0px;right:0px;
}
.clearfix::after{
  content: '';
  height: 0;
  display: block;
  clear: both;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
</style>
