<script setup>
import { onMounted, ref } from "vue";

const name = ref('');
const surname = ref('');
const department = ref('');
const page = ref('greet');

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

  return `${day}.${month}.${year}  ${hours}:${minutes}`;
}

const currentDate = new Date();
console.log(formatDate(currentDate));

onMounted(() => {
  name.value = getGetParameterByKey('name');
  surname.value = getGetParameterByKey('surname');
  department.value = getGetParameterByKey('department');
})
</script>

<template>
    <div class="background"></div>
    <div
        v-if="page === 'greet'"
        class="main"
    >
        <div class="main__top">
            <h3>Уважаемый клиент!</h3>
            <p>Благодарим за выбор дилерского центра Hyundai Premium Al-Farabi!</p>
            <p>Мы рады угостить Вас <span class="underline">бесплатной чашкой кофе!</span></p>
        </div>
        <div class="main__bottom">
            <button class="button" type="button" @click="page = 'coffee'">Получить бесплатный кофе</button>
        </div>
    </div>
    <div
          v-else
          class="main"
    >
        <div class="main__top">
            <p>Вы можете получить <span class="underline">бесплатный кофе</span>, показав этот экран у кофейни.</p>
        </div>
        <div class="main__bottom">
            <p>Менеджер: {{ name }} {{ surname }}.</p>
            <p>{{ department }}.</p>
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
    text-align: center;
    font-size: 16px;
}

.main__top {
    margin-bottom: 50px;
}

.main__bottom {
    font-size: 20px;
}

.underline {
    text-decoration: underline;
}

.button {
    background-color: #002c5f;
    border-radius: 8px;
    border-width: 0;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    list-style: none;
    margin: 0;
    padding: 10px 12px;
    text-align: center;
    transition: all 200ms;
    vertical-align: baseline;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url('./assets/hyundai.jpeg');
    background-position: top;
    background-size: 120%; /* Adjust the value to zoom in or out */
    filter: blur(4px);
    z-index: -1;
}

.background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5); /* Adjust the opacity as needed */
    z-index: -1;
}

.background::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url('./assets/hyundai.jpeg');
    background-position: top;
    background-size: 170%;
    background-repeat: no-repeat;
    z-index: -2;
}
</style>
