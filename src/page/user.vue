<template>
    <div>
        <Header :pagetitle="pagetitle"></Header>
        个人中心
    </div>
</template>
<script>
 import Header from '@/components/Header';
    export default {
        data() {
            return {
                pagetitle:'我的'
            }
        },
        components:{
            Header
        }
    }
</script>