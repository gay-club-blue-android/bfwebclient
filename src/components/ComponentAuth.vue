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
      innerStorage: this.globalVariables,
      storageKeys: this.globalVariables.keys,
      email: "",
      password: ""
    }
  },
  mounted() {
    let isAuthorized = this.innerStorage.getValueByKey(this.storageKeys.isAuthorized);

    console.log(isAuthorized);

    if (isAuthorized === false) {

      console.log("1111");

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
        console.dir("success auth");

        this.innerStorage.setKeyValuePair(this.storageKeys.ApiKey, responseAsObject.apiKey);
        this.innerStorage.setKeyValuePair(this.storageKeys.DeviceId, responseAsObject.deviceId);
        this.innerStorage.setKeyValuePair(this.storageKeys.isAuthorized, true);

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
          "API_KEY": this.innerStorage.getValueByKey(this.storageKeys.ApiKey),
          "DEVICE_ID": this.innerStorage.getValueByKey(this.storageKeys.DeviceId)
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        })
      }).then(response => response.json()).then(responseAsObject => {
        console.dir("success auth");
        console.dir(responseAsObject);

        this.innerStorage.setKeyValuePair(this.storageKeys.farmer, responseAsObject);

        window.location.href = "/profile";

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