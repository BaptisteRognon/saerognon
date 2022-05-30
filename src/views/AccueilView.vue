<template>
  <headerView></headerView>
 
 
<div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] m-5">
    <Card />
    <Card />
    <Card />
    
</div>

   <footerView></footerView>
</template>

<script>

 import headerView from '../components/headerView.vue'
 import footerView from '../components/footerView.vue'
export default {
  components: { headerView, footerView, },
};
</script>