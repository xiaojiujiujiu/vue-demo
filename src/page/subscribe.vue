<template>
    <div>
        <Header :pagetitle="pagetitle"></Header>
        订阅
    </div>
</template>
<script>
    import Header from '@/components/Header';
    export default {
        data() {
            return {
                pagetitle:'订阅'
            }
        },
        components:{
            Header
        }
    }
</script>