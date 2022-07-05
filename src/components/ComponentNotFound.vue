<template>
  <div class="text">
  <h2 >Страница не найдена</h2>
  </div>
  <div class="back">
   <h3> Вернуться назад</h3>
  </div>
  <div class="background"></div>
</template>

<script>
export default {
  name: "ComponentNotFound"
}

</script>

<style scoped>
 body{
    background: #1A1919 url("/public/notFound/images/Background.svg") ;
    width: auto;
    height: auto;
 }
 .text{
   color: #ffffff;
 }
 .back{
   color: #ffffff;
   cursor: pointer;
 }
 .back:hover
 {
   transform: scale(1.5);
 }

</style>