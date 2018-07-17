<template>
  <div class="book-item">
    <img :src="src" alt="" width="100%">
    <div style="font-size:13px;line-height:1.5;"> {{ description }} </div>
  </div>
</template>

<script>
export default {
  props:['src','description'],
  data(){
    return {
      initSrc:this.src,
      initDescription:this.description,
    }
  }
}
</script>

<style>
.book-item{
  cursor: pointer;
  height:50%;
  font-size: 12px;
  overflow: hidden;
  float:left;
  width:33.3333%;
  box-sizing:border-box;
  padding:5px;
}


</style>
