<template>
  <v-layout >
    <v-flex xs3>
      <song-bookmarks/>
    </v-flex>
    <v-flex xs6 class="ml-2">  
      <song-search-panel/>
       <song-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongPanel from './SongsPanel'
import SongSearchPanel from './SongSearchPanel'
import Panel from '@/components/Panel'
import SongBookmarks from './SongBookmarks'
export default {
  methods:{
  },
  components:{
      Panel,SongPanel,SongSearchPanel,SongBookmarks
  }
}
</script>
<style scoped>
</style>
