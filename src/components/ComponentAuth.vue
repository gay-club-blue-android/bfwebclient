<template>
  <main class="form-signin">
    <Form v-slot="{errors}">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <Field name="email" rules="input-text-rule" :class="errors.email" class="form-control" id="floatingInput"
               v-model="email"/>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <Field name="password" rules="input-text-rule" :class="errors.password" class="form-control"
               id="floatingPassword" v-model="password"/>
        <label for="floatingPassword">Password</label>
      </div>


      <button class="w-100 btn btn-lg btn-primary" @click="authFarmer">Sign in</button>
    </Form>
  </main>

</template>

<script>
import {Form, Field} from 'vee-validate';

import objDeviceUUID from "/node_modules/device-uuid/lib/device-uuid.js"

export default {
  name: "ComponentAuth",
  components: {
    Form,
    Field,
  },
  inject: ["globalVariables"],
  data() {
    return {
      innerGlobalVariables: this.globalVariables,
      email: "",
      password: ""
    }
  },
  mounted() {
    if (this.innerGlobalVariables.isAuthorized === false) {

      let deviceId = new objDeviceUUID.DeviceUUID().get();

      fetch("http://localhost:8090/mobile/apps/authByLoginAndPassword", {
        method: "post",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          login: "web",
          password: "12345",
          deviceId: deviceId
        })
      }).then(response => response.json()).then(responseAsObject => {
        console.dir("success auth");

        this.innerGlobalVariables.httpHeaders.API_KEY = responseAsObject.apiKey;
        this.innerGlobalVariables.httpHeaders.DEVICE_ID = deviceId;
        this.innerGlobalVariables.isAuthorized = true;

        console.dir(this.innerGlobalVariables.httpHeaders);

      }).catch(error => {
        console.log('Looks like there was a problem: \n', error);
      });
    }
  },
  methods: {
    authFarmer() {
      fetch("http://localhost:8090/web/farmers/authByEmailAndPassword", {
        method: "post",
        headers: {
          "Content-type": "application/json",
          "API_KEY": this.innerGlobalVariables.httpHeaders.API_KEY,
          "DEVICE_ID": this.innerGlobalVariables.httpHeaders.DEVICE_ID
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        })
      }).then(response => response.json()).then(responseAsObject => {
        console.dir("success auth");

        console.dir(responseAsObject);

      }).catch(error => {
        console.log('Looks like there was a problem: \n', error);
      });
    }
  }
}
</script>

<style scoped>
.input-not-valid {
  outline: none !important;
  box-shadow: none !important;

  border-style: solid !important;
  border-width: 1px;
  border-color: red !important;
}

.input-valid {
  outline: none !important;
  box-shadow: none !important;

  border-style: solid !important;
  border-width: 1px;
  border-color: green !important;
}
</style>