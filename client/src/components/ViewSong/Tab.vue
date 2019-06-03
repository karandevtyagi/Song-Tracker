<template>
 <panel title="Tab">
     <textarea
                    readonly
                    v-model="song.tab">
                </textarea>
 </panel>
</template>
<script>
import Panel from '@/components/Panel'
export default {
components:{
    Panel
},
props:[
    'song'
]
}
</script>
<style scoped>
textarea{
    width:80%;
    font-family: monospace;
    height: 200px;
    border: none;
    border-style:none; 
    overflow: auto;
    padding: 40px;
}
</style>
