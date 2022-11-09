<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h3 class="col mb-3 text-center">Добавление продукта</h3>
        </div>
      </div>
    </div>
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
          <div class="p-1 form-floating container">
            <upload-media
                server="http://localhost:8040/web/products/loadImage"
                error="">
            </upload-media>
          </div>
        </div>

        <div class="col text-center">
          <button class="color mb-5 btn white-text" @click="addProduct">Добавить продукт</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import {Form, Field} from 'vee-validate';

import innerStorage from "/src/inner-storage"
//import router from "@/config-router";

export default {
  name: "ComponentNewProduct",
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
        priceMeasurementId: 3,
        amount: 0,
        amountMeasurementId: 3,
        description: "",
        rating: 4.5,
        photoPath: "banan.jpg",
        farmerId: innerStorage.getValueByKey(innerStorage.keys.farmer).id,
        productCategoryId: 3
      }
    }
  },
  methods: {
    addProduct: function () {
      fetch("http://localhost:8040/web/products/addNewProduct", {
        method: "post",
        headers: {
          "Content-type": "application/json",
          "API_KEY": innerStorage.getValueByKey(innerStorage.keys.ApiKey),
          "DEVICE_ID": innerStorage.getValueByKey(innerStorage.keys.DeviceId)
        },
        body: JSON.stringify(this.product)
      }).then(response => response.json()).then(responseAsObject => {
        console.dir(responseAsObject);
        this.$toast.success(`Продукт успешно добавлен`);
        setTimeout(this.$toast.clear, 3000);
      }).catch(error => {
        console.log('Looks like there was a problem: \n', error);
      });
    }
  },
  mounted() {
    console.dir(innerStorage.getValueByKey(innerStorage.keys.farmer));
    console.dir(typeof innerStorage.getValueByKey(innerStorage.keys.farmer));
  }

}
</script>

<style scoped>
.color {
  background: #0d462c;
}
.white-text {
  color: white !important;
}
</style>