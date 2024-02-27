<template>
  <div :class="setCurrentBlockSize()" class="border border-white backdrop-blur-xs px-10 py-6 text-white text-lg">
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
      return "max-w-[470px]";
    case "large":
      return "max-w-[522px]";
  }
};
</script>

<style scoped></style>