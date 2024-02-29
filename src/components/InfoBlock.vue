<template>
  <div :class="setCurrentBlockSize()" class="border tracking-[0] border-white backdrop-blur-xs px-[30px] py-5 text-white text-base leading-[140%]">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  size: "medium" | "large";
}>();

const setCurrentBlockSize = () => {
  switch (props.size) {
    case "medium":
      return "max-w-[438px]";
    case "large":
      return "max-w-[522px]";
  }
};
</script>

<style scoped></style>