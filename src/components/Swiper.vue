<template>
     <div class="swiper-box">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in swiperList" :key="item.id">
                        <img :src="item.imgUrl" alt="" width="100%">
                    </div>
                </div>
                 <div class="swiper-scrollbar"></div>
            </div>
        </div>
</template>
<script>
import Swiper from "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.css";
export default {
    props:['swiperList'],
    data(){
        return{
            swiperId:'infospaceswiper',
            mySwiper:'',
        }
    },
    created(){
        this.$nextTick(()=>{
             var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                autoplay:true,
                loop: true,               
                // 如果需要滚动条
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            })        
        })
    },
    methods:{
        
    }
}
</script>

