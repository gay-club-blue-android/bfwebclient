export default {
    keys: {
        ApiKey: "API_KEY",
        DeviceId: "DEVICE_ID",
        isAuthorized: "isAuthorized",
        farmer: "farmer"
    },

    getValueByKey: function (key) {
        return JSON.parse(sessionStorage.getItem(key));
    },

    setKeyValuePair: function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },

    init: function () {
        if (sessionStorage.getItem("init1") === null) {
            //console.log("init call");
            sessionStorage.setItem("init1", "yes");

            this.setKeyValuePair(this.keys.ApiKey, null);
            this.setKeyValuePair(this.keys.DeviceId, null);
            this.setKeyValuePair(this.keys.isAuthorized, false);
            this.setKeyValuePair(this.keys.farmer, null);
        } else {
            //console.log("already init");
        }
    }
}