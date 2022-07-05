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
        <h2>{{ farmer.firstName }}</h2>
      </div>
      <div class="p-1 form-floating container">
        <h2>{{ farmer.lastName }}</h2>
      </div>
      <div class="p-1 form-floating container">
        <h2>{{ farmer.email }}</h2>
      </div>
      <div class="p-1 form-floating container">
        <h2>{{ farmer.description }}</h2>
      </div>
    </div>
  </div>

  <h1>добавление продукта</h1>
  <div class="container">
    <Form v-slot="{errors}">
      <div class="col text-center">
        <div class="p-1 form-floating container">
          <Field name="name" rules="input-text-rule:1,128" :class="errors.name" class="form-control"
                 id="inputName" v-model="product.name"/>
          <label for="inputName">name</label>
        </div>
        <div class="p-1 form-floating container">
          <Field name="price" rules="input-int-number-rule:1,100000" :class="errors.price" class="form-control"
                 id="inputPrice" v-model="product.price"/>
          <label for="inputPrice">price</label>
        </div>
        <div class="p-1 form-floating container">
          <Field name="amount" rules="input-int-number-rule:1,1000" :class="errors.amount" class="form-control"
                 id="inputAmount" v-model="product.amount"/>
          <label for="inputAmount">amount</label>
        </div>
        <div class="p-1 form-floating container">
          <Field name="description" rules="input-text-rule:1,4096" :class="errors.description" class="form-control"
                 id="inputDescription" v-model="product.description"/>
          <label for="inputDescription">description</label>
        </div>
      </div>

      <div class="col text-center">
        <button class="btn btn-primary" @click="addProduct">Добавить продукт</button>
      </div>
    </Form>
  </div>

</template>

<script>
import {Form, Field} from 'vee-validate';

import innerStorage from "/src/inner-storage"

export default {
  name: "ComponentProfile",
  components: {
    Form,
    Field,
  },
  data() {
    return {
      farmer: innerStorage.getValueByKey(innerStorage.keys.farmer),
      product: {
        name: "",
        price: 0,
        amount: 0,
        description: ""
      }
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