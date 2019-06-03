<template>
 <panel title="YouTube View">
     <youtube-media :video-id="method(youtubeId)" 
     :player-width="700" :player-height="400" />
 </panel>
</template>
<script>
import Panel from '@/components/Panel'
import { getIdFromURL} from 'vue-youtube-embed'
export default {
components:{
    Panel
},
methods:{
  method(url){
       return this.$youtube.getIdFromURL(url)
    }
}
,
props:[
    'youtubeId'
]
}
</script>
<style scoped>

</style>