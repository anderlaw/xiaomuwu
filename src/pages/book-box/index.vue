<template>
<div style="padding:0 20px;">
  <div style="height:40px;border-bottom:1px solid #e9e9e9;">
    <span style="font-size:12px;color:#cdcdcd;line-height:40px;">将三本想读的书放入书箱,一键寄送！</span>
  </div>
  <div style="margin-top:10px;">
    <img :src="jiaxiya" width="20%" alt="">
    <div style="display:inline-block;vertical-align:top;">
      <div style="font-size:13px;font-weight:bold;">活着为了讲述</div>
      <span style="font-size:11px;">[哥伦比亚]加西亚.马尔克斯</span>
      <span class="fr iconfont icon-shanchu"></span>
    </div>
  </div>
</div>
</template>

<script>
import jiaxiya from '@/assets/jiaxiya.png'
import dongyekuiwu from '@/assets/dongyekuiwu.png'
import fademenqian from '@/assets/fademenqian.png'
export default {
  data(){
    return {
      jiaxiya:jiaxiya,
      dongyekuiwu:dongyekuiwu,
      fademenqian:fademenqian,
    }
  }
}
</script>

<style>

</style>
