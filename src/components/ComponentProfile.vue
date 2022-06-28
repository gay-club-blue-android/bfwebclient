<template>
  <h1>Profile</h1>
    <h2>{{farmer.id}}</h2>
    <h2>{{farmer.firstName}}</h2>
    <h2>{{farmer.lastName}}</h2>
    <h2>{{farmer.email}}</h2>
    <h2>{{farmer.description}}</h2>
</template>

<script>
export default {
  name: "ComponentProfile",
  inject: ["globalVariables"],
  data() {
    return {
      innerStorage: this.globalVariables,
      storageKeys: this.globalVariables.keys,
      farmer: this.innerStorage.getValueByKey(this.storageKeys.farmer)
    }
  },
  mounted() {
    console.dir(this.innerGlobalVariables);
  }
}
</script>

<style scoped>

</style>