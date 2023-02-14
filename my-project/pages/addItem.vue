<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center">
  <b-form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <b-form-group
        id="input-group-1"
        label="Name"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-2" label="Your description:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.description"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Color:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.color"
          placeholder="Enter color"
          required
        ></b-form-input>
      </b-form-group>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Add item</button>
  </b-form>    
  </div>

</template>

  
  <script>
  import axios from "axios";
    export default {
      auth : false,
      data() {
        return {
          form: {
            name : '',
            description: '',
            color: ''
          },
          show: true
        }
      },
      mounted(){
      if(this.$auth.getToken('local') === "Bearer%")
      {
        this.$router.push('/');
      }
      console.log(this.$auth.getToken('local'))

    },
      methods: {
        submit(event) {
          axios
          .post("http://localhost:3001/api/item/addItem", this.form, {
            headers: {
              Accept: "application/json",
              'Authorization' : this.$auth.getToken('local').substring(5)
            }
          })
          this.$router.push('/listObject')
        },
  
      },
    }
  </script>