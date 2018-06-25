
<template>
  <div>
      <Header :pagetitle="pagetitle"></Header>
       <div class="content">
            <Swiper :swiperList='swiperList' ></Swiper>
            <Swiper :swiperList='swiperList2'></Swiper>
            <div class="content-info">
                <p>wfeiwfiwfeiwfhwhfiwfh</p>
                 <p>wfeiwfiwfeiwfhwhfiwfh</p>
                  <p>wfeiwfiwfeiwfhwhfiwfh</p>
                   <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                 <p>wfeiwfiwfeiwfhwhfiwfh</p>
                  <p>wfeiwfiwfeiwfhwhfiwfh</p>
                   <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                 <p>wfeiwfiwfeiwfhwhfiwfh</p>
                  <p>wfeiwfiwfeiwfhwhfiwfh</p>
                   <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                 <p>wfeiwfiwfeiwfhwhfiwfh</p>
                  <p>wfeiwfiwfeiwfhwhfiwfh</p>
                   <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                 <p>wfeiwfiwfeiwfhwhfiwfh</p>
                  <p>wfeiwfiwfeiwfhwhfiwfh</p>
                   <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                     <p>wfeiwfiwfeiwfhwhfiwfh</p>
                 <p>wfeiwfiwfeiwfhwhfiwfh</p>
                  <p>wfeiwfiwfeiwfhwhfiwfh</p>
                   <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                 <p>wfeiwfiwfeiwfhwhfiwfh</p>
                  <p>wfeiwfiwfeiwfhwhfiwfh</p>
                   <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                 <p>wfeiwfiwfeiwfhwhfiwfh</p>
                  <p>wfeiwfiwfeiwfhwhfiwfh</p>
                   <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                 <p>wfeiwfiwfeiwfhwhfiwfh</p>
                  <p>wfeiwfiwfeiwfhwhfiwfh</p>
                   <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
                 <p>wfeiwfiwfeiwfhwhfiwfh</p>
                  <p>wfeiwfiwfeiwfhwhfiwfh</p>
                   <p>wfeiwfiwfeiwfhwhfiwfh</p>
                    <p>wfeiwfiwfeiwfhwhfiwfh</p>
            </div>
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
      swiperList2:[
          {id:1,imgUrl:'../../static/img/4.png'},
          {id:2,imgUrl:'../../static/img/5.png'},
          {id:3,imgUrl:'../../static/img/6.png'},
      ],
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

