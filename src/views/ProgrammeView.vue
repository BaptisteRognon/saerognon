<template>
  <headerView></headerView>
  
 <div class="flex flex-col m-5 items-center text-center">
  <img src="src\assets\ligne.png" class="">
  <p class="font-prata text-blanc text-xl:">- UN MOMENT "CLASSIQUE" -</p>
  <img src="src\assets\ligne.png">
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