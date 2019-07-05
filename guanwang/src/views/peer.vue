<template>
    <div class="peer">
        <navs></navs>
        <peers></peers>
        <tabbar></tabbar>
    </div>
</template>

<script>
   import peers from '@/components/peers.vue'
    export default {
        name: "peer",
        components: {
            peers,
        },
    }
</script>

<style scoped>

</style>