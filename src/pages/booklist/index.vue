<template>
  <div style="padding:6px 20px;">
    <div style="padding-bottom:6px;border-bottom:1px solid #ccc;">
      <span style="font-size:13px;font-weight:bold;color:#121212;">史上最完整的人工智能书单</span>
      <div style="font-size:12px;color:#a4a4a4;">
        关于AI的图书成千上万,我们通过对主要电商平台以及社交...
      </div>
      <div class="clearfix">
        <div class="book-item">
          <img :src="jidian" width="100%" alt="">
        </div>
        <div class="book-item">
          <img :src="tuling" width="100%" alt="">

        </div>
        <div class="book-item">
          <img :src="jiqiren" width="100%" alt="">
        </div>
      </div>
    </div>
    <div style="padding:6px 0;border-bottom:1px solid #ccc;">
      <span style="font-size:13px;font-weight:bold;color:#121212;">
        2017年小木屋童书榜年度精选
      </span>
      <div style="font-size:12px;color:#a4a4a4;">
        抽出更多时间陪宝贝阅读，是给予宝贝的一份最好的礼物...
      </div>
      <div class="clearfix">
        <div class="book-item">
          <img :src="aosika" width="100%" alt="">
        </div>
        <div class="book-item">
          <img :src="tuzi" width="100%" alt="">
        </div>
        <div class="book-item">
          <img :src="zuotoujing" width="100%" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tuzi from '@/assets/小兔.png';
import tuling from '@/assets/图灵.png';
import jidian from '@/assets/奇点.png';
import aosika from '@/assets/奥斯卡.png';
import zuotoujing from '@/assets/座头鲸.png';
import jiqiren from '@/assets/机器人.png';

export default {
  data(){
    return {
      tuzi:tuzi,
      tuling:tuling,
      jidian:jidian,
      aosika:aosika,
      zuotoujing:zuotoujing,
      jiqiren:jiqiren,
    }
  }
}
</script>

<style scoped>
.book-item{
  float: left;
  width:33.333%;
  box-sizing:border-box;padding:5px;
}
</style>
