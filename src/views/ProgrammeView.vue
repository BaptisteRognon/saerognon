<template>
  <headerView></headerView>

<div class="flex flex-col m-5 items-center text-center">
  <img src="../assets/ligne.png" class="">
  <p class="font-prata text-blanc text-xl:">- LE PROGRAMME -</p>
  <img src="../assets/ligne.png">
  </div>


<figure class="flex flex-col mx-8  my-5 bg-white rounded-3xl" >
    <img
      src="../assets/pro1.png"
      alt="article"
      class="rounded-t-lg w-full h-48 object-cover"
    />
    <figcaption
      class="
        flex
        w-full
        flex-col
        gap-4

        shadow-bold : 
        py-7
        px-5">
      <div class="flex justify-between rounded-lg">
        <div class="w-2/5">
          <p class="text-xl font-raleway font-bold">ENTRÉE</p>
        </div>
          <HeartIcon class="h-6 text-transparent"></HeartIcon>
        </div>
   
      <p class="text-raleway font-normal text-gray-900">
Préparez-vous à l'événement le plus classique de l'été. Redécouvrer les classiques de l'histoire et des nouveaux morceaux interprété par des artistes de talents.


      </p>
      <div class="w-full "></div>
      <div class="flex justify-between">
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-900">Samedi : 12h30 - 15h30</span>
        </div>
      
      </div>
    </figcaption>
  </figure>

<figure class="flex flex-col mx-8  my-5 bg-white rounded-3xl" >
    <img
      src="../assets/pro2.png"
      alt="article"
      class="rounded-t-lg w-full h-48 object-cover"
    />
    <figcaption
      class="
        flex
        w-full
        flex-col
        gap-4
        
        shadow-bold : 
        py-7
        px-5">
      <div class="flex justify-between rounded-lg">
        <div class="w-2/5">
          <p class="text-xl font-raleway font-bold">PLAT</p>
        </div>
          <HeartIcon class="h-6 text-transparent"></HeartIcon>
        </div>
   
      <p class="text-raleway font-normal text-gray-900">
Durant l’événement Lys, des petits comme des grands musiciens feront leurs apparitions pour interpréter leur travail en action. 
      </p>
      <div class="w-full "></div>
      <div class="flex justify-between">
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-900">Samedi : 15h30 - 18h30</span>
        </div>
      
      </div>
    </figcaption>
  </figure>

<figure class="flex flex-col mx-8  my-5 bg-white rounded-3xl" >
    <img
      src="../assets/pro3.png"
      alt="article"
      class="rounded-t-lg w-full h-48 object-cover"
    />
    <figcaption
      class="
        flex
        w-full
        flex-col
        gap-4
        
        shadow-bold : 
        py-7
        px-5">
      <div class="flex justify-between rounded-lg">
        <div class="w-2/5">
          <p class="text-xl font-raleway font-bold">DESERT</p>
        </div>
          <HeartIcon class="h-6 text-transparent"></HeartIcon>
        </div>
   
      <p class="text-raleway font-normal text-gray-900">
Début des réservations pour l’événement musical royal.
L’événement commence du samedi 28 juin au dimanche de 12 à minuit. 

      </p>
      <div class="w-full "></div>
      <div class="flex justify-between">
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-900">Samedi : 18h30 - 00h00</span>
        </div>
      
      </div>
    </figcaption>
  </figure>


  <footerView></footerView>
</template>


<script>
  import headerView from '../components/headerView.vue';
  import footerView from '../components/footerView.vue';
  import cardView from '../components/cardView.vue';
import menuView from '../components/menuView.vue';
export default {
  components: { headerView, footerView, cardView , menuView },
};
</script>