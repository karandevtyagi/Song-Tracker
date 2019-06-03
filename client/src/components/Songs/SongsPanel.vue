<template>
    <panel title="Songs" >
      <v-btn slot="action" 
      class="cyan accent-2"
      light
      small
      absolute
      right
      middle
      fab
       :to="{
        name: 'songs-create'
      }"> 
        <v-icon>add</v-icon>
      </v-btn>
        <div v-for="song in songs" :key="song.id" class="song">
          <v-layout>
            <v-flex xs-6 >
              <div class="song-title">
                  {{song.title}}    
              </div>
              <div class="song-artist">
                  {{song.artist}}    
              </div>
              <div class="song-genre">
                  {{song.genre}}    
              </div>
              <v-btn
               dark
              class="cyan"
               @click="navigateTo({name:'song',params:{songId:song.id}})">
               View
               </v-btn>
            </v-flex>
            <v-flex xs-6>
                <img class="album-image" :src="song.albumImageUrl"/>
            </v-flex>
          </v-layout>
        </div>
    </panel>
</template>

<script>
import SongService from '@/services/SongService'
import Panel from '@/components/Panel'
export default {
  data(){
     return{
       songs:null
     }
  },
  methods:{
    navigateTo(route){
       this.$router.push(route)
    }
  },
  components:{
      Panel
  },
  watch:{ 
      '$route.query.search':{
          immediate:true,
          async handler(value){
            this.songs=(await SongService.index(value)).data
          }
      }
  }
}
</script>
<style scoped>
.song{
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title{
  font-size: 24px;
}
.song-artist{
  font-size: 16px
}
.song-genre{
 font-size: 12px 
}
.album-image{
  width: 50%;
  height: 60%;
  margin: 0 auto;
}
</style>
