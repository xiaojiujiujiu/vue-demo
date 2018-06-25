<template>
    <div>
        <Header :pagetitle="pagetitle"></Header>
        拍卖页面
    </div>
</template>
<script>
     import Header from '@/components/Header';
    export default {
        name:'auction',
        data() {
            return {
                pagetitle:'拍卖'
            }
        },
        components:{
            Header
        }
    }
</script>