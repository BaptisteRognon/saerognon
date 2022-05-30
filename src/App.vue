<template>
  <header>
    
    <nav class="flex flex-col">
      <RouterLink to="/" class="text-blue-600 underline">Accueil</RouterLink>
      <RouterLink to="/artiste" class="text-blue-600 underline">Artiste</RouterLink>
      <headerView></headerView>
    </nav>
  </header>

  <footerView></footerView>
  <RouterView />
</template>

<script>
 import headerView from './components/headerView.vue';
 import footerView from './components/footerView.vue';
export default {
  components: { headerView, footerView, },
};
</script>