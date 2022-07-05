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
  background: #1A1919 url("/public/notFound/images/Background.svg") no-repeat fixed center center;
  display: flex;
  justify-content: start;
  align-items: flex-end;
}
.text-block{
  text-align: right;
}

.text {
  color: #ffffff;
}

.back {
  color: #ffffff;
  cursor: pointer;
}

.back:hover {
  transform: scale(1.1);
}

</style>