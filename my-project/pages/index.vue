<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center">
  <b-form  @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Enter your password"
          required
        ></b-form-input>
      </b-form-group>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <NuxtLink to="/signup" class="text-black">
    Create an account
  </NuxtLink>
  </b-form>    
  </div>

</template>

<script>
export default {
  auth : false,
  data() {
    return {
      form :{
      email: '',
      password: ''        
      }

    }
  },
  methods: {
    async submit() {
      try {
         await this.$auth.loginWith('local', { data: this.form })
         await this.$router.push('/listObject');
         this.$nuxt.$emit('auth',true)
      } catch (err) {
        this.error = err.response.data.message
      }
      
    }
  }
}
</script>