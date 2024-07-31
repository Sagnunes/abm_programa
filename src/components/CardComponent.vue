<template>
  <div class="flex  mt-10 px-10 space-x-6" :class="inverse ? 'flex-row-reverse' : 'flex-row'">
    <div class="w-2/4">
      <img src="../assets/ilustracoes/color-test.jpg" alt="color test">
    </div>
    <div class="flex flex-col justify-between space-y-8 w-1/2" :class="color">
      <h3 class="uppercase text-5xl mt-8" >{{ title }}</h3>
      <h4 class="text-2xl" >
        <span class="font-bold">{{ destination }}:</span>
        {{text}}
      </h4>
      <p class=" tracking-tighter text-4xl " :class="inverse ? '' :'text-center'" >
        {{ body }}
      </p>
      <ButtonComponent title="INSCREVER" />
    </div>
  </div>
</template>
<script>
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
  name: 'CardComponent',
  props:['title','body','text','destination','inverse','color'],
  components: { ButtonComponent }
}
</script>