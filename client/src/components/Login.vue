<template>
  <v-layout >
    <v-flex xs12 sm9 md5 offset-xs3>
    <panel title="Login">
      <form
          name="tab-tracker-form">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click="login">
          Login
        </v-btn>
    </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
     email:'',
     password:'',
     error:null
    }
  },
  methods:{
    async login(){
      try{
       const response=await AuthenticationService.login({
       email:this.email,
       password:this.password
     })
      this.$store.dispatch('setToken',response.data.token)
      this.$store.dispatch('setUser',response.data.user)
      this.$router.push({
        name:'songs'
      })
     }catch(error){
        this.error=error.response.data.error
     }
    }
  },
  components:{
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red
}
</style>
