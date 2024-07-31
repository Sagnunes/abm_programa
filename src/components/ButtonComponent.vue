<template>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAkcaVJuQpAUhhQbxzmiXwIUIxd6eWk89gtklCLOcruAUimQ/viewform?vc=0&c=0&w=1&flr=0&pli=1" target="_blank">
    <div class="flex justify-center">
      <button class="px-20 py-3 w-fit text-black rounded-lg font-bold shadow-2xl" :class="color ? color : 'bg-white text-black'">{{ title }}</button>
    </div>
  </a>
</template>
<script>
export default {
  name: 'ButtonComponent',
  props:['title','color']
}
</script>