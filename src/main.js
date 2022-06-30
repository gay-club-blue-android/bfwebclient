import {createApp} from 'vue'
import App from './App.vue'
import router from './config-router'
import globalVariables from './inner-storage'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';

import {defineRule, configure} from 'vee-validate';

configure({
    validateOnBlur: true, // controls if blur events should trigger validation with handleChange handler
    validateOnChange: true, // controls if change events should trigger validation with handleChange handler
    validateOnInput: true, // controls if input events should trigger validation with handleChange handler
    validateOnModelUpdate: true, // controls if update:modelValue events should trigger validation with handleChange handler,
});

defineRule("input-text-rule", value => {
    if (!value || !value.length) {
        return "input-not-valid";
    } else {
        return "input-valid";
    }
});

globalVariables.init();

console.log("main js");

createApp(App)
    .use(router)
    .component('BootstrapIcon', BootstrapIcon)
    .mount('#app')
