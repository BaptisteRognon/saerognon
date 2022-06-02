<template>
  <headerView></headerView>
 
<div class="flex flex-col m-5 items-center text-center">
  <img src="../assets/ligne.png" class="">
  <p class="font-prata text-blanc text-xl:">- UN MOMENT "CLASSIQUE" -</p>
  <img src="../assets/ligne.png">
  </div>


<div class="flex  items-center justify-center ipad_pro:grid ipad_pro:grid-cols-2">
    
    <div class="flex items-center">
  <img src="../assets/lys.svg">
  <p class="text-center text-blanc">Logo discret avec simplement le symbole des rois de France modernisé au goût du jour pour se remettre dans le contexte du lieu du festivale
Versaille.

Versaille à son époque, avait une place exprès pour les représentations musicales. Elle présente bien de grand musicien à travers les âges jusqu’à la révolution français. C’est pour cela, qu’après des années, cet événement est là, pour redonner ces titres de noblesses de la musiques royales et classiques.
</p>
</div>
</div>






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