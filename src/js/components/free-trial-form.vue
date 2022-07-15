<template>
  <form class="bg-white w-full rounded-lg box-shadow flex flex-col p-8" @submit.prevent="submit_form">
    <input type="text" id="fname" name="fname" placeholder="First Name" autocomplete="given-name" v-model="this.form.first_name.value"
           :class="this.form.first_name.validated ? 'mb-4' : 'mb-1 error'">
    <i class="w-full text-end text-red text-sm pb-3 pr-1" v-if="!this.form.first_name.validated">First Name cannot be empty</i>
    <input type="text" id="lname" name="lname" placeholder="Last Name" autocomplete="family-name" v-model="this.form.last_name.value"
           :class="this.form.first_name.validated ? 'mb-4' : 'mb-1 error'">
    <i class="w-full text-end text-red text-sm pb-3 pr-1" v-if="!this.form.last_name.validated">Last Name cannot be empty</i>
    <input type="email" id="email" name="email" placeholder="Email Address" autocomplete="email" v-model="this.form.email.value"
           :class="this.form.first_name.validated ? 'mb-4' : 'mb-1 error'">
    <i class="w-full text-end text-red text-sm pb-3 pr-1" v-if="!this.form.email.validated">Email cannot be empty</i>
    <input type="password" id="password" name="password" placeholder="Password" autocomplete="current-password" v-model="this.form.password.value"
           :class="this.form.first_name.validated ? 'mb-4' : 'mb-1 error'">
    <i class="w-full text-end text-red text-sm pb-3 pr-1" v-if="!this.form.password.validated">Password cannot be empty</i>
    <button class="bg-green hover:bg-light-green py-3 rounded-lg button-box-shadow text-white font-semibold">CLAIM YOUR FREE TRIAL</button>
    <p class="text-xs text-center text-grayish-blue pt-4 font-semibold">By clicking the button, you are agreeing to our <a href="#" class="text-red">Terms and Services</a></p>
  </form>
</template>

<script>
export default {
  name: "free-trial-form",
  data() {
    return {
      form:
      {
        first_name:
        {
          value:null,
          validated:true
        },
        last_name:
        {
          value:null,
          validated:true
        },
        email:
        {
          value:null,
          validated:true
        },
        password:
        {
          value:null,
          validated:true
        },
      }
    }
  },
  methods:
    {
      submit_form()
      {
        if(!this.form.first_name.value)
        {
          this.form.first_name.validated = false;
        }

        if(!this.form.last_name.value)
        {
          this.form.last_name.validated = false;
        }

        if(!this.form.email.value)
        {
          this.form.email.validated = false;
        }

        if(!this.form.password.value)
        {
          this.form.password.validated = false;
        }

      }
    }
}
</script>

<style scoped>

</style>