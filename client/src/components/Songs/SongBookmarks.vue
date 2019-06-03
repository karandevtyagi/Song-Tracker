<template>
    <panel title="Bookmarks">
        <v-data-table
        :headers="headers"
        :paginataion.sync="pagination"
        :items="bookmarks"
        :loading="true">
        <template v-slot:items="props">
            <td class="text-xs-right">{{props.item.title}}</td>
             <td class="text-xs-right">{{props.item.artist}}</td>
        </template>
        </v-data-table>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'
import BookmarkService from '../../services/BookMarkServices'
import {mapState} from 'vuex'
export default {
    data(){
        return{
         headers:[{
             text:'Title',
             value:'title'
         },
         {
             text:'Artist',
             value:'artist'
         }],
         pagination:{
             sortBy:'date',
             descending:true
         },
         bookmarks:[{
             title:'hello world',
             artist:'testing'
         },{
             title:'hello world',
             artist:'testing123'
         }]
        }
    },
components:{
    Panel
},
computed:{
  ...mapState([
       'isLoggedIn',
  ])
},
async mounted(){
    if(this.isLoggedIn){
        this.bookmarks=(await BookmarkService.index()).data
    }
}
}
</script>

<style scoped>

</style>
  

