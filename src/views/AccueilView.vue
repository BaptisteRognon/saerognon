<template>
  <headerView></headerView>
  <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] m-5">
    <cardView></cardView> 
    <cardView></cardView> 
    <cardView ></cardView>
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