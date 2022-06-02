<template>
  <headerView></headerView>
  <img src="../assets/lys.svg" class="flex flex-col m-5 items-center text-center">
  <p>Page 404</p>
  <p>Nous n'avons pas suivie le rythme...</p>

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