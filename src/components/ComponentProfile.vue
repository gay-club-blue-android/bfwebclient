<template>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <h1 class="h3 mb-3 fw-normal">Профиль</h1>
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div class="col text-center">
      <div class="p-1 form-floating container">
        <h2>{{farmer.firstName}}</h2>
      </div>
      <div class="p-1 form-floating container">
        <h2>{{farmer.lastName}}</h2>
      </div>
      <div class="p-1 form-floating container">
        <h2>{{farmer.email}}</h2>
      </div>
      <div class="p-1 form-floating container">
        <h2>{{farmer.description}}</h2>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="col text-center">
      <button class="btn btn-primary" @click="addProduct">Добавить продукт</button>
    </div>
      <div class="col text-center">
        <div class="p-1 form-floating container">
          <h2>name</h2>
        </div>
        <div class="p-1 form-floating container">
          <h2>price</h2>
        </div>
        <div class="p-1 form-floating container">
          <h2>amount</h2>
        </div>
        <div class="p-1 form-floating container">
          <h2>description</h2>
        </div>
        <div class="p-1 form-floating container">
          <h2>rating</h2>
        </div>
        <div class="p-1 form-floating container">
        <h2>photo</h2>
        </div>
      </div>
  </div>
</template>

<script>
import innerStorage from "/src/inner-storage"

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