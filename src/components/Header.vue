<template>
  <div class="Header">
    <div class="bg-lime-300 text-white w-full p-4 h-32 mb-2">
        <div class="flex w-full max-h-32 text-black border-b p-4">
            <div class="flex flex-col w-full hidden md:flex items-start justify-center pr-4">
                <h2 class="text-2xl">{{ titulo }}</h2>
                <a class="text-xl"><strong></strong>{{ entrega }}</a>
            </div>
            <div class="flex flex-col w-full flex md:hidden items-center justify-center pr-4">
                <h2 class="text-2xl">{{ titulo }}</h2>
            </div>
        </div>
    </div>      
  </div>
</template>


<script>
export default {
  name: 'Header',
  data() {
      return {
        titulo: 'Angel Nicolas Jimenez',
        entrega: 'Formularios con VueJs CLI'
      }
  }
  
}
</script>