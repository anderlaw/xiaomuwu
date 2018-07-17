<template>
<div>
  <!-- banner链接 -->
  <!-- <group>
    <x-input style="width:70%;" title="title" v-model="value"></x-input>
  </group> -->
  <div style="text-align:center;color:#7c7c7c;padding-top:30px;">
    <div style="display:inline-block;width:70%;position:relative;">
      <input style="box-sizing:border-box;width:100%;outline:none;border:1px solid #e3e3e3;border-radius:3px;padding-left:16px;line-height:30px;" type="text" placeholder="搜索书名/作者/关键字"/>
      <span @click="searchBook" style="cursor:pointer;position:absolute;right:10px;top:2px;font-size:20px;" class="iconfont icon-chaxun">
      </span>
    </div>
  </div>
  <router-link to="/class">
    <img :src="banner" width="100%" alt="">
  </router-link>
  <!-- 热门推荐 -->
  <div style="padding:0 20px;">
    <div style="overflow:auto;line-height:80px;">
      <strong style="float:left;">热门推荐</strong>
      <span @click="seeMore" style="float:right;font-size:14px;cursor:pointer;">
        更多
        <span class="iconfont icon-jiantou1"></span>
      </span>
    </div>

    <div class="clearfix" style="height:300px;">
      <Book :src="item.src" :description="item.description" v-for="(item,index) in bookListRecommend" :key="index"/>
    </div>
    <p>

    </p>

  </div>
</div>
</template>

<script>
import banner from '@/assets/banner.png'
import qfcfImg from '@/assets/fcf.png'
import zfzImg from '@/assets/zfz.png'
import fcImg from '@/assets/fc.png'

import shenmiImg from '@/assets/lzsm.png'
import xialuoImg from '@/assets/xldw.png'
import huohzeImg from '@/assets/hz.png'

import Book from '@/components/bookitem'
export default {
  components:{
    Book
  },
  data(){
    return {
      banner:banner,
      value:123,
      bookListRecommend:[
        { description:'疯传:让你的产品、思想、行为...',src:fcImg },
        { description:'追风筝的人',src:zfzImg },
        { description:'强风吹拂',src:qfcfImg },

        { description:'神秘的量子生命',src:shenmiImg },
        { description:'夏洛的网',src:xialuoImg },
        { description:'活着',src:huohzeImg },
      ]
    }
  },
  methods:{
    searchBook(){
      console.log('searching books!!!')
    },
    seeMore(){
      console.log('查看更多！')
    }
  }
}
</script>

<style>

</style>
