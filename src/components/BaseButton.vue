<template>
  <button
    @click="onBtnClick"
    class="border-yellow border-2 py-7 px-20 text-white text-[33px] uppercase font-bold hover:bg-yellow hover:border-white transition duration-150 hover:scale-105"
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
    "0.2002140",
    "https://static.gc.my.games/WarRobotsLoader.exe"
  );
};
</script>

<style lang="scss" scoped></style>
