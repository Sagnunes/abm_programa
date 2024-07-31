<template>
  <a :href="target" class="cursor-pointer">
    <div class="flex justify-center items-center w-[372px] h-[308px] mt-8" :class="backgroundColor">
      <h2 class="text-white text-4xl font-bold leading-10 text-center">{{ title }}</h2>
    </div>
  </a>
</template>
<script>
export default {
  name: 'ThemeComponent',
  props: ['title','backgroundColor','target'],
}
</script>