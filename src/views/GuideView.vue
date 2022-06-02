<template>

    <div name="guide de style" class="bg-blanc m-5 p-3 rounded">
        <p class="font-raleway text-dnonf">GUIDE DE STYLE</p>
    </div>

    <div name="guide de style" class="bg-blanc m-5 p-3 rounded">
        <p class="font-raleway text-dnonf">POLICES</p>
    </div>

    <p class="font-prata text-blanc m-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure blanditiis aut quis, unde optio esse quos ad. Ratione inventore ab fugiat sunt corrupti iure explicabo consectetur perspiciatis, est quo!</p>
    <p class="font-raleway text-blanc m-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure blanditiis aut quis, unde optio esse quos ad. Ratione inventore ab fugiat sunt corrupti iure explicabo consectetur perspiciatis, est quo!</p>

    <div name="guide de style" class="bg-blanc m-5 p-3 rounded">
        <p class="font-raleway text-dnonf">COULEURS</p>
    </div>

    <div class=" m-5 p-5 flex">
        <div class="bg-blanc m-5 p-5 flex rounded">
<p class="text-dnonf">#FFFFFF</p>
        </div>

        <div class="bg-jaune m-5 p-5 flex rounded">
            <p class="text-dnonf">#ffd643</p>

        </div>
        <div class="border-blanc  rounded bg-black m-5 p-5 flex">
<p class="text-blanc">#151515</p>
        </div>
    
    </div>

        <div class="bg-blanc border-blanc mx-5 my-5 ">
            <figure class=""></figure>
        </div>

    <div name="guide de style" class="bg-blanc m-5 p-3 rounded">
        <p class="font-raleway text-dnonf">COMPOSANTS</p>
    <figure class="flex flex-col mx-5  my-5 bg-white rounded-3xl" >
    <img
      src="../assets/article1.svg"
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
          <p class="text-xl font-raleway font-bold">Événement</p>
        </div>
          <HeartIcon class="h-6 text-transparent"></HeartIcon>
        </div>
   
      <p class="text-raleway font-normal text-gray-900">
Préparez-vous à l'événement le plus classique de l'été. Redécouvrer les classiques de l'histoire et des nouveaux morceaux interprété par des artistes de talents.


      </p>
      <div class="w-full "></div>
      <div class="flex justify-between">
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-900">En savoir plus ?</span>
        </div>
      
      </div>
    </figcaption>
  </figure>
    </div>
    <footerView></footerView>
</template>

<script>
  import headerView from '../components/headerView.vue';
  import footerView from '../components/footerView.vue';
  import cardView from '../components/cardView.vue';
import menuView from '../components/menuView.vue';
import CardView from '../components/cardView.vue';
export default {
  components: { headerView, footerView, cardView, menuView, CardView },
};
</script>