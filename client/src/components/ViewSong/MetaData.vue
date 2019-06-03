<template> 
    <panel title="Song Metadata" >
        <v-layout>
            <v-flex xs-6>
              <div class="song-title" >
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
              @click="navigateTo({
                name:'song-edit',
                params:{
                  songId:song.id
                }
              })">Edit
              </v-btn><br>
              <v-btn
              v-if="isLoggedIn && !bookmark"
              dark
              class="cyan"
              @click="setAsBookmark">Bookmark
              </v-btn>
              <v-btn
              v-if="isLoggedIn && bookmark"
              dark
              class="cyan"
              @click="unSetAsBookmark">UnBookmark
              </v-btn>
            </v-flex>
            <v-flex xs-6>
                <img class="album-image" :src="song.albumImageUrl"/><br>
                {{song.album}}  
            </v-flex>                      
          </v-layout>
    </panel>
</template>
<script>
import {mapState} from 'vuex'
import Panel from '@/components/Panel'
import BookmarkService from '../../services/BookMarkServices'
export default {
  data(){
    return{
      bookmark:null
    }
  },
components:{
    Panel
},
props:[
    'song'
],
computed:{
  ...mapState([
       'isLoggedIn',
       'user'
  ]),
},
watch:{
  song:{immediate:true,
     async handler(){
  try{
 let bookmarks=(await BookmarkService.index({
   songId: this.song.id
})).data
if(bookmarks.length){
  this.bookmark=bookmarks[0]
}
  }catch(err){
    console.log(err)
  }
  }
}
},
methods:{
  navigateTo(route){
    this.$router.push(route)
  },
  async setAsBookmark(){
    try {
        this.bookmark = (await BookmarkService.post({
          songId: this.song.id
        })).data
      } catch (err) {
        console.log(err)
      }
  },
  async unSetAsBookmark(){
          try {
        await BookmarkService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style scoped>
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
  margin:0 auto;
}
</style>