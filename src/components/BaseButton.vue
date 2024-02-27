<template>
  <button
    @click="onBtnClick"
    class="border-yellow border-2 py-6 px-20 text-white text-[33px] uppercase font-bold hover:bg-yellow hover:border-white transition-colors duration-300"
  >
    Скачать
  </button>
</template>

<script setup>
defineOptions({
  name: "BaseButton"
});

const onBtnClick = () => {
  window.__GEM.detectAndDownload(
    "13.2013983",
    "https://static.gc.my.games/HawkedLoader.exe"
  );
};
</script>

<style lang="scss" scoped></style>
