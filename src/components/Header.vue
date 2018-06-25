<template>
    <header>
        <div :class="{iconHome:pagetitle=='我的'}"  class="icon icon-sys"></div>
        <div class="page-title">{{name}}</div>
        <div class="icon icon-kf"></div>
    </header>
</template>
<script>
    export default {
        name:'index',
        props:['pagetitle'],
        data() {
            return {
                name:'首页',
            }
        },
        created(){ 
           let pageName = this.$props.pagetitle || '首页';
           this.name = pageName;
        }
    }
</script>