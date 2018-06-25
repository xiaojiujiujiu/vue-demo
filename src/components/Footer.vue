<template>
    <footer>    
        <router-link to="/index" @click.native="getPageSource" :class="{active:source==1}" class='footer-icon footer-car ' > 
                <span>首页</span>
        </router-link>
        <router-link to="/auction" @click.native="getPageSource" :class="{active:source==2}" class="footer-icon footer-pm">
                <span>拍卖</span>
        </router-link>
        <router-link to="/subscribe"  @click.native="getPageSource" :class="{active:source==3}" class="footer-icon footer-dy">
                <span>订阅</span>
        </router-link>
        <router-link to="/user" @click.native="getPageSource" :class="{active:source==4}" class="footer-icon footer-user">
                <span>我的</span>
        </router-link>
    </footer>
</template>
<script>
    
    export default {
        data() {
            return {
                thisUrl:'',
                source:0, // 1:首页 2。拍卖 3 订阅  4 我的
            }
        },
        methods:{
            //获取当前页面 所在类别 
            getPageSource(){
                let _this = this;
                _this.thisUrl = window.location.href; 
                if(_this.thisUrl){
                    if(_this.thisUrl.includes('index')){
                        _this.source = 1;
                        sessionStorage.setItem('source','1');
                        return
                    }
                    if(_this.thisUrl.includes('auction')){
                        _this.source = 2;
                        sessionStorage.setItem('source','2');
                        return
                    }
                    if(_this.thisUrl.includes('subscribe')){
                        _this.source = 3;
                        sessionStorage.setItem('source','3');
                        return
                    }
                    if(_this.thisUrl.includes('user')){
                        _this.source = 4;
                        sessionStorage.setItem('source','4');
                        return
                    }
                }
            }
        },
        created(){ 
            if(sessionStorage.getItem('source')){
                this.source = sessionStorage.getItem('source');
            }else{
                this.source = 1;
            }
        }
    }
</script>