
<template>
  <div>
      <Header :pagetitle="pagetitle"></Header>
       <div class="content">
            <Swiper :swiperList='swiperList' ></Swiper>
            <div class="content-pic">
                <div class="pic">
                </div>
                <div class="pic pic-r">
                   <p class="pic-r-t"></p>
                   <p class="pic-r-b"></p>
                </div>
            </div>
            <section class="section-box">
               <dl class="car-box start">
                 <dt>关注的车</dt>
                 <dd>28辆</dd>
               </dl>
               <dl class="car">
                 <dt>精品</dt>
                <dd>二手车</dd>
               </dl>
            </section>
            <section class="list-scroll"> 
              <div class="scroll-item" v-for="(item,index) in scrollList" :key="index">
                <img :src="item.imgUrl" alt="">
                <p>{{item.desc}}</p>
              </div>
            </section>
       </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Swiper from "@/components/Swiper";
export default {
  name: "index",
  data() {
    return {
      name: "嘻嘻哈哈",
      pagetitle: "首页",
      swiperList:[
          {id:1,imgUrl:'../../static/img/1.png'},
          {id:2,imgUrl:'../../static/img/2.png'},
          {id:3,imgUrl:'../../static/img/3.png'},
      ],
      scrollList:[
        {id:1,imgUrl:'../../static/img/1.jpg',desc:'装备维修'},
        {id:2,imgUrl:'../../static/img/2.jpg',desc:'查报价'},
        {id:3,imgUrl:'../../static/img/3.jpg',desc:'查违章'},
        {id:4,imgUrl:'../../static/img/4.jpg',desc:'物流服务'},
        {id:5,imgUrl:'../../static/img/2.jpg',desc:'查报价'},
        {id:6,imgUrl:'../../static/img/3.jpg',desc:'查违章'},
        {id:7,imgUrl:'../../static/img/4.jpg',desc:'物流服务'},
      ]
    };
  },
  components: {
    Header,
    Swiper
  },
};
</script>
<style>
@import "../../static/styles/index.css";
</style>

