<template>
  <h1>Profile</h1>
  <h2>{{ farmer.id }}</h2>
  <h2>{{ farmer.firstName }}</h2>
  <h2>{{ farmer.lastName }}</h2>
  <h2>{{ farmer.email }}</h2>
  <h2>{{ farmer.description }}</h2>
</template>

<script>
import innerStorage from "/src/global-variables"

export default {
  name: "ComponentProfile",
  data() {
    return {
      farmer: innerStorage.getValueByKey(innerStorage.keys.farmer)
    }
  },
  mounted() {
    console.dir(innerStorage.getValueByKey(innerStorage.keys.farmer));
    console.dir(typeof innerStorage.getValueByKey(innerStorage.keys.farmer));
  }
}
</script>

<style scoped>

</style>