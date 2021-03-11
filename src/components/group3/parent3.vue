<template>
    <div>
        <Child :childvalue.sync="value"/>
        .sync parent: <span>{{value}}</span>
    </div>
</template>

<script>
    import Child from './child'
    export default {
        name: "parent3",
        components:{
            Child
        },
        data(){
            return {
                value: 100
            }
        }
    }
</script>

<style scoped>

</style>