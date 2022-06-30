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

import innerStorage from "/src/inner-storage"

import router from '/src/config-router'

export default {
  name: "ComponentAuth",
  components: {
    Form,
    Field,
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  mounted() {

    if (innerStorage.getValueByKey(innerStorage.keys.isAuthorized) === false) {

      let deviceId = new objDeviceUUID.DeviceUUID().get();

      fetch("http://localhost:8040/mobile/apps/authByLoginAndPassword", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          login: "web",
          password: "12345",
          deviceId: deviceId
        })
      }).then(response => response.json()).then(responseAsObject => {


        innerStorage.setKeyValuePair(innerStorage.keys.ApiKey, responseAsObject.apiKey);
        innerStorage.setKeyValuePair(innerStorage.keys.DeviceId, deviceId);
        innerStorage.setKeyValuePair(innerStorage.keys.isAuthorized, true);

        console.dir("success auth");
        console.dir(innerStorage.getValueByKey(innerStorage.keys.ApiKey));
        console.dir(innerStorage.getValueByKey(innerStorage.keys.DeviceId));
        console.dir(innerStorage.getValueByKey(innerStorage.keys.isAuthorized));

      }).catch(error => {
        console.log('Looks like there was a problem: \n', error);
      });
    }
  },
  methods: {
    authFarmer() {
      fetch("http://localhost:8040/web/farmers/authByEmailAndPassword", {
        method: "post",
        headers: {
          "Content-type": "application/json",
          "API_KEY": innerStorage.getValueByKey(innerStorage.keys.ApiKey),
          "DEVICE_ID": innerStorage.getValueByKey(innerStorage.keys.DeviceId)
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        })
      }).then(response => response.json()).then(responseAsObject => {


        innerStorage.setKeyValuePair(innerStorage.keys.farmer, responseAsObject);

        console.dir("success auth");
        console.dir(innerStorage.getValueByKey(innerStorage.keys.farmer));

        //window.location.href = "/profile";

        router.push("/profile");

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