<template>
  <div class="huyna-ebanaya">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="col mb-5">Профиль</h2>
        </div>
      </div>
    </div>

    <div class="row huy">
      <div>
        <div class="container overflow-hidden">
          <div class="col ">
            <div class="p-1 form-floating container">
              <img id="image">
            </div>
            <div class="p-1 form-floating container">
              <h4>Имя: {{ farmer.firstName }}</h4>
            </div>
            <div class="p-1 form-floating container">
              <h4>Фамилия: {{ farmer.lastName }}</h4>
            </div>
            <div class="p-1 form-floating container">
              <h4>Email: {{ farmer.email }}</h4>
            </div>
            <div class="p-1  form-floating container">
              <h4>Описание: {{ farmer.description }}</h4>
            </div>
            <a href="#" class="color mb-5 btn white-text">Изменить</a>
            <router-linl class="color mb-5 btn white-text" to="/newproduct"><btn>Добавить продукт</btn><router-link>
          </div>
        </div>
      </div>
    </div>


    <div class="container">
      <div class="row">
        <div class="col">
          <h3 class="col mb-4">Продукты:</h3>
          <div class="row">
            <div class="card" style="width: 19rem;">
              <img class="card-img-top" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Товар 1</h5>
                <p class="card-text">Описание цена кол-во</p>
                <a href="#" class="color btn white-text">Удалить</a>
              </div>
            </div>
            <div class="card" style="width: 19rem;">
              <img class="card-img-top" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Товар 2</h5>
                <p class="card-text">Описание цена кол-во</p>
                <a href="#" class="color btn white-text">Удалить</a>
              </div>
            </div>
            <div class="card" style="width: 19rem;">
              <img class="card-img-top" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Товар 3</h5>
                <p class="card-text">Описание цена кол-во</p>
                <a href="#" class="color btn white-text">Удалить</a>
              </div>
            </div>
            <div class="card" style="width: 19rem;">
              <img class="card-img-top" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Товар 4</h5>
                <p class="card-text">Описание цена кол-во</p>
                <a href="#" class="color btn white-text">Удалить</a>
              </div>
            </div>
            <div class="card" style="width: 19rem;">
              <img class="card-img-top" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Товар 4</h5>
                <p class="card-text">Описание цена кол-во</p>
                <a href="#" class="color btn white-text">Удалить</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
//import {Form, Field} from 'vee-validate';

import innerStorage from "/src/inner-storage"

export default {
  name: "ComponentProfile",
  components: {
    //Form,
    //Field,
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
        photoPath: "",
        farmerId: innerStorage.getValueByKey(innerStorage.keys.farmer).id,
        productCategoryId: 3
      }
    }
  },
  methods: {
    loadFarmerPicture: function () {
      fetch("http://localhost:8040/web/farmers/getPictureByName/" + this.farmer.photoPath, {
        method: "get",
        headers: {
          "Content-type": "application/json",
          "API_KEY": innerStorage.getValueByKey(innerStorage.keys.ApiKey),
          "DEVICE_ID": innerStorage.getValueByKey(innerStorage.keys.DeviceId)
        }
      }).then(response => {
        const reader = response.body.getReader();
        return new ReadableStream({
          start(controller) {
            return pump();

            function pump() {
              return reader.read().then(({done, value}) => {
                if (done) {
                  controller.close();
                  return;
                }
                controller.enqueue(value);
                return pump();
              });
            }
          }
        })
      })
          .then(stream => new Response(stream))
          .then(response => response.blob())
          .then(blob => URL.createObjectURL(blob))
          .then(url => document.getElementById("image").src = url)
          .catch(error => {
            console.log('Looks like there was a problem: \n', error);
          });
    },

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

        this.product.name = "";
        this.product.description = "";
        this.product.price = 0;
        this.product.amount = 0;

        this.$toast.success(`Продукт успешно добавлен`);

        setTimeout(this.$toast.clear,3000);
      }).catch(error => {
        console.log('Looks like there was a problem: \n', error);
      });
    }
  },
  mounted() {
    console.dir(innerStorage.getValueByKey(innerStorage.keys.farmer));
    console.dir(typeof innerStorage.getValueByKey(innerStorage.keys.farmer));
    this.loadFarmerPicture();
  }
}
</script>

<style scoped>
.huyna-ebanaya {
  background: #FFFFFF url("/public/profile/Background.svg") no-repeat;

}

.color {
  background: #0d462c;
}

.white-text {
  color: white !important;
}

.huy {
  display: flex;
}

</style>