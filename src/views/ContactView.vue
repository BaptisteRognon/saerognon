<template>
  <headerView></headerView>
 

  <footerView></footerView>
</template>

<script>

 import headerView from '../components/headerView.vue'
 import footerView from '../components/footerView.vue'
export default {
  components: { headerView, footerView, },
};
</script>