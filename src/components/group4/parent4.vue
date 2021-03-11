<template>
    <div>
        <Child ref="child" :childvalue="value"/>
        ref parent: <span  @click="getChildValue">{{value}}</span>
    </div>
</template>

<script>
    import Child from './child'
    export default {
        name: "parent4",
        components:{
            Child
        },
        data(){
            return {
                value: 100
            }
        },
        methods:{
            getChildValue(){
                this.value = this.$refs.child.value;
            }
        }
    }
</script>

<style scoped>

</style>