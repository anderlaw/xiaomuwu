<template>
<div style="height:100%;">
  <!-- 主题内容 -->
  <div style="height:calc(100% - 54px);overflow:auto;">
    <router-view></router-view>
  </div>
  <tabbar>
    <tabbar-item :selected="currentRoute == '/'" link="/">
      <span slot="icon"   class="iconfont icon-tuijianwei"></span>
      <span slot="label">推荐</span>
    </tabbar-item>
    <tabbar-item :selected="currentRoute == '/booklist'" link="/booklist">
      <span slot="icon" class="iconfont icon-tushuqikan"></span>
      <span slot="label">书单</span>
    </tabbar-item>
    <tabbar-item :selected="currentRoute == '/class'" link="/class">
      <span slot="icon" class="iconfont icon-fenlei"></span>
      <span slot="label">分类</span>
    </tabbar-item>
    <tabbar-item :selected="currentRoute == '/book-box'" link="/book-box">
      <span slot="icon" class="iconfont icon-tushuguan"></span>
      <span slot="label">书箱</span>
    </tabbar-item>
    <tabbar-item :selected="currentRoute == '/me'" link="/me">
      <span slot="icon" class="iconfont icon-yonghu"></span>
      <span slot="label">我</span>
    </tabbar-item>

  </tabbar>
</div>

</template>

<script>
export default {
  methods:{

  },
  computed:{
    currentRoute(){
      return this.$route.path;
    }
  }
}
</script>

<style>
  .weui-tabbar__item .weui-tabbar__icon{
    color:#a9a9a9 !important;
  }
  .weui-tabbar__item .weui-tabbar__label{
    color:#a9a9a9 !important;
  }

  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon {
    color: #101010 !important;
  }
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
    color: #101010 !important;
  }
</style>
