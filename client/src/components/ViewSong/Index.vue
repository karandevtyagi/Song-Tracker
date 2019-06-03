<template> 
<div>
<v-layout>
    <v-flex xs-6>
    <song-metadata :song="song"/>
    </v-flex>
    <v-flex xs-9 class="ml-2">
        <you-tube :youtubeId="song.youtubeId"/>
    </v-flex>   
</v-layout>
<v-layout >
    <v-flex xs-6 class="mt-2" >
       <tab :song="song" />
    </v-flex>
 <v-flex xs-6 class="ml-2 mt-2">
     <lyrics :song="song" />
    </v-flex>
</v-layout>
</div>
</template>
<script>
import YouTube from './YouTube'
import Tab from './Tab'
import Lyrics from './Lyrics'
import songservice from '@/services/SongService'
import songMetadata from '@/components/ViewSong/MetaData'
export default {
    data(){
        return{
            song:null
        }
},
async mounted(){
    const songId=this.$store.state.route.params.songId
    this.song=(await songservice.show(songId)).data
},
components:{
    songMetadata,YouTube,Lyrics,Tab
}
}
</script>
<style scoped>
</style>
