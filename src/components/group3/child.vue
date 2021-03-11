<template>
    <div>
        child:
        <input :value="childvalue" @input="inputData">
    </div>
</template>

<script>
    export default {
        name: "child",
        props:{
            childvalue:{
                type:String|Number,
                default:''
            }
        },
        methods:{
            inputData(e){
                this.$emit('update:childvalue',e.target.value)
            }
        }
    }
</script>

<style scoped>

</style>