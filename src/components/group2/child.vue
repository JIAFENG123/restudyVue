<template>
    <div>
        child:
        <input :value="value" @input="inputData">
    </div>
</template>

<script>
    export default {
        name: "child",
        props:{
            value:{
                type:String|Number,
                default:''
            }
        },
        methods:{
            inputData(e){
                this.$emit('changeData',e.target.value)
            }
        }
    }
</script>

<style scoped>

</style>