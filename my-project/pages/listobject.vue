<!-- eslint-disable vue/require-v-for-key -->
<template>
  
  <div class="container">
    <h1 class="text-center">List des objets</h1>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
    <b-card v-for="mountain in mountains" :key="mountain.name"  class="text-center m-2" >
        <b-card-text>{{mountain.description}}</b-card-text>
    </b-card>      
    </div>
    <footer>
    <button type="button" class="btn btn-primary text-center">  <NuxtLink to="/additem" class="text-white">
    Ajouter un objet
  </NuxtLink></button>      
    </footer>

  </div>

</template>
<script>
  export default {
    name :'ListObject',
    data() {
      return {
        mountains: []
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'http://localhost:3001/api/item/fetchItem', {
          headers : {
            'Authorization' : this.$auth.getToken('local').substring(5)
          }
        }
      ).then(res => res.json())
    },
    mounted(){
      if(this.$auth.getToken('local') === "Bearer%")
      {
        this.$router.push('/');
      }
      console.log(this.$auth.getToken('local'))

    },
    auth : false
  }
</script>