<template>
  <headerView></headerView>
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