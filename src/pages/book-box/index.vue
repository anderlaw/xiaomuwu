<template>
<div style="padding:0 20px;">
  <div style="height:40px;border-bottom:1px solid #e9e9e9;">
    <span style="font-size:12px;color:#cdcdcd;line-height:40px;">将三本想读的书放入书箱,一键寄送！</span>
  </div>
  <div style="margin-top:10px;" >
    <div class="clearfix" :key="index" v-for="(item,index) in bookBox">
      <img :src="item.src" class="fl" width="20%" alt="">
      <div class="fr" style="box-sizing:border-box;padding-left:4px;width:80%;display:inline-block;vertical-align:top;">
        <div style="font-size:11px;font-weight:bold;">{{ item.description }}</div>
        <div style="font-size:10px;">
          {{ item.author }}
          <span @click="removeBook(index)" style="cursor:pointer;;color:#dbdbdb;font-size:20px;" class="fr iconfont icon-shanchu"></span>
        </div>
      </div>
    </div>
    <div style="color:#cfcfcf;font-size:12px;font-weight:bold;" v-if="!bookBox || bookBox.length == 0 ">
      书箱空空如也,快去添加图书吧!
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
      bookBox:[
        { src:jiaxiya,description:"活着为了讲述",author:"[哥伦比亚]加西亚.马尔克斯" },
        { src:dongyekuiwu,description:"沉睡的人鱼之家",author:"[日]东野奎吾" },
        { src:fademenqian,description:"法的门前",author:"彼得恩德理" },
      ]
    }
  },
  methods:{
    removeBook(index){
      console.log('移除书箱');
      this.bookBox.splice(index,1)
    }
  }
}
</script>

<style>

</style>
