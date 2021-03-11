<template>
    <div>
        <Child :value="value" @changeData="changeData"/>
        props和$emit parent:<span>{{value}}</span>
    </div>
</template>

<script>
    import Child from './child'
    export default {
        name: "parent2",
        components:{
            Child
        },
        data(){
            return {
                value:'100'
            }
        },
        methods:{
            changeData(value){
                console.log(value);
                this.value = value
            }
        }
    }
</script>

<style scoped>

</style>