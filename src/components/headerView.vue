<template >
<RouterView/>
  <div class="bg-[url('/src/assets/fond_fontaine.png')] bg-no-repeat bg-cover h-screen">
    <MenuView></MenuView>

  <div class="my-5">
    <h1 class="font-prata font-bold text-center text-blanc text-3xl m-8">LYS</h1>
<h1 class="font-prata font-bold text-center text-blanc text-2xl m-8">
ÉVÉNEMENT DE L'ÉTÉ ROYALE</h1>
  </div>
  <div class=" flex justify-center">
       <FlecheIcon/>
    </div>
      <div class=" flex justify-center">
       <FlecheIcon/>
    </div>



</div>
</template>

<script>

import MenuView from "./menuView.vue";

export default{
  components: {
    MenuView
}
}
</script>
>