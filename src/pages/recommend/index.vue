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
  <div style="padding:0 20px;line-height:80px;border:1px solid red;">
    <div style="overflow:auto;">
      <strong style="float:left;">热门推荐</strong>
      <span @click="seeMore" style="float:right;font-size:14px;cursor:pointer;">
        更多
        <span class="iconfont icon-jiantou1"></span>
      </span>
    </div>

    <div style="overflow:auto;">
      <div style="float:left;width:33.33%;box-sizing:border-box;padding:10px;" v-for="(item,index) in bookListRecommend" :key="index">
        <img :src="item.src" width="100%" alt="">
        <p> {{ item.description }} </p>
      </div>
    </div>
    <p>

      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
      fafafa
    </p>

  </div>
</div>
</template>

<script>
import banner from '@/assets/banner.png'
import book1 from '@/assets/fcf.png'
import book2 from '@/assets/zfz.png'

export default {
  data(){
    return {
      banner:banner,
      value:123,
      bookListRecommend:[
        { description:'疯传:让你的产品、思想、行为...',src:book1 },
        { description:'疯传:让你的产品、思想、行为...',src:book2 },
        { description:'疯传:让你的产品、思想、行为...',src:book1 },
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
