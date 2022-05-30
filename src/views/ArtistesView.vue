<template>
  <headerView></headerView>
 

  <footerView></footerView>
</template>

<script>
  import headerView from '../components/headerView.vue';
  import footerView from '../components/footerView.vue';
  import cardView from '../components/cardView.vue';
export default {
  components: { headerView, footerView, cardView },
};
</script>