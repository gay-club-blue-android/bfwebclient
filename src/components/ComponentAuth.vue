<template>
  <main class="form-signin">
    <Form v-slot="{errors}">

      <div class="container">
        <div class="row">
          <div class="col text-center enterLogo">
            <img :src="require('@/assets/Logo.svg')">
            <h1 class="h3 mb-3 fw-normal text-size">Войти</h1>
          </div>
        </div>
      </div>

      <div class="filler">
        <div class="container">
          <div class="col text-center">
            <div class="p-1 form-floating container">
              <Field name="email" rules="input-email-rule" :class="errors.email" class="form-control"
                     id="inputEmail" v-model="email"/>
              <label for="inputEmail">Email</label>
            </div>
            <div class="p-1 form-floating container mt-3">
              <Field name="password" rules="input-text-rule:1,64" :class="errors.password" class="form-control"
                     id="inputPassword" v-model="password"/>
              <label for="inputPassword">Пароль</label>
            </div>
          </div>
        </div>
        <div class="container mt-3">
          <div class="row">
            <div class="col text-center">
              <button class="btn color white-text" @click="authFarmer"
                      :disabled="errors.email!=='input-valid' || errors.password!=='input-valid'">Войти
              </button>
            </div>
          </div>
        </div>
      </div>
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
          password: this.password.trim(),
        })
      }).then(response => {

        console.dir(response.status);

        if (!response.ok) {
          let err = new Error("HTTP status code: " + response.status)
          err.response = response
          err.status = response.status
          throw err
        }

        return response.json();
      }).then(responseAsObject => {
        innerStorage.setKeyValuePair(innerStorage.keys.farmer, responseAsObject);

        console.dir("success auth");
        console.dir(innerStorage.getValueByKey(innerStorage.keys.farmer));

        //window.location.href = "/profile";

        router.push("/profile");

      }).catch(error => {
        console.log('Looks like there was a problem: \n', error);
        error.response.json().then(r => {
          this.$toast.error(`Ошибка авторизации: ` + r.message);
          setTimeout(this.$toast.clear, 3000);
          console.dir("error details: " + r.message)
        });
      });
    }
  }
}
</script>

<style scoped>

.filler {
  width: 100%;
  height: 100vh;
  background: #ffffff url("/public/Auth/images/Background.svg") no-repeat;
}


.enterLogo {
  display: flex;
  justify-content: center;
  align-content: center;
}

.white-text {
  color: white !important;
}

.color {
  background: #0d462c;
}

.text-size {
  font-size: 50px;
}

</style>