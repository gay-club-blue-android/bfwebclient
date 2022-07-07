<template>
  <div class="filler">
    <div class="text-block">
      <div class="text">
        <h2>Страница не найдена</h2>
      </div>
      <div class="back">
        <h3 @click="goBack">Вернуться назад</h3>
      </div>
    </div>
  </div>
</template>

<script>
import router from '/src/config-router'

export default {
  name: "ComponentNotFound",
  methods: {
    goBack: function () {
      router.go(-1);
    }
  }

}

</script>

<style scoped>
.filler {
  width: 100%;
  height: 100vh;
  background: #1A1919 url("/public/notFound/images/Background.svg") no-repeat ;
  display: flex;
  justify-content: start;
  align-items: flex-start;
}
.text-block{
  text-align: left;
}
.text {
  color: #ffffff;
}

.back {
  color: #C4C4C4;
  cursor: pointer;
}

</style>