<template>
  <div>
    <tab active-color="#db0020" default-color="#212121" :scroll-threshold="5" bar-active-color="#d7001d" :line-width="2">
      <tab-item>经管商业</tab-item>
      <tab-item selected>职场提升</tab-item>
      <tab-item>创新科技</tab-item>
      <tab-item>人文历史</tab-item>
      <tab-item>心灵治愈</tab-item>
    </tab>
    <tab active-color="#d2011e" default-color="#979797" class="sub-tab" :scroll-threshold="5" :line-width="0">
      <tab-item>商业传记</tab-item>
      <tab-item selected>企业管理</tab-item>
      <tab-item>媒体营销</tab-item>
      <tab-item>金融投资</tab-item>
    </tab>
    <!-- 图书填充符 -->
    <div>
      <Book :src="xiegou" description="鞋狗"/>
      <Book :src="gangtiexia" description="硅谷钢铁侠"/>
      <Book :src="jbs" description="成为乔布斯"/>
      <Book :src="tengxun" description="腾讯传"/>
      <Book :src="yalikesi" description="亚历克斯.弗格森"/>
      <Book :src="piaojinhui" description="绝望锻炼了我"/>
    </div>
  </div>
</template>

<script>
import xiegou from '@/assets/xiegou.png'
import gangtiexia from '@/assets/gangtiexia.png'
import jbs from '@/assets/jbs.png'
import tengxun from '@/assets/tengxun.png'
import yalikesi from '@/assets/yalikesi.png'
import piaojinhui from '@/assets/piaojinhui.png'
import Book from '@/components/bookitem'
export default {
  components:{
    Book
  },
  data(){
    return {
      xiegou:xiegou,
      gangtiexia:gangtiexia,
      jbs:jbs,
      tengxun:tengxun,
      yalikesi:yalikesi,
      piaojinhui:piaojinhui
    }
  }
}
</script>

<style>
.vux-tab .vux-tab-item{
  font-size:11px !important;
}
.sub-tab .vux-tab {
  height:30px !important;
}
.sub-tab .vux-tab .vux-tab-item{
  font-size:10px !important;
  background: none;
  line-height: 30px;
}
</style>
