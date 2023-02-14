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
    <b-form-group id="input-group-2" label="Your date:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.date"
          type="date"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Email address:"
        label-for="input-3"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Your password:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.password"
          type="password"
          placeholder="Enter your password"
          required
        ></b-form-input>
      </b-form-group>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </b-form>    
  </div>

</template>

<script>
import axios from "axios";
export default {
  auth : false,
  data() {
    return {
        form : {
          name : '',
          date : '',
          email: '',
          password: ''
        }
    }
  },
  methods: {
    async submit() {
       axios.post("http://localhost:3001/api/auth/signup",this.form , {
             headers: {
               Accept: "application/json"
            }
      })
      await this.$router.push('/listobject');
    }
  }
}
</script>