<template>
<div>
  <!-- 个人信息 -->
  <div style="padding:20px;" class="clearfix">
    <img :src="avatar" class="fl" width="20%" alt="">
    <div class="fr" style="width:80%;">
      <div class="fl">
        <div style="font-size:12px;">寻觅旧时光</div>
        <div style="font-size:11px;color:#999;">您已是会员</div>
      </div>
      <div class="fr">
        <span style="font-size:10px;">会员有效期 <span style="font-size:16px;">{{11}}</span> 天</span>
      </div>
      <div style="clear:both;width:100%;text-align:center;">
        <x-button style="color:#fffdff;font-size:11px;line-height:24px;" mini type="warn">立即续费</x-button>
      </div>
    </div>
  </div>
  <div style="padding:20px;">
    <div class="clearfix" style="line-height:36px;">
      <div class="fl" style="font-size:12px;font-weight:bold;">
        <span>我的书箱</span>
      </div>
      <div class="fr" style="font-size:10px;cursor:pointer;" @click="moreBill">
        <span>全部订单</span>
        <span class="iconfont icon-jiantou1" style="vertical-align:middle;"></span>
      </div>
    </div>
    <div class="clearfix" style="width:100%;">
      <div class="fl" style="width:25%;text-align:center;box-sizing:border-box;padding:0 6px;">
        <div><span class="iconfont icon-qianshou"></span></div>
        <div style="font-size:10px;">待签收</div>
      </div>
      <div class="fl" style="width:25%;text-align:center;box-sizing:border-box;padding:0 6px;">
        <div><span class="iconfont icon-fanhui1"></span></div>
        <div style="font-size:10px;">待归还</div>
      </div>
      <div class="fl" style="width:25%;text-align:center;box-sizing:border-box;padding:0 6px;">
        <div><span class="iconfont icon-shoucang"></span></div>
        <div style="font-size:10px;">收藏</div>
      </div>
      <div class="fl" style="width:25%;text-align:center;box-sizing:border-box;padding:0 6px;">
        <div><span class="iconfont icon-namai"></span></div>
        <div style="font-size:10px;">可买</div>
      </div>
    </div>
  </div>
  <group class="custom-group">
    <cell style="font-size:11px;" title="邀请好友" link="/invite" inline-desc="邀请好友，各获得10天加时会员">
    </cell>
    <cell style="font-size:11px;" title="送好友" link="/donate">
    </cell>
    <cell style="font-size:11px;" title="线下借阅" link="/offline">
    </cell>
    <cell style="font-size:11px;" title="兑换码" link="/convert-code">
    </cell>
    <cell style="font-size:11px;" title="我的押金" link="/cash">
    </cell>
    <cell style="font-size:11px;" title="我的地址" link="/address">
    </cell>
    <cell style="font-size:11px;" title="关于我们" link="/about">
    </cell>
  </group>
  <div style="padding:10px 0;font-size:12px;background-color:#eee;color:#979797;text-align:center;">
    <span>有问题请咨询客服微信</span><br>
    <span>hajerbin</span><br>
    <span>(点击复制)</span>
  </div>
</div>
</template>

<script>
import avatar from '@/assets/avatar.png'
export default {
  data(){
    return{
      avatar:avatar
    }
  },
  methods:{
    moreBill(){
      console.log('more bills')
    }
  }
}
</script>

<style>
.iconfont{
  color:#666666;
}
.custom-group .vux-label{
  font-size:11px !important;
}
.custom-group .vux-label-desc{
  font-size:11px !important;
}

</style>
