<script setup>
import { onMounted, ref } from "vue";

const name = ref('');
const surname = ref('');

function getGetParameterByKey(key) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
}

function formatDate(date) {
  // Добавляем '0' перед числом, если оно однозначное
  function pad(n) {
    return n < 10 ? '0' + n : n;
  }

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // Месяцы начинаются с 0
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${hours}:${minutes} ${day}.${month}.${year}`;
}

const currentDate = new Date();
console.log(formatDate(currentDate));

onMounted(() => {
  name.value = getGetParameterByKey('name');
  surname.value = getGetParameterByKey('surname');
})
</script>

<template>
  <div class="main">
    <div class="main__top">
      <h1>Уважаемый клиент!</h1>
      <p>Вы можете получить <span class="underline">бесплатный кофе</span>, показав этот экран у кофейни.</p>
    </div>
    <div class="main__bottom">
      <p>Менеджер: {{ name }} {{ surname }}.</p>
      <p>{{ formatDate(currentDate) }}</p>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'HAKSans', sans-serif;
  font-weight: 400;
  color: #002c5f;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  padding: 0 16px;
}

.main__top {
  margin-bottom: 50px;
}

.underline {
  text-decoration: underline;
}
</style>
