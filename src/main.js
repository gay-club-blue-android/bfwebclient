import {createApp} from 'vue'
import App from './App.vue'
import router from './config-router'
import globalVariables from './inner-storage'
import toaster from '@meforma/vue-toaster';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "/public/global/css/validation.css"

import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';

import {defineRule, configure} from 'vee-validate';

configure({
    validateOnBlur: true, // controls if blur events should trigger validation with handleChange handler
    validateOnChange: true, // controls if change events should trigger validation with handleChange handler
    validateOnInput: true, // controls if input events should trigger validation with handleChange handler
    validateOnModelUpdate: true, // controls if update:modelValue events should trigger validation with handleChange handler,
});

defineRule("input-text-rule", (value, [min, max]) => {
    if (!value) return "input-not-valid";

    value = value.trim();

    if (value.length < min || value.length > max) {
        return "input-not-valid";
    } else {
        return "input-valid";
    }
});

defineRule("input-float-number-rule", (value, [min, max]) => {
    if (!value) return "input-not-valid";

    value = value.trim();

    if (!(isNaN(min) || isNaN(max) || isNaN(value))) {
        value = parseFloat(value);
    }

    if (value < min || value > max) {
        return "input-not-valid";
    } else {
        return "input-valid";
    }
});

defineRule("input-int-number-rule", (value, [min, max]) => {
    if (!value) return "input-not-valid";

    value = value.trim();

    if (!(isNaN(min) || isNaN(max) || isNaN(value))) {
        value = parseInt(value);
    }

    if (value < min || value > max) {
        return "input-not-valid";
    } else {
        return "input-valid";
    }
});


defineRule("input-email-rule", value => {
    let reg = new RegExp("^[A-Za-z0-9_\\-\\.]+\\@[A-Za-z0-9_\\-\\.]+\\.[A-Za-z]{2,4}$");
    if (reg.test(value) === false) {
        return "input-not-valid";
    } else {
        return "input-valid";
    }
});

defineRule('trimLength', (value, [min, max]) => {
    if (!value) return "input-not-valid";
    value = value.trim()
    if (value.length < min || value.length > max) {
        return "input-not-valid";
    }
    return "input-valid";
})

defineRule('value', (value, [min, max]) => {
    if (!value) return "input-not-valid";
    if (!(isNaN(min) || isNaN(max) || isNaN(value))) {
        value = parseFloat(value);
        min = parseFloat(min);
        max = parseFloat(max);
    }
    console.log(value, typeof value)
    if (value < min || value > max) {
        return "input-not-valid";
    }
    return "input-valid";
})

globalVariables.init();

console.log("main js");

createApp(App)
    .use(router)
    .use(toaster)
    .component('BootstrapIcon', BootstrapIcon)
    .mount('#app')
