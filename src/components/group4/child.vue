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
            childvalue:{
                type:String|Number,
                default:''
            }
        },
        data(){
            return {
                value:this.childvalue
            }
        },
        methods:{
            inputData(e){
                this.value = e.target.value
            }
        }
    }
</script>

<style scoped>

</style>