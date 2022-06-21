import {createApp} from 'vue'
import App from './App.vue'
import router from './config-router'
import globalVariables from './global-variables'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App)
    .provide("globalVariables", globalVariables)
    .use(router)
    .mount('#app')
