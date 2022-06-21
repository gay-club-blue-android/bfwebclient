<template>
  <main class="form-signin">
    <form>
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="login">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
        <label for="floatingPassword">Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" @click="authFarmer">Sign in</button>
    </form>
  </main>

</template>

<script>
import objDeviceUUID from "/node_modules/device-uuid/lib/device-uuid.js"

export default {
  name: "ComponentAuth",
  inject: ["globalVariables"],
  data() {
    return {
      innerGlobalVariables: this.globalVariables,
      login: "",
      password: ""
    }
  },
  mounted() {
    if (this.innerGlobalVariables.isAuthorized === false) {

      let deviceId = new objDeviceUUID.DeviceUUID().get()

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

    }
  }
}
</script>

<style scoped>

</style>