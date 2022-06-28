export default {

    keys: {
        ApiKey: "API_KEY",
        DeviceId: "DEVICE_ID",
        isAuthorized: "isAuthorized",
        farmer: "farmer"
    },

    getValueByKey: function (key) {
        return window.localStorage.getItem(key);
    },

    setKeyValuePair: function (key, value) {
        window.localStorage.setItem(key, value);
    },

    init: function () {
        this.setKeyValuePair(this.keys.ApiKey, null);
        this.setKeyValuePair(this.keys.DeviceId, null);
        this.setKeyValuePair(this.keys.isAuthorized, false);
        this.setKeyValuePair(this.keys.farmer, null);
    }
}